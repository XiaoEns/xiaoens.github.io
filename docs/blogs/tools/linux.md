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

### 防火墙
```shell
# Centos
# 查看防火墙状态
systemctl status firewalld
# 开启防火墙
systemctl start firewalld
# 关闭防火墙
systemctl stop firewalld
# 重启防火墙
systemctl restart firewalld
# 查看所有打开的端口
firewall-cmd --list-all
# 开放指定端口
firewall-cmd --add-port=端口号/tcp --permanent
# 更新防火墙规则
firewall-cmd --reolaod
# 关闭指定端口
firewall-cmd --remove-port=端口号/tcp --permanent

#---------------------------------------------------#

# Ubuntu
# 查看防火墙状态
sudo ufw status
# 开启防火墙
sudo ufw enable
# 关闭防火墙
sudo ufw disable
# 重启防火墙
sudo ufw reload
# 开放指定端口
sudo ufw allow 80/tcp
# 关闭指定端口
sudo ufw delete allow 80/tcp
# 批量开放端口
sudo ufw allow 1:9000/tcp
# 批量关闭端口
sudo ufw delete allow 1:9000/tcp
```


### mv
```shell
# 将a文件夹下面的 t.java 移动到b文件夹下面
mv a/t.java b/
# 将a文件夹下面的 t.java 移动到b文件夹下面，并改名为a.java
mv a/t.java b/a.java
# 将当前目录下面的t.java 改名成 a.java
mv t.java a.java
# 将a目录下的所有文件移动到b文件夹下面
mv a/* b/
```

### tar
```shell
# 压缩文件
tar -zxvf 压缩文件名.tar
# 解压文件
tar -zcvf 压缩文件名.tar file1 file2 directory

# -z：表示使用gzip压缩算法
# -x: 表示解打包文件
# -c: 表示打包文件
# -v: 显示压缩/解压过程中正在处理的文件名显示出来
# -f filename: 需要处理的文件
```

### ps
```shell
# 查看当前运行的进程信息
ps -e :以树状结构显示进程，显示进程的层级关系
ps -f :显示指定进程的完整，包括父进程ID,CPU使用情况等
ps -u 用户名：显示指定用户的进程信息
ps -p :显示指定进程ID的进程信息
```

### top
实时监控系统性能的工具
<https://blog.csdn.net/weixin_45465395/article/details/115728520>


## 程序部署 & 运行

### Java

* `java -jar xxx.jar`：运行程序，占用当前窗口，窗口关闭时程序**终止**
* `java -jar xxx.jar &`：后台运行程序，不占用当前窗口，窗口关闭时程序**终止**
* `nohup java -jar xxx.jar &`：后台运行程序，不占用当前窗口，窗口关闭时程序**不终止**
* `nohup java -jar xxx.jar > log.txt &`：后台运行程序，不占用当前窗口，且窗口关闭时程序**不终止**，并且将打印信息保存到log.txt中
* `tail -f log.txt`: 在后台实时打印日志内容
* `jps`
  * -l:显示当前正在运行的Java进程的PID和完整的进程类名
  * -v:显示传递给JVM的参数