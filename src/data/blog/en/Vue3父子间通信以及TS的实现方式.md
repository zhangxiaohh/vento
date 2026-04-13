---
author: vento
pubDatetime: 2026-02-02T00:00:00Z
modDatetime: 2026-02-02T00:00:00Z
title: 分享会（Vue3父子间通信以及TS的实现方式）
slug: vue3-communication-ts
featured: false
draft: false
tags:
  - 随笔
  - 开始
  - 前端
  - Vue3
description: 
  这是我的分享会（Vue3父子间通信以及TS的实现方式）的输出。
---

## 一、前言

在 Vue 3 中，组件间通信是构建可维护且灵活的应用程序的关键。随着应用程序变得越来越复杂，组件之间有效地共享数据和状态变得至关重要。Vue 3 提供了多种机制来实现这一点，从简单的父子组件通信到更为复杂的跨组件通信。今天就像带领大家了解一下vue3中的父子通信。

## 二、defineProps和defineEmits

下面介绍两个组件通信中重要的工具，是在setup函数中去使用的。

### 1.defineProps

父组件向子组件传递数据通常是由props实现的，使用defineProps选项来声明子组件接收的props

**这个实现流程如下：**

1.  **引入子组件**
    
2.  **将要传的东西用响应式变量包裹起来**
    
3.  **父组件把数据传递给子组件**
    
4.  **子组件接收斌使用数据**
    

###### 举个例子：

父组件：

```vue
<template>
  //父组件把数据传给子组件 :message="message" 是 Vue 中v-bind:message="message" 的简写形式把父组件的响应式数据绑定到子组件的 message 属性上
  <Child :message="message"/>
</template>

<script setup>
 //引入子组件
 import Child from './child.vue'
 import { ref } from 'vue'
 //使用ref包裹成响应式变量（数据变化的时候，子组件会自动更新）
 const message=ref('父类的数据')
</script>
```

子组件：

```vue
<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
  
//子组件接收并使用数据
const props = defineProps({
  message: {
    type: String,
    required: true,
    default: 'Hello Vue!'
  }
});
</script>
```

### 2.defineEmits

当我们希望子组件能够将数据传递给父组件时，通常的做法是通过子组件触发事件使用defineEmits来通知父组件。

### 通过定义一个自定义事件在父组件中监听这一事件来达到目的

###### 1.子组件通过 `defineEmits` 定义自定义事件，在需要时触发该事件并传递修改后的数据；

###### 2.父组件监听该事件，当事件触发时，调用相应的处理方法更新自身的数据。

子组件：

```vue
<template>
  <div>
    <p>{{message}}</p>
    <button @click="updateMessage">Change</button>
  </div>
</template>

<script setup>
import { defineProps , defineEmits } from 'vue';

//定义props
const props=defineProps({
  message: {
    type: String,
    required: true
  },
})
// 定义一个自定义事件 update，并在父组件中通过 v-on:update 接收并处理
const emits = defineEmits(['update']);  //定义事件
//触发自定义事件
const updateMessage = () => {
  emits('update', '修改后父类的数据');  
}
</script>
```

父组件：

```vue
<template>
  <Child :message="message" @update="changeMsg"/> //监听(订阅)事件
</template>

<script setup>
 import Child from './child.vue'
 import { ref } from 'vue'
const message=ref('父类的数据')

//对接收的数据进项处理和更新
function changeMsg(value) {
  message.value = value;
}
</script>
```

### 也可以使用v-model来绑定子组件，父组件通过绑定一个属性到子组件，子组件通过触发一个特定的时间来通知父组件来进行更新

父组件：

```vue
<template>
  <Child :message="message" v-model="message"/>
</template>

<script setup>
 import Child from './child.vue'
 import { ref } from 'vue'
const message=ref('父类的数据')
</script>
```

子组件：

```vue
<template>
  <div>
    <p>{{message}}</p>
    <button @click="updateMessage">Change</button>
  </div>
</template>

<script setup>
import { defineProps , defineEmits } from 'vue';
const props=defineProps({
  message: {
    type: String,
    required: true
  },
})

const emits = defineEmits(['update:modelValue']);
const updateMessage = () => {
  emits('update:modelValue', '修改后父类的数据');
}
</script>
```

## 三、Vue3中父子传值加上TS的泛型会怎样

#### 知识准备,先给大家介绍一下泛型：

### 一、问题的引入

