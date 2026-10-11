import { Link } from '@rspress/core/theme-original';

type Project = {
  status: string;
  label: string;
  en: string;
  href: string;
  description: string;
  tags: string;
  stats: { value: string; label: string }[];
  icon: 'protocol' | 'grid';
};

const projects: Project[] = [
  {
    status: '已开源',
    label: 'dlt698',
    en: 'DL/T 698.45 PROTOCOL LIBRARY',
    href: '/projects/dlt698/',
    description: '从零构建的现代 C++17 电力规约库，覆盖链路分帧、APDU 服务、对象服务与传输通道，同内核提供 Python 绑定。',
    tags: 'C++17 · CMake · Asio · pybind11 · Catch2',
    stats: [
      { value: '11', label: '分层模块' },
      { value: '3.9 万', label: '行代码' },
      { value: '10', label: '测试可执行文件' },
      { value: '10', label: '预编译发布包' },
    ],
    icon: 'protocol',
  },
];

function ProjectIcon({ name }: { name: Project['icon'] }) {
  const paths: Record<Project['icon'], React.ReactNode> = {
    protocol: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 9h20M7 13h6M7 16.5h9M16.5 13v0" /></>,
    grid: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>,
  };
  return <svg viewBox="0 0 24 24" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

export function ProjectCards() {
  return <div className="project-grid">{projects.map(project => <Link key={project.href} href={project.href} className="project-card">
    <div className="project-card-top">
      <span className="project-icon"><ProjectIcon name={project.icon} /></span>
      <span className="project-status">{project.status}</span>
    </div>
    <span className="project-en">{project.en}</span>
    <strong className="project-title">{project.label}<span aria-hidden="true">↗</span></strong>
    <span className="project-description">{project.description}</span>
    <div className="project-stats">{project.stats.map(stat => <div key={stat.label} className="project-stat">
      <strong>{stat.value}</strong>
      <span>{stat.label}</span>
    </div>)}</div>
    <span className="project-tags">{project.tags}</span>
  </Link>)}</div>;
}