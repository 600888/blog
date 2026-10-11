import { defineConfig } from '@rspress/core';
import mermaid from 'rspress-plugin-mermaid';
import { slidingWindowSidebar } from './sliding-window-sidebar';
import { dynamicProgrammingSidebar } from './dynamic-programming-sidebar';
import { dataStructuresSidebar } from './data-structures-sidebar';
import { graphSidebar } from './graph-sidebar';
import { searchBacktrackingSidebar } from './search-backtracking-sidebar';
import { sortingSidebar } from './sorting-sidebar';
import { projectsSidebar, projectsNav, type SidebarEntry } from './projects-sidebar';

const sections = [
  { text: '数据结构与算法', path: 'algorithms', articles: [['complexity', '时间与空间复杂度'], ['linear-structures', '数组、链表、栈与队列']] },
  { text: '计算机网络', path: 'networks', articles: [['layering', '从分层模型理解网络'], ['tcp', 'TCP 连接与可靠传输']] },
  { text: '操作系统', path: 'operating-systems', articles: [['processes', '进程与线程'], ['memory', '虚拟内存与分页']] },
  { text: '电力规约', path: 'power-protocols', articles: [['reading-frames', '报文阅读与分析方法'], ['debugging', '通信联调检查清单']] },
];

// 项目区使用手写侧边栏，不参与 sections 的自动模板。模块树在 projects-sidebar.ts 中定义，
// 项目页和首页侧边栏共用同一份数据，避免两处维护走偏。
const extraSidebars: Record<string, SidebarEntry[]> = {
  '/projects/': projectsSidebar,
};

// 首页侧边栏的项目分区：复用 projectsSidebar 的入口项（跳过“返回首页”与分隔线）。
const [, , , ...projectEntries] = projectsSidebar;

export default defineConfig({
  root: 'docs',
  base: '/blog/',
  siteOrigin: 'https://600888.github.io',
  title: '陈东宇的博客',
  description: '记录计算机基础与电力通信的学习过程：数据结构与算法、计算机网络、操作系统、电力规约。',
  lang: 'zh',
  icon: '/logo.svg',
  logo: '/logo.svg',
  logoText: '陈东宇的博客',
  route: { cleanUrls: true },
  plugins: [mermaid({ mermaidConfig: { theme: 'neutral', startOnLoad: false } })],
  themeConfig: {
    darkMode: 'light',
    nav: [
      ...sections.map(({ text, path }) => ({ text, link: `/${path}/`, activeMatch: `/${path}/`, position: 'left' as const })),
      projectsNav,
    ],
    sidebar: {
      '/': [
        { sectionHeaderText: '开始阅读' },
        { text: '写在前面', link: '/' },
        { text: '关于这些笔记', link: '/about' },
        { dividerType: 'solid' },
        { sectionHeaderText: '知识目录' },
        ...sections.map(({ text, path }) => ({ text, link: `/${path}/` })),
        { dividerType: 'solid' },
        { sectionHeaderText: '项目' },
        ...projectEntries,
      ],
      ...Object.fromEntries(sections.map(({ text, path, articles }) => [
        `/${path}/`,
        [
          { text: '返回笔记首页', link: '/' },
          { dividerType: 'solid' },
          { sectionHeaderText: text },
          { text: '模块导读', link: `/${path}/` },
          { text: '基础笔记', collapsible: true, collapsed: false, items: articles.map(([slug, label]) => ({ text: label, link: `/${path}/${slug}` })) },
          ...(path === 'algorithms' ? [...slidingWindowSidebar, ...dynamicProgrammingSidebar, ...dataStructuresSidebar, ...graphSidebar, ...searchBacktrackingSidebar, ...sortingSidebar] : []),
        ],
      ])),
      ...extraSidebars,
    },
    search: true,
    lastUpdated: true,
    editLink: { docRepoBaseUrl: 'https://github.com/600888/blog/tree/main/docs' },
    socialLinks: [{ icon: 'github', mode: 'link', content: 'https://github.com/600888/blog' }],
    enableScrollToTop: true,
    llmsUI: false,
  },
});
