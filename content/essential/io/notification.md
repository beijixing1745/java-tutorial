# 监视目录的变化

您是否曾发现使用ide或其他编辑器编辑文件，会出现一个对话框，通知您该文件已经更改，需要重新加载？（notepad++ 就完美还原这个场景），或则像像NetBeans IDE一样，应用程序只是安静的更新文件，而不通知您。

要实现此功能，称为文件**更改通知**，程序必须能够检测文件系统上相关目录发生的情况。一种方法是**轮询文件系统**寻找变更，但是这种方法效率低下。它不会扩展到具有数百个打开的文件或目录来监视的应用程序。

该`java.nio.file`软件包提供了一个名为`Watch Service API`的文件更改通知API。该API使您能够使用监视服务注册目录（或目录）。注册时，告诉服务您感兴趣的事件类型：**文件创建**，**文件删除**或**文件修改**。当服务检测到感兴趣的事件时，它被转发到注册的进程。注册过程有一个线程（或一个线程池），用于监视其注册的任何事件。当事件进入时，根据需要进行处理。

本节包括以下内容：

* Watch服务概述
* 试试看
* 创建观察服务并注册活动
* 处理事件
* 检索文件名
* 何时使用和不使用此API

## Watch服务概述
该`WatchServiceAPI`是相当低的水平，使您可以自定义。您可以按原样使用，也可以选择在此机制之上创建高级API，以使其适合您的特定需求。

以下是实施Watch服务所需的基本步骤：

1. WatchService为文件系统创建一个“观察者”。
2. 对于您要监视的每个目录，请将其注册给观察者。注册目录时，指定要通知的事件的类型。您收到`WatchKey`您注册的每个目录的一个实例。
3. 实现无限循环等待传入事件。当事件发生时，key被发出信号并放置在观察者的队列中。
4. 从观察者的队列中检索key 。您可以从key 获取文件名。
5. 检索key 的每个待处理事件（可能有多个事件），并根据需要进行处理。
6. 重置key ，并恢复等待事件。
7. 关闭服务：当线程退出或关闭时（通过调用其closed方法），watch服务退出。

`WatchKeys`是线程安全的，可以与`java.nio.concurrent`包一起使用。你可以专门为 线程池做这个工作。

## 试试看
以下示例演示了，给定一个目录，开始监视该目录的变化。
如果测试该示例的功能呢？
1. 在main方法里面指定监视的目录，运行该程序
2. 可以在该目录下进行创建文件，删除文件，修改文件的操作，查看控制台的打印信息

``java
public class WatchDir {
    private final WatchService watcher;
    private final Map<WatchKey, Path> keys;
    private final boolean recursive;
    private boolean trace = false;

    @SuppressWarnings("unchecked")
    static <T> WatchEvent<T> cast(WatchEvent<?> event) {
        return (WatchEvent<T>) event;
    }

    /**
     * 在服务中注册目录
     */
    private void register(Path dir) throws IOException {
        WatchKey key = dir.register(watcher,
                                    StandardWatchEventKinds.ENTRY_CREATE,
                                    StandardWatchEventKinds.ENTRY_DELETE,
                                    StandardWatchEventKinds.ENTRY_MODIFY);
        // 日志打印跟踪，是新注册还是更新
        if (trace) {
            Path prev = keys.get(key);
            if (prev == null) {
                System.out.format("register: %s\n", dir);
            } else {
                if (!dir.equals(prev)) {
                    System.out.format("update: %s -> %s\n", prev, dir);
                }
            }
        }
        keys.put(key, dir);
    }

    /**
     * 在给定的目录中注册所有的子目录
     * @param start
     * @throws IOException
     */
    private void registerAll(final Path start) throws IOException {
        // 注册目录和子目录
        Files.walkFileTree(start, new SimpleFileVisitor<Path>() {
            @Override
            public FileVisitResult preVisitDirectory(Path dir, BasicFileAttributes attrs)
                    throws IOException {
                register(dir);
                return FileVisitResult.CONTINUE;
            }
        });
    }

