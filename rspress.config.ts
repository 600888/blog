import { defineConfig } from '@rspress/core';

const sections = [
  { text: '数据结构与算法', path: 'algorithms', articles: [['complexity', '时间与空间复杂度'], ['linear-structures', '数组、链表、栈与队列']] },
  { text: '计算机网络', path: 'networks', articles: [['layering', '从分层模型理解网络'], ['tcp', 'TCP 连接与可靠传输']] },
  { text: '操作系统', path: 'operating-systems', articles: [['processes', '进程与线程'], ['memory', '虚拟内存与分页']] },
  { text: '电力规约', path: 'power-protocols', articles: [['reading-frames', '报文阅读与分析方法'], ['debugging', '通信联调检查清单']] },
];

export default defineConfig({
  root: 'docs',
  base: '/blog/',
  siteOrigin: 'https://600888.github.io',
  title: '东宇的学习笔记',
  description: '记录计算机基础与电力通信的学习过程：数据结构与算法、计算机网络、操作系统、电力规约。',
  lang: 'zh',
  icon: '/logo.svg',
  logo: '/logo.svg',
  logoText: '东宇的学习笔记',
  route: { cleanUrls: true },
  themeConfig: {
    darkMode: 'light',
    nav: sections.map(({ text, path }) => ({ text, link: `/${path}/`, activeMatch: `/${path}/`, position: 'left' as const })),
    sidebar: {
      '/': [
        { sectionHeaderText: '开始阅读' },
        { text: '写在前面', link: '/' },
        { text: '关于这些笔记', link: '/about' },
        { dividerType: 'solid' },
        { sectionHeaderText: '知识目录' },
        ...sections.map(({ text, path }) => ({ text, link: `/${path}/` })),
      ],
      ...Object.fromEntries(sections.map(({ text, path, articles }) => [
        `/${path}/`,
        [
          { text: '返回笔记首页', link: '/' },
          { dividerType: 'solid' },
          { sectionHeaderText: text },
          { text: '模块导读', link: `/${path}/` },
          { text: '基础笔记', collapsible: true, collapsed: false, items: articles.map(([slug, label]) => ({ text: label, link: `/${path}/${slug}` })) },
        ],
      ])),
    },
    search: true,
    lastUpdated: true,
    editLink: { docRepoBaseUrl: 'https://github.com/600888/blog/tree/main/docs' },
    socialLinks: [{ icon: 'github', mode: 'link', content: 'https://github.com/600888/blog' }],
    enableScrollToTop: true,
    llmsUI: false,
  },
});
