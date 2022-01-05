---
title: 本地切换远程仓库地址
date: 2022-01-01 07:31:41
tags:
  - git
---

## 常用git命令合集
### 一、git 本地切换远程仓库地址
基本步骤和命令如下：
1. git remote -v 查看本地远程仓库地址
2. git remote rm origin 删除本地仓库地址
3. 执行git remote -v查看本地仓库地址是否删除

4. 添加新的远程仓库地址 git remote add origin + 远程仓库地址
5. git remote -v 再次查看本地更新的仓库地址是否已更新