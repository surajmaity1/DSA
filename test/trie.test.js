import { expect } from "chai";
import { createTrie } from "./fixtures/trie.js";

describe("Trie data structure test", () => {
  describe("startsWith", () => {
    it("should return false for invalid search of ax in apply string", () => {
      const trie = createTrie();
      expect(trie.startsWith("ax")).to.be.equal(false);
    });
  });
});
