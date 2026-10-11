import type { NavItem, Sidebar } from '@rspress/shared';

/** Rspress 的侧边栏条目类型，直接复用官方定义以保证与 themeConfig.sidebar 兼容。 */
export type SidebarEntry = Sidebar[string][number];

/** Rspress 导航项，直接复用官方 NavItem 类型。 */
export type NavEntry = NavItem;

const projects = '/projects';
const dlt698 = `${projects}/dlt698`;

const group = (text: string, items: SidebarEntry[]): SidebarEntry => ({
  text, collapsible: true, collapsed: true, items,
});

/**
 * dlt698 的模块树，用于项目侧边栏。
 * 分组用 section 标记，渲染时转成可折叠的多级菜单。
 */
type ModuleSection = { section: string; items: { text: string; slug: string }[] };

const dlt698Modules: ModuleSection[] = [
  {
    section: '分层模块',
    items: [
      { text: '编解码层 codec', slug: 'modules/codec' },
      { text: '链路层 link', slug: 'modules/link' },
      { text: '应用层 APDU', slug: 'modules/apdu' },
      { text: '会话层 session', slug: 'modules/session' },
      { text: '对象服务层 service', slug: 'modules/service' },
      { text: '标准对象 standard', slug: 'modules/standard' },
      { text: '传输层 transport', slug: 'modules/transport' },
      { text: '托管应用层 app', slug: 'modules/app' },
      { text: '安全层 security', slug: 'modules/security' },
    ],
  },
  {
    section: '工程实践',
    items: [
      { text: '构建与测试', slug: 'practice/build-and-test' },
      { text: '发布与集成', slug: 'practice/packaging' },
      { text: 'Python 绑定', slug: 'practice/python-bindings' },
    ],
  },
];

const dlt698EntryLinks: { text: string; link: string }[] = [
  { text: '项目概览', link: `${dlt698}/` },
  { text: '整体架构', link: `${dlt698}/architecture` },
];

/**
 * 项目总览和所有项目文章共用完整目录，分组只负责展开，文章叶子负责跳转。
 * 新增项目时在此追加一个分组。
 */
export const projectsSidebar: SidebarEntry[] = [
  { text: '返回首页', link: '/' },
  { dividerType: 'solid' },
  { sectionHeaderText: '项目' },
  { text: '项目总览', link: `${projects}/` },
  group('dlt698', [
    ...dlt698EntryLinks,
    ...dlt698Modules.map(({ section, items }) => group(section,
      items.map(({ text, slug }) => ({ text, link: `${dlt698}/${slug}` })),
    )),
  ]),
];

/** 项目作为第五个普通导航分类，紧接在电力规约右侧。 */
export const projectsNav: NavEntry = {
  text: '项目',
  link: `${projects}/`,
  activeMatch: `${projects}/`,
  position: 'left',
};