    /**
     * 创建watch服务，并注册目录
     */
    WatchDir(Path dir, boolean recursive) throws IOException {
        this.watcher = FileSystems.getDefault().newWatchService();
        this.keys = new HashMap<WatchKey, Path>();
        this.recursive = recursive;

        if (recursive) {
            System.out.format("Scanning %s ...\n", dir);
            registerAll(dir);
            System.out.println("Done.");
        } else {
            register(dir);
        }

        // 是否启用跟踪日志信息
        this.trace = true;
    }

    /**
     * 处理队列中的所有观察者的事件
     */
    void processEvents() {
        for (; ; ) {

            // 等待事件被触发
            WatchKey key;
            try {
                key = watcher.take();
            } catch (InterruptedException x) {
                return;
            }

            // 这里的key 和 path 的关联 是咱们自己设计的程序关联，不是api的强制要求
            // 这里方便拿到path对象
            Path dir = keys.get(key);
            if (dir == null) {
                System.err.println("WatchKey 不认可!!");
                continue;
            }

            // 获取当次key'的所有事件
            for (WatchEvent<?> event : key.pollEvents()) {
                // 返回该事件的事件类型
                WatchEvent.Kind kind = event.kind();

                // 提供如何处理 逸出事件的列子（难道说是没有被注册的事件 就称为溢出事件吗？）
                // 经过测试，如果是没有注册事件的话， key.pollEvents() 是获取不到事件的
                // 但是 watcher.take(); 会被触发
                if (kind == StandardWatchEventKinds.OVERFLOW) {
                    continue;
                }

                // event 对象是一个 sun.nio.fs.AbstractWatchKey.Event 对象，实现了WatchEvent，所以强转成WatchEvent
                WatchEvent<Path> ev = cast(event);
                Path name = ev.context(); // 获得引起该事件目标上下文条目：也就是文件名的 path对象
                Path child = dir.resolve(name); // 使用该watchKey对应的注册目录，就能转换成绝对路径的文件对象

                // 打印事件
                System.out.format("%s: %s\n", event.kind().name(), child);

                // 如果是递归模式，且 目录是创建事件，那么递归的注册所有子目录
                if (recursive && (kind == StandardWatchEventKinds.ENTRY_CREATE)) {
                    try {
                        if (Files.isDirectory(child, LinkOption.NOFOLLOW_LINKS)) {
                            registerAll(child);
                        }
                    } catch (IOException x) {
                        // ignore to keep sample readbale
                    }
                }
            }

            // 如果目录不再访问，复位key和删除key
            boolean valid = key.reset();
            // 如果复位无效就删除该key
            if (!valid) {
                keys.remove(key);

                // 当次所有目录都无法访问的时候，就退出
                if (keys.isEmpty()) {
                    break;
                }
            }
        }
    }

    /**
     * 命令行的使用方法
     */
    static void usage() {
        System.err.println("usage: java WatchDir [-r] dir");
        System.exit(-1);
    }

    public static void main(String[] args) throws IOException {
        // 还是模拟命令行的传参
        args = new String[]{"-r", "D:\\watch"};

        // 参数解析
        if (args.length == 0 || args.length > 2)
            usage();
        boolean recursive = false;  // 递归处理
        int dirArg = 0;
        if (args[0].equals("-r")) {
            if (args.length < 2)
                usage();
            recursive = true;
            dirArg++;
        }

        // 注册目录和处理过程的事件
        Path dir = Paths.get(args[dirArg]);
        new WatchDir(dir, recursive).processEvents();
    }
}
```

## 创建观察服务并注册事件
第一步是通过`FileSystem`类中的方法创建一个`WatchService`,如下所示：

```java
WatchService watcher = FileSystems.getDefault().newWatchService();
```
