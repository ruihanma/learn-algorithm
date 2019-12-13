// 双链表
function DoublyLinkedList() {
  let Node = function (element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  };

  this.length = 0;
  this.head = null;
  this.tail = null;

  // 在链表最后添加node
  this.append = function (element) {
    // 两种情况 1.长度为0 2.长度不为0
    let node = new Node(element);
    let current = this.head;
    if (this.length === 0) {
      this.head = node;
    } else {
      while (current.next) { // 当下一个存在时 说明不是tail
        current = current.next;
      }
      // 当下一个为null时 此时的current为最后一个
      node.prev = current;
      current.next = node;
    }
    this.length++
  };
  // 在指定位置插入node
  this.insert = function (position, element) {
    // 边界检查
    if (position > -1 && position < this.length) {
      let node = new Node(element);
      let current = this.head;
      let previous;
      let index = 0;
      // 2种情况 1.在0的位置 2.不在
      if (position === 0) {
        node.next = current;
        current.prev = node;
      } else {
        while (index++ < position) {
          // 记录之前一个node 给插队用于标记next;
          previous = current;
          current = current.next;
        }
        // 执行对被插队的node(这里是current)的处理
        previous.next = node;
        node.prev = previous;
        node.next = current;
        current.prev = node;
      }
      this.length++
    }
  };
  this.removeAt = function (position) {
  };
  this.remove = function (element) {
  };
  this.indexOf = function (element) {
  };
  this.isEmpty = function () {
  };
  this.size = function () {
  };
  this.getHead = function () {
  };
  this.toString = function () {
  };
  this.print = function () {
  };

}

let list = new DoublyLinkedList();
list.append(10);
list.append(13);
list.append(16);
list.insert(1, 1);
console.log(list);