import { readSiteConfig } from '../scripts/check-sidebar.mjs';

const cfg = readSiteConfig();
const nav = cfg.themeConfig.nav;

console.log('=== 导航栏顺序 ===');
nav.forEach((n, i) => {
  const children = n.items ? n.items.length : 0;
  console.log(`${i}. ${n.text}  position=${n.position}  子菜单=${children}项`);
});

console.log('\n=== 项目导航入口 ===');
const proj = nav.find(n => n.text === '项目');
console.log(`项目 (position=${proj.position}) -> ${proj.link}`);

console.log('\n=== 首页侧边栏顺序 ===');
cfg.themeConfig.sidebar['/'].forEach(entry => {
  const label = entry.sectionHeaderText || entry.text || entry.dividerType;
  console.log(`  ${label}${entry.items ? ` (${entry.items.length}项)` : ''}`);
});
