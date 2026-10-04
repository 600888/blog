type SidebarEntry = {
  text: string;
  link?: string;
  collapsible?: boolean;
  collapsed?: boolean;
  items?: SidebarEntry[];
};

const base = '/algorithms/graph';

const group = (text: string, items: SidebarEntry[]): SidebarEntry => ({
  text,
  collapsible: true,
  collapsed: true,
  items,
});

export const graphSidebar: SidebarEntry[] = [
  group('图论专题', [
    { text: '专题目录', link: `${base}/` },
    group("一、建图与基础遍历", [
      { text: "1971. 寻找图中是否存在路径", link: "/algorithms/graph/traversal/1971" },
      { text: "841. 钥匙和房间", link: "/algorithms/graph/traversal/841" },
      { text: "133. 克隆图", link: "/algorithms/graph/traversal/133" },
      { text: "797. 所有可能的路径", link: "/algorithms/graph/traversal/797" },
      { text: "2685. 统计完全连通分量的数量", link: "/algorithms/graph/traversal/2685" },
    ]),
    group("二、网格图", [
      { text: "733. 图像渲染", link: "/algorithms/graph/grid/733" },
      { text: "200. 岛屿数量", link: "/algorithms/graph/grid/200" },
      { text: "695. 岛屿的最大面积", link: "/algorithms/graph/grid/695" },
      { text: "463. 岛屿的周长", link: "/algorithms/graph/grid/463" },
      { text: "130. 被围绕的区域", link: "/algorithms/graph/grid/130" },
      { text: "1020. 飞地的数量", link: "/algorithms/graph/grid/1020" },
      { text: "1254. 统计封闭岛屿的数目", link: "/algorithms/graph/grid/1254" },
      { text: "417. 太平洋大西洋水流问题", link: "/algorithms/graph/grid/417" },
      { text: "827. 最大人工岛", link: "/algorithms/graph/grid/827" },
    ]),
    group("三、BFS 与状态图搜索", [
      { text: "994. 腐烂的橘子", link: "/algorithms/graph/bfs/994" },
      { text: "542. 01 矩阵", link: "/algorithms/graph/bfs/542" },
      { text: "1162. 地图分析", link: "/algorithms/graph/bfs/1162" },
      { text: "1091. 二进制矩阵中的最短路径", link: "/algorithms/graph/bfs/1091" },
      { text: "752. 打开转盘锁", link: "/algorithms/graph/bfs/752" },
      { text: "127. 单词接龙", link: "/algorithms/graph/bfs/127" },
      { text: "1293. 网格中的最短路径", link: "/algorithms/graph/bfs/1293" },
      { text: "847. 访问所有节点的最短路径", link: "/algorithms/graph/bfs/847" },
    ]),
    group("四、拓扑排序与 DAG", [
      { text: "207. 课程表", link: "/algorithms/graph/topological/207" },
      { text: "210. 课程表 II", link: "/algorithms/graph/topological/210" },
      { text: "1462. 课程表 IV", link: "/algorithms/graph/topological/1462" },
      { text: "2192. 有向无环图中一个节点的所有祖先", link: "/algorithms/graph/topological/2192" },
      { text: "802. 找到最终的安全状态", link: "/algorithms/graph/topological/802" },
      { text: "2050. 并行课程 III", link: '/algorithms/graph/topological/2050' },
      { text: "329. 矩阵中的最长递增路径", link: '/algorithms/graph/topological/329' },
      { text: "2328. 网格图中递增路径的数目", link: '/algorithms/graph/topological/2328' },
    ]),
    group("五、并查集与连通性", [
      { text: "547. 省份数量", link: '/algorithms/graph/union-find/547' },
      { text: "684. 冗余连接", link: '/algorithms/graph/union-find/684' },
      { text: "1319. 连通网络的操作次数", link: '/algorithms/graph/union-find/1319' },
      { text: "721. 账户合并", link: '/algorithms/graph/union-find/721' },
      { text: "990. 等式方程的可满足性", link: '/algorithms/graph/union-find/990' },
      { text: "947. 移除最多的同行或同列石头", link: "/algorithms/graph/union-find/947" },
      { text: "1202. 交换字符串中的元素", link: "/algorithms/graph/union-find/1202" },
      { text: "1697. 检查边长度限制的路径是否存在", link: "/algorithms/graph/union-find/1697" },
    ]),
    group("六、最短路径", [
      { text: "743. 网络延迟时间", link: "/algorithms/graph/shortest-path/743" },
      { text: "1514. 概率最大的路径", link: "/algorithms/graph/shortest-path/1514" },
      { text: "1631. 最小体力消耗路径", link: "/algorithms/graph/shortest-path/1631" },
      { text: "778. 水位上升的泳池中游泳", link: "/algorithms/graph/shortest-path/778" },
      { text: "787. K 站中转内最便宜的航班", link: "/algorithms/graph/shortest-path/787" },
      { text: "1334. 阈值距离内邻居最少的城市", link: "/algorithms/graph/shortest-path/1334" },
      { text: "1368. 使网格图至少有一条有效路径的最小代价", link: "/algorithms/graph/shortest-path/1368" },
      { text: "2290. 到达角落需要移除障碍物的最小数目", link: "/algorithms/graph/shortest-path/2290" },
      { text: "1976. 到达目的地的方案数", link: "/algorithms/graph/shortest-path/1976" },
    ]),
    group("七、最小生成树", [
      { text: "1584. 连接所有点的最小费用", link: "/algorithms/graph/mst/1584" },
      { text: "1489. 找到最小生成树里的关键边和伪关键边", link: "/algorithms/graph/mst/1489" },
      { text: "1631. 最小体力消耗路径", link: '/algorithms/graph/mst/1631' },
    ]),
    group("八、二分图与染色", [
      { text: "785. 判断二分图", link: "/algorithms/graph/coloring/785" },
      { text: "886. 可能的二分法", link: "/algorithms/graph/coloring/886" },
      { text: "1042. 不邻接植花", link: "/algorithms/graph/coloring/1042" },
      { text: "2493. 将节点分成尽可能多的组", link: "/algorithms/graph/coloring/2493" },
    ]),
    group("九、环与功能图", [
      { text: "1559. 二维网格图中探测环", link: "/algorithms/graph/cycles/1559" },
      { text: "2359. 找到离给定两个节点最近的节点", link: "/algorithms/graph/cycles/2359" },
      { text: "2360. 图中的最长环", link: "/algorithms/graph/cycles/2360" },
      { text: "2127. 参加会议的最多员工数", link: "/algorithms/graph/cycles/2127" },
      { text: "685. 冗余连接 II", link: "/algorithms/graph/cycles/685" },
    ]),
    group("十、树上的图论问题", [
      { text: "310. 最小高度树", link: "/algorithms/graph/tree/310" },
      { text: "1443. 收集树上所有苹果的最少时间", link: "/algorithms/graph/tree/1443" },
      { text: "1519. 子树中标签相同的节点数", link: "/algorithms/graph/tree/1519" },
      { text: "2246. 相邻字符不同的最长路径", link: "/algorithms/graph/tree/2246" },
      { text: "834. 树中距离之和", link: '/algorithms/graph/tree/834' },
    ]),
    group("十一、进阶图结构（选学）", [
      { text: "1192. 查找集群内的关键连接", link: "/algorithms/graph/advanced/1192" },
      { text: "1568. 使陆地分离的最少天数", link: "/algorithms/graph/advanced/1568" },
      { text: "802. 找到最终的安全状态", link: '/algorithms/graph/advanced/802' },
      { text: "332. 重新安排行程", link: "/algorithms/graph/advanced/332" },
      { text: "2097. 合法重新排列数对", link: "/algorithms/graph/advanced/2097" },
      { text: "753. 破解保险箱", link: "/algorithms/graph/advanced/753" },
    ]),
    { text: '建议学习路径', link: `${base}/learning-path` },
  ]),
];
