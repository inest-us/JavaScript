function hashStringToInt(s, tableSize) {
  hash = 17;

  for (let i = 0; i < s.length; i++) {
    hash = (13 * hash * s.charCodeAt(i)) % tableSize;
  }
  return hash;
}

class HashTable {
  constructor() {
    this.table = new Array(97);
  }

  setItem(key, value) {
    const idx = hashStringToInt(key, 97);
    this.table[idx] = value;
  }

  getItem(key) {
    const idx = hashStringToInt(key, 97);
    return this.table[idx];
  }
}

const ht = new HashTable();
ht.setItem("test", "Apple");
const test = ht.getItem("test");
console.log(test);
