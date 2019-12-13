// 双链表
function DoublyLinkedList() {
  let Node = function (element) {
    this.element = element;
    this.prev = null;
    this.next = null;
  };

  this.length = 0;
  this.head = null;
  this.tail = null;

  // 在链表最后添加node
  this.append = function (element) {
    if (!element) return;
    // 两种情况 1.长度为0 2.长度不为0
    let node = new Node(element);
    let current = this.head;
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      while (current.next) { // 当下一个存在时 说明不是tail
        current = current.next;
      }
      // 当下一个为null时 此时的current为最后一个
      node.prev = current;
      current.next = node;
      this.tail = node;
    }
    this.length++;
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
      this.length++;
      return current.element;
    } else if (position === this.length) {
      this.append(element);
    } else return null;
  };
  // 删除指定位置的node
  this.removeAt = function (position) {
    // 边界检查
    if (!this.length) return null;
    if (position > -1 && position < this.length) {
      let current = this.head;
      let previous, index = 0;
      // - 0
      if (position === 0) {
        this.head = current.next;
        if (this.length === 1) {
          // this.head = null; (只有一项的情况下 current.next 就是null 所以并到 this.head = current.next)
          this.tail = null;
        } else {
          this.head.prev = null;
        }
      } else if (position === this.length - 1) {
        if (this.length === 1) {
          this.head = null;
          this.tail = null;
        } else {
          while (current.next) {
            previous = current;
            current = current.next;
          }
          previous.next = null;
          this.tail = previous;
        }
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
        current.next.prev = previous;
      }
      this.length--;
      return current.element
    } else return null;
  };
  this.remove = function (element) {
    if (!this.length) return null;
    let index = this.indexOf(element);
    this.removeAt(index);
  };
  this.indexOf = function (element) {
    if (!this.length) return -1;
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.element === element) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1
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
list.insert(3, 1);
list.remove(16);
console.log(list.indexOf(111));
console.log(list);