# AstroPaper 国际化版本

🌍 [中文 README](README.md) | [العربية](README.ar.md)

<div align='center'>

![AstroPaper I18n](/public/astro-paper-i18n.png)

</div>

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/yousef8/astro-paper-i18n/deploy.yml?branch=main)
![GitHub Release](https://img.shields.io/github/v/release/yousef8/astro-paper-i18n)
[![Netlify Status](https://api.netlify.com/api/v1/badges/3877e14a-0bdc-4e85-bcd4-542f93f860a3/deploy-status)](https://app.netlify.com/sites/astro-paper-i18n/deploys)

本仓库是 [AstroPaper](https://github.com/satnaing/astro-paper) 主题的分支，增加了国际化（i18n）支持。

该分支在原始 AstroPaper 主题的基础上集成了国际化功能。

国际化功能通过 Astro 提供的[国际化路由](https://docs.astro.build/en/guides/internationalization/)实现。

由于作者的母语是阿拉伯语，因此本主题特别支持从右到左（RTL）书写的语言（如阿拉伯语、波斯语等）。

如蒙主佑，本分支将始终保持与原始 [AstroPaper](https://github.com/satnaing/astro-paper) 仓库的同步更新。

本分支不修改原始主题的界面，仅添加国际化支持。

## 目录

- [AstroPaper 国际化版本](#astropaper-国际化版本)
  - [目录](#目录)
  - [🔥 功能特性](#-功能特性)
    - [界面增强](#界面增强)
    - [国际化功能](#国际化功能)
    - [🧪 测试](#-测试)
  - [Lighthouse 评分](#lighthouse-评分)
  - [安装](#安装)
  - [📖 使用方法](#-使用方法)
    - [1- 创建翻译文件](#1--创建翻译文件)
    - [2- 定义语言配置](#2--定义语言配置)
    - [3- 添加关于页面](#3--添加关于页面)
    - [4- 添加你的内容](#4--添加你的内容)
  - [🛠️ 配置](#️-配置)
    - [🔧 站点配置](#-站点配置)
    - [🌐 语言配置](#-语言配置)
  - [🧞 命令](#-命令)
  - [🚧 已知问题](#-已知问题)

## 🔥 功能特性

本项目包含原始 [AstroPaper](https://github.com/satnaing/astro-paper) 主题的所有功能，并增加了以下内容：

### 界面增强

- [x] **方向无关性：**
  - [x] 完整的 RTL（从右到左）支持
  - [x] 无论界面方向是 RTL 还是 LTR，UI 都保持一致

### 国际化功能

- [x] 界面翻译，包括数字和日期
- [x] 语言切换器
- [x] 无障碍相关的翻译
- [x] 使用 TypeScript 实现类型安全的国际化
- [x] 支持国际化的站点地图（[`@astrojs/sitemap`](https://docs.astro.build/en/guides/integrations-guide/sitemap/)）
- [x] 支持国际化的 OG 图片生成
  - 注意：satori 不支持 RTL 语言，会导致 RTL OG 图片的布局问题
- [x] 支持国际化的 RSS 订阅（[`@astrojs/rss`](https://docs.astro.build/en/guides/rss/)）
- [ ] 📋 **计划中：**
  - [ ] 路由翻译

### 🧪 测试

- [x] 使用 [Vitest](https://vitest.dev/) 进行单元测试
- [x] 国际化配置和工具函数的单元测试
- [ ] [src/utils](/src/utils) 的单元测试
- [ ] [src/config.ts](/src/config.ts) 的单元测试

## Lighthouse 评分

点击查看完整报告

<p align="center">
  <a href="https://pagespeed.web.dev/analysis/https-yousef8-github-io-AstroPaperI18n-ar/d2cqwqovpv?form_factor=desktop">
    <img width="710" alt="AstroPaper I18n Lighthouse Score" src="AstroPaper-lighthouse-score.svg">
  <a>
</p>

## 安装

你可以 Fork 本仓库

或者使用 Astro CLI 安装

```bash
pnpm create astro@latest --template yousef8/astro-paper-i18n
```

## 📖 使用方法

### 1- 创建翻译文件

进入 [src/i18n/locales](/src/i18n/locales) 目录，为你的语言创建一个文件（例如 `es` 代表西班牙语，`ja` 代表日语等）。文件名应为 `<locale_key>.ts` 格式（例如 `es.ts`、`ja.ts` 等）。

从 `@i18n/types` 导出 `I18nStrings` 类型的变量，包含所有翻译的键值对。

你可以在 [/src/i18n/types.ts](/src/i18n/types.ts) 查看类型定义，在 [/src/i18n/locales/ar.ts](/src/i18n/locales/ar.ts) 查看示例文件。

### 2- 定义语言配置

进入 [src/i18n/config.ts](/src/i18n/config.ts)，在 `localeToProfile` 配置对象中为你的语言定义配置。

语言配置用于定义语言名称、翻译、语言标签、界面布局方向和 Google 字体名称。

创建一个语言键，必须全部小写并符合 BCP-47 命名规范（例如 `ar`、`en`、`es`、`ja` 等）。它的值是一个包含以下键的对象：

- 在 `name` 键中设置语言名称，它将用于语言选择器。
- 将你在第 1 步创建的翻译文件赋值给 `messages` 键。
- `langTag` 必须符合 BCP-47 规范，用于本地化日期和时间，同时**扩展用于本地化所有数字**（例如 `en-US`、`ar-EG`、`es-ES`、`ja-JP` 等）。
- Google 字体名称仅用于 [OG 图片](https://magefan.com/blog/open-graph-meta-tags)。
- 如果你想将其设为默认语言，将 `default` 键设置为 `true`。如果没有设置默认语言，对象中的第一个语言将被用作默认语言。
- 将 `direction` 键设置为支持的值之一 `rtl | ltr | auto`，对应 HTML `dir` 属性的值。

**注意：** 你可能需要重启开发服务器才能看到更改。

**注意：** [satori](https://github.com/vercel/satori) 不支持 RTL 语言，会导致 RTL [OG 图片](https://magefan.com/blog/open-graph-meta-tags)的布局问题。

### 3- 添加关于页面

关于页面现在有自己的[内容集合](https://docs.astro.build/en/guides/content-collections/)，因为本主题支持国际化，你可能需要在多种语言中提供关于页面的内容。

进入 [src/content/about](/src/content/about)，为你的语言创建一个文件，文件名应为 `about.<locale_key>.md` 格式（例如 `about.en.md`、`about.es.md` 等）。

支持与原始 AstroPaper 主题相同的 frontmatter 键：`title` 和 `description` 用于页面标题和描述。

### 4- 添加你的内容

在 [src/content/blog](/src/content/blog) 下，用你的语言键（例如 `es`、`ja` 等）创建一个文件夹，并在其中添加 Markdown 格式的内容。

语言文件夹之外的博客将不会被站点识别。

就这样，完成了 🎈🎉 🥳！

更多信息请查看 [AstroPaper 文档](https://github.com/satnaing/astro-paper?tab=readme-ov-file#-documentation)，因为本项目是在其基础上构建的，仅增加了国际化支持，其他一切都应该相同。

## 🛠️ 配置

配置方式与[原始主题的使用和配置](https://github.com/satnaing/astro-paper?tab=readme-ov-file#-project-structure)相同，但有一些必要的更改以支持网站翻译。

### 🔧 站点配置

`SITE.title` 和 `SITE.desc` 配置已被 `site.title` 和 `site.desc` 翻译替换，现在整个站点都使用它们。

```diff
// src/config.ts

export const SITE: Site = {
  //...
-  title: "AstroPaper I18n",
-  desc: "A fork of AstroPaper theme with support for I18n",
  //...
};
```

```diff
// src/i18n/types.ts

export interface I18nStrings {
+  "site.title": string;
+  "site.desc": string;
   // ... 其他翻译
```

### 🌐 语言配置

语言配置已从 `src/config.ts` 移至单独的文件以更好地组织。

```diff
// src/config.ts

-export const LOCALE = {
-  lang: "en", // html lang code. Set this empty and default will be "en"
-  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
-} as const;

export const LOGO_IMAGE = {
```

现在语言配置在 `src/i18n/config.ts` 中处理：

```ts
// src/i18n/config.ts
export const localeToProfile = {
  // 语言键必须全部小写并符合 BCP-47 规范
  ar: {
    name: "العربية", // 语言选择器中显示的名称
    messages: ARLocale, // 语言翻译
    langTag: "ar-EG", // BCP 47 语言标签（用于日期、数字和站点地图）
    direction: "rtl", // 界面布局方向
    googleFontName: "Cairo", // 用于 OG 图片生成，字体必须支持 400 和 700 字重，空格用 '+' 替换
  },
  en: {
    name: "English",
    messages: ENLocale,
    langTag: "en-US",
    direction: "ltr",
    googleFontName: "IBM+Plex+Mono",
    default: true,
  },
} satisfies Record<string, LocaleProfile>;
```

## 🧞 命令

与[原始主题相同的命令](https://github.com/satnaing/astro-paper/tree/main?tab=readme-ov-file#-commands)，并增加了

| 命令                 | 操作                                                                                      |
| :------------------- | :---------------------------------------------------------------------------------------- |
| `npm test`           | 运行所有单元测试一次并退出 [了解更多](https://vitest.dev/guide/cli.html#vitest-run)        |
| `npm run test:watch` | 以监视模式运行单元测试 [了解更多](https://vitest.dev/guide/cli.html#vitest-watch)          |
| `npm run coverage`   | 生成单元测试覆盖率报告 [了解更多](https://vitest.dev/guide/coverage.html)                  |

## 🚧 已知问题

- [ ] 屏幕阅读器模式的样式目前有问题，需要修复。
  - 欢迎贡献！
