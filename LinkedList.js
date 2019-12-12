class ListNode {
  constructor(key) {
    this.next = null;
    this.key = key;
  }
}

class List {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  static createNode(key) {
    return new ListNode(key);
  }

  // 往头部插入数据
  insert(node) {
    // 如果有head 那么新node的next指向链表的head
    if (this.head) {
      node.next = this.head;
    } else {
      // 如果没有head 说明是最后一个 node的next指向null
      node.next = null;
    }
    // 无论有没有数据 链表的head都指向新的node
    this.head = node;
    // 长度加一
    this.length++;
  }
  // 从head开始查找
  find(key) {
    // 依次赋值链表中的node
    let node = this.head;
    // 查到值就返回值
    while (node !== null && node.key !== key) {
      node = node.next;
    }
    return node;
  }

  // 
  delete(node) {
    if (this.length === 0) {
      throw "node is undefined";
    }

    if (node === this.head) {
      this.head = node.next;
      this.length--;
      return;
    }

    let prevNode = this.head;

    while (prevNode.next !== node) {
      prevNode = prevNode.next;
    }

    if (node.next === null) {
      prevNode.next = null;
    }
    if (node.next) {
      prevNode.next = node.next;
    }
    this.length--;
  }
}
const l = new List();
const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
l.insert(n1);
l.insert(n2);
l.insert(n3);
console.log(l);
l.delete(n1)
console.log(l);
