import { expect } from "chai";
import { createTrie } from "./fixtures/trie.js";
import {
  createNode,
  deletion,
  insert,
  isPrefix,
  search,
} from "../Trie/ts/trie.ts";

describe("Trie data structure test", () => {
  describe("startsWith", () => {
    it("should return false if ax not found in trie data structure", () => {
      const trie = createTrie();
      expect(trie.search("ax")).to.be.equal(false);
    });
    it("should return true if apply found in trie data structure", () => {
      const trie = createTrie();
      expect(trie.search("apply")).to.be.equal(true);
    });
    it("should return false if app not found in trie data structure", () => {
      const trie = createTrie();
      expect(trie.search("app")).to.be.equal(false);
    });
    it('should return false if prefix - "ax" not found in trie data structure', () => {
      const trie = createTrie();
      expect(trie.startsWith("ax")).to.be.equal(false);
    });
  });

  describe("deletion", () => {
    let root;

    beforeEach(() => {
      root = createNode("");
    });

    it("should delete only node containing 's' when performing deletion using keyword 'apples'", () => {
      root = insert(root, "apple");
      root = insert(root, "apples");
      let found;
      ({ root, found } = deletion(root, "apples"));
      expect(found).to.be.equal(true);
      expect(search(root, "apples")).to.be.equal(false);
      expect(search(root, "apple")).to.be.equal(true);
    });

    it("should delete nodes ('i','c','a','t','i', 'o', 'n') when deleting 'application' keyword", () => {
      root = insert(root, "application");
      root = insert(root, "apple");
      let found;
      ({ root, found } = deletion(root, "application"));
      expect(found).to.be.equal(true);
      expect(search(root, "application")).to.be.equal(false);
      expect(isPrefix(root, "appli")).to.be.equal(false);
      expect(isPrefix(root, "appl")).to.be.equal(true);
    });

    it("should delete nodes 'g' and 'e' when deleting 'age' keyword", () => {
      root = insert(root, "application");
      root = insert(root, "apple");
      root = insert(root, "appls");
      root = insert(root, "apply");
      root = insert(root, "boy");
      root = insert(root, "age");
      let found;
      ({ root, found } = deletion(root, "age"));
      expect(found).to.be.equal(true);
      expect(search(root, "age")).to.be.equal(false);
      expect(search(root, "application")).to.be.equal(true);
      expect(search(root, "apple")).to.be.equal(true);
      expect(search(root, "apply")).to.be.equal(true);
      expect(isPrefix(root, "a")).to.be.equal(true);
    });
  });
});
