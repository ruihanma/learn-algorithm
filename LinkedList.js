/**
 * 链表
 * 链表的优点：
    链接具有常量事件 插入和删除，因为我们可以只更改指针。
    与数组一样，链表可以作为堆栈运行。
 */
function LinkedList() {
  /**
   * LinkedList数据结构还需要一个Node辅助类(行{1})。Node类表示要加入列表的项。它 3 包含一个element属性，即要添加到列表的值，以及一个next属性，即指向列表中下一个节点 项的指针。
   * @param {*} element
   */
  let Node = function(element) {
    this.element = element;
    this.next = null;
  };
  let length = 0; // 存储列表项的数量(内部/私有变量)
  let head = null; // 存储第一个节点的引用
  /**
   * 向列表尾部添加一个新的项。
   */
  this.append = function(element) {};
  /**
   * 向列表的特定位置插入一个新的项。
   */
  this.insert = function(position, element) {};
  /**
   * 从列表的特定位置移除一项。
   */
  this.removeAt = function(position) {};
  /**
   * 从列表中移除一项。
   */
  this.remove = function(element) {};
  /**
   * 返回元素在列表中的索引。如果列表中没有该元素则返回-1。
   */
  this.indexOf = function(element) {};
  /**
   * 如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false。
   */
  this.isEmpty = function() {};
  /**
   * 返回链表包含的元素个数。与数组的length属性类似。
   */
  this.size = function() {};
  this.getHead = function() {};
  /**
   * 由于列表项使用了Node类，就需要重写继承自JavaScript对象默认的toString方法，让其只输出元素的值。
   */
  this.toString = function() {};
  this.print = function() {};
}
