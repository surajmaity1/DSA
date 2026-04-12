import {
  createNode,
  deleteNodeRecursive,
  insertNode,
  LLRotation,
} from "../tree/avlTree/avlTree.ts";
import { testNodeValue } from "./fixtures/avlTree.ts";
import { describe, expect, it } from "vitest";

describe("AVL Tree", () => {
  describe("Insert nodes", () => {
    it("should insert node with no rotation", () => {
      const root = insertNode([20, 10, 30]);
      expect(root?.value).to.be.equal(20);
      expect(root?.height).to.be.equal(1);
      expect(root?.balanceFactor).to.be.equal(0);
      expect(root?.left?.value).to.be.equal(10);
      expect(root?.left?.height).to.be.equal(0);
      expect(root?.left?.balanceFactor).to.be.equal(0);
      expect(root?.right?.value).to.be.equal(30);
      expect(root?.right?.height).to.be.equal(0);
      expect(root?.right?.balanceFactor).to.be.equal(0);
    });

    it("should insert node with rotation", () => {
      const root = insertNode([...testNodeValue, 25, 28, 27, 5]);

      expect(root?.value).to.be.equal(25);
      expect(root?.height).to.be.equal(2);
      expect(root?.balanceFactor).to.be.equal(0);

      expect(root?.left?.value).to.be.equal(10);
      expect(root?.left?.height).to.be.equal(1);
      expect(root?.left?.balanceFactor).to.be.equal(0);

      expect(root?.right?.value).to.be.equal(28);
      expect(root?.right?.height).to.be.equal(1);
      expect(root?.right?.balanceFactor).to.be.equal(0);

      expect(root?.left?.left?.value).to.be.equal(5);
      expect(root?.left?.left?.height).to.be.equal(0);
      expect(root?.left?.left?.balanceFactor).to.be.equal(0);

      expect(root?.left?.right?.value).to.be.equal(20);
      expect(root?.left?.right?.height).to.be.equal(0);
      expect(root?.left?.right?.balanceFactor).to.be.equal(0);

      expect(root?.right?.left?.value).to.be.equal(27);
      expect(root?.right?.left?.height).to.be.equal(0);
      expect(root?.right?.left?.balanceFactor).to.be.equal(0);

      expect(root?.right?.right?.value).to.be.equal(30);
      expect(root?.right?.right?.height).to.be.equal(0);
      expect(root?.right?.right?.balanceFactor).to.be.equal(0);
    });

    it("should insert random nodes with rotation", () => {
      const root = insertNode([30, 20, 10, 40, 50, 35, 15]);

      expect(root?.value).to.be.equal(30);
      expect(root?.height).to.be.equal(2);
      expect(root?.balanceFactor).to.be.equal(0);

      expect(root?.left?.value).to.be.equal(15);
      expect(root?.left?.height).to.be.equal(1);
      expect(root?.left?.balanceFactor).to.be.equal(0);

      expect(root?.right?.value).to.be.equal(40);
      expect(root?.right?.height).to.be.equal(1);
      expect(root?.right?.balanceFactor).to.be.equal(0);

      expect(root?.left?.left?.value).to.be.equal(10);
      expect(root?.left?.left?.height).to.be.equal(0);
      expect(root?.left?.left?.balanceFactor).to.be.equal(0);

      expect(root?.left?.right?.value).to.be.equal(20);
      expect(root?.left?.right?.height).to.be.equal(0);
      expect(root?.left?.right?.balanceFactor).to.be.equal(0);

      expect(root?.right?.left?.value).to.be.equal(35);
      expect(root?.right?.left?.height).to.be.equal(0);
      expect(root?.right?.left?.balanceFactor).to.be.equal(0);

      expect(root?.right?.right?.value).to.be.equal(50);
      expect(root?.right?.right?.height).to.be.equal(0);
      expect(root?.right?.right?.balanceFactor).to.be.equal(0);
    });

    it("should perform a Left Rotation", () => {
      const root = insertNode([30, 20, 10]);

      expect(root?.value).to.be.equal(20);
      expect(root?.height).to.be.equal(1);
      expect(root?.balanceFactor).to.be.equal(0);

      expect(root?.left?.value).to.be.equal(10);
      expect(root?.right?.value).to.be.equal(30);
    });

    it("should perform a Right Rotation", () => {
      const root = insertNode([10, 20, 30]);

      expect(root?.value).to.be.equal(20);
      expect(root?.height).to.be.equal(1);
      expect(root?.balanceFactor).to.be.equal(0);

      expect(root?.left?.value).to.be.equal(10);
      expect(root?.right?.value).to.be.equal(30);
    });

    it("should perform a Left-Right Rotation", () => {
      const root = insertNode([30, 10, 20]);

      expect(root?.value).to.be.equal(20);
      expect(root?.height).to.be.equal(1);
      expect(root?.balanceFactor).to.be.equal(0);

      expect(root?.left?.value).to.be.equal(10);
      expect(root?.right?.value).to.be.equal(30);
    });

    it("should perform a Right-Left Rotation", () => {
      const root = insertNode([10, 30, 20]);

      expect(root?.value).to.be.equal(20);
      expect(root?.height).to.be.equal(1);
      expect(root?.balanceFactor).to.be.equal(0);

      expect(root?.left?.value).to.be.equal(10);
      expect(root?.right?.value).to.be.equal(30);
    });

    it("should handle inserting a single node", () => {
      const root = insertNode([42]);

      expect(root?.value).to.be.equal(42);
      expect(root?.height).to.be.equal(0);
      expect(root?.balanceFactor).to.be.equal(0);
      expect(root?.left).to.be.null;
      expect(root?.right).to.be.null;
    });

    it("should handle duplicate values gracefully (assuming duplicates are ignored)", () => {
      const root = insertNode([10, 20, 10, 20, 10]);

      expect(root?.value).to.be.equal(10);
      expect(root?.right?.value).to.be.equal(20);
      expect(root?.left).to.be.null;
      expect(root?.height).to.be.equal(1);
    });

    it("should maintain balance factors correctly for non-perfectly balanced trees", () => {
      const root = insertNode([20, 10, 30, 5]);

      expect(root?.value).to.be.equal(20);
      expect(root?.height).to.be.equal(2);
      expect(root?.balanceFactor).to.be.equal(1);

      expect(root?.left?.value).to.be.equal(10);
      expect(root?.left?.height).to.be.equal(1);
      expect(root?.left?.left?.value).to.be.equal(5);
    });

    it("should balance a sequential insertion of many nodes", () => {
      const root = insertNode([1, 2, 3, 4, 5, 6, 7]);

      expect(root?.value).to.be.equal(4);
      expect(root?.height).to.be.equal(2);
      expect(root?.balanceFactor).to.be.equal(0);

      expect(root?.left?.value).to.be.equal(2);
      expect(root?.right?.value).to.be.equal(6);

      expect(root?.left?.left?.value).to.be.equal(1);
      expect(root?.left?.right?.value).to.be.equal(3);

      expect(root?.right?.left?.value).to.be.equal(5);
      expect(root?.right?.right?.value).to.be.equal(7);
    });
  });

  describe("LL Rotation", () => {
    it("should rotate nodes", () => {
      let root = createNode(10);
      root.height = 2;
      root.balanceFactor = -2;
      root.right = createNode(20);
      root.right.height = 1;
      root.right.balanceFactor = -1;
      root.right.right = createNode(30);
      root.right.right.height = 0;
      root.right.right.balanceFactor = 0;

      root = LLRotation(root);

      expect(root?.value).to.be.equal(20);
      expect(root?.balanceFactor).to.be.equal(0);
      expect(root?.height).to.be.equal(1);
      expect(root?.left?.value).to.be.equal(10);
      expect(root?.left?.height).to.be.equal(0);
      expect(root?.left?.balanceFactor).to.be.equal(0);
      expect(root?.right?.value).to.be.equal(30);
      expect(root?.right?.height).to.be.equal(0);
      expect(root?.right?.balanceFactor).to.be.equal(0);
    });

    it("should insert three nodes with rotation", () => {
      const root = insertNode(testNodeValue);

      expect(root?.value).to.be.equal(20);
      expect(root?.balanceFactor).to.be.equal(0);
      expect(root?.height).to.be.equal(1);
      expect(root?.left?.value).to.be.equal(10);
      expect(root?.left?.height).to.be.equal(0);
      expect(root?.left?.balanceFactor).to.be.equal(0);
      expect(root?.right?.value).to.be.equal(30);
      expect(root?.right?.height).to.be.equal(0);
      expect(root?.right?.balanceFactor).to.be.equal(0);
    });
  });

  describe("RR Rotation", () => {
    it("should insert three nodes with rotation", () => {
      const root = insertNode(testNodeValue.toReversed());

      expect(root?.value).to.be.equal(20);
      expect(root?.balanceFactor).to.be.equal(0);
      expect(root?.height).to.be.equal(1);
      expect(root?.left?.value).to.be.equal(10);
      expect(root?.left?.height).to.be.equal(0);
      expect(root?.left?.balanceFactor).to.be.equal(0);
      expect(root?.right?.value).to.be.equal(30);
      expect(root?.right?.height).to.be.equal(0);
      expect(root?.right?.balanceFactor).to.be.equal(0);
    });
  });

  describe("LR Rotation", () => {
    it("should insert three nodes with rotation", () => {
      const root = insertNode([30, 20, 25]);

      expect(root?.value).to.be.equal(25);
      expect(root?.balanceFactor).to.be.equal(0);
      expect(root?.height).to.be.equal(1);
      expect(root?.left?.value).to.be.equal(20);
      expect(root?.left?.height).to.be.equal(0);
      expect(root?.left?.balanceFactor).to.be.equal(0);
      expect(root?.right?.value).to.be.equal(30);
      expect(root?.right?.height).to.be.equal(0);
      expect(root?.right?.balanceFactor).to.be.equal(0);
    });
  });

  describe("RL Rotation", () => {
    it("should insert three nodes with rotation", () => {
      const root = insertNode([20, 30, 25]);

      expect(root?.value).to.be.equal(25);
      expect(root?.balanceFactor).to.be.equal(0);
      expect(root?.height).to.be.equal(1);
      expect(root?.left?.value).to.be.equal(20);
      expect(root?.left?.height).to.be.equal(0);
      expect(root?.left?.balanceFactor).to.be.equal(0);
      expect(root?.right?.value).to.be.equal(30);
      expect(root?.right?.height).to.be.equal(0);
      expect(root?.right?.balanceFactor).to.be.equal(0);
    });
  });

  describe("Delete Nodes", () => {
    it("should delete node if found", () => {
      let root = insertNode([9, 5, 10, 0, 6, 11, -1, 1, 2]);

      expect(root?.value).to.be.equal(9);
      expect(root?.height).to.be.equal(3);
      expect(root?.balanceFactor).to.be.equal(1);

      expect(root?.left?.value).to.be.equal(1);
      expect(root?.left?.height).to.be.equal(2);
      expect(root?.left?.balanceFactor).to.be.equal(0);

      expect(root?.right?.value).to.be.equal(10);
      expect(root?.right?.height).to.be.equal(1);
      expect(root?.right?.balanceFactor).to.be.equal(-1);

      expect(root?.left?.left?.value).to.be.equal(0);
      expect(root?.left?.left?.height).to.be.equal(1);
      expect(root?.left?.left?.balanceFactor).to.be.equal(1);

      expect(root?.left?.right?.value).to.be.equal(5);
      expect(root?.left?.right?.height).to.be.equal(1);
      expect(root?.left?.right?.balanceFactor).to.be.equal(0);

      expect(root?.right?.right?.value).to.be.equal(11);
      expect(root?.right?.right?.height).to.be.equal(0);
      expect(root?.right?.right?.balanceFactor).to.be.equal(0);

      expect(root?.left?.left?.left?.value).to.be.equal(-1);
      expect(root?.left?.left?.left?.height).to.be.equal(0);
      expect(root?.left?.left?.left?.balanceFactor).to.be.equal(0);

      expect(root?.left?.right?.left?.value).to.be.equal(2);
      expect(root?.left?.right?.left?.height).to.be.equal(0);
      expect(root?.left?.right?.left?.balanceFactor).to.be.equal(0);

      expect(root?.left?.right?.right?.value).to.be.equal(6);
      expect(root?.left?.right?.right?.height).to.be.equal(0);
      expect(root?.left?.right?.right?.balanceFactor).to.be.equal(0);

      root = deleteNodeRecursive(root, 10);

      // delete
      expect(root?.value).to.be.equal(1);
      expect(root?.height).to.be.equal(3);
      expect(root?.balanceFactor).to.be.equal(-1);

      expect(root?.left?.value).to.be.equal(0);
      expect(root?.left?.height).to.be.equal(1);
      expect(root?.left?.balanceFactor).to.be.equal(1);

      expect(root?.right?.value).to.be.equal(9);
      expect(root?.right?.height).to.be.equal(2);
      expect(root?.right?.balanceFactor).to.be.equal(1);

      expect(root?.left?.left?.value).to.be.equal(-1);
      expect(root?.left?.left?.height).to.be.equal(0);
      expect(root?.left?.left?.balanceFactor).to.be.equal(0);

      expect(root?.right?.left?.value).to.be.equal(5);
      expect(root?.right?.left?.height).to.be.equal(1);
      expect(root?.right?.left?.balanceFactor).to.be.equal(0);

      expect(root?.right?.right?.value).to.be.equal(11);
      expect(root?.right?.right?.height).to.be.equal(0);
      expect(root?.right?.right?.balanceFactor).to.be.equal(0);

      expect(root?.right?.left?.left?.value).to.be.equal(2);
      expect(root?.right?.left?.left?.height).to.be.equal(0);
      expect(root?.right?.left?.left?.balanceFactor).to.be.equal(0);

      expect(root?.right?.left?.right?.value).to.be.equal(6);
      expect(root?.right?.left?.right?.height).to.be.equal(0);
      expect(root?.right?.left?.right?.balanceFactor).to.be.equal(0);
    });

    it("should delete the only node in a one-node tree", () => {
      let root = insertNode([10]);

      expect(root?.value).to.be.equal(10);
      expect(root?.height).to.be.equal(0);
      expect(root?.balanceFactor).to.be.equal(0);

      root = deleteNodeRecursive(root, 10);

      expect(root).to.be.null;
    });

    it("should safely delete a leaf node and update heights/balance factors", () => {
      let root = insertNode([20, 10, 30, 5, 15, 25, 40]);
      expect(root?.left?.value).to.be.equal(10);
      expect(root?.left?.height).to.be.equal(1);
      expect(root?.left?.balanceFactor).to.be.equal(0);

      expect(root?.left?.left?.value).to.be.equal(5);
      root = deleteNodeRecursive(root, 5);
      expect(root?.value).to.be.equal(20);
      expect(root?.height).to.be.equal(2);
      expect(root?.balanceFactor).to.be.equal(0);

      expect(root?.left?.value).to.be.equal(10);
      expect(root?.left?.height).to.be.equal(1);
      expect(root?.left?.balanceFactor).to.be.equal(-1);

      expect(root?.left?.left).to.be.equal(null);

      expect(root?.left?.right?.value).to.be.equal(15);
      expect(root?.left?.right?.height).to.be.equal(0);
      expect(root?.left?.right?.balanceFactor).to.be.equal(0);
    });

    it("should delete the root node and replace it with its in-order successor", () => {
      let root = insertNode([20, 10, 30, 5, 15, 25, 40]);

      root = deleteNodeRecursive(root, 20);

      expect(root?.value).to.be.equal(25);
      expect(root?.height).to.be.equal(2);
      expect(root?.balanceFactor).to.be.equal(0);

      expect(root?.left?.value).to.be.equal(10);
      expect(root?.left?.height).to.be.equal(1);
      expect(root?.left?.balanceFactor).to.be.equal(0);

      expect(root?.left?.left?.value).to.be.equal(5);
      expect(root?.left?.right?.value).to.be.equal(15);

      expect(root?.right?.value).to.be.equal(30);
      expect(root?.right?.height).to.be.equal(1);
      expect(root?.right?.balanceFactor).to.be.equal(-1);

      expect(root?.right?.left).to.be.equal(null);
      expect(root?.right?.right?.value).to.be.equal(40);
    });

    it("should delete an intermediate node with two children", () => {
      let root = insertNode([20, 10, 30, 5, 15, 40]);

      root = deleteNodeRecursive(root, 10);

      expect(root?.value).to.be.equal(20);
      expect(root?.height).to.be.equal(2);
      expect(root?.balanceFactor).to.be.equal(0);

      expect(root?.left?.value).to.be.equal(15);
      expect(root?.left?.height).to.be.equal(1);
      expect(root?.left?.balanceFactor).to.be.equal(1);

      expect(root?.left?.left?.value).to.be.equal(5);
      expect(root?.left?.left?.height).to.be.equal(0);
      expect(root?.left?.left?.balanceFactor).to.be.equal(0);

      expect(root?.left?.right).to.be.equal(null);

      expect(root?.right?.value).to.be.equal(30);
      expect(root?.right?.height).to.be.equal(1);
      expect(root?.right?.balanceFactor).to.be.equal(-1);
    });

    it("should perform a Left Rotation when deletion causes a Right-Right imbalance", () => {
      let root = insertNode([20, 10, 40, 30, 50]);

      root = deleteNodeRecursive(root, 10);

      expect(root?.value).to.be.equal(40);
      expect(root?.height).to.be.equal(2);
      expect(root?.balanceFactor).to.be.equal(1);

      expect(root?.left?.value).to.be.equal(20);
      expect(root?.left?.height).to.be.equal(1);
      expect(root?.left?.balanceFactor).to.be.equal(-1);

      expect(root?.left?.left).to.be.equal(null);

      expect(root?.left?.right?.value).to.be.equal(30);
      expect(root?.left?.right?.height).to.be.equal(0);
      expect(root?.left?.right?.balanceFactor).to.be.equal(0);

      expect(root?.right?.value).to.be.equal(50);
      expect(root?.right?.height).to.be.equal(0);
      expect(root?.right?.balanceFactor).to.be.equal(0);
    });

    it("should perform a Right Rotation when deletion causes a Left-Left imbalance", () => {
      let root = insertNode([40, 20, 50, 10, 30]);

      root = deleteNodeRecursive(root, 50);

      expect(root?.value).to.be.equal(20);
      expect(root?.height).to.be.equal(2);
      expect(root?.balanceFactor).to.be.equal(-1);

      expect(root?.left?.value).to.be.equal(10);
      expect(root?.left?.height).to.be.equal(0);
      expect(root?.left?.balanceFactor).to.be.equal(0);

      expect(root?.right?.value).to.be.equal(40);
      expect(root?.right?.height).to.be.equal(1);
      expect(root?.right?.balanceFactor).to.be.equal(1);

      expect(root?.right?.left?.value).to.be.equal(30);
      expect(root?.right?.left?.height).to.be.equal(0);
      expect(root?.right?.left?.balanceFactor).to.be.equal(0);

      expect(root?.right?.right).to.be.null;
    });

    it("should perform a Left-Right Rotation when deletion causes an LR imbalance", () => {
      let root = insertNode([40, 20, 60, 10, 30, 70, 25]);

      root = deleteNodeRecursive(root, 70);

      expect(root?.value).to.be.equal(30);
      expect(root?.height).to.be.equal(2);
      expect(root?.balanceFactor).to.be.equal(0);

      expect(root?.left?.value).to.be.equal(20);
      expect(root?.left?.height).to.be.equal(1);
      expect(root?.left?.balanceFactor).to.be.equal(0);

      expect(root?.left?.left?.value).to.be.equal(10);
      expect(root?.left?.right?.value).to.be.equal(25);

      expect(root?.right?.value).to.be.equal(40);
      expect(root?.right?.height).to.be.equal(1);
      expect(root?.right?.balanceFactor).to.be.equal(-1);

      expect(root?.right?.left).to.be.null;

      expect(root?.right?.right?.value).to.be.equal(60);
      expect(root?.right?.right?.height).to.be.equal(0);
      expect(root?.right?.right?.balanceFactor).to.be.equal(0);
    });

    it("should perform a Right-Left Rotation when deletion causes an RL imbalance", () => {
      let root = insertNode([40, 20, 60, 10, 50, 70, 55]);

      root = deleteNodeRecursive(root, 10);

      expect(root?.value).to.be.equal(50);
      expect(root?.height).to.be.equal(2);
      expect(root?.balanceFactor).to.be.equal(0);

      expect(root?.left?.value).to.be.equal(40);
      expect(root?.left?.height).to.be.equal(1);
      expect(root?.left?.balanceFactor).to.be.equal(1);

      expect(root?.left?.left?.value).to.be.equal(20);
      expect(root?.left?.left?.height).to.be.equal(0);
      expect(root?.left?.left?.balanceFactor).to.be.equal(0);

      expect(root?.left?.right).to.be.null;

      expect(root?.right?.value).to.be.equal(60);
      expect(root?.right?.height).to.be.equal(1);
      expect(root?.right?.balanceFactor).to.be.equal(0);

      expect(root?.right?.left?.value).to.be.equal(55);
      expect(root?.right?.left?.height).to.be.equal(0);
      expect(root?.right?.left?.balanceFactor).to.be.equal(0);

      expect(root?.right?.right?.value).to.be.equal(70);
      expect(root?.right?.right?.height).to.be.equal(0);
      expect(root?.right?.right?.balanceFactor).to.be.equal(0);
    });
  });
});
