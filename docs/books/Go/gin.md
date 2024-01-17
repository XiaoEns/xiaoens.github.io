---
title: Gin
date: 2023/12/5
---

## 数据解析
+ 接收数组: `c.QueryArray(key string) (values []string)`, 返回的是一个字符切片，如果传入的是 int[], 需要手动遍历转换
+ 接收Map: `QueryMap(key string) (dicts map[string]string)`

## middleware
![Alt text](./image/gin/image.png)

### 全局异常处理

## Api 错误码
https://juejin.cn/post/6920876156598091790
https://www.cnblogs.com/Paul-watermelon/p/14231089.html

## 日志处理

### Zap
https://www.cnblogs.com/you-men/p/14694928.html

http://docs.lvrui.io/2020/03/23/go%E8%AF%AD%E8%A8%80%E4%BC%98%E7%A7%80%E7%9A%84%E6%97%A5%E5%BF%97%E5%8C%85zap%E5%9F%BA%E7%A1%80%E8%87%AA%E5%AE%9A%E4%B9%89%E9%85%8D%E7%BD%AE%E7%94%A8%E6%B3%95/

## 数据库连接
https://cloud.tencent.com/developer/article/1858858

### MySQL

### Redis
https://www.cnblogs.com/itbsl/p/14198111.html


## 整合 Gorm

日志设置：https://blog.csdn.net/qmhball/article/details/116796466
整合zap:https://jking412.github.io/2022/08/28/go-api-practice-8/index.html

## Swagger
https://www.cnblogs.com/Ivan-Wu/p/15821288.html
https://www.cnblogs.com/niuben/p/15634136.html