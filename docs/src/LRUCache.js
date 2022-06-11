// 实现LRUCache

class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.preNode = null;
    this.nextNode = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.tailKey = Symbol('tail');
    this.headKey = Symbol('head');
    this.map = new Map();
    this.tail = new ListNode(this.tailKey, 0); // 最近使用到
    this.head = new ListNode(this.headKey, 0); // 最久未使用
    this.head.nextNode = this.tail;
    this.tail.preNode = this.head;
    this.size = 0;
  }

  addTail(key, value) {
    this.insertNodeAfter(key, value, this.tail.preNode);
  }

  removeHead() {
    this.removeNode(this.head.nextNode.key);
  }

  insertNodeAfter(key, value, targetNode) {
    if (targetNode) {
      const node = new ListNode(key, value);
      node.nextNode = targetNode.nextNode;
      node.preNode = targetNode;
      targetNode.nextNode.preNode = node;
      targetNode.nextNode = node;
      this.map.set(key, node);
      this.size++;
    }
  }

  removeNode(key) {
    const node = this.map.get(key);
    if (node) {
      if (node.preNode) {
        node.preNode.nextNode = node.nextNode;
      }
      if (node.nextNode) {
        node.nextNode.preNode = node.preNode;
      }
      this.map.delete(node.key);
      this.size--;
    }
  }

  get(key) {
    const node = this.map.get(key);
    if (!node) {
      return -1;
    }
    this.removeNode(key);
    this.addTail(node.key, node.value);
    return node.value;
  }

  printList() {
    let pointer = this.head;
    while (pointer) {
      console.log(' ', pointer.key);
      pointer = pointer.nextNode;
    }
  }

  printMap() {
    console.log((Array.from(this.map.values())).map(item => ({ key: item.key, value: item.value })));
  }

  put(key, value) {
    const node = this.map.get(key);
    if (node) {
      this.removeNode(key);
      this.addTail(key, value);
    } else {
      while (this.size + 1 > this.capacity) {
        this.removeHead();
      }
      this.addTail(key, value);
    }
  }
}

const lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.printMap();
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.printMap();
console.log(lRUCache.get(1));    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.printMap();
console.log(lRUCache.get(2));    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.printMap();
console.log(lRUCache.get(1));    // 返回 -1 (未找到)
console.log(lRUCache.get(3));    // 返回 3
console.log(lRUCache.get(4));    // 返回 4