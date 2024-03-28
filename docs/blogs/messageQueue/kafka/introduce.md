---
title: Kafka 介绍和安装
date: 2024/03/23
tags:
 - Kafka
categories:
 - 消息队列
---

## 介绍
官网：<https://kafka.apache.org/>
github地址：<https://github.com/apache/kafka>

Kafka是最初由Linkedin公司开发，是一个分布式、支持分区的（partition）、多副本的（replica），基于zookeeper协调的分布式消息系统，用scala语言编写，Linkedin于2010年贡献给了Apache基金会并成为顶级开源项目。

Kafka的特性
+ 高吞吐量、低延迟：kafka每秒可以处理几十万条消息，它的延迟最低只有几毫秒
+ 可扩展性：kafka集群支持热扩展
+ 持久性、可靠性：消息被持久化到本地磁盘，并且支持数据备份防止数据丢失
+ 容错性：允许集群中节点失败（若副本数量为n,则允许n-1个节点失败）
+ 高并发：支持数千个客户端同时读写

Kafka场景应用
+ 日志收集：一个公司可以用Kafka可以收集各种服务的log，通过kafka以统一接口服务的方式开放给各种consumer，例如hadoop、Hbase、Solr等。
+ 消息系统：解耦和生产者和消费者、缓存消息等。
+ 用户活动跟踪：Kafka经常被用来记录web用户或者app用户的各种活动，如浏览网页、搜索、点击等活动，这些活动信息被各个服务器发布到kafka的topic中，然后订阅者通过订阅这些topic来做实时的监控分析，或者装载到hadoop、数据仓库中做离线分析和挖掘。
+ 运营指标：Kafka也经常用来记录运营监控数据。包括收集各种分布式应用的数据，生产各种操作的集中反馈，比如报警和报告。
+ 流式处理：比如spark streaming和storm
+ 事件源

## 安装

