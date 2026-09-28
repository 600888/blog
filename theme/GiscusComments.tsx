import { useEffect, useRef } from 'react';
import { useFrontmatter, useLocation } from '@rspress/core/runtime';

const GISCUS_REPO = '600888/blog';
const GISCUS_REPO_ID = 'R_kgDOUcqoXw';
const GISCUS_CATEGORY = 'Announcements';

const GISCUS_CATEGORY_ID = 'DIC_kwDOUcqoX84DGeEY';

export function GiscusComments() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const { frontmatter } = useFrontmatter();
  const enabled = frontmatter.comments !== false && Boolean(frontmatter.title) && Boolean(GISCUS_CATEGORY_ID);

  useEffect(() => {
    const container = containerRef.current;
    if (!enabled || !container) return;

    container.replaceChildren();

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.dataset.repo = GISCUS_REPO;
    script.dataset.repoId = GISCUS_REPO_ID;
    script.dataset.category = GISCUS_CATEGORY;
    script.dataset.categoryId = GISCUS_CATEGORY_ID;
    script.dataset.mapping = 'pathname';
    script.dataset.strict = '0';
    script.dataset.reactionsEnabled = '1';
    script.dataset.emitMetadata = '0';
    script.dataset.inputPosition = 'top';
    script.dataset.theme = 'light';
    script.dataset.lang = 'zh-CN';
    script.dataset.loading = 'lazy';
    container.appendChild(script);

    return () => container.replaceChildren();
  }, [enabled, pathname]);

  if (!enabled) return null;

  return (
    <section className="blog-comments" aria-labelledby="blog-comments-title">
      <div className="blog-comments__heading">
        <div>
          <p className="blog-comments__eyebrow">DISCUSSION</p>
          <h2 id="blog-comments-title">评论</h2>
        </div>
        <p>使用 GitHub 登录后参与讨论</p>
      </div>
      <div ref={containerRef} className="blog-comments__widget" />
    </section>
  );
}
