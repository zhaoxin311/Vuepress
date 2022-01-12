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
* `git log --graph` , 查看分支合并图。

<h3> 工作区和暂存区</h3>

* `git add` , 把文件添加进去，实际上就是把文件修改添加到`暂存区`。
* `git commit` , 提交更改，实际上就是把暂存区的所有内容提交到当前分支。

<h3> 撤销修改</h3>

* `git checkout -- file_name` , `git add` 之前撤销修改：丢弃某个文件工作区的修改,回到最新添加到暂存区后的状态。
* `git checkout -- .` , `git add` 之前撤销修改：丢弃全部文件工作区的修改。
* `git reset HEAD file_name` , `git add` 之后撤销修改：先执行该命令从暂存区撤出文件，然后再丢弃修改。
* `git reset HEAD .` , 将暂存区的所有文件都撤出。
* `git reset --hard HEAD^` , 如果已经提交不合适的修改到版本库，想要撤销本次提交，使用版本回退。

<h3> 创建并合并分支</h3>

* `git checkout -b dev` , 创建并切换，创建`dev`分支并从当前分支切换到`dev`分支。
* `git branch dev` , 创建新的`dev`分支。
* `git checkout dev` , 切换到`dev`分支。
* `git branch` , 查看当前分支(会列出所有分支，在当前分支前面会标记`*`号)。
* `git merge dev` , 将`dev`分支最新代码合并到`master`分支上。
* `git branch -d dev` , 删除`dev`分支(只能在其他分支删除别的分支)
* `git switch -c dev` , 创建并切换到新的`dev`分支
* `git switch dev` , 直接切换到已有的`dev`分支

<h3> Bug分支</h3>

* `git stash` , 将当前工作现场“存储”起来，等以后恢复现场后继续工作，储存后工作区就是干净的。
* `git stash list` , 查看“存储”的工作现场的列表。
* (第一种方法分两步完成)
* `git stash apply` , 恢复工作现场，但是恢复后，stash内容并不删除
* `git stash drop` , 删除已恢复的工作现场。
* (第二种方法一步完成)
* `git stash pop` , 恢复的同时把stash内容也删除了。
* `git stash apply stash@{0}` , 当多次stash，恢复的时候，先查看列表，再使用该命令恢复指定的stash。

<h3> 分支操作</h3>

* `git branch -D "分支名称"` , 用于丢弃一个没有被合并过的分支，强行删除。
* `git remote` , 查看远程库简略信息。
* `git remote -v` , 查看远程库详细信息。
* `git push oriign master` , 推送分支，把该分支上的所有本地提交推送到远程库。
* `git branch --set-upstream-to=origin/master` , 将当前分支与远程某分支关联。
* `git branch -vv` , 查看分支关联情况。

<h3> 标签tag管理</h3>

* `git tag "tagname"` , 打一个新标签。
* `git tag` , 查看所有标签。
* `git tag  'tagname' '版本号'` , 打一个提交日志记录中指定版本号的标签。
* `git show 'tagname'` , 查看指定标签信息
* `git tag -a "tagname" -m "说明文字" "版本号"` , 创建带有说明文字的标签。
* `git tag -d "tagname"` , 安全删除本地标签。创建的标签都只存储在本地，不会自动推送到远程。
* `git push origin "tagname"` , 推送某个标签到远程。
* `git push origin --tags` , 一次性推送全部尚未推送到远程的本地标签。 
* (标签已推送远程，删除远程标签。两步完成)
* `git tag -d "tagname"` , 现在本地删除
* `git push origin :refs/tags/"tagname"` , 从远程删除。

