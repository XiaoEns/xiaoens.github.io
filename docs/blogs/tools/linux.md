---
title: linux
date: 2023/11/15
tags:
 - linux
categories:
 - linux
---
常用网站：

* [https://www.runoob.com/linux/linux-tutorial.html](https://www.runoob.com/linux/linux-tutorial.html)


## 常用命令

```shell
# mv
# 将a文件夹下面的 t.java 移动到b文件夹下面
mv a/t.java b/
# 将a文件夹下面的 t.java 移动到b文件夹下面，并改名为a.java
mv a/t.java b/a.java
# 将当前目录下面的t.java 改名成 a.java
mv t.java a.java
# 将a目录下的所有文件移动到b文件夹下面
mv a/* b/
```


## 程序部署 & 运行

### Java

* `java -jar xxx.jar`：运行程序，占用当前窗口，窗口关闭时程序**终止**
* `java -jar xxx.jar &`：后台运行程序，不占用当前窗口，窗口关闭时程序**终止**
* `nohup java -jar xxx.jar &`：后台运行程序，不占用当前窗口，窗口关闭时程序**不终止**
* `nohup java -jar xxx.jar > log.txt &`：后台运行程序，不占用当前窗口，且窗口关闭时程序**不终止**，并且将打印信息保存到log.txt中

## Ubuntu
查看版本信息：`lsb_release -a`

w !sudo tee % > /dev/null