---
title: MySQL 索引 & 分库分表 
date: 2023/12/9
tags:
 - MySQL
categories:
 - MySQL
---

## 准备工作
1. 创建表
```sql
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user`  (
  `id` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '主键',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `sex` int(11) NULL DEFAULT NULL,
  `age` int(11) NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `telephone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
```
2. 执行代码，插入数据，大概8分钟左右
```go
package main

import (
	"context"
	"database/sql"
	"fmt"
	"log"
	"math/rand"
	"sync"
	"time"

	_ "github.com/go-sql-driver/mysql"
)

var db *sql.DB

type User struct {
	id        string
	name      string
	sex       int
	age       int
	email     string
	telephone string
}

const (
	server   = "127.0.0.1"
	port     = "3306"
	user     = "root"
	password = "123456"
	database = "demo"
)

func main() {
	// 连接配置，不同的数据库的配置不同，这里是mysql的配置
	connStr := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8&parseTime=True&loc=Local",
		user, password, server, port, database)

	// 打开连接
	var err error
	db, err = sql.Open("mysql", connStr)
	if err != nil {
		log.Fatalln(err.Error())
	}

	// 验证与数据库的连接是否有效
	ctx := context.Background()
	err = db.PingContext(ctx)
	if err != nil {
		log.Fatalln(err.Error())
	}

	fmt.Println("Connected!")

	initFunc()
}

func initFunc() {
	fmt.Println("开始插入数据！")
	start := time.Now()
	insertFunc := func(wg *sync.WaitGroup) {
		for i := 0; i < 100000; i++ {
			insertData(constructData(i))
		}
		wg.Done()
	}

	// 插入100w条数
	var wg sync.WaitGroup
	for i := 0; i < 10; i++ {
		wg.Add(1)
		go insertFunc(&wg)
	}
	wg.Wait()

	end := time.Since(start) / 1e9
	fmt.Printf("插入数据耗时: %d s", end) // 插入数据耗时: 494 s
}

// 构造数据
func constructData(i int) User {
	id := RandomString(32)
	name := "张" + RandomString(3)
	sex, age := 0, 18
	if i%2 == 0 {
		sex, age = 1, 20
	}
	emali := RandomString(6) + "qq.com"
	telephone := "157" + RandomNumber(8)
	user := User{
		id:        id,
		name:      name,
		sex:       sex,
		age:       age,
		email:     emali,
		telephone: telephone,
	}
	return user
}

// 插入数据
func insertData(user User) {
	sqlStr := "insert into t_user(id, name, sex, age, email, telephone) values(?, ?, ?, ?, ?, ?)"

	prepare, err := db.Prepare(sqlStr)

	if err != nil {
		fmt.Printf("prepare failed, err:%v\n", err)
		return
	}
	defer prepare.Close()

	// 获取插入后的ID
	userId, err := prepare.Exec(user.id, user.name, user.sex, user.age, user.email, user.telephone)
	if err != nil {
		fmt.Printf("insert failed, err:%v\n, id %v", err, userId)
		return
	}
	fmt.Printf("insert data: [%s]\n", user)

}

var defaultLetters = []rune("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789")

func RandomString(n int, allowedChars ...[]rune) string {
	var letters []rune

	if len(allowedChars) == 0 {
		letters = defaultLetters
	} else {
		letters = allowedChars[0]
	}

	b := make([]rune, n)
	for i := range b {
		b[i] = letters[rand.Intn(len(letters))]
	}

	return string(b)
}

func RandomNumber(n int) string {
	numbers := []rune("0123456789")

	b := make([]rune, n)
	for i := range b {
		b[i] = numbers[rand.Intn(len(numbers))]
	}

	return string(b)
}
```

## 索引

### 无索引
在没有索引的情况下，执行一条查询语句大概 400ms
```sql
mysql> SELECT * FROM `t_user` WHERE id = "vvqFbEZsXciRtf1UlsmTY7AL9uROLSyW";
+----------------------------------+-------+------+------+--------------+-------------+
| id                               | name  | sex  | age  | email        | telephone   |
+----------------------------------+-------+------+------+--------------+-------------+
| vvqFbEZsXciRtf1UlsmTY7AL9uROLSyW | 张1CP |    0 |   18 | fyWmc3qq.com | 15755666721 |
| vvqFbEZsXciRtf1UlsmTY7AL9uROLSyW | 张1CP |    1 |   20 | fyWmc3qq.com | 15755666721 |
+----------------------------------+-------+------+------+--------------+-------------+
2 rows in set (0.39 sec)

mysql> explain SELECT * FROM `t_user` WHERE id = "vvqFbEZsXciRtf1UlsmTY7AL9uROLSyW";
+----+-------------+--------+------------+------+---------------+------+---------+------+---------+----------+-------------+
| id | select_type | table  | partitions | type | possible_keys | key  | key_len | ref  | rows    | filtered | Extra       |
+----+-------------+--------+------------+------+---------------+------+---------+------+---------+----------+-------------+
|  1 | SIMPLE      | t_user | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 1022140 |    10.00 | Using where |
+----+-------------+--------+------------+------+---------------+------+---------+------+---------+----------+-------------+
1 row in set, 1 warning (0.00 sec)

mysql>
```
### 有索引
给id字段创建索引：`CREATE index id on t_user (id)`
```sql
mysql> SELECT * FROM `t_user` WHERE id = "vvqFbEZsXciRtf1UlsmTY7AL9uROLSyW";
+----------------------------------+-------+------+------+--------------+-------------+
| id                               | name  | sex  | age  | email        | telephone   |
+----------------------------------+-------+------+------+--------------+-------------+
| vvqFbEZsXciRtf1UlsmTY7AL9uROLSyW | 张1CP |    1 |   20 | fyWmc3qq.com | 15755666721 |
+----------------------------------+-------+------+------+--------------+-------------+
1 row in set (0.00 sec)

mysql> explain SELECT * FROM `t_user` WHERE id = "vvqFbEZsXciRtf1UlsmTY7AL9uROLSyW";
+----+-------------+--------+------------+------+---------------+------+---------+-------+------+----------+-------+
| id | select_type | table  | partitions | type | possible_keys | key  | key_len | ref   | rows | filtered | Extra |
+----+-------------+--------+------------+------+---------------+------+---------+-------+------+----------+-------+
|  1 | SIMPLE      | t_user | NULL       | ref  | id            | id   | 130     | const |    1 |   100.00 | NULL  |
+----+-------------+--------+------------+------+---------------+------+---------+-------+------+----------+-------+
1 row in set, 1 warning (0.00 sec)

mysql>
```

### 分表

继续添加数据，到500w行左右

https://juejin.cn/post/6957258784385269768

分表看具体情况，比如硬件，业务等，不一定以数据量为唯一标准

// todo

### 分库