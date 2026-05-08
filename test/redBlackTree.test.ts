import { describe, it, expect } from "vitest";
import { deleteNode, insertNode } from "../tree/redBlackTree/redBlackTree.ts";

describe("redBlackTree", () => {
  describe("insertNode", () => {
    it("should construct RB tree with one node", () => {
      const root = insertNode([30]);

      expect(root?.value).to.be.equal(30);
      expect(root?.height).to.be.equal(0);
      expect(root?.balanceFactor).to.be.equal(0);
      expect(root?.colour).to.be.equal(false);
      expect(root?.left).to.be.equal(null);
      expect(root?.right).to.be.equal(null);
    });

    it("should construct RB tree with two nodes", () => {
      const root = insertNode([30, 40]);

      expect(root?.value).to.be.equal(30);
      expect(root?.height).to.be.equal(1);
      expect(root?.balanceFactor).to.be.equal(-1);
      expect(root?.colour).to.be.equal(false);

      expect(root?.left).to.be.equal(null);

      expect(root?.right?.value).to.be.equal(40);
      expect(root?.right?.height).to.be.equal(0);
      expect(root?.right?.balanceFactor).to.be.equal(0);
      expect(root?.right?.colour).to.be.equal(true);
      expect(root?.right?.left).to.be.equal(null);
      expect(root?.right?.right).to.be.equal(null);
    });

    it("should construct RB tree with three nodes", () => {
      const input = [20, 10, 30];
      const root = insertNode(input);

      expect(root?.value).to.be.equal(20);
      expect(root?.colour).to.be.equal(false);
      expect(root?.height).to.be.equal(1);
      expect(root?.balanceFactor).to.be.equal(0);

      expect(root?.left?.value).to.be.equal(10);
      expect(root?.left?.colour).to.be.equal(true);
      expect(root?.left?.height).to.be.equal(0);
      expect(root?.left?.balanceFactor).to.be.equal(0);

      expect(root?.right?.value).to.be.equal(30);
      expect(root?.right?.colour).to.be.equal(true);
      expect(root?.right?.height).to.be.equal(0);
      expect(root?.right?.balanceFactor).to.be.equal(0);

      expect(root?.left?.left).to.be.equal(null);
      expect(root?.left?.right).to.be.equal(null);
      expect(root?.right?.left).to.be.equal(null);
      expect(root?.right?.right).to.be.equal(null);
    });

    it("should construct RB tree and colouring should be performed", () => {
      const root = insertNode([20, 10, 30, 40]);

      expect(root?.value).to.be.equal(20);
      expect(root?.colour).to.be.equal(false);
      expect(root?.height).to.be.equal(2);
      expect(root?.balanceFactor).to.be.equal(-1);

      expect(root?.left?.value).to.be.equal(10);
      expect(root?.left?.colour).to.be.equal(false);
      expect(root?.left?.height).to.be.equal(0);
      expect(root?.left?.balanceFactor).to.be.equal(0);

      expect(root?.right?.value).to.be.equal(30);
      expect(root?.left?.colour).to.be.equal(false);
      expect(root?.right?.height).to.be.equal(1);
      expect(root?.right?.balanceFactor).to.be.equal(-1);

      expect(root?.left?.left).to.be.equal(null);
      expect(root?.left?.right).to.be.equal(null);
      expect(root?.right?.left).to.be.equal(null);

      expect(root?.right?.right?.value).to.be.equal(40);
      expect(root?.right?.right?.colour).to.be.equal(true);
      expect(root?.right?.right?.height).to.be.equal(0);
      expect(root?.right?.right?.balanceFactor).to.be.equal(0);
    });

    it("should construct RB tree with three nodes and rotation should be performed", () => {
      const root = insertNode([10, 20, 30]);

      expect(root?.value).to.be.equal(20);
      expect(root?.colour).to.be.equal(false);
      expect(root?.height).to.be.equal(1);
      expect(root?.balanceFactor).to.be.equal(0);

      expect(root?.left?.value).to.be.equal(10);
      expect(root?.left?.colour).to.be.equal(true);
      expect(root?.left?.height).to.be.equal(0);
      expect(root?.left?.balanceFactor).to.be.equal(0);

      expect(root?.right?.value).to.be.equal(30);
      expect(root?.right?.colour).to.be.equal(true);
      expect(root?.right?.height).to.be.equal(0);
      expect(root?.right?.balanceFactor).to.be.equal(0);

      expect(root?.left?.left).to.be.equal(null);
      expect(root?.left?.right).to.be.equal(null);

      expect(root?.right?.left).to.be.equal(null);
      expect(root?.right?.right).to.be.equal(null);
    });

    it("should construct RB tree with four nodes", () => {
      const root = insertNode([10, 20, 30, 50]);

      expect(root?.value).to.be.equal(20);
      expect(root?.colour).to.be.equal(false);
      expect(root?.height).to.be.equal(2);
      expect(root?.balanceFactor).to.be.equal(-1);

      expect(root?.left?.value).to.be.equal(10);
      expect(root?.left?.colour).to.be.equal(false);
      expect(root?.left?.height).to.be.equal(0);
      expect(root?.left?.balanceFactor).to.be.equal(0);

      expect(root?.right?.value).to.be.equal(30);
      expect(root?.right?.colour).to.be.equal(false);
      expect(root?.right?.height).to.be.equal(1);
      expect(root?.right?.balanceFactor).to.be.equal(-1);

      expect(root?.right?.right?.value).to.be.equal(50);
      expect(root?.right?.right?.colour).to.be.equal(true);
      expect(root?.right?.right?.height).to.be.equal(0);
      expect(root?.right?.right?.balanceFactor).to.be.equal(0);
    });

    it("should construct RB tree with five nodes", () => {
      const root = insertNode([10, 20, 30, 50, 40]);

      expect(root?.value).to.be.equal(20);
      expect(root?.colour).to.be.equal(false);
      expect(root?.height).to.be.equal(2);
      expect(root?.balanceFactor).to.be.equal(-1);

      expect(root?.left?.value).to.be.equal(10);
      expect(root?.left?.colour).to.be.equal(false);
      expect(root?.left?.height).to.be.equal(0);
      expect(root?.left?.balanceFactor).to.be.equal(0);

      expect(root?.right?.value).to.be.equal(40);
      expect(root?.right?.colour).to.be.equal(false);
      expect(root?.right?.height).to.be.equal(1);
      expect(root?.right?.balanceFactor).to.be.equal(0);

      expect(root?.right?.left?.value).to.be.equal(30);
      expect(root?.right?.left?.colour).to.be.equal(true);
      expect(root?.right?.left?.height).to.be.equal(0);
      expect(root?.right?.left?.balanceFactor).to.be.equal(0);

      expect(root?.right?.right?.value).to.be.equal(50);
      expect(root?.right?.right?.colour).to.be.equal(true);
      expect(root?.right?.right?.height).to.be.equal(0);
      expect(root?.right?.right?.balanceFactor).to.be.equal(0);
    });

    it("should construct RB tree with six nodes", () => {
      const root = insertNode([10, 20, 30, 50, 40, 60]);

      expect(root?.value).to.be.equal(20);
      expect(root?.colour).to.be.equal(false);
      expect(root?.height).to.be.equal(3);
      expect(root?.balanceFactor).to.be.equal(-2);

      expect(root?.left?.value).to.be.equal(10);
      expect(root?.left?.colour).to.be.equal(false);
      expect(root?.left?.height).to.be.equal(0);
      expect(root?.left?.balanceFactor).to.be.equal(0);

      expect(root?.right?.value).to.be.equal(40);
      expect(root?.right?.colour).to.be.equal(true);
      expect(root?.right?.height).to.be.equal(2);
      expect(root?.right?.balanceFactor).to.be.equal(-1);

      expect(root?.right?.left?.value).to.be.equal(30);
      expect(root?.right?.left?.colour).to.be.equal(false);
      expect(root?.right?.left?.height).to.be.equal(0);
      expect(root?.right?.left?.balanceFactor).to.be.equal(0);

      expect(root?.right?.right?.value).to.be.equal(50);
      expect(root?.right?.right?.colour).to.be.equal(false);
      expect(root?.right?.right?.height).to.be.equal(1);
      expect(root?.right?.right?.balanceFactor).to.be.equal(-1);

      expect(root?.right?.right?.right?.value).to.be.equal(60);
      expect(root?.right?.right?.right?.colour).to.be.equal(true);
      expect(root?.right?.right?.right?.height).to.be.equal(0);
      expect(root?.right?.right?.right?.balanceFactor).to.be.equal(0);
    });

    it("should construct RB tree with seven nodes", () => {
      const root = insertNode([10, 20, 30, 50, 40, 60, 70]);

      expect(root?.value).to.be.equal(20);
      expect(root?.colour).to.be.equal(false);
      expect(root?.height).to.be.equal(3);
      expect(root?.balanceFactor).to.be.equal(-2);

      expect(root?.left?.value).to.be.equal(10);
      expect(root?.left?.colour).to.be.equal(false);
      expect(root?.left?.height).to.be.equal(0);
      expect(root?.left?.balanceFactor).to.be.equal(0);

      expect(root?.right?.value).to.be.equal(40);
      expect(root?.right?.colour).to.be.equal(true);
      expect(root?.right?.height).to.be.equal(2);
      expect(root?.right?.balanceFactor).to.be.equal(-1);

      expect(root?.right?.left?.value).to.be.equal(30);
      expect(root?.right?.left?.colour).to.be.equal(false);
      expect(root?.right?.left?.height).to.be.equal(0);
      expect(root?.right?.left?.balanceFactor).to.be.equal(0);

      expect(root?.right?.right?.value).to.be.equal(60);
      expect(root?.right?.right?.colour).to.be.equal(false);
      expect(root?.right?.right?.height).to.be.equal(1);
      expect(root?.right?.right?.balanceFactor).to.be.equal(0);

      expect(root?.right?.right?.left?.value).to.be.equal(50);
      expect(root?.right?.right?.left?.colour).to.be.equal(true);
      expect(root?.right?.right?.left?.height).to.be.equal(0);
      expect(root?.right?.right?.left?.balanceFactor).to.be.equal(0);

      expect(root?.right?.right?.right?.value).to.be.equal(70);
      expect(root?.right?.right?.right?.colour).to.be.equal(true);
      expect(root?.right?.right?.right?.height).to.be.equal(0);
      expect(root?.right?.right?.right?.balanceFactor).to.be.equal(0);
    });

    it("should construct RB tree with eight nodes", () => {
      const root = insertNode([10, 20, 30, 50, 40, 60, 70, 80]);

      expect(root?.value).to.be.equal(40);
      expect(root?.colour).to.be.equal(false);
      expect(root?.height).to.be.equal(3);
      expect(root?.balanceFactor).to.be.equal(-1);

      expect(root?.left?.value).to.be.equal(20);
      expect(root?.left?.colour).to.be.equal(true);
      expect(root?.left?.height).to.be.equal(1);
      expect(root?.left?.balanceFactor).to.be.equal(0);

      expect(root?.right?.value).to.be.equal(60);
      expect(root?.right?.colour).to.be.equal(true);
      expect(root?.right?.height).to.be.equal(2);
      expect(root?.right?.balanceFactor).to.be.equal(-1);

      expect(root?.left?.left?.value).to.be.equal(10);
      expect(root?.left?.left?.colour).to.be.equal(false);
      expect(root?.left?.left?.height).to.be.equal(0);
      expect(root?.left?.left?.balanceFactor).to.be.equal(0);

      expect(root?.left?.right?.value).to.be.equal(30);
      expect(root?.left?.right?.colour).to.be.equal(false);
      expect(root?.left?.right?.height).to.be.equal(0);
      expect(root?.left?.right?.balanceFactor).to.be.equal(0);

      expect(root?.right?.left?.value).to.be.equal(50);
      expect(root?.right?.left?.colour).to.be.equal(false);
      expect(root?.right?.left?.height).to.be.equal(0);
      expect(root?.right?.left?.balanceFactor).to.be.equal(0);

      expect(root?.right?.right?.value).to.be.equal(70);
      expect(root?.right?.right?.colour).to.be.equal(false);
      expect(root?.right?.right?.height).to.be.equal(1);
      expect(root?.right?.right?.balanceFactor).to.be.equal(-1);

      expect(root?.right?.right?.right?.value).to.be.equal(80);
      expect(root?.right?.right?.right?.colour).to.be.equal(true);
      expect(root?.right?.right?.right?.height).to.be.equal(0);
      expect(root?.right?.right?.right?.balanceFactor).to.be.equal(0);
    });

    it("should construct RB tree with nine nodes", () => {
      const root = insertNode([10, 20, 30, 50, 40, 60, 70, 80, 4]);

      expect(root?.value).to.be.equal(40);
      expect(root?.colour).to.be.equal(false);
      expect(root?.height).to.be.equal(3);
      expect(root?.balanceFactor).to.be.equal(0);

      expect(root?.left?.value).to.be.equal(20);
      expect(root?.left?.colour).to.be.equal(true);
      expect(root?.left?.height).to.be.equal(2);
      expect(root?.left?.balanceFactor).to.be.equal(1);

      expect(root?.right?.value).to.be.equal(60);
      expect(root?.right?.colour).to.be.equal(true);
      expect(root?.right?.height).to.be.equal(2);
      expect(root?.right?.balanceFactor).to.be.equal(-1);

      expect(root?.left?.left?.value).to.be.equal(10);
      expect(root?.left?.left?.colour).to.be.equal(false);
      expect(root?.left?.left?.height).to.be.equal(1);
      expect(root?.left?.left?.balanceFactor).to.be.equal(1);

      expect(root?.left?.right?.value).to.be.equal(30);
      expect(root?.left?.right?.colour).to.be.equal(false);
      expect(root?.left?.right?.height).to.be.equal(0);
      expect(root?.left?.right?.balanceFactor).to.be.equal(0);

      expect(root?.right?.left?.value).to.be.equal(50);
      expect(root?.right?.left?.colour).to.be.equal(false);
      expect(root?.right?.left?.height).to.be.equal(0);
      expect(root?.right?.left?.balanceFactor).to.be.equal(0);

      expect(root?.right?.right?.value).to.be.equal(70);
      expect(root?.right?.right?.colour).to.be.equal(false);
      expect(root?.right?.right?.height).to.be.equal(1);
      expect(root?.right?.right?.balanceFactor).to.be.equal(-1);

      expect(root?.right?.right?.right?.value).to.be.equal(80);
      expect(root?.right?.right?.right?.colour).to.be.equal(true);
      expect(root?.right?.right?.right?.height).to.be.equal(0);
      expect(root?.right?.right?.right?.balanceFactor).to.be.equal(0);

      expect(root?.left?.left?.left?.value).to.be.equal(4);
      expect(root?.left?.left?.left?.colour).to.be.equal(true);
      expect(root?.left?.left?.left?.height).to.be.equal(0);
      expect(root?.left?.left?.left?.balanceFactor).to.be.equal(0);
    });

    it("should construct RB tree with ten nodes", () => {
      const root = insertNode([10, 20, 30, 50, 40, 60, 70, 80, 4, 8]);

      expect(root?.value).to.be.equal(40);
      expect(root?.colour).to.be.equal(false);
      expect(root?.height).to.be.equal(3);
      expect(root?.balanceFactor).to.be.equal(0);

      expect(root?.left?.value).to.be.equal(20);
      expect(root?.left?.colour).to.be.equal(true);
      expect(root?.left?.height).to.be.equal(2);
      expect(root?.left?.balanceFactor).to.be.equal(1);

      expect(root?.right?.value).to.be.equal(60);
      expect(root?.right?.colour).to.be.equal(true);
      expect(root?.right?.height).to.be.equal(2);
      expect(root?.right?.balanceFactor).to.be.equal(-1);

      expect(root?.left?.left?.value).to.be.equal(8);
      expect(root?.left?.left?.colour).to.be.equal(false);
      expect(root?.left?.left?.height).to.be.equal(1);
      expect(root?.left?.left?.balanceFactor).to.be.equal(0);

      expect(root?.left?.right?.value).to.be.equal(30);
      expect(root?.left?.right?.colour).to.be.equal(false);
      expect(root?.left?.right?.height).to.be.equal(0);
      expect(root?.left?.right?.balanceFactor).to.be.equal(0);

      expect(root?.right?.left?.value).to.be.equal(50);
      expect(root?.right?.left?.colour).to.be.equal(false);
      expect(root?.right?.left?.height).to.be.equal(0);
      expect(root?.right?.left?.balanceFactor).to.be.equal(0);

      expect(root?.right?.right?.value).to.be.equal(70);
      expect(root?.right?.right?.colour).to.be.equal(false);
      expect(root?.right?.right?.height).to.be.equal(1);
      expect(root?.right?.right?.balanceFactor).to.be.equal(-1);

      expect(root?.left?.left?.left?.value).to.be.equal(4);
      expect(root?.left?.left?.left?.colour).to.be.equal(true);
      expect(root?.left?.left?.left?.height).to.be.equal(0);
      expect(root?.left?.left?.left?.balanceFactor).to.be.equal(0);

      expect(root?.left?.left?.right?.value).to.be.equal(10);
      expect(root?.left?.left?.right?.colour).to.be.equal(true);
      expect(root?.left?.left?.right?.height).to.be.equal(0);
      expect(root?.left?.left?.right?.balanceFactor).to.be.equal(0);

      expect(root?.right?.right?.right?.value).to.be.equal(80);
      expect(root?.right?.right?.right?.colour).to.be.equal(true);
      expect(root?.right?.right?.right?.height).to.be.equal(0);
      expect(root?.right?.right?.right?.balanceFactor).to.be.equal(0);
    });

    it("should perform an RR rotation when uncle is Black", () => {
      const root = insertNode([30, 20, 10]);

      expect(root?.value).to.be.equal(20);
      expect(root?.colour).to.be.equal(false);
      expect(root?.height).to.be.equal(1);
      expect(root?.balanceFactor).to.be.equal(0);

      expect(root?.left?.value).to.be.equal(10);
      expect(root?.left?.colour).to.be.equal(true);
      expect(root?.left?.height).to.be.equal(0);
      expect(root?.left?.balanceFactor).to.be.equal(0);

      expect(root?.right?.value).to.be.equal(30);
      expect(root?.right?.colour).to.be.equal(true);
      expect(root?.right?.height).to.be.equal(0);
      expect(root?.right?.balanceFactor).to.be.equal(0);
    });
  });

  describe("deleteNode", () => {
    it("should delete root from red black tree that has total one nodes", () => {
      let root = insertNode([30]);

      root = deleteNode(root, 30);

      expect(root).to.be.equal(null);
    });

    it("should delete root from red black tree that has total two nodes", () => {
      let root = insertNode([30, 40]);

      root = deleteNode(root, 30);

      expect(root?.value).to.be.equal(40);
      expect(root?.colour).to.be.equal(false);
      expect(root?.height).to.be.equal(0);
      expect(root?.balanceFactor).to.be.equal(0);
      expect(root?.left).to.be.equal(null);
      expect(root?.right).to.be.equal(null);
    });

    it("should delete root from red black tree that has total two nodes", () => {
      let root = insertNode([40, 30]);

      root = deleteNode(root, 40);

      expect(root?.value).to.be.equal(30);
      expect(root?.colour).to.be.equal(false);
      expect(root?.height).to.be.equal(0);
      expect(root?.balanceFactor).to.be.equal(0);
      expect(root?.left).to.be.equal(null);
      expect(root?.right).to.be.equal(null);
    });

    it("should delete non-root node from red black tree that has total two nodes", () => {
      let root = insertNode([40, 30]);

      root = deleteNode(root, 30);

      expect(root?.value).to.be.equal(40);
      expect(root?.colour).to.be.equal(false);
      expect(root?.height).to.be.equal(0);
      expect(root?.balanceFactor).to.be.equal(0);
      expect(root?.left).to.be.equal(null);
      expect(root?.right).to.be.equal(null);
    });

    it("should delete non-root node from red black tree that has total two nodes", () => {
      let root = insertNode([30, 40]);

      root = deleteNode(root, 40);

      expect(root?.value).to.be.equal(30);
      expect(root?.colour).to.be.equal(false);
      expect(root?.height).to.be.equal(0);
      expect(root?.balanceFactor).to.be.equal(0);
      expect(root?.left).to.be.equal(null);
      expect(root?.right).to.be.equal(null);
    });
  });
});
