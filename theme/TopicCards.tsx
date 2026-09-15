import { Link } from '@rspress/core/theme-original';

const topics = [
  { number: '01', label: '数据结构与算法', en: 'DATA STRUCTURES & ALGORITHMS', href: '/algorithms/', description: '从数据的组织方式出发，理解算法背后的思路与效率。', tags: '数据结构 · 复杂度 · 算法思维', icon: 'tree' },
  { number: '02', label: '计算机网络', en: 'COMPUTER NETWORKS', href: '/networks/', description: '跟随一个数据包，理解连接、传输与协议的协作。', tags: '网络分层 · TCP/IP · 通信原理', icon: 'network' },
  { number: '03', label: '操作系统', en: 'OPERATING SYSTEMS', href: '/operating-systems/', description: '走进程序运行的底层，理解资源如何被管理和调度。', tags: '进程线程 · 内存管理 · 并发', icon: 'cpu' },
  { number: '04', label: '电力规约', en: 'POWER COMMUNICATION', href: '/power-protocols/', description: '连接协议与现场，从报文阅读走向通信联调实践。', tags: '报文分析 · 点表映射 · 联调实践', icon: 'bolt' },
];

function TopicIcon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    tree: <><rect x="9" y="3" width="6" height="5" rx="1" /><path d="M12 8v5M5 16v-3h14v3" /><rect x="2" y="16" width="6" height="5" rx="1" /><rect x="16" y="16" width="6" height="5" rx="1" /></>,
    network: <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18M5 6h14M5 18h14" /></>,
    cpu: <><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4" /><rect x="10" y="10" width="4" height="4" rx=".5" /></>,
    bolt: <path d="M13 2 4 14h7l-1 8 10-13h-8l1-7Z" />,
  };
  return <svg viewBox="0 0 24 24" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

export function TopicCards() {
  return <div className="topic-grid">{topics.map(topic => <Link key={topic.href} href={topic.href} className="topic-card">
    <div className="topic-card-top"><span className="topic-icon"><TopicIcon name={topic.icon} /></span><span className="topic-number">{topic.number}</span></div>
    <span className="topic-en">{topic.en}</span>
    <strong className="topic-title">{topic.label}<span aria-hidden="true">↗</span></strong>
    <span className="topic-description">{topic.description}</span>
    <span className="topic-tags">{topic.tags}</span>
  </Link>)}</div>;
}
