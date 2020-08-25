(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{837:function(v,t,_){"use strict";_.r(t);var s=_(10),e=Object(s.a)({},(function(){var v=this,t=v.$createElement,_=v._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"一、文件管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、文件管理"}},[v._v("#")]),v._v(" 一、文件管理")]),v._v(" "),_("p",[_("strong",[v._v("1.1 创建删除文件")])]),v._v(" "),_("ul",[_("li",[_("code",[v._v("mkdir")]),v._v("("),_("code",[v._v("-p")]),v._v("多层创建)")]),v._v(" "),_("li",[_("code",[v._v("touch")])]),v._v(" "),_("li",[_("code",[v._v("cp")]),v._v("("),_("code",[v._v("-r")]),v._v("递归复制)")]),v._v(" "),_("li",[_("code",[v._v("rm -rf")])]),v._v(" "),_("li",[_("code",[v._v("mv")]),v._v("(改名、移动剪切)")]),v._v(" "),_("li",[_("code",[v._v("cat")]),v._v(" (打印)")])]),v._v(" "),_("p",[_("strong",[v._v("1.2 创建删除软连接")])]),v._v(" "),_("blockquote",[_("p",[v._v("linux下的软链接类似于windows下的快捷方式。常用于实际路径很深，每次进入的时候需要花费一定时间，此时我们在根目录创建一个软链接指向该目录，那么我们进入该软连接其实就是进入了软链接指向的实际目录。")])]),v._v(" "),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[_("span",{pre:!0,attrs:{class:"token function"}},[v._v("ln")]),v._v("  -s  /data/elastic/plugin/ik/custom  myES\n")])])]),_("ul",[_("li",[v._v("以上命令中的 "),_("code",[v._v("/data/elastic/plugin/ik/custom")]),v._v(" 就是源文件，"),_("code",[v._v("myES")]),v._v(" 是链接文件名， 其作用是当进入 "),_("code",[v._v("myES")]),v._v(" 目录，实际上是链接进入了 "),_("code",[v._v("/data/elastic/plugin/ik/custom")]),v._v(" 目录")]),v._v(" "),_("li",[_("strong",[v._v("删除软链接")]),v._v(" "),_("code",[v._v("rm -rf myES")]),v._v(" "),_("ul",[_("li",[v._v("注意不是 "),_("code",[v._v("rm -rf myES/")])])])])]),v._v(" "),_("p",[_("strong",[v._v("1.3 重定向命令")])]),v._v(" "),_("ul",[_("li",[_("code",[v._v("ls -l /etc > /home/myback.txt")]),v._v("     (覆盖重定向)　把显示的结果覆盖到"),_("code",[v._v("/home/myback.txt")]),v._v("中去")]),v._v(" "),_("li",[_("code",[v._v("ls -l /etc >> /home/myback.txt")]),v._v("     (追加重定向)　把显示的结果追加到"),_("code",[v._v("/home/myback.txt")]),v._v("中去")])]),v._v(" "),_("p",[_("strong",[v._v("1.4 查看文件大小")])]),v._v(" "),_("ul",[_("li",[v._v("查看某个文件夹当前所占用的空间使用 "),_("code",[v._v("du -h file")])]),v._v(" "),_("li",[v._v("查看当前目录下的所有文件各个大小 "),_("code",[v._v("du -sh *")])])]),v._v(" "),_("h2",{attrs:{id:"二、搜索命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、搜索命令"}},[v._v("#")]),v._v(" 二、搜索命令")]),v._v(" "),_("p",[_("strong",[v._v("2.1 管道过滤")])]),v._v(" "),_("ul",[_("li",[v._v("使用管道命令过滤搜索的内容 "),_("code",[v._v("ls -l /etc | more")])])]),v._v(" "),_("p",[_("strong",[v._v("2.2 查询命令")])]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("which")])])]),v._v(" "),_("blockquote",[_("p",[v._v("在"),_("code",[v._v("PATH")]),v._v("变量指定的路径中，搜索某个系统命令的位置，并且返回第一个搜索结果")])]),v._v(" "),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# `-a`：将所有由`PATH`目录中可以找到的命令均列出来，而不是只列出第一个被找到的命令")]),v._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),v._v("root@www ~"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# which ifconfig")]),v._v("\n/sbin/ifconfig\n")])])]),_("ul",[_("li",[_("strong",[v._v("whereis")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("-b")]),v._v(" 只查找二进制格式的文件")]),v._v(" "),_("li",[_("code",[v._v("-m")]),v._v(" 只查找在说明文件manual路径下的文件")]),v._v(" "),_("li",[_("code",[v._v("-s")]),v._v(" 只招"),_("code",[v._v("source")]),v._v("源文件")]),v._v(" "),_("li",[_("code",[v._v("-u")]),v._v(" 查找不在上述三个选项当中的其他特殊文件")])])])]),v._v(" "),_("blockquote",[_("p",[v._v("只能用于程序名的搜索，而且只搜索二进制文件（参数"),_("code",[v._v("-b")]),v._v("）、"),_("code",[v._v("man")]),v._v("说明文件（参数"),_("code",[v._v("-m")]),v._v("）和源代码文件（参数"),_("code",[v._v("-s")]),v._v("）")])]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("whereis [-bmsu] 文件或目录名\n")])])]),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),v._v("root@www ~"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# whereis ifconfig")]),v._v("\nifconfig: /sbin/ifconfig /usr/share/man/man8/ifconfig.8.gz\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),v._v("root@www ~"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# whereis -m ifconfig")]),v._v("\nifconfig: /usr/share/man/man8/ifconfig.8.gz\n")])])]),_("ul",[_("li",[_("strong",[v._v("locate")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("-i")]),v._v("：忽略大小写差异；")]),v._v(" "),_("li",[_("code",[v._v("-r")]),v._v("：后面可接正则表达式的实现方式。")])])])]),v._v(" "),_("blockquote",[_("p",[v._v("相当于"),_("code",[v._v("find -name")]),v._v("，可快速查找文件")])]),v._v(" "),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[_("span",{pre:!0,attrs:{class:"token function"}},[v._v("locate")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),v._v("-ir"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),v._v(" keyword\n")])])]),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),v._v("root@www ~"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# locate passwd")]),v._v("\n/etc/passwd\n/etc/passwd-\n/etc/news/passwd.nntp\n/etc/pam.d/passwd\n")])])]),_("ul",[_("li",[_("strong",[v._v("find查找任何文件")])])]),v._v(" "),_("blockquote",[_("p",[v._v("最常用和最强大的查找命令，可以用它找到任何想找的文件")])]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("find [PATH] [option] [action]\n")])])]),_("p",[_("strong",[v._v("find参数：基于文件名的搜索")])]),v._v(" "),_("ul",[_("li",[v._v("与文件名有关的参数如下\n"),_("ul",[_("li",[_("code",[v._v("-name filename")]),v._v("：查找文件名为"),_("code",[v._v("filename")]),v._v("的文件。"),_("code",[v._v("filename")]),v._v("可使用正则表达式表示")])])])]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("[root@www ~] # find / -name passwd\n")])])]),_("p",[v._v("查找文件名为"),_("code",[v._v("passwd")]),v._v("的文件")]),v._v(" "),_("p",[_("strong",[v._v("find参数：基于文件大小的搜索")])]),v._v(" "),_("ul",[_("li",[v._v("与文件大小有关的参数如下\n"),_("ul",[_("li",[_("code",[v._v("-size SIZE")]),v._v("：查找文件大小刚好等于SIZE的文件")]),v._v(" "),_("li",[_("code",[v._v("-size -SIZE")]),v._v("：查找文件大小大于SIZE的文件")]),v._v(" "),_("li",[_("code",[v._v("-size +SIZE")]),v._v("：查找文件大小小于SIZE的文件")])])])]),v._v(" "),_("blockquote",[_("p",[v._v("其中，SIZE的单位有")])]),v._v(" "),_("ul",[_("li",[_("code",[v._v("c")]),v._v(" —— "),_("code",[v._v("byte")]),v._v("，字节；")]),v._v(" "),_("li",[_("code",[v._v("w")]),v._v(" —— 字（2字节）；")]),v._v(" "),_("li",[_("code",[v._v("b")]),v._v(" —— "),_("code",[v._v("bit")]),v._v("，块（512字节）；")]),v._v(" "),_("li",[_("code",[v._v("k")]),v._v(" —— 千字节；")]),v._v(" "),_("li",[_("code",[v._v("M")]),v._v(" —— 兆字节；")]),v._v(" "),_("li",[_("code",[v._v("G")]),v._v(" —— 吉字节")])]),v._v(" "),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),v._v("root@www ~"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# find . -type f -size +10k")]),v._v("\n搜索大于10KB的文件\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),v._v("root@www ~"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# find . -type f -size 10k")]),v._v("\n搜索等于10KB的文件\n")])])]),_("p",[_("strong",[v._v("注意")])]),v._v(" "),_("ul",[_("li",[v._v("通常"),_("code",[v._v("find")]),v._v("不很常用，因为速度慢！")]),v._v(" "),_("li",[v._v("通常都是先使用"),_("code",[v._v("whereis")]),v._v("或者"),_("code",[v._v("locate")]),v._v("来检查，当真的找不到了，才用"),_("code",[v._v("find")]),v._v("查找")])]),v._v(" "),_("h2",{attrs:{id:"三、压缩解压命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、压缩解压命令"}},[v._v("#")]),v._v(" 三、压缩解压命令")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("*.tar")]),v._v(" 用 "),_("code",[v._v("tar -xvf")]),v._v(" 解压")]),v._v(" "),_("li",[_("code",[v._v("*.gz")]),v._v(" 用 "),_("code",[v._v("gzip -d")]),v._v("或者"),_("code",[v._v("gunzip")]),v._v(" 解压")]),v._v(" "),_("li",[_("code",[v._v("*.tar.gz")]),v._v("和"),_("code",[v._v("*.tgz")]),v._v(" 用 "),_("code",[v._v("tar -xzf")]),v._v(" 解压")]),v._v(" "),_("li",[_("code",[v._v("*.bz2")]),v._v(" 用"),_("code",[v._v("bzip2 -d")]),v._v("或者用"),_("code",[v._v("bunzip2")]),v._v(" 解压")]),v._v(" "),_("li",[_("code",[v._v("*.tar.bz2")]),v._v("用"),_("code",[v._v("tar -xjf")]),v._v(" 解压")]),v._v(" "),_("li",[_("code",[v._v("*.Z")]),v._v(" 用 "),_("code",[v._v("uncompress")]),v._v(" 解压")]),v._v(" "),_("li",[_("code",[v._v("*.tar.Z")]),v._v(" 用"),_("code",[v._v("tar -xZf")]),v._v(" 解压")]),v._v(" "),_("li",[_("code",[v._v("*.rar")]),v._v(" 用 "),_("code",[v._v("unrar e")]),v._v("解压")]),v._v(" "),_("li",[_("code",[v._v("*.zip")]),v._v(" 用 "),_("code",[v._v("unzip")]),v._v(" 解压")])]),v._v(" "),_("h2",{attrs:{id:"四、vi相关"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四、vi相关"}},[v._v("#")]),v._v(" 四、VI相关")]),v._v(" "),_("ul",[_("li",[v._v("定位到头尾\n"),_("ul",[_("li",[_("code",[v._v("G")]),v._v(" 定位到尾")]),v._v(" "),_("li",[_("code",[v._v("1G")]),v._v(" 定位到头")]),v._v(" "),_("li",[_("code",[v._v("nG")]),v._v(" 定位到指定行")])])]),v._v(" "),_("li",[v._v("复制\n"),_("ul",[_("li",[v._v("复制一行\n"),_("ul",[_("li",[_("code",[v._v("yy")]),v._v(" 复制当前行")])])]),v._v(" "),_("li",[v._v("复制多行\n"),_("ul",[_("li",[_("code",[v._v("7yy")]),v._v(" 从当前行开始复制"),_("code",[v._v("７")]),v._v("行")])])]),v._v(" "),_("li",[v._v("复制当前到行尾的内容\n"),_("ul",[_("li",[_("code",[v._v("y$")])])])])])]),v._v(" "),_("li",[v._v("粘贴\n"),_("ul",[_("li",[_("code",[v._v("p")])]),v._v(" "),_("li",[v._v("大写"),_("code",[v._v("P")]),v._v("代表贴至游标前")])])]),v._v(" "),_("li",[v._v("选择复制\n"),_("ul",[_("li",[_("code",[v._v("v")]),v._v("进入可视化")])])]),v._v(" "),_("li",[v._v("删除\n"),_("ul",[_("li",[v._v("删除一行\n"),_("ul",[_("li",[_("code",[v._v("dd")])])])]),v._v(" "),_("li",[v._v("剪切至行首\n"),_("ul",[_("li",[_("code",[v._v("d^")])])])]),v._v(" "),_("li",[v._v("剪切至行尾\n"),_("ul",[_("li",[_("code",[v._v("d$")])])])])])]),v._v(" "),_("li",[v._v("搜索 "),_("code",[v._v("/")]),v._v("搜索的关键字，按"),_("code",[v._v("n")]),v._v("切换下一个关键字")])]),v._v(" "),_("h2",{attrs:{id:"五、磁盘管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#五、磁盘管理"}},[v._v("#")]),v._v(" 五、磁盘管理")]),v._v(" "),_("ul",[_("li",[v._v("查看内存使用情况： "),_("code",[v._v("free -m")]),v._v("  ("),_("code",[v._v("m")]),v._v("为"),_("code",[v._v("MB")]),v._v("，"),_("code",[v._v("g")]),v._v("为"),_("code",[v._v("GB")]),v._v(")")]),v._v(" "),_("li",[v._v("查看对应磁盘使用情况： "),_("code",[v._v("df -h")])])]),v._v(" "),_("h2",{attrs:{id:"六、进程管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#六、进程管理"}},[v._v("#")]),v._v(" 六、进程管理")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("pkill")]),v._v("  根据进程名杀死进程")]),v._v(" "),_("li",[_("code",[v._v("ps")]),v._v(" 列出系统中运行的进程，包括进程号、命令、CPU使用量、内存使用量\n"),_("ul",[_("li",[_("code",[v._v("ps -a")]),v._v(" 列出所有运行中/激活进程")]),v._v(" "),_("li",[_("code",[v._v("ps -ef |grep processName")]),v._v(" 列出需要进程")]),v._v(" "),_("li",[_("code",[v._v("ps -aux")]),v._v(" 显示进程信息")])])]),v._v(" "),_("li",[_("code",[v._v("pstree")]),v._v(" "),_("code",[v._v("linux")]),v._v("中，每一个进程都是由其父进程创建的。此命令以可视化方式显示进程，通过显示进程的树状图来展示进程间关系")]),v._v(" "),_("li",[_("code",[v._v("top")]),v._v(" "),_("ul",[_("li",[v._v("可以监视系统中不同的进程所使用的资源")]),v._v(" "),_("li",[v._v("显示进程的数据包括"),_("code",[v._v("PID")]),v._v("、进程属主、优先级、"),_("code",[v._v("%CPU")]),v._v("、"),_("code",[v._v("%memory")]),v._v("等。可以使用这些显示指示出资源使用量")])])])]),v._v(" "),_("h2",{attrs:{id:"七、网络管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#七、网络管理"}},[v._v("#")]),v._v(" 七、网络管理")]),v._v(" "),_("p",[_("strong",[v._v("7.1 下载源管理")])]),v._v(" "),_("ul",[_("li",[_("code",[v._v("yum list | grep nginx")]),v._v(" 查看是否有"),_("code",[v._v("Nginx")]),v._v("源")])]),v._v(" "),_("p",[_("strong",[v._v("7.2 防火墙相关")])]),v._v(" "),_("blockquote",[_("p",[_("code",[v._v("linux")]),v._v("查看防火墙状态及开启关闭命令")])]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("service方式")])])]),v._v(" "),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# 查看防火墙状态")]),v._v("\n\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),v._v("root@centos6 ~"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# service iptables status")]),v._v("\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# 开启防火墙")]),v._v("\n\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),v._v("root@centos6 ~"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# service iptables start")]),v._v("\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# 关闭防火墙")]),v._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),v._v("root@centos6 ~"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# service iptables stop")]),v._v("\n")])])]),_("p",[_("strong",[v._v("iptables方式")])]),v._v(" "),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),v._v("root@centos6 ~"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# cd /etc/init.d/")]),v._v("\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# 查看状态")]),v._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),v._v("root@centos6 init.d"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# /etc/init.d/iptables status")]),v._v("\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# 暂时关闭防火墙 ")]),v._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),v._v("root@centos6 init.d"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# /etc/init.d/iptables stop")]),v._v("\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# iptables")]),v._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),v._v("root@centos6 init.d"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# /etc/init.d/iptables restart")]),v._v("\n\n")])])]),_("ul",[_("li",[_("code",[v._v("linux")]),v._v("的防火墙是否阻止80端口\n"),_("ul",[_("li",[v._v("返回有内容说明开通，没返回内容，则说明阻止")]),v._v(" "),_("li",[_("code",[v._v('iptables -vnL | grep ":80 "')])])])])]),v._v(" "),_("h2",{attrs:{id:"八、上传文件相关"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#八、上传文件相关"}},[v._v("#")]),v._v(" 八、上传文件相关")]),v._v(" "),_("ul",[_("li",[v._v("从远处复制文件到本地目录\n"),_("ul",[_("li",[_("code",[v._v("scp root@10.10.10.10:/opt/soft/nginx-0.5.38.tar.gz /opt/soft/")])])])]),v._v(" "),_("li",[v._v("上传本地目录到远程机器指定目录(拷贝目录带上"),_("code",[v._v("-r")]),v._v(",递归复制)\n"),_("ul",[_("li",[_("code",[v._v("scp -r /opt/soft/mongodb root@10.10.10.10:/opt/soft/scptest")])])])])]),v._v(" "),_("h2",{attrs:{id:"九、系统相关"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#九、系统相关"}},[v._v("#")]),v._v(" 九、系统相关")]),v._v(" "),_("p",[_("strong",[v._v("9.1 CPU管理")])]),v._v(" "),_("ul",[_("li",[v._v("查看对应CPU使用情况\n"),_("ul",[_("li",[_("code",[v._v("cat /proc/cpuinfo")])])])]),v._v(" "),_("li",[v._v("只显示一行对应的CPU型号以及其他信息\n"),_("ul",[_("li",[_("code",[v._v('cat /proc/cpuinfo | grep "model name" | head -1')])])])]),v._v(" "),_("li",[v._v("系统有几个核就会显示几行\n"),_("ul",[_("li",[_("code",[v._v('cat /proc/cpuinfo | grep "model name"')])])])]),v._v(" "),_("li",[v._v("统计出一共有多少核\n"),_("ul",[_("li",[_("code",[v._v('cat /proc/cpuinfo | grep "model name" | wc -l')])])])])]),v._v(" "),_("p",[_("strong",[v._v("9.2其他")])]),v._v(" "),_("ul",[_("li",[v._v("查看对应服务器版本当前操作系统发行版信息\n"),_("ul",[_("li",[_("code",[v._v("cat /etc/issue")]),v._v("  或  "),_("code",[v._v("cat /etc/redhat-release")])])])]),v._v(" "),_("li",[v._v("查看更为底层的版本信息： "),_("code",[v._v("cat /proc/version")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);