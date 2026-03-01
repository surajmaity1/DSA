// B+ Tree Test Suite using Chai
// Run with: npm test or mocha

import { expect } from 'chai';
import {
  createBPlusTree,
  insert,
  search,
  remove,
  rangeSearch,
  type BPlusTree,
} from '../Practices/bPlusTree.ts';

describe('B+ Tree Implementation', () => {

  describe('Tree Creation', () => {
    it('should create an empty tree with default order 3', () => {
      const tree = createBPlusTree<number, string>();

      expect(tree).to.exist;
      expect(tree.root).to.be.null;
      expect(tree.config.order).to.equal(3);
    });

    it('should create an empty tree with custom order', () => {
      const tree = createBPlusTree<number, string>(5);

      expect(tree.config.order).to.equal(5);
      expect(tree.root).to.be.null;
    });
  });

  describe('Insertion Operations', () => {
    it('should insert a single key-value pair', () => {
      const tree = createBPlusTree<number, string>(3);
      const tree1 = insert(tree, 10, 'ten');

      expect(tree1.root).to.not.be.null;
      expect(tree1.root?.type).to.equal('leaf');
      const result = search(tree1, 10);
      expect(result).to.equal('ten');
    });

    it('should insert multiple key-value pairs in ascending order', () => {
      let tree = createBPlusTree<number, string>(3);

      tree = insert(tree, 10, 'ten');
      tree = insert(tree, 20, 'twenty');
      tree = insert(tree, 30, 'thirty');

      expect(search(tree, 10)).to.equal('ten');
      expect(search(tree, 20)).to.equal('twenty');
      expect(search(tree, 30)).to.equal('thirty');
    });

    it('should insert multiple key-value pairs in descending order', () => {
      let tree = createBPlusTree<number, string>(3);

      tree = insert(tree, 30, 'thirty');
      tree = insert(tree, 20, 'twenty');
      tree = insert(tree, 10, 'ten');

      expect(search(tree, 10)).to.equal('ten');
      expect(search(tree, 20)).to.equal('twenty');
      expect(search(tree, 30)).to.equal('thirty');
    });

    it('should insert multiple key-value pairs in random order', () => {
      let tree = createBPlusTree<number, string>(3);

      tree = insert(tree, 15, 'fifteen');
      tree = insert(tree, 5, 'five');
      tree = insert(tree, 25, 'twenty-five');
      tree = insert(tree, 10, 'ten');
      tree = insert(tree, 20, 'twenty');

      expect(search(tree, 5)).to.equal('five');
      expect(search(tree, 10)).to.equal('ten');
      expect(search(tree, 15)).to.equal('fifteen');
      expect(search(tree, 20)).to.equal('twenty');
      expect(search(tree, 25)).to.equal('twenty-five');
    });

    it('should update value for duplicate key', () => {
      let tree = createBPlusTree<number, string>(3);

      tree = insert(tree, 10, 'ten');
      tree = insert(tree, 10, 'TEN');

      expect(search(tree, 10)).to.equal('TEN');
    });

    it('should trigger node split when leaf is full', () => {
      let tree = createBPlusTree<number, string>(3);

      // With order 3, max keys in leaf = 2
      tree = insert(tree, 10, 'ten');
      tree = insert(tree, 20, 'twenty');
      tree = insert(tree, 30, 'thirty'); // This should trigger split

      expect(tree.root?.type).to.equal('internal');
      expect(search(tree, 10)).to.equal('ten');
      expect(search(tree, 20)).to.equal('twenty');
      expect(search(tree, 30)).to.equal('thirty');
    });

    it('should handle large number of insertions', () => {
      let tree = createBPlusTree<number, string>(4);
      const count = 100;

      for (let i = 1; i <= count; i++) {
        tree = insert(tree, i, `value-${i}`);
      }

      for (let i = 1; i <= count; i++) {
        expect(search(tree, i)).to.equal(`value-${i}`);
      }
    });

    it('should maintain immutability on insert', () => {
      const tree = createBPlusTree<number, string>(3);
      const tree1 = insert(tree, 10, 'ten');
      const tree2 = insert(tree1, 20, 'twenty');

      expect(tree.root).to.be.null;
      expect(search(tree1, 10)).to.equal('ten');
      expect(search(tree1, 20)).to.be.null;
      expect(search(tree2, 20)).to.equal('twenty');
    });
  });

  describe('Search Operations', () => {
    it('should return null for non-existent key in empty tree', () => {
      const tree = createBPlusTree<number, string>(3);

      expect(search(tree, 10)).to.be.null;
    });

    it('should return null for non-existent key', () => {
      let tree = createBPlusTree<number, string>(3);
      tree = insert(tree, 10, 'ten');
      tree = insert(tree, 20, 'twenty');

      expect(search(tree, 15)).to.be.null;
      expect(search(tree, 5)).to.be.null;
      expect(search(tree, 30)).to.be.null;
    });

    it('should find values in leaf node', () => {
      let tree = createBPlusTree<number, string>(3);
      tree = insert(tree, 10, 'ten');
      tree = insert(tree, 20, 'twenty');

      expect(search(tree, 10)).to.equal('ten');
      expect(search(tree, 20)).to.equal('twenty');
    });

    it('should find values after multiple splits', () => {
      let tree = createBPlusTree<number, string>(3);

      for (let i = 1; i <= 20; i++) {
        tree = insert(tree, i, `value-${i}`);
      }

      expect(search(tree, 1)).to.equal('value-1');
      expect(search(tree, 10)).to.equal('value-10');
      expect(search(tree, 20)).to.equal('value-20');
    });

    it('should work with string keys', () => {
      let tree = createBPlusTree<string, number>(3);
      tree = insert(tree, 'apple', 1);
      tree = insert(tree, 'banana', 2);
      tree = insert(tree, 'cherry', 3);

      expect(search(tree, 'apple')).to.equal(1);
      expect(search(tree, 'banana')).to.equal(2);
      expect(search(tree, 'cherry')).to.equal(3);
      expect(search(tree, 'date')).to.be.null;
    });
  });

  describe('Deletion Operations', () => {
    it('should delete from empty tree without error', () => {
      const tree = createBPlusTree<number, string>(3);
      const tree1 = remove(tree, 10);

      expect(tree1.root).to.be.null;
    });

    it('should delete single key from tree', () => {
      let tree = createBPlusTree<number, string>(3);
      tree = insert(tree, 10, 'ten');
      tree = remove(tree, 10);

      expect(search(tree, 10)).to.be.null;
    });

    it('should delete key and maintain other keys', () => {
      let tree = createBPlusTree<number, string>(3);
      tree = insert(tree, 10, 'ten');
      tree = insert(tree, 20, 'twenty');
      tree = insert(tree, 30, 'thirty');
      tree = remove(tree, 20);

      expect(search(tree, 10)).to.equal('ten');
      expect(search(tree, 20)).to.be.null;
      expect(search(tree, 30)).to.equal('thirty');
    });

    it('should handle deletion of non-existent key', () => {
      let tree = createBPlusTree<number, string>(3);
      tree = insert(tree, 10, 'ten');
      tree = insert(tree, 20, 'twenty');

      const before = search(tree, 10);
      tree = remove(tree, 15);
      const after = search(tree, 10);

      expect(before).to.equal('ten');
      expect(after).to.equal('ten');
      expect(search(tree, 20)).to.equal('twenty');
    });

    it('should delete all keys one by one', () => {
      let tree = createBPlusTree<number, string>(3);
      tree = insert(tree, 10, 'ten');
      tree = insert(tree, 20, 'twenty');
      tree = insert(tree, 30, 'thirty');

      tree = remove(tree, 10);
      expect(search(tree, 10)).to.be.null;
      expect(search(tree, 20)).to.equal('twenty');

      tree = remove(tree, 20);
      expect(search(tree, 20)).to.be.null;
      expect(search(tree, 30)).to.equal('thirty');

      tree = remove(tree, 30);
      expect(search(tree, 30)).to.be.null;
    });

    it('should handle deletion from complex tree', () => {
      let tree = createBPlusTree<number, string>(3);

      for (let i = 1; i <= 10; i++) {
        tree = insert(tree, i, `value-${i}`);
      }

      tree = remove(tree, 5);
      expect(search(tree, 5)).to.be.null;

      for (let i = 1; i <= 10; i++) {
        if (i !== 5) {
          expect(search(tree, i)).to.equal(`value-${i}`);
        }
      }
    });

    it('should maintain immutability on delete', () => {
      let tree = createBPlusTree<number, string>(3);
      tree = insert(tree, 10, 'ten');
      tree = insert(tree, 20, 'twenty');

      const tree1 = remove(tree, 10);

      expect(search(tree, 10)).to.equal('ten');
      expect(search(tree1, 10)).to.be.null;
      expect(search(tree1, 20)).to.equal('twenty');
    });
  });

  describe('Range Query Operations', () => {
    it('should return empty array for empty tree', () => {
      const tree = createBPlusTree<number, string>(3);
      const results = rangeSearch(tree, 10, 20);

      expect(results).to.be.an('array');
      expect(results).to.have.lengthOf(0);
    });

    it('should return values within range', () => {
      let tree = createBPlusTree<number, string>(3);
      tree = insert(tree, 5, 'five');
      tree = insert(tree, 10, 'ten');
      tree = insert(tree, 15, 'fifteen');
      tree = insert(tree, 20, 'twenty');
      tree = insert(tree, 25, 'twenty-five');

      const results = rangeSearch(tree, 10, 20);

      expect(results).to.have.lengthOf(3);
      expect(results).to.include('ten');
      expect(results).to.include('fifteen');
      expect(results).to.include('twenty');
      expect(results).to.not.include('five');
      expect(results).to.not.include('twenty-five');
    });

    it('should return all values when range covers all keys', () => {
      let tree = createBPlusTree<number, string>(3);
      tree = insert(tree, 10, 'ten');
      tree = insert(tree, 20, 'twenty');
      tree = insert(tree, 30, 'thirty');

      const results = rangeSearch(tree, 0, 100);

      expect(results).to.have.lengthOf(3);
    });

    it('should return empty array when range has no matches', () => {
      let tree = createBPlusTree<number, string>(3);
      tree = insert(tree, 10, 'ten');
      tree = insert(tree, 20, 'twenty');
      tree = insert(tree, 30, 'thirty');

      const results = rangeSearch(tree, 40, 50);

      expect(results).to.have.lengthOf(0);
    });

    it('should handle single point range', () => {
      let tree = createBPlusTree<number, string>(3);
      tree = insert(tree, 10, 'ten');
      tree = insert(tree, 20, 'twenty');
      tree = insert(tree, 30, 'thirty');

      const results = rangeSearch(tree, 20, 20);

      expect(results).to.have.lengthOf(1);
      expect(results[0]).to.equal('twenty');
    });

    it('should work with large datasets', () => {
      let tree = createBPlusTree<number, string>(4);

      for (let i = 1; i <= 100; i++) {
        tree = insert(tree, i, `value-${i}`);
      }

      const results = rangeSearch(tree, 25, 75);

      expect(results).to.have.lengthOf(51); // 25 to 75 inclusive
    });
  });

  describe('Edge Cases and Stress Tests', () => {
    it('should handle alternating insert and delete operations', () => {
      let tree = createBPlusTree<number, string>(3);

      tree = insert(tree, 10, 'ten');
      tree = insert(tree, 20, 'twenty');
      tree = remove(tree, 10);
      tree = insert(tree, 30, 'thirty');
      tree = remove(tree, 20);
      tree = insert(tree, 40, 'forty');

      expect(search(tree, 10)).to.be.null;
      expect(search(tree, 20)).to.be.null;
      expect(search(tree, 30)).to.equal('thirty');
      expect(search(tree, 40)).to.equal('forty');
    });

    it('should handle insertion with different data types as values', () => {
      let tree1 = createBPlusTree<number, number>(3);
      tree1 = insert(tree1, 1, 100);
      expect(search(tree1, 1)).to.equal(100);

      let tree2 = createBPlusTree<number, boolean>(3);
      tree2 = insert(tree2, 1, true);
      expect(search(tree2, 1)).to.equal(true);

      let tree3 = createBPlusTree<number, object>(3);
      const obj = { name: 'test' };
      tree3 = insert(tree3, 1, obj);
      expect(search(tree3, 1)).to.deep.equal(obj);
    });

    it('should handle negative numbers as keys', () => {
      let tree = createBPlusTree<number, string>(3);
      tree = insert(tree, -10, 'minus-ten');
      tree = insert(tree, 0, 'zero');
      tree = insert(tree, 10, 'ten');

      expect(search(tree, -10)).to.equal('minus-ten');
      expect(search(tree, 0)).to.equal('zero');
      expect(search(tree, 10)).to.equal('ten');
    });

    it('should maintain performance with sequential insertions', () => {
      let tree = createBPlusTree<number, string>(5);
      const count = 1000;

      for (let i = 0; i < count; i++) {
        tree = insert(tree, i, `value-${i}`);
      }

      // Random searches
      expect(search(tree, 0)).to.equal('value-0');
      expect(search(tree, 500)).to.equal('value-500');
      expect(search(tree, 999)).to.equal('value-999');
    });

    it('should handle reverse sequential insertions', () => {
      let tree = createBPlusTree<number, string>(4);

      for (let i = 100; i > 0; i--) {
        tree = insert(tree, i, `value-${i}`);
      }

      expect(search(tree, 1)).to.equal('value-1');
      expect(search(tree, 50)).to.equal('value-50');
      expect(search(tree, 100)).to.equal('value-100');
    });

    it('should handle multiple updates to same key', () => {
      let tree = createBPlusTree<number, string>(3);
      tree = insert(tree, 10, 'version1');
      tree = insert(tree, 10, 'version2');
      tree = insert(tree, 10, 'version3');

      expect(search(tree, 10)).to.equal('version3');
    });

    it('should maintain tree structure after mixed operations', () => {
      let tree = createBPlusTree<number, string>(3);
      const ops = [10, 20, 5, 15, 25, 3, 7, 12, 18, 22];

      for (const key of ops) {
        tree = insert(tree, key, `value-${key}`);
      }

      tree = remove(tree, 15);
      tree = remove(tree, 25);
      tree = insert(tree, 30, 'thirty');

      expect(search(tree, 15)).to.be.null;
      expect(search(tree, 25)).to.be.null;
      expect(search(tree, 30)).to.equal('thirty');

      for (const key of [10, 20, 5, 3, 7, 12, 18, 22]) {
        expect(search(tree, key)).to.equal(`value-${key}`);
      }
    });
  });

  describe('Type Safety Tests', () => {
    it('should work with string keys and string values', () => {
      let tree = createBPlusTree<string, string>(3);
      tree = insert(tree, 'key1', 'value1');

      expect(search(tree, 'key1')).to.equal('value1');
    });

    it('should work with number keys and object values', () => {
      type User = { id: number; name: string };
      let tree = createBPlusTree<number, User>(3);

      const user1: User = { id: 1, name: 'Alice' };
      const user2: User = { id: 2, name: 'Bob' };

      tree = insert(tree, 1, user1);
      tree = insert(tree, 2, user2);

      expect(search(tree, 1)).to.deep.equal(user1);
      expect(search(tree, 2)).to.deep.equal(user2);
    });
  });
});