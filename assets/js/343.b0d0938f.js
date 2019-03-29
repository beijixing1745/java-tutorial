(window.webpackJsonp=window.webpackJsonp||[]).push([[343],{265:function(n,t,s){"use strict";s.r(t);var a=s(2),e=Object(a.a)({},function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"连接到一个-url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#连接到一个-url","aria-hidden":"true"}},[n._v("#")]),n._v(" 连接到一个 URL")]),n._v(" "),s("p",[n._v("成功创建 URL 对象后，可以调用 URL 对象的 openConnection 方法来获取 URLConnection 对象或其协议特定的子类之一，\n例如 java.net.HttpURLConnection")]),n._v(" "),s("p",[n._v("您可以使用此 URLConnection 对象来设置连接前可能需要的参数和常规请求属性。\n只有在 URLConnection.connect 调用该方法时才会启动到由 URL 表示的远程对象的连接。\n当你这样做时，你正在通过网络初始化 Java 程序和 URL 之间的通信链接。例如，以下代码打开到该站点的连接 example.com：")]),n._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("try")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    URL myURL "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("new")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("URL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[n._v('"http://example.com/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    URLConnection myURLConnection "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" myURL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("openConnection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    myURLConnection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("connect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("catch")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("MalformedURLException")]),n._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// new URL() failed")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// ...")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("catch")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("IOException")]),n._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// openConnection() failed")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("// ...")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br")])]),s("p",[n._v("URLConnection 每次通过调用 openConnection 此 URL 的协议处理程序的方法创建一个新对象。")]),n._v(" "),s("p",[n._v("您并不总是需要显式调用该 connect 方法来启动连接。如果需要，取决于连接的操作（如 getInputStream，getOutputStream 等）将隐式执行连接。")]),n._v(" "),s("p",[n._v("既然已经成功地连接到您的 URL，您可以使用 URLConnection 对象来执行诸如读取或写入连接之类的操作。\n下一节将向您展示如何操作。")])])},[],!1,null,null,null);t.default=e.exports}}]);