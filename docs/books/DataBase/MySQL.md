---
title: MySQL
date: 2023/11/04
---

## 约束
在创建表的时候，我们可以给表中的字段加上一些约束，来保证这个表中数据的完整性、有效性

约束包括：
+ 非空约束：not null，非空约束所约束的字段不能为null
+ 唯一性约束：unique，唯一性约束unique约束的字段不能重复，但是可以为NULL
+ 主键约束：primary key，主键值是每一行记录的唯一标识，主键的特征：not null + unique
+ 外键约束：foreign key
  + 注意：添加了外键约束，表与表之间产生了父子关系。 例如t_class是父表、t_student是子表
    + 删除表的顺序：先删子，再删父
    + 创建表的顺序：先创建父，再创建子
    + 删除数据的顺序：先删子，再删父
    + 插入数据的顺序：先插入父，再插入子
    + 子表中的外键引用的附表中的某个字段，被引用的这个字段不一定是主键，但至少具有unique唯一性。 外键可以为null。
+ 检查约束：check（mysql不支持，Oracle支持）
+ 默认约束：default，DEFAULT 约束用于向列中插入默认值

## 存储引擎
查看 MySQL 支持的存储引擎: `show engines`
```sql
mysql> select version();
+-----------+
| version() |
+-----------+
| 5.7.42    |
+-----------+
1 row in set (0.00 sec)

mysql> show engines;
+--------------------+---------+----------------------------------------------------------------+--------------+------+------------+
| Engine             | Support | Comment                                                        | Transactions | XA   | Savepoints |
+--------------------+---------+----------------------------------------------------------------+--------------+------+------------+
| InnoDB             | DEFAULT | Supports transactions, row-level locking, and foreign keys     | YES          | YES  | YES        |
| MRG_MYISAM         | YES     | Collection of identical MyISAM tables                          | NO           | NO   | NO         |
| MEMORY             | YES     | Hash based, stored in memory, useful for temporary tables      | NO           | NO   | NO         |
| BLACKHOLE          | YES     | /dev/null storage engine (anything you write to it disappears) | NO           | NO   | NO         |
| MyISAM             | YES     | MyISAM storage engine                                          | NO           | NO   | NO         |
| CSV                | YES     | CSV storage engine                                             | NO           | NO   | NO         |
| ARCHIVE            | YES     | Archive storage engine                                         | NO           | NO   | NO         |
| PERFORMANCE_SCHEMA | YES     | Performance Schema                                             | NO           | NO   | NO         |
| FEDERATED          | NO      | Federated MySQL storage engine                                 | NULL         | NULL | NULL       |
+--------------------+---------+----------------------------------------------------------------+--------------+------+------------+
9 rows in set (0.00 sec)

mysql>
```
MyISAM存储引擎
+ 不支持事务和行级锁
+ 用分离的索引文件和文件数据组织数据
  + 格式文件 – 存储表结构的定义（mytable.frm） 
  + 数据文件 – 存储表行的内容（mytable.MYD） 
  + 索引文件 – 存储表上索引（mytable.MYI） 

InnoDB存储引擎
+ mysql默认的存储引擎，同时也是一个重量级的存储引擎
+ InnoDB 支持事务，行级锁，外键约束
+ 持数据库崩溃后自动恢复机制

MEMORY存储引擎
+ 数据存储在内存中，且行的长度固定，速度非常快
+ 有数据丢失的风险，因为数据和索引都是在内存当中

## 索引
帮助存储引擎快速查找数据的一种数据结构

+ 按 数据结构 分类：B+tree索引、Hash索引、Full-text索引
+ 按 物理存储 分类：聚簇索引（主键索引）、二级索引（辅助索引）
+ 按 字段特性 分类：主键索引、唯一索引、普通索引、前缀索引
+ 按 字段个数 分类：单列索引、联合索引


## 事务

## 日志

## 锁


