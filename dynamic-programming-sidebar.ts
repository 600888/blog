type SidebarEntry = {
  text: string;
  link?: string;
  collapsible?: boolean;
  collapsed?: boolean;
  items?: SidebarEntry[];
};

const base = '/algorithms/dynamic-programming';

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

export const dynamicProgrammingSidebar: SidebarEntry[] = [
  group('动态规划', [
    { text: '专题目录', link: `${base}/` },
    group('一、线性与序列 DP', [
      group('基础一维 DP', [
        problem(70, '爬楼梯', 'linear/basic'),
        problem(746, '使用最小花费爬楼梯', 'linear/basic'),
        problem(198, '打家劫舍', 'linear/basic'),
        problem(213, '打家劫舍 II', 'linear/basic'),
        problem(53, '最大子数组和', 'linear/basic'),
        problem(152, '乘积最大子数组', 'linear/basic'),
        problem(91, '解码方法', 'linear/basic'),
      ]),
      group('序列与字符串 DP', [
        problem(300, '最长递增子序列', 'linear/sequence'),
        problem(673, '最长递增子序列的个数', 'linear/sequence'),
        problem(1143, '最长公共子序列', 'linear/sequence'),
        problem(72, '编辑距离', 'linear/sequence'),
        problem(115, '不同的子序列', 'linear/sequence'),
      ]),
    ]),
    group('二、网格与路径 DP', [
      problem(62, '不同路径', 'grid'),
      problem(63, '不同路径 II', 'grid'),
      problem(64, '最小路径和', 'grid'),
      problem(120, '三角形最小路径和', 'grid'),
      problem(931, '下降路径最小和', 'grid'),
      problem(174, '地下城游戏', 'grid'),
    ]),
    group('三、背包问题', [
      group('0-1 背包与多维约束', [
        problem(416, '分割等和子集', 'knapsack/zero-one'),
        problem(494, '目标和', 'knapsack/zero-one'),
        problem(1049, '最后一块石头的重量 II', 'knapsack/zero-one'),
        problem(474, '一和零', 'knapsack/zero-one'),
        problem(879, '盈利计划', 'knapsack/zero-one'),
      ]),
      group('完全背包与计数', [
        problem(322, '零钱兑换', 'knapsack/unbounded'),
        problem(518, '零钱兑换 II', 'knapsack/unbounded'),
        problem(279, '完全平方数', 'knapsack/unbounded'),
        problem(377, '组合总和 IV', 'knapsack/unbounded'),
        problem(139, '单词拆分', 'knapsack/unbounded'),
      ]),
    ]),
    group('四、状态机 DP', [
      problem(121, '买卖股票的最佳时机', 'state-machine'),
      problem(122, '买卖股票的最佳时机 II', 'state-machine'),
      problem(123, '买卖股票的最佳时机 III', 'state-machine'),
      problem(188, '买卖股票的最佳时机 IV', 'state-machine'),
      problem(309, '买卖股票的最佳时机含冷冻期', 'state-machine'),
      problem(714, '买卖股票的最佳时机含手续费', 'state-machine'),
      problem(801, '使序列递增的最小交换次数', 'state-machine'),
    ]),
    group('五、区间与博弈 DP', [
      group('区间 DP', [
        problem(516, '最长回文子序列', 'interval'),
        problem(647, '回文子串', 'interval'),
        problem(312, '戳气球', 'interval'),
        problem(1547, '切棍子的最小成本', 'interval'),
        problem(1039, '多边形三角剖分的最低得分', 'interval'),
        problem(375, '猜数字大小 II', 'interval'),
      ]),
      group('博弈 DP', [
        problem(486, '预测赢家', 'game'),
        problem(1140, '石子游戏 II', 'game'),
        problem(1406, '石子游戏 III', 'game'),
      ]),
    ]),
    group('六、树形 DP', [
      problem(337, '打家劫舍 III', 'tree'),
      problem(124, '二叉树中的最大路径和', 'tree'),
      problem(543, '二叉树的直径', 'tree'),
      problem(1372, '二叉树中的最长交错路径', 'tree'),
      problem(968, '监控二叉树', 'tree'),
      problem(1373, '二叉搜索子树的最大键值和', 'tree'),
      problem(834, '树中距离之和', 'tree'),
    ]),
    group('七、概率 DP', [
      problem(688, '骑士在棋盘上的概率', 'probability'),
      problem(808, '分汤', 'probability'),
      problem(837, '新 21 点', 'probability'),
    ]),
    group('八、状态压缩 DP', [
      problem(526, '优美的排列', 'bitmask'),
      problem(698, '划分为 k 个相等的子集', 'bitmask'),
      problem(464, '我能赢吗', 'bitmask'),
    ]),
    group('九、数位 DP', [
      problem(233, '数字 1 的个数', 'digit'),
      problem(902, '最大为 N 的数字组合', 'digit'),
      problem(1012, '至少有 1 位重复的数字', 'digit'),
      problem(2719, '统计整数数目', 'digit'),
    ]),
    group('十、DAG 上的 DP', [
      problem(329, '矩阵中的最长递增路径', 'dag'),
      problem(2328, '网格图中递增路径的数目', 'dag'),
      problem(2050, '并行课程 III', 'dag'),
    ]),
    { text: '建议学习路径', link: `${base}/learning-path` },
  ]),
];
