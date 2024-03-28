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

# 回退分支
git reset HEAD^           # 回退到上一个版本，暂存区中的内容被重置，工作区保持不变
git reset HEAD^ xx.file   # 回退某一个文件到上一个版本
git reset commitID        # 回退到指定版本 
git reset --soft commitID # 回退到指定版本，暂存区，工作区不会被重置
git reset --hard commitID # 撤销工作区中未提交的修改内容，将暂存区和工作区的内容都回退到指定版本
```

## 仓库管理
如果远程仓库没有文件
```shell
git init            # 初始化git仓库
git remote add 地址 # 设置remote地址
git add .           # 将所有变更提交到本地仓库
git commit -m ""    # 提交注释
git push            # 本地仓库推送到远程仓库
```

如果远程仓库有文件
```shell
git init               # 初始化git仓库
git remote add 地址    # 设置remote地址
git pull origin master # 拉取远程仓库master的文件
git branch --set-upstream-to=origin/master master # 将本地master与远程master分支关联
git add .              # 将所有变更提交到本地仓库
git commit -m ""       # 提交注释
git push               # 本地仓库推送到远程仓库
```

## ssh-keygen
通过 https 克隆的项目，在 push 时需要输入用户名和密码

通过 ssh 克隆的项目，在 push 时不需要输入用户名和密码，但是需要提前配置 ssh key

在ssh目录（C:\Users\32194\.ssh）下打开 cmd 窗口操作
1. 创建ssh key：`ssh-keygen -t rsa -C "your_email -f "id_ras_test"`
   1. -t: 指定密钥类型，默认是 rsa, 可以省略
   2. -C: 设置注释文字，比如邮箱
2. 输入文件名，保存生成的 ssh key,默认的是id_rsa 和 id_rsa.pub 
3. 需要输入密码，可以不输入，那么 push 的时候不需要输入密码
4. 生成对应的文件后，需要将生成的 .pub 文件内容添加到github/gitee中
5. 测试：`ssh -T git@github.com`

## 账户管理
配置多个账号：https://blog.csdn.net/q13554515812/article/details/83506172