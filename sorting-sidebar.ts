type SidebarEntry = {
  text: string;
  link?: string;
  collapsible?: boolean;
  collapsed?: boolean;
  items?: SidebarEntry[];
};

const base = '/algorithms/sorting';
const problem = (id: number, title: string, folder: string): SidebarEntry => ({
  text: `${id}. ${title}`, link: `${base}/${folder}/${id}`,
});
const group = (text: string, items: SidebarEntry[]): SidebarEntry => ({
  text, collapsible: true, collapsed: true, items,
});

export const sortingSidebar: SidebarEntry[] = [
  group('十大排序', [
    { text: '专题目录', link: `${base}/` },
    group('一、冒泡排序', [
      { text: '原理与实现模板', link: `${base}/bubble/` },
      problem(912, '排序数组', 'bubble'),
      problem(283, '移动零', 'bubble'),
    ]),
    group('二、选择排序', [
      { text: '原理与实现模板', link: `${base}/selection/` },
      problem(912, '排序数组', 'selection'),
      problem(414, '第三大的数', 'selection'),
      problem(1464, '数组中两元素的最大乘积', 'selection'),
      problem(215, '数组中的第 K 个最大元素', 'selection'),
    ]),
    group('三、插入排序', [
      { text: '原理与实现模板', link: `${base}/insertion/` },
      problem(912, '排序数组', 'insertion'),
      problem(147, '对链表进行插入排序', 'insertion'),
      problem(35, '搜索插入位置', 'insertion'),
    ]),
    group('四、希尔排序', [
      { text: '原理与实现模板', link: `${base}/shell/` },
      problem(912, '排序数组', 'shell'),
    ]),
    group('五、归并排序', [
      { text: '原理与实现模板', link: `${base}/merge/` },
      problem(912, '排序数组', 'merge'),
      problem(88, '合并两个有序数组', 'merge'),
      problem(21, '合并两个有序链表', 'merge'),
      problem(148, '排序链表', 'merge'),
      problem(23, '合并 K 个升序链表', 'merge'),
      problem(315, '计算右侧小于当前元素的个数', 'merge'),
      problem(493, '翻转对', 'merge'),
      problem(327, '区间和的个数', 'merge'),
    ]),
    group('六、快速排序', [
      { text: '原理与实现模板', link: `${base}/quick/` },
      problem(912, '排序数组', 'quick'),
      problem(75, '颜色分类', 'quick'),
      problem(215, '数组中的第 K 个最大元素', 'quick'),
      problem(973, '最接近原点的 K 个点', 'quick'),
      problem(324, '摆动排序 II', 'quick'),
    ]),
    group('七、堆排序', [
      { text: '原理与实现模板', link: `${base}/heap/` },
      problem(912, '排序数组', 'heap'),
      problem(215, '数组中的第 K 个最大元素', 'heap'),
      problem(347, '前 K 个高频元素', 'heap'),
      problem(23, '合并 K 个升序链表', 'heap'),
      problem(703, '数据流中的第 K 大元素', 'heap'),
      problem(1046, '最后一块石头的重量', 'heap'),
    ]),
    group('八、计数排序', [
      { text: '原理与实现模板', link: `${base}/counting/` },
      problem(912, '排序数组', 'counting'),
      problem(75, '颜色分类', 'counting'),
      problem(1122, '数组的相对排序', 'counting'),
      problem(1051, '高度检查器', 'counting'),
      problem(274, 'H 指数', 'counting'),
      problem(1365, '有多少小于当前数字的数字', 'counting'),
      problem(242, '有效的字母异位词', 'counting'),
    ]),
    group('九、桶排序', [
      { text: '原理与实现模板', link: `${base}/bucket/` },
      problem(912, '排序数组', 'bucket'),
      problem(164, '最大间距', 'bucket'),
      problem(347, '前 K 个高频元素', 'bucket'),
      problem(451, '根据字符出现频率排序', 'bucket'),
      problem(220, '存在重复元素 III', 'bucket'),
    ]),
    group('十、基数排序', [
      { text: '原理与实现模板', link: `${base}/radix/` },
      problem(912, '排序数组', 'radix'),
      problem(164, '最大间距', 'radix'),
      problem(2343, '裁剪数字后查询第 K 小的数字', 'radix'),
    ]),
    { text: '建议学习路径', link: `${base}/learning-path` },
  ]),
];
