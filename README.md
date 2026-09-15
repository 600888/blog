# 东宇的学习笔记

使用 Rspress 2 构建的个人博客，记录数据结构与算法、计算机网络、操作系统和电力规约。文档布局参考 [Halo 文档](https://docs.halo.run/guide/install/)。

## 本地开发

需要 Node.js 22.12 或以上版本，推荐 Node.js 22 LTS。

```bash
npm ci
npm run dev
```

访问终端输出的 `/blog/` 地址。

```bash
npm run typecheck
npm run build
npm run preview
```

构建产物位于 `doc_build/`，预览地址同样包含 `/blog/`。

## 内容目录

```text
docs/
  index.mdx             首页
  about.md              关于笔记
  algorithms/           数据结构与算法
  networks/             计算机网络
  operating-systems/    操作系统
  power-protocols/      电力规约
  public/               图标等静态资源
theme/                  自定义样式和首页卡片
rspress.config.ts       站点、导航及侧边栏配置
```

新增文章时，在对应模块下创建 `.md` 或 `.mdx`，并在 `rspress.config.ts` 的 `sections[].articles` 中添加文件名和标题。页内目录根据二、三级标题生成，全文搜索在构建时更新。内部 Markdown 链接使用相对文件路径；React 组件使用 Rspress 的 `Link`，自动兼容站点前缀。

## GitHub Pages 部署

沿用 `ems_simulate` 的方式：推送 `main` 后，GitHub Actions 构建并将静态文件发布到 `gh-pages` 分支。Pull Request 只检查类型和构建，不发布。

首次部署步骤：

1. 将代码提交并推送到 GitHub 的 `main` 分支。
2. 等待 **Actions → Deploy Rspress Blog** 成功生成 `gh-pages` 分支。
3. 在 **Settings → Pages → Build and deployment** 中选择 **Deploy from a branch**。
4. 选择 **gh-pages / (root)** 并保存。

部署完成后访问：**https://600888.github.io/blog/**。

以后更新文章只需推送 `main`。也可在 Actions 手动运行工作流。工作流使用自动提供的 `GITHUB_TOKEN`，不需要配置个人 Token。

如果修改仓库名或启用独立域名，请同步修改 `rspress.config.ts` 中的 `base` 和 `siteOrigin`。独立域名还需在 `docs/public/` 添加 `CNAME`。

项目已启用静态预渲染和 `cleanUrls`，子页面会生成对应的 HTML 文件，便于 GitHub Pages 直接访问和刷新。
