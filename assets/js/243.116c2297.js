(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{531:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"下届通配符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下届通配符","aria-hidden":"true"}},[t._v("#")]),t._v(" 下届通配符")]),t._v(" "),a("p",[a("router-link",{attrs:{to:"/java/generics/upperBounded.html"}},[t._v("上界通配符")]),t._v(" 部分显示上界通配符将未知类型限制为特定类型或该类型的子类型，\n并使用 extends 关键字来表示。以类似的方式，下限的通配符将未知类型限制为该类型的特定类型或超类型。")],1),t._v(" "),a("p",[t._v("使用通配符（?）表示较低的有界通配符，紧随其后的是 super 关键字，紧跟其下界："),a("code",[t._v("<? super A>")]),t._v("。")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("您可以为通配符指定上界，也可以指定下界，但不能同时指定两者。")])]),t._v(" "),a("p",[t._v("假设你想写一个把 Integer 对象放入列表的方法。为了最大限度地提高灵活性，您希望方法在 "),a("code",[t._v("List <Integer>")]),t._v("、"),a("code",[t._v("List <Number>")]),t._v(" 和 List "),a("code",[t._v("<Object>")]),t._v(" 上工作 - 任何可以保存 Integer 值的东西。")]),t._v(" "),a("p",[t._v("要编写在 Integer 列表和 Integer 的超类型（例如 Integer、Number 和 Object）上工作的方法，\n您可以指定 "),a("code",[t._v("List<? super Integer>")]),t._v("。\n"),a("code",[t._v("List <Integer>")]),t._v(" 和 "),a("code",[t._v("List<? super Integer>")]),t._v("，因为前者只匹配 Integer 类型的列表，而后者匹配任何 Integer 类型的任何类型的列表。")]),t._v(" "),a("p",[t._v("以下代码将数字 1 到 10 添加到列表的末尾：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addNumbers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("List"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),t._v(" Integer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("通配符使用指南部分提供有关何时使用上界通配符以及何时使用下界通配符指导。")])])},[],!1,null,null,null);s.default=n.exports}}]);