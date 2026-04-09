import { describe, it, expect } from "vitest";
import { insertNode } from "../tree/redBlackTree/redBlackTree.ts";

describe.skip("redBlackTree", () => {
  describe("insertNode", () => {
    it("should construct RB tree with one node", () => {
      const root = insertNode([30]);

      expect(root?.value).to.be.equal(30);
      expect(root?.colour).to.be.equal(false);
      expect(root?.left).to.be.equal(null);
      expect(root?.right).to.be.equal(null);
    });

    it("should construct RB tree with two nodes", () => {
      const root = insertNode([30, 40]);

      expect(root?.value).to.be.equal(30);
      expect(root?.colour).to.be.equal(false);
      expect(root?.left).to.be.equal(null);
      expect(root?.right?.value).to.be.equal(40);
      expect(root?.right?.colour).to.be.equal(true);
      expect(root?.right?.left).to.be.equal(null);
      expect(root?.right?.right).to.be.equal(null);
    });

    it("should construct RB tree with three nodes", () => {
      const input = [20, 10, 30];
      const root = insertNode(input);

      expect(root?.value).to.be.equal(20);
      expect(root?.colour).to.be.equal(false);
      expect(root?.left?.value).to.be.equal(10);
      expect(root?.left?.colour).to.be.equal(true);
      expect(root?.right?.value).to.be.equal(30);
      expect(root?.left?.colour).to.be.equal(true);
      expect(root?.left?.left).to.be.equal(null);
      expect(root?.left?.right).to.be.equal(null);
      expect(root?.right?.left).to.be.equal(null);
      expect(root?.right?.right).to.be.equal(null);
    });

    it("should construct RB tree and colouring should be performed", () => {
      const input = [20, 10, 30, 40];
      const root = insertNode(input);

      expect(root?.value).to.be.equal(20);
      expect(root?.colour).to.be.equal(false);

      expect(root?.left?.value).to.be.equal(10);
      expect(root?.left?.colour).to.be.equal(false);

      expect(root?.right?.value).to.be.equal(30);
      expect(root?.left?.colour).to.be.equal(false);

      expect(root?.left?.left).to.be.equal(null);
      expect(root?.left?.right).to.be.equal(null);

      expect(root?.right?.left).to.be.equal(null);
      expect(root?.right?.right?.value).to.be.equal(40);
      expect(root?.right?.right?.colour).to.be.equal(true);
    });

    it("should construct RB tree and rotation should be performed", () => {
      const input = [10, 20, 30];
      const root = insertNode(input);

      expect(root?.value).to.be.equal(20);
      expect(root?.colour).to.be.equal(false);

      expect(root?.left?.value).to.be.equal(10);
      expect(root?.left?.colour).to.be.equal(true);

      expect(root?.right?.value).to.be.equal(30);
      expect(root?.left?.colour).to.be.equal(true);

      expect(root?.left?.left).to.be.equal(null);
      expect(root?.left?.right).to.be.equal(null);

      expect(root?.right?.left).to.be.equal(null);
      expect(root?.right?.right).to.be.equal(null);
    });
  });
});
