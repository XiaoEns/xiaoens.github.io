---
title: Ubuntu
date: 2024/2/2
tags:
 - Linux
categories:
 - 环境配置
---

1. 更新系统包
```shell
sudo apt update
sudo apt upgrade
sudo apt install curl gnupg2 gnupg wget software-properties-common
```

2. 安装 Python
```shell
# 添加 Python PPA 存储库
sudo add-apt-repository ppa:deadsnakes/ppa
# 安装 Python
sudo apt install python3.10
```

3. 测试: `python3.10 --version`

4. 安装 pip(包管理工具)：https://www.runoob.com/w3cnote/python-pip-install-usage.html