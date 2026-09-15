---
title: 时间与空间复杂度
description: 用线性查找和二分查找理解算法随输入规模增长的变化。
---

# 时间与空间复杂度

复杂度描述输入规模增长时，算法需要的工作量或存储空间如何增长。它关注增长趋势，不直接等于运行秒数。

## 时间复杂度

设输入包含 `n` 个元素。顺序扫描每个元素，最坏情况下执行 `n` 次比较，时间复杂度为 `O(n)`。

```typescript title="顺序查找"
function findIndex(values: number[], target: number): number {
  for (let i = 0; i < values.length; i++) {
    if (values[i] === target) return i;
  }
  return -1;
}
```

如果目标刚好是第一个元素，最好情况为 `O(1)`；如果不存在或位于最后，最坏情况为 `O(n)`。讨论复杂度时，需要说明采用哪一种情况。

## 常见增长趋势

| 复杂度 | 直观理解 | 示例 |
| --- | --- | --- |
| `O(1)` | 操作次数不随规模增长 | 按下标访问数组 |
| `O(log n)` | 每一步缩小固定比例 | 有序数组的二分查找 |
| `O(n)` | 遍历全部元素 | 顺序查找 |
| `O(n log n)` | 多层处理，每层总计线性工作 | 归并排序 |
| `O(n²)` | 对每个元素再遍历一遍 | 双重全量循环 |

分析时忽略常数因子和低阶项。例如 `3n + 10` 记为 `O(n)`。

## 二分查找的例子

```typescript title="在有序数组中查找"
function binarySearch(values: number[], target: number): number {
  let left = 0;
  let right = values.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (values[mid] === target) return mid;
    if (values[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
```

每次比较后，候选区间大约减半。因此最坏时间复杂度为 `O(log n)`。

:::note 前提条件
二分查找要求数组按相同的比较规则排序。若为了单次查找先进行排序，必须把排序成本一起考虑。
:::

## 空间复杂度

上面的实现只维护几个变量，额外空间为 `O(1)`。如果复制一份长度为 `n` 的数组，额外空间为 `O(n)`。递归调用栈也要计算在内。

## 实践要点

复杂度相同不代表实际性能相同。常数开销、缓存局部性、输入分布和运行环境都会影响实际耗时。先用复杂度筛选方案，再用测量验证判断。
