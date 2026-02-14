import { expect } from "chai";
import { insert } from "../BTree/bTree.ts";

describe("BTree", () => {
  describe("insert", () => {
    it("should insert only root in BTree", () => {
      const root = insert(null, 1);
      expect(root.leaf).to.be.equal(true);
      expect(root.keys.length).to.be.equal(1);
      expect(root.keys).to.deep.equal([1]);
      expect(root.childrens.length).to.be.equal(0);
    });

    it.only("should insert all keys in BTree", () => {
      let root = null;

      const input = [1, 2, 3];
      for (let index = 0; index < input.length; index++) {
        root = insert(root, input[index]);
      }

      if (!root) {
        return;
      }

      expect(root.keys.length).to.be.equal(1);
      expect(root.keys).to.deep.equal([1]);
      expect(root.leaf).to.be.equal(false);
      expect(root.childrens.length).to.be.equal(1);
      expect(root.childrens[0].keys).to.deep.equal([2, 3]);
    });
  });
});
