(window.webpackJsonp=window.webpackJsonp||[]).push([[495],{996:function(n,t,a){"use strict";a.r(t);var e=a(10),s=Object(e.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"css-doodle-fish-🐟-seaweed-🍀"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-doodle-fish-🐟-seaweed-🍀"}},[n._v("#")]),n._v(" CSS-Doodle fish 🐟 & seaweed 🍀")]),n._v(" "),a("p",[n._v("CSS-Doodle fish 🐟 & seaweed 🍀")]),n._v(" "),a("h3",{attrs:{id:"css-doodle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-doodle"}},[n._v("#")]),n._v(" CSS-doodle")]),n._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/css-doodle/css-doodle",target:"_blank",rel:"noopener noreferrer"}},[n._v("css-doodle"),a("OutboundLink")],1),n._v(" 是一个基于 Web-Component 的库。允许我们快速的创建基于 CSS Grid 布局的页面，以实现各种 CSS 效果（或许可以称之为 CSS 艺术）。")]),n._v(" "),a("p",[n._v("HTML：")]),n._v(" "),a("div",{staticClass:"language-HTML extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("\x3c!-- https://css-doodle.com --\x3e")]),n._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("<")]),n._v("css-doodle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(">")])]),n._v('\n    :doodle { @grid: 1x35 / 100vw 100vh; } \n    \n    :container { \n        background: linear-gradient(to top, rgba(0, 0, 0, .1) 0%, #aaf9ff 70%, transparent 100%); \n        margin: 0 auto;\n        background-repeat: no-repeat; \n        max-width: 740px;\n        overflow: hidden;\n        transform-style: preserve-3d;\n        perspective: 15px;\n        animation: move 15s infinite linear alternate;\n    } \n    \n    @nth(2n) {\n        --hslh: @pick(90, 100);\n        --hsls: @pick(80%, 85%, 90%);\n        --color: hsla(var(--hslh), var(--hsls), 50%, 0.9);\n        position: relative; \n        width: 1vw;\n        height: 2vw;\n        border-radius: 50%;\n        background: var(--color);\n        top: @r(20, 70)vh;\n        transform: scale(@r(0.5, 1.3));\n        --n: @p(-1, 1, 1.2, -1.2);\n        --c: var(--color);\n        box-shadow: @m100(\n            calc(@sin(@n() / 10) * 2.4vmin * @var(--n))\n            calc(@n() * 1vmin) 0\n            hsla(var(--hslh), var(--hsls), calc(50% - 1% * 0.2 * @n()), calc(0.9 - 0.011 * @n()))\n        );\n        transform: translateZ(@r(-5)px);\n        z-index: 10;\n    }\n    \n    @nth(4n + 1) {\n        position: relative;\n        width: 4.5vh;\n        height: 4vh;\n        --c: @pick(#bb2d00, #222, #6644a3);\n        background: var(--c);\n        top: @r(15, 90)vh;\n        @shape: @pick(fish, whale);\n        transform: translate3d(@r(-200, 200)%, @r(-200, 200)%, @r(-20)px) scale(@r(.8, 1.4)) rotate(calc(@pick(0deg, 180deg)));\n        z-index: @pick(5, 15);\n        opacity: .8;\n        animation: forward .8s infinite @r(0, 1.2)s alternate linear;\n    \n        ::before {\n            position: absolute;\n            content: "";\n            width: .5vh;\n            height: .5vh;\n            background: #fff;\n            border-radius: 50%;\n            left: 70%;\n            top: 45%;\n            z-index: 2;\n        }\n    }\n    \n    @nth(7, 27) {\n        width: .6vw;\n        height: .6vw;\n        border-radius: 50%;\n        background: rgba(255, 255, 255, .3);\n        top: @r(10, 50)%;\n        box-shadow:\n            0 -8vh .3vh 1.2px rgba(255, 255, 255, .4),\n            0 -18vh .3vh 1.6px rgba(255, 255, 255, .5),\n            0 -30vh .3vh 2px rgba(255, 255, 255, .6);\n        z-index: 1;\n        transform: translate(@r(-1000, 1000)%, 0);\n    }\n\n    @keyframes move {\n        100% {\n            perspective: 40px;\n        }\n    }\n    \n    @keyframes forward {\n        0% {\n            left: 0;\n        }\n        100% {\n            left: -3px;\n        }\n    }\n'),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("</")]),n._v("css-doodle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(">")])]),n._v("\n")])])]),a("p",[n._v("SCSS：")]),n._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[n._v("html, body ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[n._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[n._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[n._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[n._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v(" flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[n._v("align-items")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v(" center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[n._v("justify-content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v(" center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])])]),a("p",[n._v("效果如下（点击下图可以刷新效果）：")]),n._v(" "),a("iframe",{staticStyle:{width:"100%"},attrs:{height:"420",scrolling:"no",title:"CSS-Doodle fish 🐟 &   seaweed🍀",src:"https://codepen.io/Chokcoco/embed/WNNLOXV?height=420&theme-id=default&default-tab=result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[n._v("\n  See the Pen "),a("a",{attrs:{href:"https://codepen.io/Chokcoco/pen/WNNLOXV"}},[n._v("CSS-Doodle fish 🐟 &   seaweed🍀")]),n._v(" by Chokcoco\n  ("),a("a",{attrs:{href:"https://codepen.io/Chokcoco"}},[n._v("@Chokcoco")]),n._v(") on "),a("a",{attrs:{href:"https://codepen.io"}},[n._v("CodePen")]),n._v(".\n")])])}),[],!1,null,null,null);t.default=s.exports}}]);