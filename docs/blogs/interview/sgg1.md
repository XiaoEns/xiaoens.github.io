---
title: 尚硅谷面试题第一季
date: 2023/11/20
tags:
 - 面试题
categories:
 - 面试题
---
[https://www.bilibili.com/video/BV1Eb411P7bP](https://www.bilibili.com/video/BV1Eb411P7bP)

## SE面试题

### 自增变量
```java
public class Main {
    public static void main(String[] args) {

        int i = 1;
        i = i++;       // i = 1
        int j = i++;   // j = 1    i = 2
        // 1. i = 2先入操作数栈，
        // 2. ++i后 i = 3,将3入栈
        // 3. i++,是先入栈，在++，所以 i = 4
        // 此时操作数栈的数据从低到上为2,3,3，进行计算 3 * 3 + 2 = 11 = k
        int k = i + ++i * i++; // i = 4   j = 1   k = 11
        System.out.println("i = " + i); // 4
        System.out.println("j = " + j); // 1
        System.out.println("k = " + k); // 11
    }
}
```
1. 赋值 =，最后计算
2. = 右边的从左到右加载值依次压入操作数栈，根据运算符优先级进行计算
3. 自增，自减都是直接在局部变量表中操作，不经过操作数栈

### 单例模式

### 类的初始化和实例初始化
