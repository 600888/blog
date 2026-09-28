type SidebarEntry = {
  text: string;
  link?: string;
  collapsible?: boolean;
  collapsed?: boolean;
  items?: SidebarEntry[];
};

const base = '/algorithms/data-structures';

const problem = (id: number, title: string, folder: string): SidebarEntry => ({
  text: `${id}. ${title}`,
  link: `${base}/${folder}/${id}`,
});

const existing = (id: number, title: string, link: string): SidebarEntry => ({
  text: `${id}. ${title}`,
  link,
});

const group = (text: string, items: SidebarEntry[]): SidebarEntry => ({
  text,
  collapsible: true,
  collapsed: true,
  items,
});

export const dataStructuresSidebar: SidebarEntry[] = [
  group('数据结构题单', [
    { text: '专题目录', link: `${base}/` },
    group('一、数组、哈希与前缀和', [
      problem(1, '两数之和', 'array-hash'),
      problem(49, '字母异位词分组', 'array-hash'),
      problem(128, '最长连续序列', 'array-hash'),
      problem(238, '除自身以外数组的乘积', 'array-hash'),
      problem(303, '区域和检索 - 数组不可变', 'array-hash'),
      problem(304, '二维区域和检索 - 矩阵不可变', 'array-hash'),
      existing(560, '和为 K 的子数组', '/algorithms/sliding-window/counting/product-sum/560'),
      problem(1094, '拼车', 'array-hash'),
    ]),
    group('二、链表', [
      problem(206, '反转链表', 'linked-list'),
      problem(21, '合并两个有序链表', 'linked-list'),
      problem(141, '环形链表', 'linked-list'),
      problem(142, '环形链表 II', 'linked-list'),
      problem(19, '删除链表的倒数第 N 个结点', 'linked-list'),
      problem(2, '两数相加', 'linked-list'),
      problem(160, '相交链表', 'linked-list'),
      problem(138, '随机链表的复制', 'linked-list'),
    ]),
    group('三、栈与队列', [
      group('基本操作与结构模拟', [
        problem(20, '有效的括号', 'stack-queue'),
        problem(155, '最小栈', 'stack-queue'),
        problem(232, '用栈实现队列', 'stack-queue'),
        problem(225, '用队列实现栈', 'stack-queue'),
        problem(394, '字符串解码', 'stack-queue'),
      ]),
      group('单调栈与队列', [
        problem(739, '每日温度', 'stack-queue'),
        problem(84, '柱状图中最大的矩形', 'stack-queue'),
        problem(402, '移掉 K 位数字', 'stack-queue'),
        existing(239, '滑动窗口最大值', '/algorithms/sliding-window/advanced/239'),
      ]),
    ]),
    group('四、二叉树与二叉搜索树', [
      group('遍历、层序与构造', [
        problem(94, '二叉树的中序遍历', 'binary-tree'),
        problem(102, '二叉树的层序遍历', 'binary-tree'),
        problem(104, '二叉树的最大深度', 'binary-tree'),
        problem(111, '二叉树的最小深度', 'binary-tree'),
        problem(226, '翻转二叉树', 'binary-tree'),
        problem(105, '从前序与中序遍历序列构造二叉树', 'binary-tree'),
        problem(236, '二叉树的最近公共祖先', 'binary-tree'),
        problem(297, '二叉树的序列化与反序列化', 'binary-tree'),
      ]),
      group('二叉搜索树', [
        problem(98, '验证二叉搜索树', 'binary-tree'),
        problem(230, '二叉搜索树中第 K 小的元素', 'binary-tree'),
        problem(235, '二叉搜索树的最近公共祖先', 'binary-tree'),
        problem(450, '删除二叉搜索树中的节点', 'binary-tree'),
      ]),
    ]),
    group('五、堆与优先队列', [
      problem(1046, '最后一块石头的重量', 'heap'),
      problem(703, '数据流中的第 K 大元素', 'heap'),
      problem(215, '数组中的第 K 个最大元素', 'heap'),
      problem(347, '前 K 个高频元素', 'heap'),
      problem(23, '合并 K 个升序链表', 'heap'),
      problem(295, '数据流的中位数', 'heap'),
      problem(373, '查找和最小的 K 对数字', 'heap'),
      existing(480, '滑动窗口中位数', '/algorithms/sliding-window/advanced/480'),
    ]),
    group('六、字典树 Trie', [
      problem(208, '实现 Trie (前缀树)', 'trie'),
      problem(211, '添加与搜索单词 - 数据结构设计', 'trie'),
      problem(648, '单词替换', 'trie'),
      problem(212, '单词搜索 II', 'trie'),
      problem(421, '数组中两个数的最大异或值', 'trie'),
    ]),
    group('七、并查集', [
      problem(547, '省份数量', 'union-find'),
      problem(684, '冗余连接', 'union-find'),
      problem(1319, '连通网络的操作次数', 'union-find'),
      problem(721, '账户合并', 'union-find'),
      problem(990, '等式方程的可满足性', 'union-find'),
    ]),
    group('八、树状数组', [
      problem(307, '区域和检索 - 数组可修改', 'fenwick'),
      problem(315, '计算右侧小于当前元素的个数', 'fenwick'),
      problem(1649, '通过指令创建有序数组', 'fenwick'),
      problem(493, '翻转对', 'fenwick'),
    ]),
    group('九、线段树', [
      existing(307, '区域和检索 - 数组可修改', `${base}/fenwick/307`),
      problem(732, '我的日程安排表 III', 'segment-tree'),
      problem(699, '掉落的方块', 'segment-tree'),
      problem(2569, '更新数组后处理求和查询', 'segment-tree'),
      problem(715, 'Range 模块', 'segment-tree'),
    ]),
    group('十、有序集合与区间维护', [
      existing(220, '存在重复元素 III', '/algorithms/sliding-window/two-pointers/same-direction/220'),
      problem(352, '将数据流变为多个不相交区间', 'ordered-set'),
      problem(729, '我的日程安排表 I', 'ordered-set'),
      problem(855, '考场就座', 'ordered-set'),
    ]),
    group('十一、数据结构设计', [
      problem(146, 'LRU 缓存', 'design'),
      problem(460, 'LFU 缓存', 'design'),
      problem(380, 'O(1) 时间插入、删除和获取随机元素', 'design'),
      problem(981, '基于时间的键值存储', 'design'),
      problem(895, '最大频率栈', 'design'),
    ]),
    { text: '建议学习路径', link: `${base}/learning-path` },
  ]),
];
