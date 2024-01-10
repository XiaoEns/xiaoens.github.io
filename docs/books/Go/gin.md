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
