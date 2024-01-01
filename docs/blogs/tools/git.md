---
title: git
date: 2023/11/15
tags:
 - Git
categories:
 - 管理工具
---

## 文件管理
```shell
# 将该目录下所有文件放入暂存区
git add .

# 将已经放入暂存区文件回退到工作区
git reset -- 文件名
```

## 分支管理
```shell
# 查看所有分支，包括远程分支
git branch -a

# 创建分支并切换到新的分支上
git checkout -b 新分支名

# 删除本地分支
git branch -d 分支名

# 新建远程分支, 如果远程没有该分支，则创建一个
git push origin 本地分支:远程分支

# 删除远程分支
# 方式一，指定需要删除的远程分支
git push origin --delete 分支名
# 方式二，推送一个空分支，也相当于删除远程分支
git push origin :分支名

# 关联分支
git branch --set-upstream-to=origin/远程分支 本地分支
```

## 账户管理
配置多个账号：https://blog.csdn.net/q13554515812/article/details/83506172