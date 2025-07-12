import { expect } from "chai";
import { createTrie } from "./fixtures/trie.js";

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
});
