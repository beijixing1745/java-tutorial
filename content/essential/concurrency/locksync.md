# 隐式锁和同步

同步是围绕一个称为**内部锁**或**监视器锁**的内部实体构建的。（API规范通常将该实体简称为“监视器”）。内部锁在同步的两个方面发挥作用：强制执行对对象状态的独占访问，并建立对可见性至关重要的happens-before的关系。

每个对象有一个与之相关联的内部锁。一般来说，一个线程需要持久的专有的访问一个对象的字段那么它必须先获取该对象的内部锁，当使用结束的时候释放这个锁。此时这个线程在获取内部锁后和释放这个内部锁之前都称之为拥有这个对象的内部锁。一旦这个线程拥有这个内部锁，其他的线程就不能获取同样的锁，获取的时候被阻塞住。

## 同步方法中的锁
当线程调用`synchronized`方法时，它会自动获取该方法对象的内部锁，并在方法返回时释放它。即使返回是由未捕获的异常引起的，也会发生释放。

您可能会想知道当调用静态同步方法时会发生什么，因为静态方法与一个类而不是一个对象相关联。在这种情况下，线程将获取与该类相关联的Class对象的内部锁。因此，访问类的静态字段由与该类的锁，不同于其他实例的锁。

## 同步块
创建同步代码的另一种方法是使用`synchronized`语句。与同步方法不同，`synchronized`语句必须指定提供内部锁的对象：
```java
public void addName(String name) {
    synchronized(this) {
        lastName = name;
        nameCount++;
    }
    nameList.add(name);
}
```
这个例子中，addName方法需要同步改变lastName和nameCount，但是同时也要避免去同步对其他对象方法的调用。如nameList.add方法在同步块外面，避免了同步这个方法。

同步语句对于通过细粒度同步来提高并发性也是有用的。假设，例如，类`MsLunch`有两个实例字段，`c1`并且`c2`从不一起使用。这些字段的所有更新必须同步，但是没有理由阻止`c1`的更新与`c2`的交错更新 - 并且通过创建不必要的阻止来降低并发性。我们不是使用同步方法或以其他方式使用与之关联的this锁，而是创建两个只提供锁的对象。
```java
public class MsLunch {
    private long c1 = 0;
    private long c2 = 0;
    private Object lock1 = new Object();
    private Object lock2 = new Object();

    public void inc1() {
        synchronized(lock1) {
            c1++;
        }
    }

    public void inc2() {
        synchronized(lock2) {
            c2++;
        }
    }
}
```

## 可重入同步

回想一个线程不能获取另一个线程拥有的锁。但线程可以获取已经拥有的锁。允许线程多次获取相同的锁可以进行重入同步。这描述了同步代码直接或间接调用也包含同步代码的方法，两组代码使用相同锁的情况。没有可重入同步，同步代码将不得不采取许多额外的预防措施，以避免线程导致自身阻塞。

没有明白可重入同步是什么意思,难道说一个线程中调用了n多同步的方法，但是这个同步的对象都是同一个，那么这个线程不会等待？