type SidebarEntry = {
  text: string;
  link?: string;
  collapsible?: boolean;
  collapsed?: boolean;
  items?: SidebarEntry[];
};

const base = '/algorithms/sliding-window';

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

export const slidingWindowSidebar: SidebarEntry[] = [
  group('滑动窗口', [
    { text: '专题目录', link: `${base}/` },
    group('一、定长滑动窗口', [
      group('基础遍历与求和', [
        problem(643, '子数组最大平均数 I', 'fixed/basic'),
        problem(2090, '半径为 k 的子数组平均值', 'fixed/basic'),
        problem(1652, '拆炸弹', 'fixed/basic'),
      ]),
      group('字符与元素计数', [
        problem(2269, '找到一个数字的 K 美丽值', 'fixed/counting'),
        problem(1876, '长度为三且各字符不同的子字符串', 'fixed/counting'),
        problem(1456, '定长子串中元音的最大数目', 'fixed/counting'),
        problem(1343, '大小为 K 且平均值大于等于阈值的子数组数目', 'fixed/counting'),
        problem(2379, '得到 K 个黑块的最少涂色次数', 'fixed/counting'),
        problem(1052, '爱生气的书店老板', 'fixed/counting'),
        problem(1461, '检查一个字符串是否包含所有长度为 K 的二进制子串', 'fixed/counting'),
      ]),
      group('去重与特定属性', [
        problem(1984, '学生分数的最小差值', 'fixed/unique'),
        problem(2461, '长度为 K 子数组中的最大和', 'fixed/unique'),
        problem(2841, '几乎唯一子数组的最大和', 'fixed/unique'),
        problem(1423, '可获得的最大点数', 'fixed/unique'),
      ]),
    ]),
    group('二、不定长滑动窗口（最长／最大）', [
      group('预算与替换', [
        problem(1004, '最大连续 1 的个数 III', 'longest/budget'),
        problem(1493, '删掉一个元素以后全为 1 的最长子数组', 'longest/budget'),
        problem(1208, '尽可能使字符串相等', 'longest/budget'),
        problem(2024, '考试的最大困扰度', 'longest/budget'),
        problem(1838, '最高频元素的频数', 'longest/budget'),
        problem(424, '替换后的最长重复字符', 'longest/budget'),
      ]),
      group('无重复与限制频率', [
        problem(3, '无重复字符的最长子串', 'longest/frequency'),
        problem(1695, '删除子数组的最大得分', 'longest/frequency'),
        problem(2958, '最多 K 个重复元素的最长子数组', 'longest/frequency'),
        problem(3090, '每个字符最多出现两次的最长子串', 'longest/frequency'),
        problem(904, '水果成篮', 'longest/frequency'),
      ]),
      group('数值与差值约束', [
        problem(209, '长度最小的子数组', 'shortest'),
        problem(1438, '绝对差不超过限制的最长连续子数组', 'longest/numeric'),
        problem(2401, '最长优雅子数组', 'longest/numeric'),
        problem(2009, '使数组连续的最少操作数', 'longest/numeric'),
      ]),
    ]),
    group('三、不定长滑动窗口（最短／最小）', [
      problem(209, '长度最小的子数组', 'shortest'),
      problem(2260, '必须拿起的最小连续卡牌数', 'shortest'),
      problem(1234, '替换子串得到平衡字符串', 'shortest'),
      problem(1658, '将 x 减到 0 的最小操作数', 'shortest'),
      problem(2516, '每种字符至少取 K 个', 'shortest'),
      problem(76, '最小覆盖子串', 'shortest'),
    ]),
    group('四、计数与恰好问题', [
      group('乘积与和计数', [
        problem(713, '子数组乘积小于 K', 'counting/product-sum'),
        problem(930, '二进制子数组的和', 'counting/product-sum'),
        problem(1248, '统计「优美子数组」', 'counting/product-sum'),
        problem(560, '和为 K 的子数组', 'counting/product-sum'),
        problem(2302, '统计得分小于 K 的子数组数目', 'counting/product-sum'),
      ]),
      group('恰好 K 与至多 K', [
        problem(992, 'K 个不同整数的子数组', 'counting/exact'),
        problem(1248, '统计「优美子数组」', 'counting/product-sum'),
        problem(795, '区间子数组个数', 'counting/exact'),
      ]),
      group('越长或越短越合法', [
        problem(1759, '统计同构子字符串的数目', 'counting/monotonic'),
        problem(1358, '包含所有三种字符的子字符串数目', 'counting/monotonic'),
        problem(2799, '统计完全子数组的数目', 'counting/monotonic'),
        problem(2962, '统计最大元素出现至少 K 次的子数组', 'counting/monotonic'),
        problem(2537, '统计好子数组的数目', 'counting/monotonic'),
        problem(2444, '统计定界子数组的数目', 'counting/monotonic'),
      ]),
    ]),
    group('五、频率匹配与字符串综合', [
      problem(567, '字符串的排列', 'strings'),
      problem(438, '找到字符串中所有字母异位词', 'strings'),
      problem(30, '串联所有单词的子串', 'strings'),
      problem(187, '重复的 DNA 序列', 'strings'),
      problem(1297, '子串的最大出现次数', 'strings'),
      problem(395, '至少有 K 个重复字符的最长子串', 'strings'),
    ]),
    group('六、双指针与滑动窗口的边界', [
      group('同向双指针', [
        problem(219, '存在重复元素 II', 'two-pointers/same-direction'),
        problem(220, '存在重复元素 III', 'two-pointers/same-direction'),
      ]),
      group('相向双指针', [
        problem(167, '两数之和 II - 输入有序数组', 'two-pointers/opposite-direction'),
        problem(11, '盛最多水的容器', 'two-pointers/opposite-direction'),
        problem(15, '三数之和', 'two-pointers/opposite-direction'),
        problem(18, '四数之和', 'two-pointers/opposite-direction'),
      ]),
    ]),
    group('七、滑动窗口与数据结构', [
      problem(2762, '不间断子数组', 'advanced'),
      problem(239, '滑动窗口最大值', 'advanced'),
      problem(480, '滑动窗口中位数', 'advanced'),
      problem(862, '最短子数组之和至少为 K', 'advanced'),
    ]),
    { text: '八、建议学习路径', link: `${base}/learning-path` },
  ]),
];