需求：创建一个函数，我想要传入啥参数，就返回啥，传入的参数和返回的值的类型相同，那么针对这个需求，我们应该如何去做，大家很快就会想到下面的这种办法。

```typescript
function hhh(value: number): number { return value }
```

但是这样写只能接收数字们不能适合其他的类型，这样就不能实现需求，

那这样写呢？

```typescript
function hhh(value: any): any { return value }
```

这样将参数的类型修改成any，这个能实现，但是意义在哪，这不就失去了TS最本身的对类型的保护了吗，这样写实在是不安全。

那么我们该如何写：

```typescript
function hhh<Type>(value: Type): Type { return value }

function hhh<T>(value: T): T { return value }
```

### 二、什么是泛型？

泛型就是可以在保证类型安全的前提下，让函数等多种类型一起工作，从而去实现复用。

常见使用的地方：函数、接口、class中。

#### 定义泛型函数：

```typescript
function hhh<Type>(value: Type): Type { return value }

function hhh<T>(value: T): T { return value }
```

在函数名称的后面添加 <>（尖括号)，**尖括号中添加类型变量**，比如此处的 Type ，**是一种特殊类型的变量，它处理类型而不是值**，**该类型变量相当于一个类型容器**，能够捕获用户提供的类型，就是你写的是啥类型，就会可以给你捕获出来，可以实现任意合法变量传入和返回值需求的实现。

#### 泛型函数的调用：

```typescript
const num = hhh<number>(10)
const str = hhh<string>('a')
```

#### 简化的写法：

```typescript
// 省略 <number> 调用函数
let num = hhh(10)
let str = hhh('a')

```

*   推荐：使用这种简化的方式调用泛型函数，使代码更短，更易于阅读
    
*   说明：**当编译器无法推断类型或者推断的类型不准确时，就需要显式地传入类型参数**
    

### 思考：父子通信我们为啥要引入泛型呢？

泛型是 TS 用来给 `defineProps`/`defineEmits` 做「类型约束」的工具，让父子传值的类型校验更精准、更灵活，避免传值类型错误。

比如：

1.  **原始写法：**
    
    ```typescript
    defineProps({
      msg: { type: String },
      arr: { type: Array }
    })
    ```
    
    TS 只能知道 `arr` 是「数组」，但不知道数组里的对象结构（比如有没有 `name` 属性），写 `arr[0].name` 时 TS 会提示 “不确定是否有 name 属性”，而泛型能精准约束到「对象数组的具体结构」。
    
2.  **父传子（defineProps + 泛型）：约束「子组件能接收什么类型的值」**
    

```typescript
const {msg='123'} = defineProps<{  
  msg?: string, // 可选字符串
  arr: { name: string }[] // 必须是「包含name字符串的对象数组」
}>()
```

*   告诉 TS：子组件只能接收 `msg`（可选字符串）、`arr`（固定结构的数组）这两个 props；
    

*   父组件如果传错类型（比如给 `arr` 传 `[1,2,3]`），TS 会直接报错；
    

*   子组件内部用 `msg/arr` 时，TS 能自动提示属性（比如 `arr[0].name`），避免写错属性名。
    

**3.子传父（defineEmits + 泛型）：约束「子组件能触发什么事件、传什么类型的值」**

```typescript
const emit = defineEmits<{
  (e: 'changeMsg', val: string): void // 触发 changeMsg 事件时，必须传一个字符串
  (e: 'addMsg'): void // 触发 addMsg 事件时，不能传任何值
}>()
```

但是如果你写错......

```typescript
emit('changeMsg', 123) // TS 报错：数字不能赋值给字符串
emit('addMsg', 'xxx') // TS 报错：addMsg 事件不允许传参
```

这些写代码的时候就会出现，不会等你运行的时候才报错。

## 四、总结

Vue3组件通信核心要点：

1.  **父传子（defineProps）**：子组件通过`defineProps`声明接收的属性，父组件通过`v-bind`传递响应式数据。
    
2.  **子传父（defineEmits）**：
    
    *   子组件用`defineEmits`定义事件（如`update`），通过`emits('事件名',数据)`触发；
        
    *   父组件通过`v-on:事件名`监听并处理数据更新。
        
3.  **v-model双向绑定**：
    
    *   子组件通过`defineProps(['modelValue'])`接收值，触发`update:modelValue`事件传递新值；
        
    *   父组件直接通过`v-model`绑定数据，无需单独监听事件。
        

4.  **泛型在父子通信中的基本使用**