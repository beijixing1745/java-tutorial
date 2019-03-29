(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{307:function(t,a,s){"use strict";s.r(a);var e=s(2),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"set-实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-实现","aria-hidden":"true"}},[t._v("#")]),t._v(" set 实现")]),t._v(" "),s("p",[t._v("这些 set 实现被分组为 "),s("code",[t._v("通用")]),t._v(" 和 "),s("code",[t._v("专用")]),t._v(" 实现")]),t._v(" "),s("h2",{attrs:{id:"通用实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通用实现","aria-hidden":"true"}},[t._v("#")]),t._v(" 通用实现")]),t._v(" "),s("p",[t._v("有三种通用 set 实现")]),t._v(" "),s("ul",[s("li",[t._v("HashSet")]),t._v(" "),s("li",[t._v("TreeSet")]),t._v(" "),s("li",[t._v("LinkedHashSet")])]),t._v(" "),s("p",[t._v("HashSet 比 TreeSet（大多数操作的恒定时间对对数时间）快得多，但不提供排序保证。\n如果需要可以使用 "),s("code",[t._v("SortedSet")]),t._v(" 操作，如果需要按值排序，请使用 TreeSet。否则使用 HashSet。")]),t._v(" "),s("p",[t._v("LinkedHashSet 某种意义上是 HashSet 和 TreeSet 的合并。通过哈希表+链表来实现，它提供了插入顺序，运行速度几乎与 HashSet 一样快。")]),t._v(" "),s("p",[t._v("值得注意的一点是 HashSet，迭代数目和桶容量的综合是线性的。因此，选择太高的初始容量可能可能浪费空间和时间。\n另一方面，选择太低的初始容量，会导致每次扩容 copy 数据结构而浪费过多的时间。如果不指定容量，默认值为 16。")]),t._v(" "),s("p",[t._v("还有一个参数，加载因子。与空间消耗有关，如果你不了解这些，那么就使用默认值是最好的。")]),t._v(" "),s("p",[t._v("LinkedHashSet 和 HashSet 有相同的调正参数，TreeSet 没有调整参数。")]),t._v(" "),s("h2",{attrs:{id:"专用实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#专用实现","aria-hidden":"true"}},[t._v("#")]),t._v(" 专用实现")]),t._v(" "),s("p",[t._v("有两个特殊用途的实现 "),s("code",[t._v("EnumSet")]),t._v(" 和 "),s("code",[t._v("CopyOnWriteArraySet")])]),t._v(" "),s("p",[t._v("EnumSet 是 set 枚举类型的高性能实现。在内部由一个变量表示，通常是 Long。枚举类型支持范围迭代，比如迭代星期")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Day d "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" EnumSet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Day"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MONDAY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Day"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FRIDAY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("提供了静态方法，可以快速创建")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("    EnumSet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("of")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BOLD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ITALIC"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("CopyOnWriteArraySet 是一个 Set 由写时复制数组备份的实现。所有可变操作，如 add，set，和 remove，\n通过使所述阵列的一个新的复制来实现; 永远不需要锁定。即使迭代可以安全地同时进行元素插入和删除。\n不像大多数 Set 实施中，add，remove，和 contains 方法需要的时间与集合的大小。\n这个实现只适用于很少修改但频繁迭代的集合。它非常适合维护必须防止重复的事件处理程序列表。")])])},[],!1,null,null,null);a.default=n.exports}}]);