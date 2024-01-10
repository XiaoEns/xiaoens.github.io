---
title: Go 文件操作
date: 2024/01/11
tags:
 - Go
categories:
 - Go
---

## 创建文件/文件夹
+ `os.Mkdir("path", os.ModePerm)`: 创建文件夹
+ `os.MkdirAll("path", os.ModePerm)`: 创建多级文件夹
+ `os.Create("fileName")`: 创建文件
+ `os.Rename("oldName", "newName")`: 重命名文件


## 删除文件/文件夹
+ `os.Remove(path)`: 删除文件/文件夹，如果该文件夹下有文件，则删除失败
+ `os.Remove(path)`：删除文件/文件夹，文件夹内有文件/文件夹，也会删除

## 读取文件

### 读取整个文件

### 每次读取一行

### 每次读取固定字节数

## 写入文件

## 压缩/解压文件

### 压缩文件

### 解压文件

## 其他

### 判断文件是否存在
```go
package main

import (
	"fmt"
	"os"
)

func main() {
	fileName := "readme.md" // 文件名
	fileInfo, err := os.Stat(fileName)
	if err != nil {
		// 这个 err 可能是因为权限错误或者磁盘错误导致的，需要判断一下
		if os.IsNotExist(err) {
			fmt.Printf("file [%s] not exits\n", fileName)
		} else {
			fmt.Printf("other err: %s\n", err)
		}
		os.Exit(0) // 退出
	}

	fmt.Printf(
		" name:%s\n size:%d\n mode:%d\n modTime:%v\n isDir:%v\n",
		fileInfo.Name(), fileInfo.Size(), fileInfo.Mode(), fileInfo.ModTime(), fileInfo.IsDir())
}

```

### 获取文件信息

### path/filepath 包
推荐使用 filepath 包