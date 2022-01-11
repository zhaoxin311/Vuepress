---
title: 常用命令行
tags:
  - git
---
## Git 教程 (廖雪峰版本)

* `git init` , 初始化Git仓库。
* `git add "file"` , 注意 可反复多次使用，可添加多个文件。
* `git commit -m "message"` , 添加文件到git仓库。
* `git status` , 查看仓库当前的状态,随时掌握工作区的状态。
* `git diff` , 当文件被修改过,该命令可以查看修改的内容。

<h3> 版本回退</h3> 

* `git log` , 查看提交历史版本日志记录 (详细:版本号、作者、日期、信息)。
* `git log --pretty=oneline` , 查看历史版本提交日志记录 (简洁:版本号、信息)。
* `git reset --hard HEAD^` , 回退到上一个版本。
* `git reset --hard HEAD^^` , 回退到上上一个版本。
* `git reset --hard HEAD~100` , 往上回退100个版本。
* `git reset --hard "版本号"`  , 可以指定回到未来的某个版本 (版本号前几位即可)。
* `git reflog` , 查看命令历史(经常用于查询某一次操作的版本号)。

<h3> 工作区和暂存区</h3>

* `git add` , 把文件添加进去，实际上就是把文件修改添加到`暂存区`。
* `git commit` , 提交更改，实际上就是把暂存区的所有内容提交到当前分支。

<h3> 撤销修改</h3>

* `git checkout -- file_name` , `git add` 之前撤销修改：丢弃某个文件工作区的修改,回到最新添加到暂存区后的状态。
* `git checkout -- .` , `git add` 之前撤销修改：丢弃全部文件工作区的修改。
* `git reset HEAD file_name` , `git add` 之后撤销修改：先执行该命令从暂存区撤出文件，然后再丢弃修改。
* `git reset HEAD .` , 将暂存区的所有文件都撤出。
* `git reset --hard HEAD^` , 如果已经提交不合适的修改到版本库，想要撤销本次提交，使用版本回退。








