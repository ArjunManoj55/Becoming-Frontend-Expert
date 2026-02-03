class LRUCache {
  constructor(capacity = 2) {
    // Maximum number of items allowed in cache
    this.capacity = capacity;

    // Map maintains insertion order (perfect for LRU)
    this.cache = new Map();
  }

  // Get value by key
  get(key) {
    // If key does not exist, return -1
    if (!this.cache.has(key)) {
      return -1;
    }

    // Get the value
    const value = this.cache.get(key);

    // Remove key from its current position
    this.cache.delete(key);

    // Re-insert key to mark it as most recently used
    this.cache.set(key, value);

    return value;
  }

  // Insert or update key-value pair
  put(key, value) {
    // If key already exists, remove it first
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    // If cache is full, remove least recently used item
    if (this.cache.size === this.capacity) {
      // First key in Map = least recently used
      const lruKey = this.cache.keys().next().value;
      this.cache.delete(lruKey);
    }

    // Insert key as most recently used
    this.cache.set(key, value);
  }
}


const LRU = new LRUCache(2);

LRU.put(1, 1);
LRU.put(2, 2);

console.log(LRU.get(1)); // 1
console.log(LRU.get(2)); // 2

LRU.put(3, 3);

console.log(LRU.get(3)); // 3
console.log(LRU.get(1)); // -1 (evicted)
