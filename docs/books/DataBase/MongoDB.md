---
title: MongoDB
date: 2023/11/28
---

## 介绍
MongoDB是什么？
+ 文档数据库
+ NoSQL类型
+ 由 C++ 编写的开源数据库系统

特点：
+ 面向文档
+ 高性能
+ 高可用
+ 丰富的查询语句
+ 支持主流开发语言
+ 支持索引

## 基本操作
### 数据库
```sql
// 创建数据库，如果不存在则创建该数据库，否则切换到该数据库
use database_name

// 查看所有数据库
show dbs

// 删除当前数据库
db.dropDatabase()
```
### 集合
```sql
// 创建集合，两个参数：name, {capped: 是否创建固定集合, autoIndexId: 是否自动在_id字段创建索引, size: 集合最大值, max: 文档最大数量}
db.createCollection("collection1", {capped: true, autoIndexId: true, size: 1024, max: 10})

// 查看集合
show collections

// 删除集合
db.collection1.drop()
```

### 文档
```sql
// 插入文档(插入的w文档，{writeConcern: true, ordered: true}) 
// writeConcern：写入策略，默认为 1，即要求确认写操作，0 是不要求。
// ordered：指定是否按顺序写入，默认 true，按顺序写入。
db.collection1.insert({"name":"张三", "age":19, sex: "男"}, {writeConcern: true, ordered: true})

// 查询文档(query：查询条件， projection:)
db.collection1.find()

// 更新文档(query:更新条件，update:需要更新的数据, options:{upsert: <boolean>,multi: <boolean>,writeConcern: <document>})
db.collection1.update({'name':'张一'}, {$set:{'name': "王二"}})

// 删除文档
db.collection1.remove({'name': '王二'}, {justOne: true})
```

## 索引

