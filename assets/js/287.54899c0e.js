(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{390:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"定义方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定义方法","aria-hidden":"true"}},[s._v("#")]),s._v(" 定义方法")]),s._v(" "),t("p",[t("TOC",{class:"table-of-contents",attrs:{"list-type":"ul","include-level":[2,3]}},[t("template",{slot:"header"}),t("template",{slot:"footer"})],2)],1),s._v(" "),t("p",[s._v("以下是典型的方法声明示例")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("calculateAnswer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),s._v(" wingSpan"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" numberOfEngines"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                              "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),s._v(" length"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),s._v(" grossTons"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//在这里做计算")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("方法声明的唯一必需元素是方法的返回类型，名称，一对括号 () 和大括号 {} 之间的正文。")]),s._v(" "),t("p",[s._v("更一般地说，方法声明有六个组成部分：")]),s._v(" "),t("ul",[t("li",[s._v("修饰符 - 如 public、private 等等，您将在后面了解到。")]),s._v(" "),t("li",[s._v("返回类型 - 该方法返回的值的数据类型，或者该方法是 void 则不返回值。")]),s._v(" "),t("li",[s._v("方法名称 - 字段名称的规则也适用于方法名称，但约定有所不同。")]),s._v(" "),t("li",[s._v("括号中的参数列表 - 以逗号分隔的输入参数列表，前面是其数据类型，由括号括起来。如果没有参数，则必须使用空括号  ()。")]),s._v(" "),t("li",[s._v("异常列表 - 稍后讨论。")]),s._v(" "),t("li",[s._v("方法体 - 括在大括号之间的代码，包括局部变量的声明，在这里。")])]),s._v(" "),t("p",[s._v("修饰符，返回类型和参数将在本课稍后讨论。异常将在后面的课程中讨论。")]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("定义：")]),s._v(" 方法声明的两个组件包括方法签名-方法的名称和参数类型")])]),s._v(" "),t("p",[s._v("上述的方法签名是：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("calculateAnswer（"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),s._v("，"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v("，"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),s._v("，"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),s._v("）\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"方法命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法命名","aria-hidden":"true"}},[s._v("#")]),s._v(" 方法命名")]),s._v(" "),t("p",[s._v("虽然方法名称可以是任何合法的标识符，但代码约定限制方法名称。按照惯例，方法名称应该是 "),t("strong",[s._v("小写")]),s._v(" 的 "),t("strong",[s._v("动词")]),s._v(" 或以小写开头的 "),t("strong",[s._v("多字词名称")]),s._v(" ，后跟形容词，名词等。在多字名称中，每个第二个和后面的单词的第一个字母应该大写化。这里有些例子：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("run\nrunFast\ngetBackground\ngetFinalData\ncompareTo\nsetX\nisEmpty\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("通常，方法在其类中具有唯一的名称。但是，由于方法重载，方法可能与其他方法具有相同的名称。")]),s._v(" "),t("h2",{attrs:{id:"方法重载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法重载","aria-hidden":"true"}},[s._v("#")]),s._v(" 方法重载")]),s._v(" "),t("p",[s._v("Java 编程语言支持重载方法，Java 可以区分不同方法签名的方法。这意味着如果一个类中的方法具有不同的参数列表，那么类中的方法可以具有相同的名称（在 "),t("router-link",{attrs:{to:"/java/iandi/"}},[s._v("接口和继承")]),s._v(" 课程中将讨论这些参数）。")],1),s._v(" "),t("p",[s._v("假设你有一个类可以使用书法绘制各种类型的数据（字符串，整数等等），并且包含一个绘制每个数据类型的方法。为每个数据类型方法使用一个新的名称是麻烦的，例如，drawString、drawInteger、drawFloat 等。在 Java 编程语言中，您可以对所有绘图方法使用相同的名称，但将不同的参数列表传递给每个方法。因此，数据绘图类可能会声明四个名为 draw 的方法，每个方法具有不同的参数列表。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DataArtist")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("draw")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("String s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("draw")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("draw")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),s._v(" f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("draw")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),s._v(" f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[s._v("重载方法根据传递给方法的参数的数量和类型进行区分。在代码示例，"),t("code",[s._v("draw(String s)")]),s._v(" 和 "),t("code",[s._v("draw(int i)")]),s._v(" 是不同的和独特的方法，因为它们需要不同的参数类型。")]),s._v(" "),t("p",[s._v("您不能声明具有相同名称和相同数量和类型的参数的多个方法，因为编译器无法将它们分开。")]),s._v(" "),t("p",[s._v("在区分方法时，编译器不会考虑返回类型，因此即使有不同的返回类型，也不能声明具有相同签名的两个方法。")]),s._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("重载方法应该谨慎使用，因为他们可以使代码不那么易读")])])])},[],!1,null,null,null);a.default=e.exports}}]);