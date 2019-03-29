(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{287:function(a,s,t){"use strict";t.r(s);var e=t(2),n=Object(e.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"管理源文件和类文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#管理源文件和类文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 管理源文件和类文件")]),a._v(" "),t("p",[a._v("Java 平台的许多实现都依赖分层文件系统来管理源文件和类文件，尽管 「Java 语言规范并」不要求这样做。战略如下。")]),a._v(" "),t("p",[a._v("将类、接口、枚举或注释类型的源代码放在一个文本文件中，该文件的名称是类型的简单名称，其扩展名是 .java。例如：")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//in the Rectangle.java file")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" graphics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Rectangle")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("然后，将源文件放在名称反映类型所属包的名称的目录中：")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\\graphics\\Rectangle.java\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("假定 Microsoft Windows 文件名分隔符反斜杠（对于 UNIX，使用正斜杠），包成员的限定名称和文件的路径名是并行的。")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("name")]),a._v(" – graphics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Rectangle\npathname to file – graphics\\Rectangle"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("java\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("正如您应该记得的，按照惯例，一家公司使用其反向因特网域名作为其包名。示例公司的互联网域名 example.com 将在其所有包名称之前 com.example。\n包名称的每个组件都对应一个子目录。所以，如果公司有一个 com.example.graphics 包含 Rectangle.java 源文件的包，\n它将包含在一系列子目录中，如下所示：")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\\com\\example\\graphics\\Rectangle"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("java\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("编译源文件时，编译器会为其中定义的每种类型创建一个不同的输出文件。输出文件的基本名称是类型的名称，其扩展名是 .class。例如，如果源文件是这样的")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//in the Rectangle.java file")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("example"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("graphics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Rectangle")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Helper")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br")])]),t("p",[a._v("那么编译的文件将位于：")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("父目录 \\com\\example\\graphics\\Rectangle.class\n父目录 \\com\\example\\graphics\\Helper.class\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("像 .java 源文件一样，编译的 .class 文件应该在一系列反映包名称的目录中。\n但是，.class 文件的路径不必与 .java 源文件的路径相同。您可以分别安排源和目录目录，如下所示：")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token generics function"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("path_one"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\\sources\\com\\example\\graphics\\Rectangle"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("java\n\n"),t("span",{pre:!0,attrs:{class:"token generics function"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("path_two"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\\classes\\com\\example\\graphics\\Rectangle"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("通过这样做，您可以将 classes 目录提供给其他程序员，而不会泄露您的源代码。\n您还需要以这种方式管理源文件和类文件，以便编译器和 Java 虚拟机（JVM）可以找到您的程序使用的所有类型。")]),a._v(" "),t("p",[a._v("classes 目录的完整路径 "),t("code",[a._v("<path_two>\\classes")]),a._v("，称为类路径，并用 CLASSPATH 系统变量设置。\n编译器和 JVM .class 通过将包名称添加到类路径来构建文件的路径。例如，如果")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("path_two"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\\classes\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("是你的类路径，包名是")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("example"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("graphics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("那么编译器和 JVM 寻找 files 中的 .class")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token generics function"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("path_two"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\\classes\\com\\example\\graphics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("类路径可能包含多个路径，用分号（Windows）或冒号（UNIX）分隔。默认情况下，编译器和 JVM 搜索当前目录以及包含 Java 平台类的 JAR 文件，\n以便这些目录自动位于类路径中。")]),a._v(" "),t("h2",{attrs:{id:"设置-classpath-系统变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置-classpath-系统变量","aria-hidden":"true"}},[a._v("#")]),a._v(" 设置 CLASSPATH 系统变量")]),a._v(" "),t("p",[a._v("要显示当前 CLASSPATH 变量，请在 Windows 和 UNIX（Bourne shell）中使用这些命令：")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("In Windows"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("   C"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\\"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" set CLASSPATH\nIn UNIX"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("      "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("%")]),a._v(" echo $CLASSPATH\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("要删除 CLASSPATH 变量的当前内容，请使用以下命令：")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("In Windows"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("   C"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\\"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" set CLASSPATH"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\nIn UNIX"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("      "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("%")]),a._v(" unset CLASSPATH"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" export CLASSPATH\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("要设置 CLASSPATH 变量，请使用这些命令（例如）：")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("In Windows"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("   C"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\\"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" set CLASSPATH"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("C"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\\users\\george\\java\\classes\nIn UNIX"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("      "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("%")]),a._v(" CLASSPATH"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("home"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("george"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("java"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("classes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" export CLASSPATH\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])])])},[],!1,null,null,null);s.default=n.exports}}]);