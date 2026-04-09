import {
  createNode,
  insertNode,
  levelOrder,
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
  });

  describe("levelOrder", () => {
    it("should traversal nodes level by level", () => {
      const root = insertNode([...testNodeValue, 5, 6, 7]);
      const result = levelOrder(root);
      expect(result).to.be.deep.equal([10, 5, 20, 6, 30, 7]);
    });
  });

  describe.only("LL Rotation", () => {
    it.skip("should rotate nodes", () => {
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
      // expect(root?.balanceFactor).to.be.equal(0);
      // expect(root?.height).to.be.equal(1);
      console.log("___________");
      console.log(root.balanceFactor);
      console.log(root.height);
      console.log("___________");
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
    // it.only("try2", () => {
    //   const root = insertNode(testNodeValue);
    //   expect(root?.value).to.be.equal(10);
    //   expect(root?.balanceFactor).to.be.equal(-2);
    //   expect(root?.right?.value).to.be.equal(20);
    //   expect(root?.right?.balanceFactor).to.be.equal(-1);
    //   expect(root?.right?.right?.value).to.be.equal(30);
    //   expect(root?.right?.right?.balanceFactor).to.be.equal(0);
    // });
  });

  describe.skip("Calculate Height", () => {
    // just for testing without rotation
    it("should calculate height for valid tree", () => {
      const root = insertNode([...testNodeValue, 5,6]);
      expect(root?.value).to.be.equal(10);
      expect(root?.height).to.be.equal(2);
      expect(root?.left?.value).to.be.equal(5);
      expect(root?.left?.height).to.be.equal(1);
      expect(root?.left?.right?.value).to.be.equal(6);
      expect(root?.left?.right?.height).to.be.equal(0);
      expect(root?.right?.value).to.be.equal(20);
      expect(root?.right?.height).to.be.equal(1);
      expect(root?.right?.right?.value).to.be.equal(30);
      expect(root?.right?.right?.height).to.be.equal(0);
    });
  });
});
