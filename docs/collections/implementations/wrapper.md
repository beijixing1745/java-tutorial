# 包装器实现
包装器实现将他们所有的实际工作委托给指定的集合，但在该集合提供的顶部添加额外的功能。对于设计模式来说，这是一个 装饰模式 。

这些实现是匿名的，而不是提供一个公共类，类库提供了一个静态工厂方法。所有这些实现都在 Collections 类中找到。它又静态方法组成。

## 同步包装器

同步包装器将自动同步(线程安全)添加到任意集合。6 个核心接口 Collection， Set， List， Map， SortedSet 和 SortedMap 都有一个静态工厂方法。

```java
public static <T> Collection<T> synchronizedCollection(Collection<T> c);
public static <T> Set<T> synchronizedSet(Set<T> s);
public static <T> List<T> synchronizedList(List<T> list);
public static <K,V> Map<K,V> synchronizedMap(Map<K,V> m);
public static <T> SortedSet<T> synchronizedSortedSet(SortedSet<T> s);
public static <K,V> SortedMap<K,V> synchronizedSortedMap(SortedMap<K,V> m);
```

这些方法中的每一个都返回由指定集合 Collection 备份的同步（线程安全）。为了保证串行访问，
必须通过返回的集合完成对后台集合的所有访问。保证这一点的简单方法不是保留对后台集合的引用。
使用以下技巧创建同步集合。

```java
List<Type> list = Collections.synchronizedList(new ArrayList<Type>());
```

以这种方式创建的集合与正常同步的集合一样，都是线程安全的，例如 Vector。

对并发访问，当迭代它时，用户手动同步返回的集合是很重要的。原因是迭代通过对集合的多个调用来完成，
这必须被组合成单个原子操作。以下是对包装器同步的集合进行迭代的示例。

```java
Collection<Type> c = Collections.synchronizedCollection(myCollection);
synchronized(c) {
    for (Type e : c)
        foo(e);
}
```

```java
Map<KeyType, ValType> m = Collections.synchronizedMap(new HashMap<KeyType, ValType>());
    ...
Set<KeyType> s = m.keySet();
    ...
// 在m上同步，而不是s
synchronized(m) {
    while (KeyType k : s)
        foo(k);
}
```

使用包装实现的一个小缺点是，您不能执行包装实现的任何非接口操作。如：ArrayList 的 ensureCapacity 操作。

## 不可修改封装

与同步包装器不同，它向包装的集合添加功能，不可修改的包装器取消了功能。试图修改则抛出异常 UnsupportedOperationException。

有两个主要的用途：

1. 集合一旦构建完就不可变。在这种情况下，最好不要维护集合的引用，保证绝对不变性
2. 允许某些客户端对数据结构的只读访问。你保留对集合的引用，但是交给客户端包装器的引用，他们能查看，但是不能修改。

 与同步包装器一样，6 个核心 Collection 接口中的每一个都有一个静态工厂方法：

 ```java
 public static <T> Collection<T> unmodifiableCollection(Collection<? extends T> c);
public static <T> Set<T> unmodifiableSet(Set<? extends T> s);
public static <T> List<T> unmodifiableList(List<? extends T> list);
public static <K,V> Map<K, V> unmodifiableMap(Map<? extends K, ? extends V> m);
public static <T> SortedSet<T> unmodifiableSortedSet(SortedSet<? extends T> s);
public static <K,V> SortedMap<K, V> unmodifiableSortedMap(SortedMap<K, ? extends V> m);
 ```

## 检测包装器

Collections.checked 接口包装器用于通用集合。
返回指定集合的一个动态类型安全视图。试图插入一个错误类型的元素将导致立即抛出 ClassCastException。
泛型机制提供编译时的类型检查，但是可以打败这种机制。动态类型安全视图完全消除了这种可能性。
