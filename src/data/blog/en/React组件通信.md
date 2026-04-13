---
author: vento
pubDatetime: 2026-03-24T00:00:00Z
modDatetime: 2026-03-24T00:00:00Z
title: React组件通信
slug: react-component-communication
featured: false
draft: false
tags:
  - 随笔
  - 开始
  - 前端
  - React
description: 
  这是我的我学习react钩子的一个对比。
---

### 父子间组件通信：

父传子的流程：

1.  父组件传递数据 子组件标签身上绑定属性
    
2.  子组件接收数据
    

子传父的流程：

1.  父组件传递数据子组件标签身上绑定属性
    
2.  在子组件中调用父组件中的函数，并将自己的数据作为一个实参传过去
    

```typescript
//父传子
//1.父组件传递数据 子组件标签身上绑定属性
//2.子组件接收数据
//子传父
//1.父组件传递数据 子组件标签身上绑定属性
//2.在子组件中调用父组件中的函数，并将自己的数据作为一个实参传过去
import { useState } from 'react'
function Article ({ title, content, active, onGetHandleChange }) {
  return (
    <div>
      {/* 子组件接收数据 */}
      <h2>{title}</h2>
      <p>{content}</p>
      <p>状态:{active ? '显示中' : '已隐藏'}</p>
      {/* 子传父:在子组件中调用父组件中的函数并传递参数 */}
      <button onClick={() => onGetHandleChange(title)}>点击</button>
    </div>
  )
}

export default function App () {
  //父传子:父组件传递数据
  const articleData = {
    title:'标题1'
  }
  //声明一个状态数据开看一下视图的变化
  const [activeTitle, setActiveTitle] = useState('')
  //子传父:父组件声明一个函数
  function handleChange (title) {
    console.log(title)
    //更新状态数据
    setActiveTitle(title)
  }
  return (
    <div>
      {/* 父传子:子组件身上绑定属性 */}
      <Article
        onGetHandleChange={handleChange}
        title={articleData.title}
        content="内容1"
        active
      />
      <Article
        onGetHandleChange={handleChange}
        title="标题2"
        content="内容2"
      />
      <Article
        onGetHandleChange={handleChange}
        title="标题3"
        content="内容3"
        active
      />
    </div>
  )
}
```

### 兄弟组件通信：

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/3BMqYybVLA9KGqwZ/img/47b11923-44a3-479f-b2c4-f44e09b7f6f7.png)

```typescript
// 子传父:子组件调用父组件中的函数,并将自己的数据作为一个实参传递进去
import React, { useState } from "react"

function A({ onGetName }) {
  // Son组件中的数据
  const name = "this is A name"

  return (
    <div>
      this is A component, {name}
      {/* 将A中的数据作为一个实参传递过去 */}
      <button onClick={() => onGetName(name)}>send</button>
    </div>
  )
}

function B({ name }) {
  return (
    <div>
      this is B component, {name}
    </div>
  )
}

function App() {
  // 声明一个状态函数
  const [name, setName] = useState("")
  // 父组件中的函数
  const getAName = (name) => {
    console.log(name)
    // 通过调用这个状态方法存进状态变量里面去
    setName(name)
  }
  return (
    <div>
      this is App
      {/* 将函数绑定给子组件 */}
      <A onGetName={getAName} />
      <B name={name} />
    </div>
  )
}

export default App
```

### 跨层级组件通信：

![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/3BMqYybVLA9KGqwZ/img/3e2a37cf-544c-4ac0-8e2c-759cdd887662.png)

实现步骤：

1.  使用 createContext 方法创建一个上下文对象 Ctx
    
2.  在顶层组件（App）中通过 Ctx.Provider 组件提供数据
    
3.  在底层组件（B）中通过 useContext 钩子函数获取消费数据
    

```javascript
import React, { createContext, useContext } from 'react'
//1. createContext方法创建一个上下文对象
export const MyContext = createContext()
//2.顶层组件中 通过Context.Provider组件提供上下文值
//3.底层组件中 通过useContext钩子函数使用数据

function A () {
  return (
    <div>
      this is A component
      <B />
    </div>
  )
}

function B () {
  //4.通过useContext钩子函数使用数据
  const msg = useContext(MyContext)
  return (
    <div>
      this is B component, msg is {msg}
    </div>
  )
}

function App () {
  const msg = 'this is app msg'
  return (
    <div>
      {/*value是提供数据的，就是你要传递的数据 */}
      <MyContext.Provider value={msg}>
      this is App
      <A />
      </MyContext.Provider>
    </div>
  )
}

export default App
```