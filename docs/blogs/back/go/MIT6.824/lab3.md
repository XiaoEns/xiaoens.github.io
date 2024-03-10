---
title: MIT6.824 lab3：实现 KVRaft
date: 2024/02/20
tags:
 - Mit6.824
categories:
 - Go
---

## 准备
+ 论文:
  + GFS: <http://nil.csail.mit.edu/6.824/2020/papers/gfs.pdf>
  + Fault-Tolerant VM: <http://nil.csail.mit.edu/6.824/2020/papers/vm-ft.pdf>
+ Lab3 要求: <http://nil.csail.mit.edu/6.824/2020/labs/lab-raft.html>

## 任务分析
需要实现一个基于 Raft 分布式KV数据库，需要支持Get(),Put(),Append()操作，需要实现线性一致性



+ 基础的键值对实现
+ 日志快照实现
+ 线性一致性：理论上 Raft 只是一个共识算法，即保证各个节点上的 Log 是相同的，这与系统一致性无关。系统是否满足线性一致性取决于上层的实现方式

## 设计实现

### Lab3B
Server:
1. 当 raft log 的长度超过阈值，进行快照操作，将快照交给 raft 层进行处理
2. 如果当前 Raft 是 Leader 在进行快照操作后，需要分发快照给其他 Follower
 

Follower：
1. 接收到

## 测试
运行测试程序：`go test -run 2A`，`go test -run 2B`，`go test -run 2C`，`go test`

`python3 ./test.py -n 100 -p 4 2A 2B 2C`


## 总结