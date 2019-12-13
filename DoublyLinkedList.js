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

}