type SidebarEntry = {
  text: string;
  link?: string;
  collapsible?: boolean;
  collapsed?: boolean;
  items?: SidebarEntry[];
};

const base = '/algorithms/search-backtracking';

const problem = (id: number, title: string, folder: string): SidebarEntry => ({
  text: `${id}. ${title}`,
  link: `${base}/${folder}/${id}`,
});


const group = (text: string, items: SidebarEntry[]): SidebarEntry => ({
  text,
  collapsible: true,
  collapsed: true,
  items,
});

export const searchBacktrackingSidebar: SidebarEntry[] = [
  group('搜索与回溯专题', [
    { text: '专题目录', link: `${base}/` },
    group('一、搜索基础与状态建模', [
      problem(112, '路径总和', 'basics'),
      problem(257, '二叉树的所有路径', 'basics'),
      problem(113, '路径总和 II', 'basics'),
      problem(841, '钥匙和房间', 'basics'),
      problem(733, '图像渲染', 'basics'),
      problem(797, '所有可能的路径', 'basics'),
      problem(1091, '二进制矩阵中的最短路径', 'basics'),
    ]),
    group('二、子集与子序列枚举', [
      problem(78, '子集', 'subsets'),
      problem(1863, '找出所有子集的异或总和再求和', 'subsets'),
      problem(784, '字母大小写全排列', 'subsets'),
      problem(90, '子集 II', 'subsets'),
      problem(491, '非递减子序列', 'subsets'),
      problem(2044, '统计按位或能得到最大值的子集数目', 'subsets'),
      problem(1239, '串联字符串的最大长度', 'subsets'),
    ]),
    group('三、组合与目标选择', [
      problem(77, '组合', 'combinations'),
      problem(39, '组合总和', 'combinations'),
      problem(40, '组合总和 II', 'combinations'),
      problem(216, '组合总和 III', 'combinations'),
      problem(1286, '字母组合迭代器', 'combinations'),
      problem(2397, '被列覆盖的最多行数', 'combinations'),
    ]),
    group('四、排列与顺序安排', [
      problem(46, '全排列', 'permutations'),
      problem(47, '全排列 II', 'permutations'),
      problem(1079, '活字印刷', 'permutations'),
      problem(526, '优美的排列', 'permutations'),
      problem(996, '正方形数组的数目', 'permutations'),
      problem(60, '排列序列', 'permutations'),
    ]),
    group('五、字符串构造与表达式', [
      problem(17, '电话号码的字母组合', 'strings'),
      problem(22, '括号生成', 'strings'),
      problem(1415, '长度为 n 的开心字符串中字典序第 k 小的字符串', 'strings'),
      problem(282, '给表达式添加运算符', 'strings'),
      problem(301, '删除无效的括号', 'strings'),
    ]),
    group('六、分割与分组', [
      group('连续分割与后缀搜索', [
        problem(131, '分割回文串', 'partitioning'),
        problem(93, '复原 IP 地址', 'partitioning'),
        problem(306, '累加数', 'partitioning'),
        problem(842, '将数组拆分成斐波那契序列', 'partitioning'),
        problem(139, '单词拆分', 'partitioning'),
        problem(140, '单词拆分 II', 'partitioning'),
        problem(1593, '拆分字符串使唯一子字符串的数目最大', 'partitioning'),
      ]),
      group('集合分组与桶分配', [
        problem(473, '火柴拼正方形', 'partitioning'),
        problem(698, '划分为 k 个相等的子集', 'partitioning'),
      ]),
    ]),
    group('七、棋盘与网格路径', [
      problem(79, '单词搜索', 'grid'),
      problem(212, '单词搜索 II', 'grid'),
      problem(980, '不同路径 III', 'grid'),
      problem(1219, '黄金矿工', 'grid'),
      problem(329, '矩阵中的最长递增路径', 'grid'),
    ]),
    group('八、约束满足问题', [
      problem(51, 'N 皇后', 'constraints'),
      problem(52, 'N 皇后 II', 'constraints'),
      problem(37, '解数独', 'constraints'),
      problem(1718, '构建字典序最大的可行序列', 'constraints'),
      problem(526, '优美的排列', 'constraints'),
    ]),
    group('九、综合搜索与最优方案', [
      problem(752, '打开转盘锁', 'advanced'),
      problem(127, '单词接龙', 'advanced'),
      problem(126, '单词接龙 II', 'advanced'),
      problem(847, '访问所有节点的最短路径', 'advanced'),
      problem(638, '大礼包', 'advanced'),
      problem(691, '贴纸拼词', 'advanced'),
      problem(464, '我能赢吗', 'advanced'),
      problem(1723, '完成所有工作的最短时间', 'advanced'),
      problem(2305, '公平分发饼干', 'advanced'),
      problem(488, '祖玛游戏', 'advanced'),
      problem(1240, '铺瓷砖', 'advanced'),
    ]),
    { text: '建议学习路径', link: `${base}/learning-path` },
  ]),
];
