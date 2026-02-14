import {expect} from 'chai';
import type {node} from '../Practices/bpt.ts';
import {
  createNode,
  insert,
  deleteKey,
  search,
  rangeSearch,
  searchMultiple,
  getMin,
  getMax,
  findLeafNode,
  getAllKeysInOrder,
  verifyTreeStructure
} from '../Practices/bpt.ts';

describe('B+ Tree Implementation', () => {
  const ORDER = 4;

  describe('Node Creation', () => {
    it('should create a leaf node with empty keys', () => {
      const node = createNode(true);
      expect(node.keys).to.be.an('array').that.is.empty;
      expect(node.children).to.be.an('array').that.is.empty;
      expect(node.leaf).to.be.true;
      expect(node.next).to.be.null;
      expect(node.parent).to.be.null;
    });

    it('should create an internal node', () => {
      const node = createNode(false);
      expect(node.leaf).to.be.false;
      expect(node.keys).to.be.an('array').that.is.empty;
    });
  });

  describe('Insertion', () => {
    it('should insert a single key into empty tree', () => {
      let root = null;
      root = insert(root, 10, ORDER);

      expect(root).to.not.be.null;
      expect(root!.keys).to.deep.equal([10]);
      expect(root!.leaf).to.be.true;
    });

    it('should insert multiple keys without splitting', () => {
      let root = null;
      const keys = [10, 20, 30];

      for (const key of keys) {
        root = insert(root, key, ORDER);
      }

      expect(root!.keys).to.deep.equal([10, 20, 30]);
      expect(root!.leaf).to.be.true;
    });

    it('should split leaf node when overflow occurs', () => {
      let root = null;
      const keys = [1, 4, 7, 10];

      for (const key of keys) {
        root = insert(root, key, ORDER);
      }

      expect(root!.leaf).to.be.false;
      expect(root!.keys.length).to.be.greaterThan(0);
      expect(root!.children.length).to.equal(root!.keys.length + 1);
    });

    it('should maintain sorted order in leaves', () => {
      let root = null;
      const keys = [31, 7, 21, 1, 25, 10, 4, 17];

      for (const key of keys) {
        root = insert(root, key, ORDER);
      }

      const sortedKeys = getAllKeysInOrder(root);
      const expectedSorted = [...keys].sort((a, b) => a - b);

      expect(sortedKeys).to.deep.equal(expectedSorted);
    });

    it('should handle insertion of all test data correctly', () => {
      let root = null;
      const input = [1, 4, 7, 10, 17, 21, 31, 25, 19, 20, 28, 42];

      for (const key of input) {
        root = insert(root, key, ORDER);
      }

      const allKeys = getAllKeysInOrder(root);
      const expectedSorted = [...input].sort((a, b) => a - b);

      expect(allKeys).to.deep.equal(expectedSorted);

      const verification = verifyTreeStructure(root, ORDER);
      expect(verification.valid).to.be.true;
      if (!verification.valid) {
        console.log('Errors:', verification.errors);
      }
    });

    it('should not insert duplicate keys', () => {
      let root = null;
      root = insert(root, 10, ORDER);
      root = insert(root, 10, ORDER);

      const allKeys = getAllKeysInOrder(root);
      expect(allKeys).to.deep.equal([10]);
    });

    it('should create multi-level tree with many insertions', () => {
      let root = null;
      const keys = Array.from({length: 20}, (_, i) => i + 1);

      for (const key of keys) {
        root = insert(root, key, ORDER);
      }

      expect(root!.leaf).to.be.false;

      const allKeys = getAllKeysInOrder(root);
      expect(allKeys).to.deep.equal(keys);

      const verification = verifyTreeStructure(root, ORDER);
      expect(verification.valid).to.be.true;
    });

    it('should maintain leaf linkage after insertions', () => {
      let root = null;
      const keys = [1, 4, 7, 10, 17, 21, 31, 25];

      for (const key of keys) {
        root = insert(root, key, ORDER);
      }

      // Find first leaf
      let current = root;
      while (!current!.leaf) {
        current = current!.children[0];
      }

      const leafKeys: number[] = [];
      while (current) {
        leafKeys.push(...current.keys);
        current = current.next;
      }

      const expectedSorted = [...keys].sort((a, b) => a - b);
      expect(leafKeys).to.deep.equal(expectedSorted);
    });
  });

  describe('Search', () => {
    let root: node | null;

    beforeEach(() => {
      root = null;
      const input = [1, 4, 7, 10, 17, 21, 31, 25, 19, 20, 28, 42];
      for (const key of input) {
        root = insert(root, key, ORDER);
      }
    });

    it('should find existing keys', () => {
      expect(search(root, 10)).to.be.true;
      expect(search(root, 1)).to.be.true;
      expect(search(root, 42)).to.be.true;
      expect(search(root, 20)).to.be.true;
    });

    it('should not find non-existing keys', () => {
      expect(search(root, 5)).to.be.false;
      expect(search(root, 15)).to.be.false;
      expect(search(root, 100)).to.be.false;
      expect(search(root, 0)).to.be.false;
    });

    it('should return false for search in empty tree', () => {
      const emptyRoot = null;
      expect(search(emptyRoot, 10)).to.be.false;
    });

    it('should find keys after insertions', () => {
      root = insert(root, 50, ORDER);
      root = insert(root, 60, ORDER);

      expect(search(root, 50)).to.be.true;
      expect(search(root, 60)).to.be.true;
    });

    it('should not find keys after deletion', () => {
      root = deleteKey(root, 10, ORDER);
      expect(search(root, 10)).to.be.false;
      expect(search(root, 20)).to.be.true;
    });

    it('should search multiple keys correctly', () => {
      const keysToSearch = [1, 5, 10, 15, 20, 100];
      const results = searchMultiple(root, keysToSearch);

      expect(results.get(1)).to.be.true;
      expect(results.get(5)).to.be.false;
      expect(results.get(10)).to.be.true;
      expect(results.get(15)).to.be.false;
      expect(results.get(20)).to.be.true;
      expect(results.get(100)).to.be.false;
    });
  });

  describe('Range Search', () => {
    let root: node | null;

    beforeEach(() => {
      root = null;
      const input = [1, 4, 7, 10, 17, 21, 31, 25, 19, 20, 28, 42];
      for (const key of input) {
        root = insert(root, key, ORDER);
      }
    });

    it('should return all keys in a range', () => {
      const result = rangeSearch(root, 10, 25);
      expect(result).to.deep.equal([10, 17, 19, 20, 21, 25]);
    });

    it('should return keys at range boundaries', () => {
      const result = rangeSearch(root, 1, 10);
      expect(result).to.deep.equal([1, 4, 7, 10]);
    });

    it('should return empty array for range with no keys', () => {
      const result = rangeSearch(root, 50, 100);
      expect(result).to.be.an('array').that.is.empty;
    });

    it('should return single key in range', () => {
      const result = rangeSearch(root, 20, 20);
      expect(result).to.deep.equal([20]);
    });

    it('should return all keys when range covers entire tree', () => {
      const result = rangeSearch(root, 0, 100);
      const allKeys = getAllKeysInOrder(root);
      expect(result).to.deep.equal(allKeys);
    });

    it('should return empty array for range in empty tree', () => {
      const emptyRoot = null;
      const result = rangeSearch(emptyRoot, 1, 10);
      expect(result).to.be.an('array').that.is.empty;
    });

    it('should handle range where start > end', () => {
      const result = rangeSearch(root, 25, 10);
      expect(result).to.be.an('array').that.is.empty;
    });

    it('should return keys in sorted order', () => {
      const result = rangeSearch(root, 5, 30);
      const sortedResult = [...result].sort((a, b) => a - b);
      expect(result).to.deep.equal(sortedResult);
    });

    it('should work correctly after deletions', () => {
      root = deleteKey(root, 10, ORDER);
      root = deleteKey(root, 20, ORDER);

      const result = rangeSearch(root, 10, 25);
      expect(result).to.deep.equal([17, 19, 21, 25]);
    });

    it('should handle consecutive ranges efficiently', () => {
      const range1 = rangeSearch(root, 1, 10);
      const range2 = rangeSearch(root, 11, 25);
      const range3 = rangeSearch(root, 26, 50);

      expect(range1).to.deep.equal([1, 4, 7, 10]);
      expect(range2).to.deep.equal([17, 19, 20, 21, 25]);
      expect(range3).to.deep.equal([28, 31, 42]);
    });
  });

  describe('Min/Max Operations', () => {
    it('should return null for empty tree', () => {
      const emptyRoot = null;
      expect(getMin(emptyRoot)).to.be.null;
      expect(getMax(emptyRoot)).to.be.null;
    });

    it('should return correct min and max for single node', () => {
      let root = null;
      root = insert(root, 10, ORDER);

      expect(getMin(root)).to.equal(10);
      expect(getMax(root)).to.equal(10);
    });

    it('should return correct min and max for multiple keys', () => {
      let root = null;
      const keys = [1, 4, 7, 10, 17, 21, 31, 25, 19, 20, 28, 42];

      for (const key of keys) {
        root = insert(root, key, ORDER);
      }

      expect(getMin(root)).to.equal(1);
      expect(getMax(root)).to.equal(42);
    });

    it('should update min after deletion', () => {
      let root = null;
      const keys = [1, 4, 7, 10];

      for (const key of keys) {
        root = insert(root, key, ORDER);
      }

      expect(getMin(root)).to.equal(1);

      root = deleteKey(root, 1, ORDER);
      expect(getMin(root)).to.equal(4);
    });

    it('should update max after deletion', () => {
      let root = null;
      const keys = [1, 4, 7, 10];

      for (const key of keys) {
        root = insert(root, key, ORDER);
      }

      expect(getMax(root)).to.equal(10);

      root = deleteKey(root, 10, ORDER);
      expect(getMax(root)).to.equal(7);
    });

    it('should handle sequential insertions', () => {
      let root = null;
      const keys = Array.from({length: 50}, (_, i) => i + 1);

      for (const key of keys) {
        root = insert(root, key, ORDER);
      }

      expect(getMin(root)).to.equal(1);
      expect(getMax(root)).to.equal(50);
    });

    it('should handle reverse insertions', () => {
      let root = null;
      const keys = Array.from({length: 50}, (_, i) => 50 - i);

      for (const key of keys) {
        root = insert(root, key, ORDER);
      }

      expect(getMin(root)).to.equal(1);
      expect(getMax(root)).to.equal(50);
    });
  });

  describe('Deletion', () => {
    let root: node | null;

    beforeEach(() => {
      root = null;
      const input = [1, 4, 7, 10, 17, 21, 31, 25, 19, 20, 28, 42];
      for (const key of input) {
        root = insert(root, key, ORDER);
      }
    });

    it('should delete a key from leaf node', () => {
      root = deleteKey(root, 7, ORDER);

      const allKeys = getAllKeysInOrder(root);
      expect(allKeys).to.not.include(7);
      expect(allKeys.length).to.equal(11);
    });

    it('should delete multiple keys correctly', () => {
      root = deleteKey(root, 7, ORDER);
      root = deleteKey(root, 20, ORDER);
      root = deleteKey(root, 4, ORDER);

      const allKeys = getAllKeysInOrder(root);
      expect(allKeys).to.not.include(7);
      expect(allKeys).to.not.include(20);
      expect(allKeys).to.not.include(4);
      expect(allKeys.length).to.equal(9);

      const verification = verifyTreeStructure(root, ORDER);
      expect(verification.valid).to.be.true;
    });

    it('should maintain sorted order after deletions', () => {
      const toDelete = [7, 20, 4];

      for (const key of toDelete) {
        root = deleteKey(root, key, ORDER);
      }

      const allKeys = getAllKeysInOrder(root);
      const sortedKeys = [...allKeys].sort((a, b) => a - b);

      expect(allKeys).to.deep.equal(sortedKeys);
    });

    it('should handle deletion of non-existent key', () => {
      const keysBefore = getAllKeysInOrder(root);
      root = deleteKey(root, 999, ORDER);
      const keysAfter = getAllKeysInOrder(root);

      expect(keysAfter).to.deep.equal(keysBefore);
    });

    it('should handle deletion from single node tree', () => {
      let singleRoot = null;
      singleRoot = insert(singleRoot, 10, ORDER);
      singleRoot = insert(singleRoot, 20, ORDER);

      singleRoot = deleteKey(singleRoot, 10, ORDER);
      expect(getAllKeysInOrder(singleRoot)).to.deep.equal([20]);

      singleRoot = deleteKey(singleRoot, 20, ORDER);
      expect(singleRoot).to.be.null;
    });

    it('should handle borrowing from sibling during underflow', () => {
      let testRoot = null;
      const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      for (const key of keys) {
        testRoot = insert(testRoot, key, ORDER);
      }

      testRoot = deleteKey(testRoot, 1, ORDER);

      const verification = verifyTreeStructure(testRoot, ORDER);
      expect(verification.valid).to.be.true;

      const allKeys = getAllKeysInOrder(testRoot);
      expect(allKeys).to.deep.equal([2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('should handle merging during underflow', () => {
      let testRoot = null;
      const keys = [1, 2, 3, 4, 5];

      for (const key of keys) {
        testRoot = insert(testRoot, key, ORDER);
      }

      testRoot = deleteKey(testRoot, 1, ORDER);
      testRoot = deleteKey(testRoot, 2, ORDER);

      const verification = verifyTreeStructure(testRoot, ORDER);
      expect(verification.valid).to.be.true;

      const allKeys = getAllKeysInOrder(testRoot);
      expect(allKeys).to.deep.equal([3, 4, 5]);
    });

    it('should delete all keys and return null', () => {
      const keys = [1, 4, 7, 10, 17, 21, 31, 25, 19, 20, 28, 42];

      for (const key of keys) {
        root = deleteKey(root, key, ORDER);
      }

      expect(root).to.be.null;
    });

    it('should maintain leaf linkage after deletions', () => {
      root = deleteKey(root, 7, ORDER);
      root = deleteKey(root, 20, ORDER);

      let current = root;
      while (current && !current.leaf) {
        current = current.children[0];
      }

      const leafKeys: number[] = [];
      while (current) {
        leafKeys.push(...current.keys);
        current = current.next;
      }

      const allKeys = getAllKeysInOrder(root);
      expect(leafKeys).to.deep.equal(allKeys);
    });
  });

  describe('Tree Structure Validation', () => {
    it('should maintain valid B+ tree properties after random operations', () => {
      let root = null;
      const operations = [
        {type: 'insert', key: 15},
        {type: 'insert', key: 8},
        {type: 'insert', key: 22},
        {type: 'insert', key: 3},
        {type: 'insert', key: 12},
        {type: 'delete', key: 8},
        {type: 'insert', key: 30},
        {type: 'delete', key: 15},
        {type: 'insert', key: 5},
        {type: 'insert', key: 18}
      ];

      for (const op of operations) {
        if (op.type === 'insert') {
          root = insert(root, op.key, ORDER);
        } else {
          root = deleteKey(root, op.key, ORDER);
        }
      }

      const verification = verifyTreeStructure(root, ORDER);
      expect(verification.valid).to.be.true;

      const allKeys = getAllKeysInOrder(root);
      const expectedKeys = [3, 5, 12, 18, 22, 30];
      expect(allKeys).to.deep.equal(expectedKeys);
    });

    it('should maintain balance with sequential insertions', () => {
      let root = null;
      const keys = Array.from({length: 50}, (_, i) => i + 1);

      for (const key of keys) {
        root = insert(root, key, ORDER);
      }

      const verification = verifyTreeStructure(root, ORDER);
      expect(verification.valid).to.be.true;

      const allKeys = getAllKeysInOrder(root);
      expect(allKeys).to.deep.equal(keys);
    });

    it('should maintain balance with reverse insertions', () => {
      let root = null;
      const keys = Array.from({length: 30}, (_, i) => 30 - i);

      for (const key of keys) {
        root = insert(root, key, ORDER);
      }

      const verification = verifyTreeStructure(root, ORDER);
      expect(verification.valid).to.be.true;

      const allKeys = getAllKeysInOrder(root);
      const expectedSorted = [...keys].sort((a, b) => a - b);
      expect(allKeys).to.deep.equal(expectedSorted);
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty tree deletion', () => {
      let root = null;
      root = deleteKey(root, 10, ORDER);
      expect(root).to.be.null;
    });

    it('should handle large number of insertions and deletions', () => {
      let root = null;
      const keys = Array.from({length: 100}, (_, i) => i + 1);

      // Insert all
      for (const key of keys) {
        root = insert(root, key, ORDER);
      }

      // Delete every other key
      for (let i = 0; i < keys.length; i += 2) {
        root = deleteKey(root, keys[i], ORDER);
      }

      const verification = verifyTreeStructure(root, ORDER);
      expect(verification.valid).to.be.true;

      const allKeys = getAllKeysInOrder(root);
      const expectedKeys = keys.filter((_, i) => i % 2 === 1);
      expect(allKeys).to.deep.equal(expectedKeys);
    });

    it('should handle insertion and deletion of same key', () => {
      let root = null;
      root = insert(root, 10, ORDER);
      root = deleteKey(root, 10, ORDER);
      root = insert(root, 10, ORDER);

      const allKeys = getAllKeysInOrder(root);
      expect(allKeys).to.deep.equal([10]);
    });
  });

  describe('Combined Search and Modification Operations', () => {
    it('should maintain search correctness during insertions', () => {
      let root = null;
      const keys = [10, 20, 30, 40, 50];

      for (const key of keys) {
        root = insert(root, key, ORDER);
        expect(search(root, key)).to.be.true;
      }

      for (const key of keys) {
        expect(search(root, key)).to.be.true;
      }
    });

    it('should maintain range search correctness during deletions', () => {
      let root = null;
      const keys = Array.from({length: 20}, (_, i) => (i + 1) * 5);

      for (const key of keys) {
        root = insert(root, key, ORDER);
      }

      const initialRange = rangeSearch(root, 25, 75);
      expect(initialRange.length).to.be.greaterThan(0);

      root = deleteKey(root, 50, ORDER);
      const afterDeleteRange = rangeSearch(root, 25, 75);

      expect(afterDeleteRange).to.not.include(50);
      expect(afterDeleteRange.length).to.equal(initialRange.length - 1);
    });

    it('should handle search, insert, delete, and range search in sequence', () => {
      let root = null;

      // Insert
      const keys = [15, 25, 35, 45, 55];
      for (const key of keys) {
        root = insert(root, key, ORDER);
      }

      // Search
      expect(search(root, 25)).to.be.true;
      expect(search(root, 30)).to.be.false;

      // Range search
      let range = rangeSearch(root, 20, 50);
      expect(range).to.deep.equal([25, 35, 45]);

      // Delete
      root = deleteKey(root, 35, ORDER);

      // Verify search after delete
      expect(search(root, 35)).to.be.false;

      // Verify range search after delete
      range = rangeSearch(root, 20, 50);
      expect(range).to.deep.equal([25, 45]);

      // Get min/max
      expect(getMin(root)).to.equal(15);
      expect(getMax(root)).to.equal(55);
    });
  });
});

describe('Insertion', () => {
  const ORDER = 4;
  it('should insert a single key into empty tree', () => {
    let root = null;
    root = insert(root, 10, ORDER);

    expect(root).to.not.be.null;
    expect(root!.keys).to.deep.equal([10]);
    expect(root!.leaf).to.be.true;
  });

  it('should insert multiple keys without splitting', () => {
    let root = null;
    const keys = [10, 20, 30];

    for (const key of keys) {
      root = insert(root, key, ORDER);
    }

    expect(root!.keys).to.deep.equal([10, 20, 30]);
    expect(root!.leaf).to.be.true;
  });

  it('should split leaf node when overflow occurs', () => {
    let root = null;
    const keys = [1, 4, 7, 10];

    for (const key of keys) {
      root = insert(root, key, ORDER);
    }

    expect(root!.leaf).to.be.false;
    expect(root!.keys.length).to.be.greaterThan(0);
    expect(root!.children.length).to.equal(root!.keys.length + 1);
  });

  it('should maintain sorted order in leaves', () => {
    let root = null;
    const keys = [31, 7, 21, 1, 25, 10, 4, 17];

    for (const key of keys) {
      root = insert(root, key, ORDER);
    }

    const sortedKeys = getAllKeysInOrder(root);
    const expectedSorted = [...keys].sort((a, b) => a - b);

    expect(sortedKeys).to.deep.equal(expectedSorted);
  });

  it('should handle insertion of all test data correctly', () => {
    let root = null;
    const input = [1, 4, 7, 10, 17, 21, 31, 25, 19, 20, 28, 42];

    for (const key of input) {
      root = insert(root, key, ORDER);
    }

    const allKeys = getAllKeysInOrder(root);
    const expectedSorted = [...input].sort((a, b) => a - b);

    expect(allKeys).to.deep.equal(expectedSorted);

    const verification = verifyTreeStructure(root, ORDER);
    expect(verification.valid).to.be.true;
    if (!verification.valid) {
      console.log('Errors:', verification.errors);
    }
  });

  it('should not insert duplicate keys', () => {
    let root = null;
    root = insert(root, 10, ORDER);
    root = insert(root, 10, ORDER);

    const allKeys = getAllKeysInOrder(root);
    expect(allKeys).to.deep.equal([10]);
  });

  it('should create multi-level tree with many insertions', () => {
    let root = null;
    const keys = Array.from({length: 20}, (_, i) => i + 1);

    for (const key of keys) {
      root = insert(root, key, ORDER);
    }

    expect(root!.leaf).to.be.false;

    const allKeys = getAllKeysInOrder(root);
    expect(allKeys).to.deep.equal(keys);

    const verification = verifyTreeStructure(root, ORDER);
    expect(verification.valid).to.be.true;
  });

  it('should maintain leaf linkage after insertions', () => {
    let root = null;
    const keys = [1, 4, 7, 10, 17, 21, 31, 25];

    for (const key of keys) {
      root = insert(root, key, ORDER);
    }

    // Find first leaf
    let current = root;
    while (!current!.leaf) {
      current = current!.children[0];
    }

    const leafKeys: number[] = [];
    while (current) {
      leafKeys.push(...current.keys);
      current = current.next;
    }

    const expectedSorted = [...keys].sort((a, b) => a - b);
    expect(leafKeys).to.deep.equal(expectedSorted);
  });
});

describe('Deletion', () => {
  const ORDER = 4;
  let root: node | null;

  beforeEach(() => {
    root = null;
    const input = [1, 4, 7, 10, 17, 21, 31, 25, 19, 20, 28, 42];
    for (const key of input) {
      root = insert(root, key, ORDER);
    }
  });

  it('should delete a key from leaf node', () => {
    root = deleteKey(root, 7, ORDER);

    const allKeys = getAllKeysInOrder(root);
    expect(allKeys).to.not.include(7);
    expect(allKeys.length).to.equal(11);
  });

  it('should delete multiple keys correctly', () => {
    root = deleteKey(root, 7, ORDER);
    root = deleteKey(root, 20, ORDER);
    root = deleteKey(root, 4, ORDER);

    const allKeys = getAllKeysInOrder(root);
    expect(allKeys).to.not.include(7);
    expect(allKeys).to.not.include(20);
    expect(allKeys).to.not.include(4);
    expect(allKeys.length).to.equal(9);

    const verification = verifyTreeStructure(root, ORDER);
    expect(verification.valid).to.be.true;
  });

  it('should maintain sorted order after deletions', () => {
    const toDelete = [7, 20, 4];

    for (const key of toDelete) {
      root = deleteKey(root, key, ORDER);
    }

    const allKeys = getAllKeysInOrder(root);
    const sortedKeys = [...allKeys].sort((a, b) => a - b);

    expect(allKeys).to.deep.equal(sortedKeys);
  });

  it('should handle deletion of non-existent key', () => {
    const keysBefore = getAllKeysInOrder(root);
    root = deleteKey(root, 999, ORDER);
    const keysAfter = getAllKeysInOrder(root);

    expect(keysAfter).to.deep.equal(keysBefore);
  });

  it('should handle deletion from single node tree', () => {
    let singleRoot = null;
    singleRoot = insert(singleRoot, 10, ORDER);
    singleRoot = insert(singleRoot, 20, ORDER);

    singleRoot = deleteKey(singleRoot, 10, ORDER);
    expect(getAllKeysInOrder(singleRoot)).to.deep.equal([20]);

    singleRoot = deleteKey(singleRoot, 20, ORDER);
    expect(singleRoot).to.be.null;
  });

  it('should handle borrowing from sibling during underflow', () => {
    let testRoot = null;
    const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (const key of keys) {
      testRoot = insert(testRoot, key, ORDER);
    }

    testRoot = deleteKey(testRoot, 1, ORDER);

    const verification = verifyTreeStructure(testRoot, ORDER);
    expect(verification.valid).to.be.true;

    const allKeys = getAllKeysInOrder(testRoot);
    expect(allKeys).to.deep.equal([2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should handle merging during underflow', () => {
    let testRoot = null;
    const keys = [1, 2, 3, 4, 5];

    for (const key of keys) {
      testRoot = insert(testRoot, key, ORDER);
    }

    testRoot = deleteKey(testRoot, 1, ORDER);
    testRoot = deleteKey(testRoot, 2, ORDER);

    const verification = verifyTreeStructure(testRoot, ORDER);
    expect(verification.valid).to.be.true;

    const allKeys = getAllKeysInOrder(testRoot);
    expect(allKeys).to.deep.equal([3, 4, 5]);
  });

  it('should delete all keys and return null', () => {
    const keys = [1, 4, 7, 10, 17, 21, 31, 25, 19, 20, 28, 42];

    for (const key of keys) {
      root = deleteKey(root, key, ORDER);
    }

    expect(root).to.be.null;
  });

  it('should maintain leaf linkage after deletions', () => {
    root = deleteKey(root, 7, ORDER);
    root = deleteKey(root, 20, ORDER);

    let current = root;
    while (current && !current.leaf) {
      current = current.children[0];
    }

    const leafKeys: number[] = [];
    while (current) {
      leafKeys.push(...current.keys);
      current = current.next;
    }

    const allKeys = getAllKeysInOrder(root);
    expect(leafKeys).to.deep.equal(allKeys);
  });
});

describe('Tree Structure Validation', () => {
  const ORDER = 4;
  it('should maintain valid B+ tree properties after random operations', () => {
    let root = null;
    const operations = [
      {type: 'insert', key: 15},
      {type: 'insert', key: 8},
      {type: 'insert', key: 22},
      {type: 'insert', key: 3},
      {type: 'insert', key: 12},
      {type: 'delete', key: 8},
      {type: 'insert', key: 30},
      {type: 'delete', key: 15},
      {type: 'insert', key: 5},
      {type: 'insert', key: 18}
    ];

    for (const op of operations) {
      if (op.type === 'insert') {
        root = insert(root, op.key, ORDER);
      } else {
        root = deleteKey(root, op.key, ORDER);
      }
    }

    const verification = verifyTreeStructure(root, ORDER);
    expect(verification.valid).to.be.true;

    const allKeys = getAllKeysInOrder(root);
    const expectedKeys = [3, 5, 12, 18, 22, 30];
    expect(allKeys).to.deep.equal(expectedKeys);
  });

  it('should maintain balance with sequential insertions', () => {
    let root = null;
    const keys = Array.from({length: 50}, (_, i) => i + 1);

    for (const key of keys) {
      root = insert(root, key, ORDER);
    }

    const verification = verifyTreeStructure(root, ORDER);
    expect(verification.valid).to.be.true;

    const allKeys = getAllKeysInOrder(root);
    expect(allKeys).to.deep.equal(keys);
  });

  it('should maintain balance with reverse insertions', () => {
    let root = null;
    const keys = Array.from({length: 30}, (_, i) => 30 - i);

    for (const key of keys) {
      root = insert(root, key, ORDER);
    }

    const verification = verifyTreeStructure(root, ORDER);
    expect(verification.valid).to.be.true;

    const allKeys = getAllKeysInOrder(root);
    const expectedSorted = [...keys].sort((a, b) => a - b);
    expect(allKeys).to.deep.equal(expectedSorted);
  });
});

describe('Edge Cases', () => {
  const ORDER = 4;
  it('should handle empty tree deletion', () => {
    let root = null;
    root = deleteKey(root, 10, ORDER);
    expect(root).to.be.null;
  });

  it('should handle large number of insertions and deletions', () => {
    let root = null;
    const keys = Array.from({length: 100}, (_, i) => i + 1);

    // Insert all
    for (const key of keys) {
      root = insert(root, key, ORDER);
    }

    // Delete every other key
    for (let i = 0; i < keys.length; i += 2) {
      root = deleteKey(root, keys[i], ORDER);
    }

    const verification = verifyTreeStructure(root, ORDER);
    expect(verification.valid).to.be.true;

    const allKeys = getAllKeysInOrder(root);
    const expectedKeys = keys.filter((_, i) => i % 2 === 1);
    expect(allKeys).to.deep.equal(expectedKeys);
  });

  it('should handle insertion and deletion of same key', () => {
    let root = null;
    root = insert(root, 10, ORDER);
    root = deleteKey(root, 10, ORDER);
    root = insert(root, 10, ORDER);

    const allKeys = getAllKeysInOrder(root);
    expect(allKeys).to.deep.equal([10]);
  });
});
