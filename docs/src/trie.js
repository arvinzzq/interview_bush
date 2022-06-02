// 实现字典树

class TrieNode {
  constructor(val) {
    this.val = val;
    this.isEnd = false;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(null);
  }

  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (node.children.has(word[i])) {
        node = node.children.get(word[i]);
      } else {
        const newNode = new TrieNode(word[i]);
        node.children.set(word[i], newNode);
        node = newNode;
      }
    }
    node.isEnd = true;
    return null;
  }

  search(word) {
    const node = this.searchPath(word);
    return !!(node && node.isEnd);
  }

  startsWith(prefix) {
    return !!this.searchPath(prefix);
  }

  searchPath(str) {
    let node = this.root;
    for (let i = 0; i < str.length; i++) {
      if (!node.children.has(str[i])) {
        return null;
      }
      node = node.children.get(str[i]);
    }
    return node;
  }
};

// ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
const trie = new Trie();
const operateTrie = (commands, vals) => {
  const res = [];
  commands.forEach((command, index) => {
    if (trie[command]) {
      vals[index].forEach(val => {
        res[index] = trie[command](val);
      });
    }
  });
  return res;
}

console.log(operateTrie(
  ["insert", "search", "search", "startsWith", "insert", "search"],
  [["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]],
));