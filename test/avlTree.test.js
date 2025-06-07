import { expect } from "chai";
import { leftRotate, rightRotate } from "../AVLTree/AVLTree.js";
import { testAvlTreeRoot } from "./fixtures/avlTree.js";

describe("AVL Tree", () => {
    describe("leftRotate", () => {
        it("should left rotate the node", () => {
            const newRoot = leftRotate(testAvlTreeRoot);
            expect(newRoot.data).to.deep.equal(15);
            expect(newRoot.left.data).to.deep.equal(10);
            expect(newRoot.left.right.data).to.deep.equal(12);
            expect(newRoot.right.data).to.equal(16);
            expect(newRoot.left.left.data).to.equal(5);
            expect(newRoot.left.left.left.data).to.equal(3);
            expect(newRoot.left.left.right.data).to.equal(8);
        });
    });

    describe("rightRotate", () => {
        it("should right rotate the node", () => {
            const newRoot = rightRotate(testAvlTreeRoot);
            expect(newRoot.data).to.deep.equal(5);
            expect(newRoot.left.data).to.deep.equal(3);
            expect(newRoot.right.data).to.equal(10);
            expect(newRoot.right.left.data).to.equal(8);
        });
    });
});