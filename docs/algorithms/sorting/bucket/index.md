---
title: 桶排序
description: 有序分桶、桶内排序与分布假设，包含过程演示、C++17 模板、性质分析与练习题单。
---

# 桶排序

[返回十大排序目录](../index.md) · [建议学习路径](../learning-path.md)

## 原理

把值域分成按大小排列的桶，先将元素分配到桶中，分别排序桶内元素，最后按桶顺序拼接。它依赖分布：多数元素挤在一个桶中时，桶内排序的成本会主导运行时间。

算法定义可参考 [NIST：桶排序](https://xlinux.nist.gov/dads/HTML/bucketsort.html)。以下模板和演示用于逐步理解实现，复杂度按本页给出的版本分析。

**循环 / 递归不变量：**较小编号桶中的元素不大于较大编号桶中的元素；每个桶内部排好序后，顺序拼接就是全局有序数组。

## 过程演示

| 步骤 | 数组 / 状态 |
| --- | --- |
| 输入、五个桶、值域 [1,8] | [8,1,7,2,6] |
| 分桶 | 桶 0：[1,2]；桶 3：[7,6]；桶 4：[8] |
| 桶内稳定插入排序 | 桶 0：[1,2]；桶 3：[6,7]；桶 4：[8] |
| 按桶号拼接 | [1,2,6,7,8] |

## C++17 实现模板

函数接收整数数组并修改其结果。使用 int 下标的模板约定元素数不超过 INT_MAX。本专题的整数键按常见的 32 位 int 讨论；稳定性指比较相同键时，附属记录仍保持原相对顺序。

```cpp
#include <algorithm>
#include <climits>
#include <cstddef>
#include <stdexcept>
#include <vector>

void bucketSort(std::vector<int>& a) {
    if (a.size() < 2) return;
    if (a.size() > static_cast<std::size_t>(INT_MAX))
        throw std::length_error("too many elements for this template");
    const int n = static_cast<int>(a.size());
    const auto bounds = std::minmax_element(a.begin(), a.end());
    const long long low = *bounds.first;
    const long long span = static_cast<long long>(*bounds.second) - low + 1;
    std::vector<std::vector<int>> buckets(n);
    for (int x : a) {
        // 32 位 int 且 n <= INT_MAX 时，该乘积可用 long long 表示。
        const int id = static_cast<int>((static_cast<long long>(x) - low) * n / span);
        buckets[id].push_back(x);
    }
    std::size_t out = 0;
    for (auto& bucket : buckets) {
        for (std::size_t i = 1; i < bucket.size(); ++i) {
            const int key = bucket[i];
            std::size_t j = i;
            while (j > 0 && bucket[j - 1] > key) {
                bucket[j] = bucket[j - 1];
                --j;
            }
            bucket[j] = key;
        }
        for (int x : bucket) a[out++] = x;
    }
}
```

桶数取 n，映射为 floor((x - low) × n / span)，最大值也落在合法桶内。插入桶时保留原顺序，桶内使用稳定插入排序，拼接也不改变相等值顺序。本映射按 32 位 int 分析乘积，且限制 n 不超过 INT_MAX。

## 性质与复杂度

| 性质 | 本模板 |
| --- | --- |
| 时间 | 均匀分布时期望 O(n + b)；最坏 O(n² + b) |
| 额外空间 | O(n + b)，本模板 b = n |
| 稳定性 | 本模板稳定 |
| 原地性 | 否 |

令 b 为桶数、mᵢ 为第 i 桶元素数。插入排序的最坏总成本为 O(n + b + Σmᵢ²)。输入近似均匀且 b 与 n 同阶时，期望 O(n + b)；分布严重偏斜时最坏 O(n² + b)。稳定性取决于分配顺序与桶内算法，本模板两者都稳定。

## 练习题单

“基础 / 核心”练习当前算法或主要操作；“延伸 / 进阶”借用相关思想，不表示该题必须使用完整排序。

| 题目 | 定位 | 练习重点 |
| --- | --- | --- |
| [912. 排序数组](./912.md) | 基础 | 比较均匀与集中分布；本模板没有最坏 O(n log n) 保证。 |
| [164. 最大间距](./164.md) | 进阶 | 只存各桶极值，跳过桶内排序，推导最大间距的线性解法。 |
| [347. 前 K 个高频元素](./347.md) | 延伸 | 按频率分桶后从高频桶收集 Top K。 |
| [451. 根据字符出现频率排序](./451.md) | 延伸 | 按字符频率分桶，输出高频桶中的字符。 |
| [220. 存在重复元素 III](./220.md) | 延伸 | 固定宽度桶配合滑动窗口，检查同桶与相邻桶；不是完整排序。 |

### 手写练习

输入间距均匀的整数，再加入少量远离其余数值的极端点，观察桶大小和比较次数。让桶内改用归并排序，重新分析上界与空间。

## 易错点

- 分桶不自动意味着线性时间，必须说明分布假设与桶内算法。
- 普通桶排序不能直接满足最大间距题的最坏线性要求。
- 负数的固定宽度桶编号需要数学向下取整，C++ 整数除法向零截断。
- 桶宽、值域差、乘法及最大端点映射都要检查溢出和越界。
