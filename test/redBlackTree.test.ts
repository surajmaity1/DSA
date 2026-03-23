import { describe } from "mocha";
import { insertNode } from "../tree/redBlackTree/redBlackTree.ts";
import type { node } from "../tree/redBlackTree/redBlackTree.ts";
import { expect } from "chai";

describe("redBlackTree", () => {
  describe("insertNode", () => {
    it("should insert 20, 10, 30 and construct red black tree", () => {
      const input = [20, 10, 30];
      const root: node = insertNode(input);

      expect(root.value).to.be.equal(20);
      expect(root.colour).to.be.equal(false);

      expect(root.left?.value).to.be.equal(10);
      expect(root.left?.colour).to.be.equal(true);

      expect(root.right?.value).to.be.equal(30);
      expect(root.left?.colour).to.be.equal(true);

      expect(root.left?.left).to.be.equal(null);
      expect(root.left?.right).to.be.equal(null);

      expect(root.right?.left).to.be.equal(null);
      expect(root.right?.right).to.be.equal(null);
    });

    it("should insert 10, 20, 30 and construct valid red black tree", () => {
      const input = [10, 20, 30];
      const root: node = insertNode(input);

      expect(root.value).to.be.equal(20);
      expect(root.colour).to.be.equal(false);

      expect(root.left?.value).to.be.equal(10);
      expect(root.left?.colour).to.be.equal(true);

      expect(root.right?.value).to.be.equal(30);
      expect(root.left?.colour).to.be.equal(true);

      expect(root.left?.left).to.be.equal(null);
      expect(root.left?.right).to.be.equal(null);

      expect(root.right?.left).to.be.equal(null);
      expect(root.right?.right).to.be.equal(null);
    });
  });
});
