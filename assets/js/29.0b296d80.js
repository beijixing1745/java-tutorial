(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{244:function(v,_,t){v.exports=t.p+"assets/img/classes-access.c2808a07.gif"},432:function(v,_,t){"use strict";t.r(_);var a=t(2),d=Object(a.a)({},function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"控制对类成员的访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#控制对类成员的访问","aria-hidden":"true"}},[v._v("#")]),v._v(" 控制对类成员的访问")]),v._v(" "),a("p",[v._v("访问级别修饰符确定其他类是否可以使用特定字段或调用特定方法。有两个级别的访问控制：")]),v._v(" "),a("ul",[a("li",[v._v("在顶层类级别：public 或 package-private（不显式修饰符）。")]),v._v(" "),a("li",[v._v("在成员级别：public、private、protected 或 package-private (不显式修饰符).")])]),v._v(" "),a("p",[v._v("类可以用修饰符 public 声明，在这种情况下，该类对所有类都可见。如果一个类没有修饰符（默认值，也称为 package-private），它只在其自己的包中可见（包被命名为相关类的组 - 您将在以后的课程中了解它们。）")]),v._v(" "),a("p",[v._v("在成员级别，您也可以使用 public 修饰符或无修饰符（package-private），就像顶级类一样，具有相同的含义。对于成员，还有两个附加的访问修饰符：private 和 protected。该 private 修饰符指定该成员只能在其自己的类中访问。所述 protected 修饰符指定了只能在其自己的封装件内被访问的（与包专用），此外，通过它的类的另一个包的子类。")]),v._v(" "),a("p",[v._v("下表显示了对每个修饰符允许的成员的访问。")]),v._v(" "),a("table",[a("thead",[a("tr",[a("th",[v._v("修饰符")]),v._v(" "),a("th",[v._v("类")]),v._v(" "),a("th",[v._v("包")]),v._v(" "),a("th",[v._v("子类")]),v._v(" "),a("th",[v._v("世界")])])]),v._v(" "),a("tbody",[a("tr",[a("td",[v._v("public")]),v._v(" "),a("td",[v._v("✔")]),v._v(" "),a("td",[v._v("✔")]),v._v(" "),a("td",[v._v("✔")]),v._v(" "),a("td",[v._v("✔")])]),v._v(" "),a("tr",[a("td",[v._v("protected")]),v._v(" "),a("td",[v._v("✔")]),v._v(" "),a("td",[v._v("✔")]),v._v(" "),a("td",[v._v("✔")]),v._v(" "),a("td",[v._v("×")])]),v._v(" "),a("tr",[a("td",[v._v("没有修饰语")]),v._v(" "),a("td",[v._v("✔")]),v._v(" "),a("td",[v._v("✔")]),v._v(" "),a("td",[v._v("×")]),v._v(" "),a("td",[v._v("×")])]),v._v(" "),a("tr",[a("td",[v._v("private")]),v._v(" "),a("td",[v._v("✔")]),v._v(" "),a("td",[v._v("×")]),v._v(" "),a("td",[v._v("×")]),v._v(" "),a("td",[v._v("×")])])])]),v._v(" "),a("p",[v._v("第一个数据列指示类本身是否可以访问由访问级别定义的成员。正如你所看到的，class 总是可以访问自己的成员。第二列表示与类相同的包中的类是否可以访问该成员。第三列指示在此包之外声明的类的子类是否可以访问该成员。第四列指示是否所有类都可以访问该成员。")]),v._v(" "),a("p",[v._v("访问级别以两种方式影响您。首先，当您使用来自其他来源的类（例如 Java 平台中的类）时，访问级别决定您自己的类可以使用哪些类的成员。其次，当你写一个类时，你需要决定什么访问级别每个成员变量和你的类中的每个方法都应该有。")]),v._v(" "),a("p",[v._v("我们来看看一个类的集合，看看访问级别如何影响可见性。 下图显示了此示例中的四个类以及它们是如何相关的。")]),v._v(" "),a("p",[a("img",{attrs:{src:t(244),alt:""}})]),v._v(" "),a("blockquote",[a("p",[v._v("下面这个表，我看了半天都没看懂到底怎么看出来关系是怎么看的")])]),v._v(" "),a("table",[a("thead",[a("tr",[a("th",[v._v("修饰符")]),v._v(" "),a("th",[v._v("Alpha")]),v._v(" "),a("th",[v._v("Beta")]),v._v(" "),a("th",[v._v("AlphaSub")]),v._v(" "),a("th",[v._v("Gamma")])])]),v._v(" "),a("tbody",[a("tr",[a("td",[v._v("public")]),v._v(" "),a("td",[v._v("✔")]),v._v(" "),a("td",[v._v("✔")]),v._v(" "),a("td",[v._v("✔")]),v._v(" "),a("td",[v._v("✔")])]),v._v(" "),a("tr",[a("td",[v._v("protected")]),v._v(" "),a("td",[v._v("✔")]),v._v(" "),a("td",[v._v("✔")]),v._v(" "),a("td",[v._v("✔")]),v._v(" "),a("td",[v._v("×")])]),v._v(" "),a("tr",[a("td",[v._v("没有修饰语")]),v._v(" "),a("td",[v._v("✔")]),v._v(" "),a("td",[v._v("✔")]),v._v(" "),a("td",[v._v("×")]),v._v(" "),a("td",[v._v("×")])]),v._v(" "),a("tr",[a("td",[v._v("private")]),v._v(" "),a("td",[v._v("✔")]),v._v(" "),a("td",[v._v("×")]),v._v(" "),a("td",[v._v("×")]),v._v(" "),a("td",[v._v("×")])])])]),v._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),a("p",[v._v("如果其他程序员使用您的类，您希望确保误用错误不会发生。访问级别可以帮助您执行此操作")]),v._v(" "),a("ul",[a("li",[v._v("用对特定成员有意义的最严格的访问级别。使用 privat e除非你有一个很好的理由不要。")]),v._v(" "),a("li",[v._v("避免 public 常数以外的字段。（本教程中的许多示例使用公共字段，这可能有助于简要说明一些要点，但不建议用于生产代码。）公共字段往往将您链接到特定实现，并限制您更改代码的灵活性。")])])])])},[],!1,null,null,null);_.default=d.exports}}]);