(window.webpackJsonp=window.webpackJsonp||[]).push([[462],{944:function(t,a,s){"use strict";s.r(a);var n=s(10),p=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"使用多重背景单标签实现气泡按钮点击效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用多重背景单标签实现气泡按钮点击效果"}},[t._v("#")]),t._v(" 使用多重背景单标签实现气泡按钮点击效果")]),t._v(" "),s("p",[t._v("使用多重背景单标签实现气泡按钮点击效果")]),t._v(" "),s("h3",{attrs:{id:"关键点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关键点"}},[t._v("#")]),t._v(" 关键点")]),t._v(" "),s("ul",[s("li",[t._v("通过多重背景实现（radial-gradient），并用 animation 改变 background-position。")])]),t._v(" "),s("p",[t._v("HTML：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bubbly-button"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Click me!"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("SCSS：")]),t._v(" "),s("div",{staticClass:"language-scss extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scss"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$fuschia")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #ff0081"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$button-bg")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$fuschia")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$button-text-color")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #fff"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$baby-blue")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #f8faff"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 16px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Helvetica'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Arial'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sans-serif"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-align")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$baby-blue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".bubbly-button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Helvetica'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Arial'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sans-serif"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline-block"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1em"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1em 2em"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-bottom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 60px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-appearance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("appearance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$button-bg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$button-text-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 4px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("cursor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pointer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" transform ease-in 0.1s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" box-shadow ease-in 0.25s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-shadow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 2px 25px "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("255"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 130"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0.5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[s("span",{pre:!0,attrs:{class:"token parent important"}},[t._v("&")]),t._v(":focus ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("outline")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[s("span",{pre:!0,attrs:{class:"token parent important"}},[t._v("&")]),t._v(":before, "),s("span",{pre:!0,attrs:{class:"token parent important"}},[t._v("&")]),t._v(":after")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 140%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("z-index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -1000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all ease-in-out 0.5s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-repeat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" no-repeat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[s("span",{pre:!0,attrs:{class:"token parent important"}},[t._v("&")]),t._v(":before")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -75%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("radial-gradient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("circle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$button-bg")]),t._v(" 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" transparent 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("radial-gradient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("circle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  transparent 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$button-bg")]),t._v(" 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" transparent 30%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("radial-gradient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("circle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$button-bg")]),t._v(" 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" transparent 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("radial-gradient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("circle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$button-bg")]),t._v(" 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" transparent 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("radial-gradient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("circle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  transparent 10%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$button-bg")]),t._v(" 15%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" transparent 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("radial-gradient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("circle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$button-bg")]),t._v(" 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" transparent 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("radial-gradient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("circle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$button-bg")]),t._v(" 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" transparent 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("radial-gradient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("circle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$button-bg")]),t._v(" 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" transparent 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("radial-gradient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("circle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$button-bg")]),t._v(" 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" transparent 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10% 10%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 20% 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 15% 15%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 20% 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 18% 18%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 10% 10%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 15% 15%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 10% 10%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 18% 18%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//background-position: 0% 80%, -5% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 85% 30%;")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[s("span",{pre:!0,attrs:{class:"token parent important"}},[t._v("&")]),t._v(":after")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("bottom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -75%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("radial-gradient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("circle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$button-bg")]),t._v(" 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" transparent 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("radial-gradient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("circle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$button-bg")]),t._v(" 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" transparent 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("radial-gradient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("circle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  transparent 10%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$button-bg")]),t._v(" 15%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" transparent 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("radial-gradient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("circle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$button-bg")]),t._v(" 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" transparent 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("radial-gradient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("circle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$button-bg")]),t._v(" 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" transparent 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("radial-gradient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("circle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$button-bg")]),t._v(" 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" transparent 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("radial-gradient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("circle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$button-bg")]),t._v(" 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" transparent 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 15% 15%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 20% 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 18% 18%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 20% 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 15% 15%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 10% 10%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 20% 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n \n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[s("span",{pre:!0,attrs:{class:"token parent important"}},[t._v("&")]),t._v(":active")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scale")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0.9"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("darken")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$button-bg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 5%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-shadow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 2px 25px "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("255"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 130"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0.2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[s("span",{pre:!0,attrs:{class:"token parent important"}},[t._v("&")]),t._v(".animate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[s("span",{pre:!0,attrs:{class:"token parent important"}},[t._v("&")]),t._v(":before")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" topBubbles ease-in-out 0.75s forwards"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[s("span",{pre:!0,attrs:{class:"token parent important"}},[t._v("&")]),t._v(":after")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bottomBubbles ease-in-out 0.75s forwards"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" topBubbles")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("0%")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5% 90%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 10% 90%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 10% 90%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 15% 90%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 25% 90%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 25% 90%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 40% 90%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 55% 90%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 70% 90%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("50% ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0% 80%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0% 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 10% 40%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 20% 0%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 30% 30%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 22% 50%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 50% 50%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 65% 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 90% 30%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("100% ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0% 70%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0% 10%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 10% 30%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 20% -10%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 30% 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 22% 40%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 50% 40%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 65% 10%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 90% 20%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0% 0%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0% 0%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  0% 0%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  0% 0%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  0% 0%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  0% 0%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" bottomBubbles")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("0%")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10% -10%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 30% 10%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 55% -10%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 70% -10%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 85% -10%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 70% -10%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 70% 0%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("50% ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0% 80%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 20% 80%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 45% 60%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 60% 100%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 75% 70%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 95% 60%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 105% 0%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("100% ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0% 90%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 20% 90%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 45% 70%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 60% 110%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 75% 80%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 95% 70%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 110% 10%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0% 0%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0% 0%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  0% 0%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  0% 0%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  0% 0%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  0% 0%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("效果如下：")]),t._v(" "),s("iframe",{staticStyle:{width:"100%"},attrs:{height:"320",scrolling:"no",title:"Bubbly button (Design by Gal Shir)",src:"https://codepen.io/Chokcoco/embed/bGGMLdd?height=320&theme-id=default&default-tab=css,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[t._v("\n  See the Pen "),s("a",{attrs:{href:"https://codepen.io/Chokcoco/pen/bGGMLdd"}},[t._v("Bubbly button (Design by Gal Shir)")]),t._v(" by Chokcoco\n  ("),s("a",{attrs:{href:"https://codepen.io/Chokcoco"}},[t._v("@Chokcoco")]),t._v(") on "),s("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".\n")])])}),[],!1,null,null,null);a.default=p.exports}}]);