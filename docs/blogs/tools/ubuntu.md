---
title: Ubuntu
date: 2024/1/16
tags:
 - Linux
categories:
 - 管理工具
---


## 用户权限设置
https://blog.csdn.net/zhang_xiaoqiang/article/details/112736407

## 软件安装
### Redis
https://www.cnblogs.com/kgdxpr/p/16405547.html

### Nginx
```shell
sudo apt install nginx -y

```

## 常用命令
### 防火墙
```shell
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

## 静态IP设置
https://blog.csdn.net/kfepiza/article/details/127330588