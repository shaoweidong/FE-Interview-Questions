(window.webpackJsonp=window.webpackJsonp||[]).push([[614],{881:function(t,e,s){"use strict";s.r(e);var r=s(10),v=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"os"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#os"}},[t._v("#")]),t._v(" OS")]),t._v(" "),s("h2",{attrs:{id:"tty"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tty"}},[t._v("#")]),t._v(" TTY")]),t._v(" "),s("p",[t._v('"tty" 原意是指 "teletype" 即打字机, "pty" 则是 "pseudo-teletype" 即伪打字机. 在 Unix 中, '),s("code",[t._v("/dev/tty*")]),t._v(" 是指任何表现的像打字机的设备, 例如终端 (terminal).")]),t._v(" "),s("p",[t._v("你可以通过 "),s("code",[t._v("w")]),t._v(" 命令查看当前登录的用户情况, 你会发现每登录了一个窗口就会有一个新的 tty.")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ w\n 11:49:43 up 482 days, 19:38,  3 users,  load average: 0.03, 0.08, 0.07\nUSER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT\ndev      pts/0    10.0.128.252     10:44    1:01m  0.09s  0.07s -bash\ndev      pts/2    10.0.128.252     11:08    2:07   0.17s  0.14s top\nroot     pts/3    10.0.240.2       11:43    7.00s  0.04s  0.00s w\n")])])]),s("p",[t._v("使用 ps 命令查看进程信息中也有 tty 的信息:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ ps -x\n  PID TTY      STAT   TIME COMMAND\n 5530 ?        S      0:00 sshd: dev@pts/3\n 5531 pts/3    Ss+    0:00 -bash\n11296 ?        S      0:00 sshd: dev@pts/4\n11297 pts/4    Ss     0:00 -bash\n13318 pts/4    R+     0:00 ps -x\n23733 ?        Ssl    2:53 PM2 v1.1.2: God Daemon\n")])])]),s("p",[t._v("其中为 "),s("code",[t._v("?")]),t._v(" 的是没有依赖 TTY 的进程, 即"),s("router-link",{attrs:{to:"/sections/zh-cn/process.html#守护进程"}},[t._v("守护进程")]),t._v(".")],1),t._v(" "),s("p",[t._v("在 Node.js 中你可以通过 stdio 的 isTTY 来判断当前进程是否处于 TTY (如终端) 的环境.")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('$ node -p -e "Boolean(process.stdout.isTTY)"\ntrue\n$ node -p -e "Boolean(process.stdout.isTTY)" | cat\nfalse\n')])])]),s("h2",{attrs:{id:"os-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#os-2"}},[t._v("#")]),t._v(" OS")]),t._v(" "),s("p",[t._v("通过 OS 模块可以获取到当前系统一些基础信息的辅助函数.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("os.EOL")]),t._v(" "),s("td",[t._v("根据当前系统, 返回当前系统的 "),s("code",[t._v("End Of Line")])])]),t._v(" "),s("tr",[s("td",[t._v("os.arch()")]),t._v(" "),s("td",[t._v("返回当前系统的 CPU 架构, 如 "),s("code",[t._v("'x86'")]),t._v(" 和 "),s("code",[t._v("'x64'")])])]),t._v(" "),s("tr",[s("td",[t._v("os.constants")]),t._v(" "),s("td",[t._v("返回系统常量")])]),t._v(" "),s("tr",[s("td",[t._v("os.cpus()")]),t._v(" "),s("td",[t._v("返回 CPU 每个核的信息")])]),t._v(" "),s("tr",[s("td",[t._v("os.endianness()")]),t._v(" "),s("td",[t._v("返回 CPU 字节序, 如果是大端字节序返回 "),s("code",[t._v("BE")]),t._v(", 小端字节序则 "),s("code",[t._v("LE")])])]),t._v(" "),s("tr",[s("td",[t._v("os.freemem()")]),t._v(" "),s("td",[t._v("返回系统空闲内存的大小, 单位是字节")])]),t._v(" "),s("tr",[s("td",[t._v("os.homedir()")]),t._v(" "),s("td",[t._v("返回当前用户的根目录")])]),t._v(" "),s("tr",[s("td",[t._v("os.hostname()")]),t._v(" "),s("td",[t._v("返回当前系统的主机名")])]),t._v(" "),s("tr",[s("td",[t._v("os.loadavg()")]),t._v(" "),s("td",[t._v("返回负载信息")])]),t._v(" "),s("tr",[s("td",[t._v("os.networkInterfaces()")]),t._v(" "),s("td",[t._v("返回网卡信息 (类似 "),s("code",[t._v("ifconfig")]),t._v(")")])]),t._v(" "),s("tr",[s("td",[t._v("os.platform()")]),t._v(" "),s("td",[t._v("返回编译时指定的平台信息, 如 "),s("code",[t._v("win32")]),t._v(", "),s("code",[t._v("linux")]),t._v(", 同 "),s("code",[t._v("process.platform()")])])]),t._v(" "),s("tr",[s("td",[t._v("os.release()")]),t._v(" "),s("td",[t._v("返回操作系统的分发版本号")])]),t._v(" "),s("tr",[s("td",[t._v("os.tmpdir()")]),t._v(" "),s("td",[t._v("返回系统默认的临时文件夹")])]),t._v(" "),s("tr",[s("td",[t._v("os.totalmem()")]),t._v(" "),s("td",[t._v("返回总内存大小(同内存条大小)")])]),t._v(" "),s("tr",[s("td",[t._v("os.type()")]),t._v(" "),s("td",[t._v("根据 "),s("code",[t._v("[uname](https://en.wikipedia.org/wiki/Uname#Examples)")]),t._v(" 返回系统的名称")])]),t._v(" "),s("tr",[s("td",[t._v("os.uptime()")]),t._v(" "),s("td",[t._v("返回系统的运行时间，单位是秒")])]),t._v(" "),s("tr",[s("td",[t._v("os.userInfo([options])")]),t._v(" "),s("td",[t._v("返回当前用户信息")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("不同操作系统的换行符 (EOL) 有什么区别?")])]),t._v(" "),s("p",[t._v("end of line (EOL) 同 newline, line ending, 以及 line break.")]),t._v(" "),s("p",[t._v("通常由 line feed (LF, "),s("code",[t._v("\\n")]),t._v(") 和 carriage return (CR, "),s("code",[t._v("\\r")]),t._v(") 组成. 常见的情况:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("符号")]),t._v(" "),s("th",[t._v("系统")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("LF")]),t._v(" "),s("td",[t._v("在 Unix 或 Unix 相容系统 (GNU/Linux, AIX, Xenix, Mac OS X, ...)、BeOS、Amiga、RISC OS")])]),t._v(" "),s("tr",[s("td",[t._v("CR+LF")]),t._v(" "),s("td",[t._v("MS-DOS、微软视窗操作系统 (Microsoft Windows)、大部分非 Unix 的系统")])]),t._v(" "),s("tr",[s("td",[t._v("CR")]),t._v(" "),s("td",[t._v("Apple II 家族, Mac OS 至版本9")])])])]),t._v(" "),s("p",[t._v("如果不了解 EOL 跨系统的兼容情况, 那么在处理文件的行分割/行统计等情况时可能会被坑.")]),t._v(" "),s("h3",{attrs:{id:"os-常量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#os-常量"}},[t._v("#")]),t._v(" OS 常量")]),t._v(" "),s("ul",[s("li",[t._v("信号常量 (Signal Constants), 如 "),s("code",[t._v("SIGHUP")]),t._v(", "),s("code",[t._v("SIGKILL")]),t._v(" 等.")]),t._v(" "),s("li",[t._v("POSIX 错误常量 (POSIX Error Constants), 如 "),s("code",[t._v("EACCES")]),t._v(", "),s("code",[t._v("EADDRINUSE")]),t._v(" 等.")]),t._v(" "),s("li",[t._v("Windows 错误常量 (Windows Specific Error Constants), 如 "),s("code",[t._v("WSAEACCES")]),t._v(", "),s("code",[t._v("WSAEBADF")]),t._v(" 等.")]),t._v(" "),s("li",[t._v("libuv 常量 (libuv Constants), 仅 "),s("code",[t._v("UV_UDP_REUSEADDR")]),t._v(".")])]),t._v(" "),s("h2",{attrs:{id:"path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[t._v("#")]),t._v(" Path")]),t._v(" "),s("p",[t._v("Node.js 内置的 path 是用于处理路径问题的模块. 不过众所周知, 路径在不同操作系统下又不可调和的差异.")]),t._v(" "),s("h3",{attrs:{id:"windows-vs-posix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows-vs-posix"}},[t._v("#")]),t._v(" Windows vs. POSIX")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("POSIX")]),t._v(" "),s("th",[t._v("值")]),t._v(" "),s("th",[t._v("Windows")]),t._v(" "),s("th",[t._v("值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("path.posix.sep")]),t._v(" "),s("td",[s("code",[t._v("'/'")])]),t._v(" "),s("td",[t._v("path.win32.sep")]),t._v(" "),s("td",[s("code",[t._v("'\\\\'")])])]),t._v(" "),s("tr",[s("td",[t._v("path.posix.normalize('/foo/bar//baz/asdf/quux/..')")]),t._v(" "),s("td",[s("code",[t._v("'/foo/bar/baz/asdf'")])]),t._v(" "),s("td",[t._v("path.win32.normalize('C:\\temp\\\\foo\\bar\\..\\')")]),t._v(" "),s("td",[s("code",[t._v("'C:\\\\temp\\\\foo\\\\'")])])]),t._v(" "),s("tr",[s("td",[t._v("path.posix.basename('/tmp/myfile.html')")]),t._v(" "),s("td",[s("code",[t._v("'myfile.html'")])]),t._v(" "),s("td",[t._v("path.win32.basename('C:\\temp\\myfile.html')")]),t._v(" "),s("td",[s("code",[t._v("'myfile.html'")])])]),t._v(" "),s("tr",[s("td",[t._v("path.posix.join('/asdf', '/test.html')")]),t._v(" "),s("td",[s("code",[t._v("'/asdf/test.html'")])]),t._v(" "),s("td",[t._v("path.win32.join('/asdf', '/test.html')")]),t._v(" "),s("td",[s("code",[t._v("'\\\\asdf\\\\test.html'")])])]),t._v(" "),s("tr",[s("td",[t._v("path.posix.relative('/root/a', '/root/b')")]),t._v(" "),s("td",[s("code",[t._v("'../b'")])]),t._v(" "),s("td",[t._v("path.win32.relative('C:\\a', 'c:\\b')")]),t._v(" "),s("td",[s("code",[t._v("'..\\\\b'")])])]),t._v(" "),s("tr",[s("td",[t._v("path.posix.isAbsolute('/baz/..')")]),t._v(" "),s("td",[s("code",[t._v("true")])]),t._v(" "),s("td",[t._v("path.win32.isAbsolute('C:\\foo\\..')")]),t._v(" "),s("td",[s("code",[t._v("true")])])]),t._v(" "),s("tr",[s("td",[t._v("path.posix.delimiter")]),t._v(" "),s("td",[s("code",[t._v("':'")])]),t._v(" "),s("td",[t._v("path.win32.delimiter")]),t._v(" "),s("td",[s("code",[t._v("','")])])]),t._v(" "),s("tr",[s("td",[t._v("process.env.PATH")]),t._v(" "),s("td",[s("code",[t._v("'/usr/bin:/bin'")])]),t._v(" "),s("td",[t._v("process.env.PATH")]),t._v(" "),s("td",[s("code",[t._v("C:\\Windows\\system32;C:\\Program Files\\node\\'")])])]),t._v(" "),s("tr",[s("td",[t._v("PATH.split(path.posix.delimiter)")]),t._v(" "),s("td",[s("code",[t._v("['/usr/bin', '/bin']")])]),t._v(" "),s("td",[t._v("PATH.split(path.win32.delimiter)")]),t._v(" "),s("td",[s("code",[t._v("['C:\\\\Windows\\\\system32', 'C:\\\\Program Files\\\\node\\\\']")])])])])]),t._v(" "),s("p",[t._v("看了上表之后, 你应该了解到当你处于某个平台之下的时候, 所使用的 "),s("code",[t._v("path")]),t._v(" 模块的方法其实就是对应的平台的方法, 例如笔者这里用的是 mac, 所以:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("basename "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("posix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("basename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),s("p",[t._v("如果你处于其中某一个平台, 但是要处理另外一个平台的路径, 需要注意这个跨平台的问题.")]),t._v(" "),s("h3",{attrs:{id:"path-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-对象"}},[t._v("#")]),t._v(" path 对象")]),t._v(" "),s("p",[t._v("on POSIX:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/home/user/dir/file.txt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Returns:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//    root : "/",')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//    dir : "/home/user/dir",')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//    base : "file.txt",')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//    ext : ".txt",')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//    name : "file"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n")])])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("┌─────────────────────┬────────────┐\n│          dir        │    base    │\n├──────┬              ├──────┬─────┤\n│ root │              │ name │ ext │\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"  /    home/user/dir / file  .txt "')]),t._v("\n└──────┴──────────────┴──────┴─────┘\n")])])]),s("p",[t._v("on Windows:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:\\\\path\\\\dir\\\\file.txt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Returns:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//    root : "C:\\\\",')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//    dir : "C:\\\\path\\\\dir",')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//    base : "file.txt",')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//    ext : ".txt",')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//    name : "file"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n")])])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("┌─────────────────────┬────────────┐\n│          dir        │    base    │\n├──────┬              ├──────┬─────┤\n│ root │              │ name │ ext │\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" C:\\      path\\dir   \\ file  .txt "')]),t._v("\n└──────┴──────────────┴──────┴─────┘\n")])])]),s("h3",{attrs:{id:"path-extname-path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-extname-path"}},[t._v("#")]),t._v(" path.extname(path)")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("case")]),t._v(" "),s("th",[t._v("return")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("path.extname('index.html')")]),t._v(" "),s("td",[s("code",[t._v("'.html'")])])]),t._v(" "),s("tr",[s("td",[t._v("path.extname('index.coffee.md')")]),t._v(" "),s("td",[s("code",[t._v("'.md'")])])]),t._v(" "),s("tr",[s("td",[t._v("path.extname('index.')")]),t._v(" "),s("td",[s("code",[t._v("'.'")])])]),t._v(" "),s("tr",[s("td",[t._v("path.extname('index')")]),t._v(" "),s("td",[s("code",[t._v("''")])])]),t._v(" "),s("tr",[s("td",[t._v("path.extname('.index')")]),t._v(" "),s("td",[s("code",[t._v("''")])])])])]),t._v(" "),s("h2",{attrs:{id:"命令行参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令行参数"}},[t._v("#")]),t._v(" 命令行参数")]),t._v(" "),s("p",[t._v("命令行参数 (Command Line Options), 即对 CLI 使用上的一些文档. 关于 CLI 主要有 4 种使用方式:")]),t._v(" "),s("ul",[s("li",[t._v('node [options] [v8 options] [script.js | -e "script"] [arguments]')]),t._v(" "),s("li",[t._v('node debug [script.js | -e "script" | '),s("host",[t._v(":"),s("port",[t._v("] …")])],1)],1),t._v(" "),s("li",[t._v("node --v8-options")]),t._v(" "),s("li",[t._v("无参数直接启动 REPL 环境")])]),t._v(" "),s("h3",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("简介")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("-v, --version")]),t._v(" "),s("td",[t._v("查看当前 node 版本")])]),t._v(" "),s("tr",[s("td",[t._v("-h, --help")]),t._v(" "),s("td",[t._v("查看帮助文档")])]),t._v(" "),s("tr",[s("td",[t._v('-e, --eval "script"')]),t._v(" "),s("td",[t._v("将参数字符串当做代码执行")])]),t._v(" "),s("tr",[s("td",[t._v('-p, --print "script"')]),t._v(" "),s("td",[t._v("打印 "),s("code",[t._v("-e")]),t._v(" 的返回值")])]),t._v(" "),s("tr",[s("td",[t._v("-c, --check")]),t._v(" "),s("td",[t._v("检查语法并不执行")])]),t._v(" "),s("tr",[s("td",[t._v("-i, --interactive")]),t._v(" "),s("td",[t._v("即使 stdin 不是终端也打开 REPL 模式")])]),t._v(" "),s("tr",[s("td",[t._v("-r, --require module")]),t._v(" "),s("td",[t._v("在启动前预先 "),s("code",[t._v("require")]),t._v(" 指定模块")])]),t._v(" "),s("tr",[s("td",[t._v("--no-deprecation")]),t._v(" "),s("td",[t._v("关闭废弃模块警告")])]),t._v(" "),s("tr",[s("td",[t._v("--trace-deprecation")]),t._v(" "),s("td",[t._v("打印废弃模块的堆栈跟踪信息")])]),t._v(" "),s("tr",[s("td",[t._v("--throw-deprecation")]),t._v(" "),s("td",[t._v("执行废弃模块时抛出错误")])]),t._v(" "),s("tr",[s("td",[t._v("--no-warnings")]),t._v(" "),s("td",[t._v("无视报警（包括废弃警告）")])]),t._v(" "),s("tr",[s("td",[t._v("--trace-warnings")]),t._v(" "),s("td",[t._v("打印警告的 stack （包括废弃模块）")])]),t._v(" "),s("tr",[s("td",[t._v("--trace-sync-io")]),t._v(" "),s("td",[t._v("只要检测到异步 I/O 出于 Event loop 的开头就打印 stack trace")])]),t._v(" "),s("tr",[s("td",[t._v("--zero-fill-buffers")]),t._v(" "),s("td",[t._v("自动初始化(zero-fill) "),s("strong",[t._v("Buffer")]),t._v(" 和 "),s("strong",[t._v("SlowBuffer")])])]),t._v(" "),s("tr",[s("td",[t._v("--preserve-symlinks")]),t._v(" "),s("td",[t._v("在解析和缓存模块时指示模块加载程序保存符号链接")])]),t._v(" "),s("tr",[s("td",[t._v("--track-heap-objects")]),t._v(" "),s("td",[t._v("为堆快照跟踪堆对象的分配情况")])]),t._v(" "),s("tr",[s("td",[t._v("--prof-process")]),t._v(" "),s("td",[t._v("使用 v8 选项 "),s("code",[t._v("--prof")]),t._v(" 生成 Profilling 报告")])]),t._v(" "),s("tr",[s("td",[t._v("--v8-options")]),t._v(" "),s("td",[t._v("显示 v8 命令行选项")])]),t._v(" "),s("tr",[s("td",[t._v("--tls-cipher-list=list")]),t._v(" "),s("td",[t._v("指明替代的默认 TLS 加密器列表")])]),t._v(" "),s("tr",[s("td",[t._v("--enable-fips")]),t._v(" "),s("td",[t._v("在启动时开启 FIPS-compliant crypto")])]),t._v(" "),s("tr",[s("td",[t._v("--force-fips")]),t._v(" "),s("td",[t._v("在启动时强制实施 FIPS-compliant")])]),t._v(" "),s("tr",[s("td",[t._v("--openssl-config=file")]),t._v(" "),s("td",[t._v("启动时加载 OpenSSL 配置文件")])]),t._v(" "),s("tr",[s("td",[t._v("--icu-data-dir=file")]),t._v(" "),s("td",[t._v("指定ICU数据加载路径")])])])]),t._v(" "),s("h3",{attrs:{id:"环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境变量"}},[t._v("#")]),t._v(" 环境变量")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("环境变量")]),t._v(" "),s("th",[t._v("简介")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("NODE_DEBUG=module[,…]")])]),t._v(" "),s("td",[t._v("指定要打印调试信息的核心模块列表")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("NODE_PATH=path[:…]")])]),t._v(" "),s("td",[t._v("指定搜索目录模块路径的前缀列表")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("NODE_DISABLE_COLORS=1")])]),t._v(" "),s("td",[t._v("关闭 REPL 的颜色显示")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("NODE_ICU_DATA=file")])]),t._v(" "),s("td",[t._v("ICU (Intl object) 数据路径")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("NODE_REPL_HISTORY=file")])]),t._v(" "),s("td",[t._v("持久化存储REPL历史文件的路径")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("NODE_TTY_UNSAFE_ASYNC=1")])]),t._v(" "),s("td",[t._v("设置为1时, 将同步操作 stdio (如 console.log 变成同步)")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("NODE_EXTRA_CA_CERTS=file")])]),t._v(" "),s("td",[t._v("指定 CA (如 VeriSign) 的额外证书路径")])])])]),t._v(" "),s("h2",{attrs:{id:"负载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#负载"}},[t._v("#")]),t._v(" 负载")]),t._v(" "),s("p",[t._v("负载是衡量服务器运行状态的一个重要概念. 通过负载情况, 我们可以知道服务器目前状态是清闲, 良好, 繁忙还是即将 crash.")]),t._v(" "),s("p",[t._v("通常我们要查看的负载是 CPU 负载, 详细一点的情况你可以通过阅读这篇博客: "),s("a",{attrs:{href:"http://blog.scoutapp.com/articles/2009/07/31/understanding-load-averages",target:"_blank",rel:"noopener noreferrer"}},[t._v("Understanding Linux CPU Load"),s("OutboundLink")],1),t._v(" 来了解.")]),t._v(" "),s("p",[t._v("命令行上可以通过 "),s("code",[t._v("uptime")]),t._v(", "),s("code",[t._v("top")]),t._v(" 命令, Node.js 中可以通过 "),s("code",[t._v("os.loadavg()")]),t._v(" 来获取当前系统的负载情况:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("load average: 0.09, 0.05, 0.01\n")])])]),s("p",[t._v("其中分别是最近 1 分钟, 5 分钟, 15 分钟内系统 CPU 的平均负载. 当 CPU 的一个核工作饱和的时候负载为 1, 有几核 CPU 那么饱和负载就是几.")]),t._v(" "),s("p",[t._v("在 Node.js 中单个进程的 CPU 负载查看可以使用 "),s("a",{attrs:{href:"https://github.com/soyuka/pidusage",target:"_blank",rel:"noopener noreferrer"}},[t._v("pidusage"),s("OutboundLink")],1),t._v(" 模块.")]),t._v(" "),s("p",[t._v("除了 CPU 负载, 对于服务端 (偏维护) 还需要了解网络负载, 磁盘负载等.")]),t._v(" "),s("h2",{attrs:{id:"checklist"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#checklist"}},[t._v("#")]),t._v(" CheckList")]),t._v(" "),s("blockquote",[s("p",[t._v("有一个醉汉半夜在路灯下徘徊，路过的人奇怪地问他：“你在路灯下找什么？”醉汉回答：“我在找我的KEY”,路人更奇怪了：“找钥匙为什么在路灯下?”，醉汉说：“因为这里最亮！”。")])]),t._v(" "),s("p",[t._v("很多服务端的同学在说到检查服务器状态时只知道使用 "),s("code",[t._v("top")]),t._v(" 命令, 其实情况就和上面的笑话一样, 因为对于他们而言 "),s("code",[t._v("top")]),t._v(" 是最亮的那盏路灯.")]),t._v(" "),s("p",[t._v("对于服务端程序员而言, 完整的服务器 checklist 首推 "),s("a",{attrs:{href:"https://www.amazon.cn/%E5%9B%BE%E4%B9%A6/dp/B0140I5WPK",target:"_blank",rel:"noopener noreferrer"}},[t._v("《性能之巅》"),s("OutboundLink")],1),t._v(" 第二章中讲述的 "),s("a",{attrs:{href:"http://www.brendangregg.com/USEmethod/use-linux.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("USE 方法"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("The USE Method provides a strategy for performing a complete check of system health, identifying common bottlenecks and errors. For each system resource, metrics for utilization, saturation and errors are identified and checked. Any issues discovered are then investigated using further strategies.")]),t._v(" "),s("p",[t._v("This is an example USE-based metric list for Linux operating systems (eg, Ubuntu, CentOS, Fedora). This is primarily intended for system administrators of the physical systems, who are using command line tools. Some of these metrics can be found in remote monitoring tools.")]),t._v(" "),s("h3",{attrs:{id:"physical-resources"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#physical-resources"}},[t._v("#")]),t._v(" Physical Resources")]),t._v(" "),s("table",{attrs:{border:"1",cellpadding:"2",width:"100%"}},[s("tbody",[s("tr",[s("th",[t._v("component")]),s("th",[t._v("type")]),s("th",[t._v("metric")])]),t._v(" "),s("tr",[s("td",[t._v("CPU")]),s("td",[t._v("utilization")]),s("td",[t._v("system-wide: "),s("tt",[t._v("vmstat 1")]),t._v(', "us" + "sy" + "st"; '),s("tt",[t._v("sar -u")]),t._v(', sum fields except "%idle" and "%iowait"; '),s("tt",[t._v("dstat -c")]),t._v(', sum fields except "idl" and "wai"; per-cpu: '),s("tt",[t._v("mpstat -P ALL 1")]),t._v(', sum fields except "%idle" and "%iowait"; '),s("tt",[t._v("sar -P ALL")]),t._v(", same as "),s("tt",[t._v("mpstat")]),t._v("; per-process: "),s("tt",[t._v("top")]),t._v(', "%CPU"; '),s("tt",[t._v("htop")]),t._v(', "CPU%"; '),s("tt",[t._v("ps -o pcpu")]),t._v("; "),s("tt",[t._v("pidstat 1")]),t._v(', "%CPU"; per-kernel-thread: '),s("tt",[t._v("top")]),t._v("/"),s("tt",[t._v("htop")]),t._v(' ("K" to toggle), where VIRT == 0 (heuristic). [1]')],1)]),t._v(" "),s("tr",[s("td",[t._v("CPU")]),s("td",[t._v("saturation")]),s("td",[t._v("system-wide: "),s("tt",[t._v("vmstat 1")]),t._v(', "r" > CPU count [2]; '),s("tt",[t._v("sar -q")]),t._v(', "runq-sz" > CPU count; '),s("tt",[t._v("dstat -p")]),t._v(', "run" > CPU count; per-process: /proc/PID/schedstat 2nd field (sched_info.run_delay); '),s("tt",[t._v("perf sched latency")]),t._v(' (shows "Average" and "Maximum" delay per-schedule); dynamic tracing, eg, SystemTap schedtimes.stp "queued(us)" [3]')],1)]),t._v(" "),s("tr",[s("td",[t._v("CPU")]),s("td",[t._v("errors")]),s("td",[s("tt",[t._v("perf")]),t._v(' (LPE) if processor specific error events (CPC) are available; eg, AMD64\'s "04Ah Single-bit ECC Errors Recorded by Scrubber" [4]')],1)]),t._v(" "),s("tr",[s("td",[t._v("Memory capacity")]),s("td",[t._v("utilization")]),s("td",[t._v("system-wide: "),s("tt",[t._v("free -m")]),t._v(', "Mem:" (main memory), "Swap:" (virtual memory); '),s("tt",[t._v("vmstat 1")]),t._v(', "free" (main memory), "swap" (virtual memory); '),s("tt",[t._v("sar -r")]),t._v(', "%memused"; '),s("tt",[t._v("dstat -m")]),t._v(', "free"; '),s("tt",[t._v("slabtop -s c")]),t._v(" for kmem slab usage; per-process: "),s("tt",[t._v("top")]),t._v("/"),s("tt",[t._v("htop")]),t._v(', "RES" (resident main memory), "VIRT" (virtual memory), "Mem" for system-wide summary')],1)]),t._v(" "),s("tr",[s("td",[t._v("Memory capacity")]),s("td",[t._v("saturation")]),s("td",[t._v("system-wide: "),s("tt",[t._v("vmstat 1")]),t._v(', "si"/"so" (swapping); '),s("tt",[t._v("sar -B")]),t._v(', "pgscank" + "pgscand" (scanning); '),s("tt",[t._v("sar -W")]),t._v("; per-process: 10th field (min_flt) from /proc/PID/stat for minor-fault rate, or dynamic tracing [5]; OOM killer: "),s("tt",[t._v("dmesg | grep killed")])],1)]),t._v(" "),s("tr",[s("td",[t._v("Memory capacity")]),s("td",[t._v("errors")]),s("td",[s("tt",[t._v("dmesg")]),t._v(" for physical failures; dynamic tracing, eg, SystemTap uprobes for failed malloc()s")],1)]),t._v(" "),s("tr",[s("td",[t._v("Network Interfaces")]),s("td",[t._v("utilization")]),s("td",[s("tt",[t._v("sar -n DEV 1")]),t._v(', "rxKB/s"/max "txKB/s"/max; '),s("tt",[t._v("ip -s link")]),t._v(', RX/TX tput / max bandwidth; /proc/net/dev, "bytes" RX/TX tput/max; nicstat "%Util" [6]')],1)]),t._v(" "),s("tr",[s("td",[t._v("Network Interfaces")]),s("td",[t._v("saturation")]),s("td",[s("tt",[t._v("ifconfig")]),t._v(', "overruns", "dropped"; '),s("tt",[t._v("netstat -s")]),t._v(', "segments retransmited"; '),s("tt",[t._v("sar -n EDEV")]),t._v(', *drop and *fifo metrics; /proc/net/dev, RX/TX "drop"; nicstat "Sat" [6]; dynamic tracing for other TCP/IP stack queueing [7]')],1)]),t._v(" "),s("tr",[s("td",[t._v("Network Interfaces")]),s("td",[t._v("errors")]),s("td",[s("tt",[t._v("ifconfig")]),t._v(', "errors", "dropped"; '),s("tt",[t._v("netstat -i")]),t._v(', "RX-ERR"/"TX-ERR"; '),s("tt",[t._v("ip -s link")]),t._v(', "errors"; '),s("tt",[t._v("sar -n EDEV")]),t._v(', "rxerr/s" "txerr/s"; /proc/net/dev, "errs", "drop"; extra counters may be under /sys/class/net/...; dynamic tracing of driver function returns 76]')],1)]),t._v(" "),s("tr",[s("td",[t._v("Storage device I/O")]),s("td",[t._v("utilization")]),s("td",[t._v("system-wide: "),s("tt",[t._v("iostat -xz 1")]),t._v(', "%util"; '),s("tt",[t._v("sar -d")]),t._v(', "%util"; per-process: iotop; '),s("tt",[t._v("pidstat -d")]),t._v('; /proc/PID/sched "se.statistics.iowait_sum"')],1)]),t._v(" "),s("tr",[s("td",[t._v("Storage device I/O")]),s("td",[t._v("saturation")]),s("td",[s("tt",[t._v("iostat -xnz 1")]),t._v(', "avgqu-sz" > 1, or high "await"; '),s("tt",[t._v("sar -d")]),t._v(" same; LPE block probes for queue length/latency; dynamic/static tracing of I/O subsystem (incl. LPE block probes)")],1)]),t._v(" "),s("tr",[s("td",[t._v("Storage device I/O")]),s("td",[t._v("errors")]),s("td",[t._v("/sys/devices/.../ioerr_cnt; "),s("tt",[t._v("smartctl")]),t._v("; dynamic/static tracing of I/O subsystem response codes [8]")],1)]),t._v(" "),s("tr",[s("td",[t._v("Storage capacity")]),s("td",[t._v("utilization")]),s("td",[t._v("swap: "),s("tt",[t._v("swapon -s")]),t._v("; "),s("tt",[t._v("free")]),t._v('; /proc/meminfo "SwapFree"/"SwapTotal"; file systems: "df -h"')],1)]),t._v(" "),s("tr",[s("td",[t._v("Storage capacity")]),s("td",[t._v("saturation")]),s("td",[t._v("not sure this one makes sense - once it's full, ENOSPC")])]),t._v(" "),s("tr",[s("td",[t._v("Storage capacity")]),s("td",[t._v("errors")]),s("td",[s("tt",[t._v("strace")]),t._v(" for ENOSPC; dynamic tracing for ENOSPC; /var/log/messages errs, depending on FS")],1)]),t._v(" "),s("tr",[s("td",[t._v("Storage controller")]),s("td",[t._v("utilization")]),s("td",[s("tt",[t._v("iostat -xz 1")]),t._v(", sum devices and compare to known IOPS/tput limits per-card")],1)]),t._v(" "),s("tr",[s("td",[t._v("Storage controller")]),s("td",[t._v("saturation")]),s("td",[t._v("see storage device saturation, ...")])]),t._v(" "),s("tr",[s("td",[t._v("Storage controller")]),s("td",[t._v("errors")]),s("td",[t._v("see storage device errors, ...")])]),t._v(" "),s("tr",[s("td",[t._v("Network controller")]),s("td",[t._v("utilization")]),s("td",[t._v("infer from "),s("tt",[t._v("ip -s link")]),t._v(" (or /proc/net/dev) and known controller max tput for its interfaces")],1)]),t._v(" "),s("tr",[s("td",[t._v("Network controller")]),s("td",[t._v("saturation")]),s("td",[t._v("see network interface saturation, ...")])]),t._v(" "),s("tr",[s("td",[t._v("Network controller")]),s("td",[t._v("errors")]),s("td",[t._v("see network interface errors, ...")])]),t._v(" "),s("tr",[s("td",[t._v("CPU interconnect")]),s("td",[t._v("utilization")]),s("td",[t._v("LPE (CPC) for CPU interconnect ports, tput / max")])]),t._v(" "),s("tr",[s("td",[t._v("CPU interconnect")]),s("td",[t._v("saturation")]),s("td",[t._v("LPE (CPC) for stall cycles")])]),t._v(" "),s("tr",[s("td",[t._v("CPU interconnect")]),s("td",[t._v("errors")]),s("td",[t._v("LPE (CPC) for whatever is available")])]),t._v(" "),s("tr",[s("td",[t._v("Memory interconnect")]),s("td",[t._v("utilization")]),s("td",[t._v("LPE (CPC) for memory busses, tput / max; or CPI greater than, say, 5; CPC may also have local vs remote counters")])]),t._v(" "),s("tr",[s("td",[t._v("Memory interconnect")]),s("td",[t._v("saturation")]),s("td",[t._v("LPE (CPC) for stall cycles")])]),t._v(" "),s("tr",[s("td",[t._v("Memory interconnect")]),s("td",[t._v("errors")]),s("td",[t._v("LPE (CPC) for whatever is available")])]),t._v(" "),s("tr",[s("td",[t._v("I/O interconnect")]),s("td",[t._v("utilization")]),s("td",[t._v("LPE (CPC) for tput / max if available; inference via known tput from iostat/ip/...")])]),t._v(" "),s("tr",[s("td",[t._v("I/O interconnect")]),s("td",[t._v("saturation")]),s("td",[t._v("LPE (CPC) for stall cycles")])]),t._v(" "),s("tr",[s("td",[t._v("I/O interconnect")]),s("td",[t._v("errors")]),s("td",[t._v("LPE (CPC) for whatever is available ")])])])]),t._v(" "),s("h3",{attrs:{id:"software-resources"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#software-resources"}},[t._v("#")]),t._v(" Software Resources")]),t._v(" "),s("table",{attrs:{border:"1",width:"100%"}},[s("tbody",[s("tr",[s("th",[t._v("component")]),s("th",[t._v("type")]),s("th",[t._v("metric")])]),t._v(" "),s("tr",[s("td",[t._v("Kernel mutex")]),s("td",[t._v("utilization")]),s("td",[t._v('With CONFIG_LOCK_STATS=y, /proc/lock_stat "holdtime-totat" / "acquisitions" (also see "holdtime-min", "holdtime-max") [8]; dynamic tracing of lock functions or instructions (maybe)')])]),t._v(" "),s("tr",[s("td",[t._v("Kernel mutex")]),s("td",[t._v("saturation")]),s("td",[t._v('With CONFIG_LOCK_STATS=y, /proc/lock_stat "waittime-total" / "contentions" (also see "waittime-min", "waittime-max"); dynamic tracing of lock functions or instructions (maybe); spinning shows up with profiling ('),s("tt",[t._v("perf record -a -g -F 997 ...")]),t._v(", "),s("tt",[t._v("oprofile")]),t._v(", dynamic tracing)")],1)]),t._v(" "),s("tr",[s("td",[t._v("Kernel mutex")]),s("td",[t._v("errors")]),s("td",[t._v("dynamic tracing (eg, recusive mutex enter); other errors can cause kernel lockup/panic, debug with kdump/"),s("tt",[t._v("crash")])],1)]),t._v(" "),s("tr",[s("td",[t._v("User mutex")]),s("td",[t._v("utilization")]),s("td",[s("tt",[t._v("valgrind --tool=drd --exclusive-threshold=...")]),t._v(" (held time); dynamic tracing of lock to unlock function time")],1)]),t._v(" "),s("tr",[s("td",[t._v("User mutex")]),s("td",[t._v("saturation")]),s("td",[s("tt",[t._v("valgrind --tool=drd")]),t._v(" to infer contention from held time; dynamic tracing of synchronization functions for wait time; profiling (oprofile, PEL, ...) user stacks for spins")],1)]),t._v(" "),s("tr",[s("td",[t._v("User mutex")]),s("td",[t._v("errors")]),s("td",[s("tt",[t._v("valgrind --tool=drd")]),t._v(" various errors; dynamic tracing of pthread_mutex_lock() for EAGAIN, EINVAL, EPERM, EDEADLK, ENOMEM, EOWNERDEAD, ...")],1)]),t._v(" "),s("tr",[s("td",[t._v("Task capacity")]),s("td",[t._v("utilization")]),s("td",[s("tt",[t._v("top")]),t._v("/"),s("tt",[t._v("htop")]),t._v(', "Tasks" (current); '),s("tt",[t._v("sysctl kernel.threads-max")]),t._v(", /proc/sys/kernel/threads-max (max)")],1)]),t._v(" "),s("tr",[s("td",[t._v("Task capacity")]),s("td",[t._v("saturation")]),s("td",[t._v('threads blocking on memory allocation; at this point the page scanner should be running (sar -B "pgscan*"), else examine using dynamic tracing')])]),t._v(" "),s("tr",[s("td",[t._v("Task capacity")]),s("td",[t._v("errors")]),s("td",[t._v('"can\'t fork()" errors; user-level threads: pthread_create() failures with EAGAIN, EINVAL, ...; kernel: dynamic tracing of kernel_thread() ENOMEM')])]),t._v(" "),s("tr",[s("td",[t._v("File descriptors")]),s("td",[t._v("utilization")]),s("td",[t._v("system-wide: "),s("tt",[t._v("sar -v")]),t._v(', "file-nr" vs /proc/sys/fs/file-max; '),s("tt",[t._v("dstat --fs")]),t._v(', "files"; or just /proc/sys/fs/file-nr; per-process: '),s("tt",[t._v("ls /proc/PID/fd | wc -l")]),t._v(" vs "),s("tt",[t._v("ulimit -n")])],1)]),t._v(" "),s("tr",[s("td",[t._v("File descriptors")]),s("td",[t._v("saturation")]),s("td",[t._v("does this make sense?  I don't think there is any queueing or blocking, other than on memory allocation.")])]),t._v(" "),s("tr",[s("td",[t._v("File descriptors")]),s("td",[t._v("errors")]),s("td",[s("tt",[t._v("strace")]),t._v(" errno == EMFILE on syscalls returning fds (eg, open(), accept(), ...).")],1)])])]),t._v(" "),s("h4",{attrs:{id:"ulimit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ulimit"}},[t._v("#")]),t._v(" ulimit")]),t._v(" "),s("p",[t._v("ulimit 用于管理用户对系统资源的访问.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("-a   显示目前全部限制情况\n-c   设定 core 文件的最大值, 单位为区块\n-d   <数据节区大小> 程序数据节区的最大值, 单位为KB\n-f   <文件大小> shell 所能建立的最大文件, 单位为区块\n-H   设定资源的硬性限制, 也就是管理员所设下的限制\n-m   <内存大小> 指定可使用内存的上限, 单位为 KB\n-n   <文件描述符数目> 指定同一时间最多可开启的 fd 数\n-p   <缓冲区大小> 指定管道缓冲区的大小, 单位512字节\n-s   <堆叠大小> 指定堆叠的上限, 单位为 KB\n-S   设定资源的弹性限制\n-t   指定CPU使用时间的上限, 单位为秒\n-u   <进程数目> 用户最多可开启的进程数目\n-v   <虚拟内存大小> 指定可使用的虚拟内存上限, 单位为 KB\n")])])]),s("p",[t._v("例如:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ ulimit -a\ncore file size          (blocks, -c) 0\ndata seg size           (kbytes, -d) unlimited\nscheduling priority             (-e) 0\nfile size               (blocks, -f) unlimited\npending signals                 (-i) 127988\nmax locked memory       (kbytes, -l) 64\nmax memory size         (kbytes, -m) unlimited\nopen files                      (-n) 655360\npipe size            (512 bytes, -p) 8\nPOSIX message queues     (bytes, -q) 819200\nreal-time priority              (-r) 0\nstack size              (kbytes, -s) 8192\ncpu time               (seconds, -t) unlimited\nmax user processes              (-u) 4096\nvirtual memory          (kbytes, -v) unlimited\nfile locks                      (-x) unlimited\n")])])]),s("p",[t._v("注意, open socket 等资源拿到的也是 fd, 所以 "),s("code",[t._v("ulimit -n")]),t._v(" 比较小除了文件打不开, 还可能建立不了 socket 链接.")])])}),[],!1,null,null,null);e.default=v.exports}}]);