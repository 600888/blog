import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { validateSidebar } from './check-sidebar.mjs';

test('detects the same route reused in different category groups', () => {
  const errors = validateSidebar([
    { text: '冒泡', items: [{ text: '912. 排序数组', link: '/algorithms/sorting/problems/912' }] },
    { text: '归并', items: [{ text: '912. 排序数组', link: '/algorithms/sorting/problems/912' }] },
  ]);
  assert.equal(errors.length, 1);
  assert.match(errors[0], /Duplicate link.*冒泡.*归并/);
});

test('allows independent pages for the same question number', () => {
  assert.deepEqual(validateSidebar([
    { text: '冒泡', items: [{ text: '912. 排序数组', link: '/algorithms/sorting/bubble/912' }] },
    { text: '归并', items: [{ text: '912. 排序数组', link: '/algorithms/sorting/merge/912' }] },
  ]), []);
});

test('normalizes trailing slashes, index pages, extensions and fragments', () => {
  const errors = validateSidebar([
    { text: 'A', link: '/algorithms/sorting/' },
    { text: 'B', link: '/algorithms/sorting/index.md#原理' },
    { text: 'C', link: '/algorithms/sorting' },
  ]);
  assert.equal(errors.length, 2);
  assert(errors.every(error => error.includes('Duplicate link')));
});

test('rejects question links into another topic but allows article references', () => {
  const errors = validateSidebar([{ text: '图论', items: [
    { text: '目录', link: '/algorithms/graph/' },
    { text: '547. 省份数量', link: '/algorithms/data-structures/union-find/547' },
    { text: '关于数据结构', link: '/algorithms/data-structures/' },
  ] }]);
  assert.equal(errors.length, 1);
  assert.match(errors[0], /Question outside its topic/);
});

test('checks that copied pages actually exist', () => {
  const docsRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'blog-sidebar-test-'));
  try {
    fs.mkdirSync(path.join(docsRoot, 'algorithms/sorting/bubble'), { recursive: true });
    fs.writeFileSync(path.join(docsRoot, 'algorithms/sorting/bubble/912.md'), '# 排序数组\n');
    const errors = validateSidebar([
      { text: '912. 排序数组', link: '/algorithms/sorting/bubble/912' },
      { text: '912. 排序数组', link: '/algorithms/sorting/merge/912' },
    ], { docsRoot });
    assert.equal(errors.length, 1);
    assert.match(errors[0], /Missing page.*merge\/912/);
  } finally {
    fs.unlinkSync(path.join(docsRoot, 'algorithms/sorting/bubble/912.md'));
    fs.rmdirSync(path.join(docsRoot, 'algorithms/sorting/bubble'));
    fs.rmdirSync(path.join(docsRoot, 'algorithms/sorting'));
    fs.rmdirSync(path.join(docsRoot, 'algorithms'));
    fs.rmdirSync(docsRoot);
  }
});
