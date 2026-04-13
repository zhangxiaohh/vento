---
author: vento
pubDatetime: 2026-03-23T00:00:00Z
modDatetime: 2026-03-23T00:00:00Z
title: useRef和useState对比
slug: useref-usestate-comparison
featured: false
draft: false
tags:
  - 随笔
  - 开始
description: 
  这是我的我学习react钩子的一个对比。
---

 你可以把 `useRef` 想象成一个**带锁的储物柜**，而 `.current` 就是**柜门**。只有通过 `.current` 这个门，你才能存取里面的东西。

以下是详细的拆解：

### 1. `useRef` 是什么？

在 React 中，有两种方式可以记住数据：

*   `useState` **(明面上的变量)**：数据变了，组件就**立刻重新渲染**。
    
*   `useRef` **(暗地里的仓库)**：数据变了，组件**完全不重新渲染**，它会悄悄地在后台帮你把值存好。
    

**核心特点：**

*   **持久性**：组件重新渲染时，`useRef` 里的值不会丢失（普通变量会重置）。
    
*   **隐蔽性**：修改 `ref.current` 不会触发 UI 更新。
    

---

### 2. `useRef` 返回的对象是干啥的？

`useRef` 返回的不是你存的那个值，而是一个**固定的对象**，它的结构永远是：

```json
{ "current": 你存的数据 }

```

**为什么要多此一举用** `.current`？因为 React 需要保证这个“储物柜”对象在组件整个生命周期中**引用地址不变**。如果直接让你操作值，React 就没法追踪这个容器了。所以它给你一个永远不变的容器对象，你只需要修改它里面的 `.current` 属性即可。

---

### 3. 它是如何使用的？

#### 用法 A：存储数据（不触发渲染）

这就是我们用来暂存图片的逻辑：

```tsx
// 1. 初始化一个空仓库

const cacheImageList = useRef<UploadFile[ ]>([ ])


// 2. 存入数据：必须写 .current
cacheImageList.current = infoList.fileList 

// 3. 读取数据：必须写 .current
const firstImg = cacheImageList.current[0]

```

#### 用法 B：获取 DOM 元素

这是你之前在 \[Home/index.tsx\](file:///d:/learningforever/front-end/React/react-jike/src/pages/Home/index.tsx) 中初始化 ECharts 的方式：

```tsx
const chartRef = useRef<HTMLDivElement>(null)

// 在 JSX 中绑定
<div ref={chartRef} />

// 在 useEffect 中通过 .current 拿到真实的 DOM 节点
const chartDom = chartRef.current 

```
---

### 4. 什么时候该用 `useRef` 而不是 `useState`？

你可以问自己一个问题：**“这个数据变了，我需要用户立刻在屏幕上看到变化吗？”**

*   **需要**（比如：输入框内容、封面切换状态、接口返回的数据） -> 用 `useState`。
    
*   **不需要**（比如：暂存的图片备份、ECharts 的 DOM 引用、定时器的 ID） -> 用 `useRef`。
    

### 总结：

*   `useRef`：帮你跨越渲染“记住”东西。
    
*   `.current`：操作这个“东西”的唯一入口。
    
*   **不触发渲染**：是它最大的秘密武器。
