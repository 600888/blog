import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// 执行本项目的配置表达式，省去启动 Rspress；定义配置的函数在这里只返回参数。
export function readSiteConfig() {
  const cache = new Map();
  function load(file) {
    if (cache.has(file)) return cache.get(file);
    const module = { exports: {} };
    cache.set(file, module.exports);
    const source = fs.readFileSync(file, 'utf8');
    const javascript = ts.transpileModule(source, {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
    }).outputText;
    function localRequire(specifier) {
      if (specifier === '@rspress/core') return { defineConfig: config => config };
      // 插件只需存在即可通过校验，配置里的 plugins 不参与侧边栏检查。
      if (specifier === 'rspress-plugin-mermaid') return { default: () => ({}) };
      if (!specifier.startsWith('.')) throw new Error(`Unsupported configuration import: ${specifier}`);
      const resolved = path.resolve(path.dirname(file), specifier + '.ts');
      if (!resolved.startsWith(projectRoot + path.sep)) throw new Error(`Import outside project: ${specifier}`);
      return load(resolved);
    }
    new Function('exports', 'require', 'module', javascript)(module.exports, localRequire, module);
    cache.set(file, module.exports);
    return module.exports;
  }
  return load(path.join(projectRoot, 'rspress.config.ts')).default;
}

function normalizeRoute(link) {
  return link.split(/[?#]/)[0].replace(/\.(?:mdx?|html)$/, '').replace(/\/index\/?$/, '/').replace(/\/+$/, '') || '/';
}

export function validateSidebar(items, { docsRoot } = {}) {
  const errors = [];
  const seen = new Map();
  function walk(entries, ancestors = [], topicRoot) {
    for (const entry of entries) {
      const labels = [...ancestors, entry.text || entry.sectionHeaderText || '(separator)'];
      const location = labels.join(' > ');
      if (entry.link && !/^(?:https?:|mailto:|#)/.test(entry.link)) {
        const route = normalizeRoute(entry.link);
        if (seen.has(route)) errors.push(`Duplicate link ${route}: ${seen.get(route)} / ${location}`);
        else seen.set(route, location);
        if (topicRoot && /^\d+\./.test(entry.text || '') && !route.startsWith(topicRoot + '/')) {
          errors.push(`Question outside its topic ${topicRoot}: ${location} -> ${entry.link}`);
        }
        if (docsRoot) {
          const relative = route === '/' ? 'index' : route.slice(1);
          const candidates = [relative + '.md', relative + '.mdx', relative + '/index.md', relative + '/index.mdx'];
          if (!candidates.some(file => fs.existsSync(path.join(docsRoot, file)))) {
            errors.push(`Missing page: ${location} -> ${entry.link}`);
          }
        }
      }
      if (entry.items) {
        const localIndex = entry.items.find(item => /^\/algorithms\/[^/]+\/$/.test(item.link || ''));
        const owner = topicRoot || (localIndex ? normalizeRoute(localIndex.link) : undefined);
        walk(entry.items, labels, owner);
      }
    }
  }
  walk(items);
  return errors;
}

export function checkSite() {
  const config = readSiteConfig();
  const docsRoot = path.resolve(projectRoot, config.root);
  const errors = [];
  for (const [scope, items] of Object.entries(config.themeConfig.sidebar)) {
    errors.push(...validateSidebar(items, { docsRoot }).map(error => `[${scope}] ${error}`));
  }
  return errors;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const errors = checkSite();
  if (errors.length) {
    console.error(errors.join('\n'));
    process.exitCode = 1;
  } else {
    console.log('Sidebar checks passed: unique links within each sidebar, topic-local question pages, and all targets present.');
  }
}
