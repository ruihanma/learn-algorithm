/**
 * 链表
 * 链表的优点：
    链接具有常量事件 插入和删除，因为我们可以只更改指针。
    与数组一样，链表可以作为堆栈运行。
 */
function LinkedList() {
  /**
   * LinkedList数据结构还需要一个Node辅助类。Node类表示要加入列表的项。它 3 包含一个element属性，即要添加到列表的值，以及一个next属性，即指向列表中下一个节点 项的指针。
   * @param {*} element
   */
  let Node = function(element) {
    this.element = element;
    this.next = null;
  };
  this.length = 0; // 存储列表项的数量(内部/私有变量)
  this.head = null; // 存储第一个节点的引用
  /**
   * 向列表尾部添加一个新的项。
   * 向LinkedList对象尾部添加一个元素时，可能有两种场景:列表为空，添加的是第一个元素，或者列表不为空，向其追加元素。
   */
  this.append = function(element) {
    let node = new Node(element), // 实例化node
      current; // 用于标记循环时当前node

    if (this.head === null) {
      // 如果head元素为null(列表为空)，就意味着在向列表添加第一个元素
      this.head = node; // 本身node的next就指向null 所以无需赋值
    } else {
      current = this.head; // 引用第一个元素（head）从头开始遍历
      //循环列表，直到找到最后一项
      while (current.next) {
        // 链表的最后一项永远指向null 所以当这里的条件变为null时 取消循环
        current = current.next;
      }
      // 此时的current为最后一个
      current.next = node;
    }
    this.length++; //更新列表的长度
  };
  /**
   * 向列表的特定位置插入一个新的项。
   */
  this.insert = function(position, element) {};
  /**
   * 从列表的特定位置移除一项。
   */
  this.removeAt = function(position) {
    if (position > -1 && position < this.length) {
      // 检测边界值 不符合就返回null

      let current = this.head, // {2}
        previous, // {3}
        index = 0; // {4}
      // 当移除第一个值（head）
      if (position === 0) {
        this.head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next; // 此处赋值后的current会一直指向要删除的node 因为index（增长的）到不了position（索引）会停留在前面
        }
        
        //将previous与current的下一项链接起来:跳过current，从而移除它
        previous.next = current.next; // {9}
        this.length--; //更新列表的长度

      }
    } else return null;
  };
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

let list = new LinkedList();
list.append(10);
list.append(13);
list.append(11);
list.append(12);
list.removeAt(3);
console.log(list);
