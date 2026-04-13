---
author: vento
pubDatetime: 2026-01-24T00:00:00Z
modDatetime: 2026-01-24T00:00:00Z
title: Typescript——泛型
slug: typescript-generics
featured: true      
draft: false
tags:
  - 随笔
  - 技术
  - Typescript
description: 这是我的我学习typescript泛型的一个输出。
---

## 一、问题的引入

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

## 二、什么是泛型？

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
    

## 三、泛型的约束

默认情况下，泛型函数的类型变量 Type 可以代表多个类型，这导致无法访问任何属性，比如length属性，这个时候就要为泛型添加约束来收缩类型。有两个方式：

#### 直接指定添加的具体的类型

```typescript
function id<Type>(value: Type[]): Type[] {
  console.log(value.length)
  return value
}
```

这个时候就能访问这个length属性了。

#### 添加约束

1.  创建描述约束的接口 ILength，该接口要求提供 length 属性
    
2.  通过 extends关键字使用该接口，为泛型(类型变量)添加约束
    
3.  该约束表示：**传入的类型必须具有 length 属性**
    

```typescript
// 创建一个接口
interface ILength { length: number }
// Type extends ILength 添加泛型约束
function hhh<Type extends ILength>(value: Type): Type {
  console.log(value.length)
  return value
}
```

## 四、泛型可以有多个变量类型

泛型的类型变量可以有多个，并且**类型变量之间还可以约束**(比如，第二个类型变量受第一个类型变量约束) 比如，创建一个函数来获取对象中属性的值：

```typescript
function hhh<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key]
}
let person = { name: 'jack', age: 18 }
hhh(person, 'name')
```

## 五、泛型接口和泛型的配合

```typescript
// 泛型接口作为函数返回值类型
interface Result<T> {
  success: boolean;
  data: T;
}

// 函数返回泛型接口，适配不同返回值类型
function getResult<T>(data: T): Result<T> {
  return { success: true, data };
}

// 使用：传入字符串，返回Result<string>
const res1 = getResult("Hello 泛型");
// 传入对象，返回Result<{name: string}>
const res2 = getResult({ name: "张三" });
```

*   泛型接口核心：interface 接口名 { ... }，用T占位类型；
    
*   使用时：接口名<具体类型>，比如Data、Result；
    
*   优势：一套接口适配多种类型，不用重复写多个相似接口。
    

## 六、总结

**核心解决的问题**

泛型弥补了 “单一类型函数复用性差” 和 “any 类型丢失类型保护” 的缺陷，既能实现函数 / 接口 / 类的通用化，又能严格约束输入输出的类型一致性。

**核心语法与使用**

*   定义：在函数 / 接口 / 类名称后通过 `<T>`（T 为类型变量，可自定义命名）声明泛型，T 作为 “类型容器” 捕获用户传入的具体类型；
    
*   调用：推荐省略显式类型（如 `hhh(10)`），TS 会自动推断类型，仅在推断失效时显式指定（如 `hhh<string>('a')`）。
    

**关键扩展能力**

*   泛型约束：通过 `extends` 关键字收缩类型范围（如 `Type extends ILength`），解决泛型无法访问属性的问题；
    
*   多泛型变量：支持多个类型变量且可相互约束（如 `Key extends keyof Type`），适配对象属性访问等复杂场景；
    
*   泛型接口：接口定义时声明 `<T>`，使用时指定具体类型（如 `Result<string>`），实现一套接口适配多类数据结构。
    

**核心优势**

兼顾 “复用性” 与 “类型安全”，避免重复编写相似的类型定义，同时保留 TS 的类型校验能力，是实现通用化、可扩展 TS 代码的核心手段。