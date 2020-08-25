(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{719:function(t,a,i){"use strict";i.r(a);var e=i(10),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h3",{attrs:{id:"安装"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),i("ul",[i("li",[t._v("在 Windows 上安装 Git 同样轻松，有个叫做 msysGit 的项目提供了安装包：")])]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("http://msysgit.github.io/\n")])])]),i("ul",[i("li",[t._v("完成安装之后，就可以使用命令行的 git 工具（已经自带了 ssh 客户端）了，另外还有一个图形界面的 Git 项目管理工具。")])]),t._v(" "),i("h3",{attrs:{id:"配置"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),i("ul",[i("li",[t._v("首先是配置帐号信息")])]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git config -e [--global] # 编辑Git配置文件\ngit config --global user.name yanhaijing\ngit config --global user.email yanhaijing@yeah.net\ngit config --list #查看配置的信息\ngit help config #获取帮助信息\n")])])]),i("ul",[i("li",[t._v("配置自动换行（自动转换坑太大）")])]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git config --global core.autocrlf input #提交到git是自动将换行符转换为lf\n")])])]),i("ul",[i("li",[t._v("配置密钥")])]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("ssh-keygen -t rsa -C yanhaijing@yeah.net #生成密钥\n")])])]),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("ssh -T git@github.com #测试是否成功\n")])])]),i("ul",[i("li",[t._v("配置别名，git的命令没有自动完成功能，有点坑哈，别名派上了用场")])]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git config --global alias.st status #git st\ngit config --global alias.co checkout #git co\ngit config --global alias.br branch #git br\ngit config --global alias.ci commit #git ci\n")])])]),i("h3",{attrs:{id:"新建仓库"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#新建仓库"}},[t._v("#")]),t._v(" 新建仓库")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v('git init #初始化\ngit status #获取状态\ngit add [file1] [file2] ... #.或*代表全部添加\ngit commit -m "message" #此处注意乱码\ngit remote add origin git@github.com:yanhaijing/test.git #添加源\ngit push -u origin master #push同事设置默认跟踪分支\n')])])]),i("h3",{attrs:{id:"从现有仓库克隆"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#从现有仓库克隆"}},[t._v("#")]),t._v(" 从现有仓库克隆")]),t._v(" "),i("hr"),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git clone git://github.com/yanhaijing/data.js.git    \ngit clone git://github.com/schacon/grit.git mypro#克隆到自定义文件夹\n")])])]),i("h3",{attrs:{id:"本地"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#本地"}},[t._v("#")]),t._v(" 本地")]),t._v(" "),i("hr"),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git add * # 跟踪新文件\ngit add -u [path] # 添加[指定路径下]已跟踪文件\n\nrm *&git rm * # 移除文件\ngit rm -f * # 移除文件\ngit rm --cached * # 停止追踪指定文件，但该文件会保留在工作区\ngit mv file_from file_to # 重命名跟踪文件\n\ngit log # 查看提交记录\n\ngit commit # 提交更新    \ngit commit [file1] [file2] ... # 提交指定文件    \ngit commit -m 'message'\ngit commit -a # 跳过使用暂存区域，把所有已经跟踪过的文件暂存起来一并提交\ngit commit --amend#修改最后一次提交\ngit commit -v # 提交时显示所有diff信息\n\ngit reset HEAD *#取消已经暂存的文件\ngit reset --mixed HEAD *#同上\ngit reset --soft HEAD *#重置到指定状态，不会修改索引区和工作树\ngit reset --hard HEAD *#重置到指定状态，会修改索引区和工作树\ngit reset -- files#重置index区文件\n\ngit revert HEAD #撤销前一次操作\ngit revert HEAD~ #撤销前前一次操作\ngit revert commit ## 撤销指定操作\n\ngit checkout -- file#取消对文件的修改（从暂存区——覆盖worktree file）\ngit checkout branch|tag|commit -- file_name#从仓库取出file覆盖当前分支\ngit checkout -- .#从暂存区取出文件覆盖工作区\n\ngit diff file #查看指定文件的差异\ngit diff --stat #查看简单的diff结果\ngit diff #比较Worktree和Index之间的差异\ngit diff --cached #比较Index和HEAD之间的差异\ngit diff HEAD #比较Worktree和HEAD之间的差异\ngit diff branch #比较Worktree和branch之间的差异\ngit diff branch1 branch2 #比较两次分支之间的差异\ngit diff commit commit #比较两次提交之间的差异\n\ngit log #查看最近的提交日志\ngit log --pretty=oneline #单行显示提交日志\ngit log --graph # 图形化显示\ngit log --abbrev-commit # 显示log id的缩写\ngit log -num #显示第几条log（倒数）\ngit log --stat # 显示commit历史，以及每次commit发生变更的文件\ngit log --follow [file] # 显示某个文件的版本历史，包括文件改名\ngit log -p [file] # 显示指定文件相关的每一次diff\n\ngit stash #将工作区现场（已跟踪文件）储藏起来，等以后恢复后继续工作。\ngit stash list #查看保存的工作现场\ngit stash apply #恢复工作现场\ngit stash drop #删除stash内容\ngit stash pop #恢复的同时直接删除stash内容\ngit stash apply stash@{0} #恢复指定的工作现场，当你保存了不只一份工作现场时。\n")])])]),i("h3",{attrs:{id:"分支"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#分支"}},[t._v("#")]),t._v(" 分支")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git branch#列出本地分支\ngit branch -r#列出远端分支\ngit branch -a#列出所有分支\ngit branch -v#查看各个分支最后一个提交对象的信息\ngit branch --merge#查看已经合并到当前分支的分支\ngit branch --no-merge#查看为合并到当前分支的分支\ngit branch test#新建test分支\ngit branch branch [branch|commit|tag] # 从指定位置出新建分支\ngit branch --track branch remote-branch # 新建一个分支，与指定的远程分支建立追踪关系\ngit branch -m old new #重命名分支\ngit branch -d test#删除test分支\ngit branch -D test#强制删除test分支\ngit branch --set-upstream dev origin/dev #将本地dev分支与远程dev分支之间建立链接\n\ngit checkout test#切换到test分支\ngit checkout -b test#新建+切换到test分支\ngit checkout -b test dev#基于dev新建test分支，并切换\n\ngit merge test#将test分支合并到当前分支\ngit merge --squash test ## 合并压缩，将test上的commit压缩为一条\n\ngit cherry-pick commit #拣选合并，将commit合并到当前分支\ngit cherry-pick -n commit #拣选多个提交，合并完后可以继续拣选下一个提交\n\ngit rebase master#将master分之上超前的提交，变基到当前分支\ngit rebase --onto master 169a6 #限制回滚范围，rebase当前分支从169a6以后的提交\ngit rebase --interactive #交互模式    \ngit rebase --continue# 处理完冲突继续合并    \ngit rebase --skip# 跳过    \ngit rebase --abort# 取消合并\n")])])]),i("h3",{attrs:{id:"远端"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#远端"}},[t._v("#")]),t._v(" 远端")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git fetch origin remotebranch[:localbranch]# 从远端拉去分支[到本地指定分支]\n\ngit merge origin/branch#合并远端上指定分支\n\ngit pull origin remotebranch:localbranch# 拉去远端分支到本地分支\n\ngit push origin branch#将当前分支，推送到远端上指定分支\ngit push origin localbranch:remotebranch#推送本地指定分支，到远端上指定分支\ngit push origin :remotebranch # 删除远端指定分支\ngit push origin remotebranch --delete # 删除远程分支\ngit branch -dr branch # 删除本地和远程分支\ngit checkout -b [--track] test origin/dev#基于远端dev分支，新建本地test分支[同时设置跟踪]\n")])])]),i("h3",{attrs:{id:"源"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#源"}},[t._v("#")]),t._v(" 源")]),t._v(" "),i("blockquote",[i("p",[t._v("git是一个分布式代码管理工具，所以可以支持多个仓库，在git里，服务器上的仓库在本地称之为remote。")])]),t._v(" "),i("ul",[i("li",[t._v("个人开发时，多源用的可能不多，但多源其实非常有用。")])]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git remote add origin1 git@github.com:yanhaijing/data.js.git\n\ngit remote#显示全部源\ngit remote -v#显示全部源+详细信息\n\ngit remote rename origin1 origin2#重命名\n\ngit remote rm origin#删除\n\ngit remote show origin#查看指定源的全部信息\n")])])]),i("h3",{attrs:{id:"标签"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#标签"}},[t._v("#")]),t._v(" 标签")]),t._v(" "),i("blockquote",[i("p",[t._v("当开发到一定阶段时，给程序打标签是非常棒的功能。")])]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git tag#列出现有标签    \n\ngit tag v0.1 [branch|commit] # [从指定位置]新建标签\ngit tag -a v0.1 -m 'my version 1.4'#新建带注释标签\n\ngit checkout tagname#切换到标签\n\ngit push origin v1.5#推送分支到源上\ngit push origin --tags#一次性推送所有分支\n\ngit tag -d v0.1#删除标签\ngit push origin :refs/tags/v0.1#删除远程标签\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);