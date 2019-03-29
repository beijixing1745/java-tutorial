(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{465:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"object-作为超类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-作为超类","aria-hidden":"true"}},[t._v("#")]),t._v(" Object 作为超类")]),t._v(" "),a("p",[a("TOC",{class:"table-of-contents",attrs:{"list-type":"ul","include-level":[2,3]}},[a("template",{slot:"header"}),a("template",{slot:"footer"})],2)],1),t._v(" "),a("p",[t._v("Object 在 java.lang 包，坐镇类层次结构树的顶端。每个阶级都是 Object 阶级的直接或间接的后裔 。您使用或编写的每个类都继承了 Object 实例方法。您不需要使用这些方法中的任何一种，但是，如果您选择这样做，则可能需要使用特定于您的类的代码来覆盖它们。本节讨论 Object 的方法是：")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("protected Object clone() throws CloneNotSupportedException")])]),t._v(" "),a("p",[t._v("传进并返回此对象的副本")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("public boolean equals(Object obj)")])]),t._v(" "),a("p",[t._v("其他某个对象是否「等于」这一个")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("protected void finalize() throws Throwable")])]),t._v(" "),a("p",[t._v("当垃圾收集确定没有更多的对象引用时，垃圾回收器调用该方法")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("public final Class getClass()")])]),t._v(" "),a("p",[t._v("返回对象的运行时类")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("public int hashCode()")])]),t._v(" "),a("p",[t._v("返回该对象的哈希码值")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("public String toString()")])]),t._v(" "),a("p",[t._v("返回对象的字符串表示形式。")])])]),t._v(" "),a("p",[t._v("notify、notifyAll 和 wait方法，它在后面的课程中讨论，并不会在这里介绍的同步独立运行的线程的活动中发挥作用。有五种方法：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("public final void notify()")])]),t._v(" "),a("li",[a("code",[t._v("public final void notifyAll()")])]),t._v(" "),a("li",[a("code",[t._v("public final void wait()")])]),t._v(" "),a("li",[a("code",[t._v("public final void wait(long timeout)")])]),t._v(" "),a("li",[a("code",[t._v("public final void wait(long timeout, int nanos)")])])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("这些方法中有一些细微的方面，尤其是 clone 方法。")])]),t._v(" "),a("h2",{attrs:{id:"clone-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clone-方法","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("clone()")]),t._v(" 方法")]),t._v(" "),a("p",[t._v("如果某个类或其某个超类实现了该 Cloneable 接口，则可以使用该 "),a("code",[t._v("clone()")]),t._v(" 方法从现有对象创建一个副本。要创建一个克隆，你写：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("aCloneableObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Object 这个方法的实现将检查 "),a("code",[t._v("clone()")]),t._v(" 被调用的对象是否实现了 Cloneable 接口。如果该对象没有，该方法抛出一个 CloneNotSupportedException 异常。异常处理将在后面的课程中介绍。目前，您需要知道 "),a("code",[t._v("clone()")]),t._v(" 必须声明为")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" Object "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" CloneNotSupportedException\n\nor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" Object "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" CloneNotSupportedException\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("如果你打算写一个 "),a("code",[t._v("clone()")]),t._v(" 方法来覆盖 Object。")]),t._v(" "),a("p",[t._v("如果 "),a("code",[t._v("clone()")]),t._v(" 被调用的对象确实实现了 Cloneable 接口，则 Object 的 "),a("code",[t._v("clone()")]),t._v(" 方法的实现将创建与原始对象相同类的对象，并将新对象的成员变量初始化为与原始对象的相应成员变量具有相同的值。")]),t._v(" "),a("p",[t._v("使类可复制的最简单的方法是添加 implements Cloneable 到类的声明中。那么你的对象可以调用 "),a("code",[t._v("clone()")]),t._v(" 方法。")]),t._v(" "),a("p",[t._v("对于一些类，默认行为 Object 的 "),a("code",[t._v("clone()")]),t._v(" 方法工作得很好。但是，如果某个对象包含对外部对象的引用,则可能需要重写 "),a("code",[t._v("clone()")]),t._v(" 才能获得正确的行为。否则，外部引用对象所做的更改也将在克隆中可见。这意味着原始对象和它的克隆不是独立的，要解耦他们，必须重写。连引用的外部对象也需要克隆，以便该对象和它的克隆是真正独立的。")]),t._v(" "),a("h2",{attrs:{id:"equals-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#equals-方法","aria-hidden":"true"}},[t._v("#")]),t._v(" equals 方法")]),t._v(" "),a("p",[t._v("equals 方法比较两个对象是否相等，如果返回 true 则相等。Object 中提供的 equals 方法使用 「==」 来确定两个对象是否相等，对于原始数据类型，这给出了正确的结果。然而，对于对象来说，事实并非如此。")]),t._v(" "),a("p",[t._v("为了测试两个包含相同信息的对象是否相等。必须重写 equals 方法。这里是一个例子")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Book")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Book")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ISBN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getISBN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("考虑这个测试 Book 类的两个实例是否相等的代码：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Swing Tutorial, 2nd edition")]),t._v("\nBook firstBook  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Book")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0201914670"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nBook secondBook "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Book")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0201914670"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("firstBook"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("secondBook"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"objects are equal"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"objects are not equal"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("即使 firstBook 和 secondBook 引用不同的对象。它们被认为是相等的，因为比较的对象包含相同的 ISBN 号码。")]),t._v(" "),a("p",[t._v("如果 equals 默认的运算不符合你的类，则应该始始终重写该方法")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("注意：如果您重写 "),a("code",[t._v("equals()")]),t._v("，您也必须重写 "),a("code",[t._v("hashCode()")]),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"finalize-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#finalize-方法","aria-hidden":"true"}},[t._v("#")]),t._v(" finalize 方法")]),t._v(" "),a("p",[t._v("Object 类提供的回调方法，当对象变成垃圾时，该方法被回调。Object 的 "),a("code",[t._v("finalize()")]),t._v(" 什么都不做，你可以覆盖 "),a("code",[t._v("finalize()")]),t._v(" 做清理工作，比如释放资源。")]),t._v(" "),a("p",[t._v("该 "),a("code",[t._v("finalize()")]),t._v(" 方法可以被系统自动调用，但是当它被调用时，或者即使被调用，也是不确定的。\n因此，你不应该依靠这种方法来为你做清理工作。例如，如果执行 I / O 之后没有在代码中关闭文件描述符，并且希望 "),a("code",[t._v("finalize()")]),t._v(" 关闭它们，则可能会用完文件描述符。")]),t._v(" "),a("h2",{attrs:{id:"getclass-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getclass-方法","aria-hidden":"true"}},[t._v("#")]),t._v(" getClass 方法")]),t._v(" "),a("p",[t._v("你不能覆盖 getClass。")]),t._v(" "),a("p",[t._v("getClass 方法返回一个 Class 对象，该对象具有可用于获取有关该类的信息的方法，例如 "),a("code",[t._v("name（getSimpleName()）")]),t._v("，其 "),a("code",[t._v("superclass（getSuperclass()）")]),t._v("以及它实现的 "),a("code",[t._v("接口（getInterfaces()）")]),t._v("。例如，以下方法获取并显示对象的类名称：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printClassName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The object\'s"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" class is "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n        obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSimpleName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[a("code",[t._v("java.lang")]),t._v(" 包中的 Class 类有大量的方法（超过 50个）。例如，您可以测试以查看该类是否是注解（"),a("code",[t._v("isAnnotation()")]),t._v("），接口（"),a("code",[t._v("isInterface()")]),t._v("）还是枚举（"),a("code",[t._v("isEnum()")]),t._v("）。你可以看到对象的字段是什么（"),a("code",[t._v("getFields()")]),t._v("）或者它的方法是什么（"),a("code",[t._v("getMethods()")]),t._v("）等等。")]),t._v(" "),a("h2",{attrs:{id:"hashcode-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hashcode-方法","aria-hidden":"true"}},[t._v("#")]),t._v(" hashCode 方法")]),t._v(" "),a("p",[a("code",[t._v("hashCode()")]),t._v(" 方法返回的值是对象的哈希码，它是以十六进制表示的对象的内存地址。根据定义，如果两个对象相等，则它们的哈希码也 "),a("strong",[t._v("必须相等")]),t._v("。如果你重写了这个 "),a("code",[t._v("equals()")]),t._v(" 方法，你就改变了两个对象的等同方式，而且其 Object 的 "),a("code",[t._v("hashCode()")]),t._v(" 不再有效。因此，如果您重写 "),a("code",[t._v("equals()")]),t._v(" 方法，则还必须重写该 "),a("code",[t._v("hashCode()")]),t._v(" 方法。")]),t._v(" "),a("h2",{attrs:{id:"tostring-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tostring-方法","aria-hidden":"true"}},[t._v("#")]),t._v(" toString 方法")]),t._v(" "),a("p",[t._v("你的类中应该总是考虑重写 "),a("code",[t._v("toString()")]),t._v(" 方法。")]),t._v(" "),a("p",[t._v("所述 Object 的 "),a("code",[t._v("toString()")]),t._v(" 方法返回 String 的对象，这是对于调试非常有用的表示。String 对象的表示完全取决于对象，这就是为什么你需要在你的类中重写 "),a("code",[t._v("toString()")]),t._v("。")]),t._v(" "),a("p",[t._v("您可以使用 "),a("code",[t._v("System.out.println()")]),t._v(" 来显示 "),a("code",[t._v("toString()")]),t._v(" 的内容（对象的文本表示形式），例如：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("firstBook"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这对于一个正确的重写 "),a("code",[t._v("toString()")]),t._v("方法来说，可以打印一些有用的东西，比如：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("ISBN："),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0201914670")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Swing教程"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" 构建GUI的指南，第"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("版\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])},[],!1,null,null,null);s.default=e.exports}}]);