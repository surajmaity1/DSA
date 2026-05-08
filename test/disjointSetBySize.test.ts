import { describe, expect, it } from "vitest";
import {
  disjointSet,
  findUltimateParent,
  unionBySize,
} from "../disjointSet/disjointSetBySize.ts";

describe("Disjoint SET ", () => {
  describe("unionBySize", () => {
    it("should create set with two nodes", () => {
      const ds = disjointSet(2);
      expect(
        findUltimateParent(ds, 1) === findUltimateParent(ds, 2),
      ).to.be.equal(false);
      unionBySize(ds, 1, 2);
      expect(
        findUltimateParent(ds, 1) === findUltimateParent(ds, 2),
      ).to.be.equal(true);
      expect(ds.size[1]).to.be.equal(2);
      expect(ds.size[2]).to.be.equal(1);
    });

    it("should create set with three nodes", () => {
      const ds = disjointSet(3);
      unionBySize(ds, 1, 2);
      expect(
        findUltimateParent(ds, 2) === findUltimateParent(ds, 3),
      ).to.be.equal(false);
      unionBySize(ds, 2, 3);
      expect(
        findUltimateParent(ds, 2) === findUltimateParent(ds, 3),
      ).to.be.equal(true);
      expect(ds.size[1]).to.be.equal(3);
      expect(ds.size[2]).to.be.equal(1);
      expect(ds.size[3]).to.be.equal(1);
    });

    it("should create set with five nodes", () => {
      const ds = disjointSet(5);
      unionBySize(ds, 1, 2);
      unionBySize(ds, 2, 3);

      expect(
        findUltimateParent(ds, 4) === findUltimateParent(ds, 5),
      ).to.be.equal(false);

      unionBySize(ds, 4, 5);

      expect(
        findUltimateParent(ds, 4) === findUltimateParent(ds, 5),
      ).to.be.equal(true);
      expect(ds.size[1]).to.be.equal(3);
      expect(ds.size[2]).to.be.equal(1);
      expect(ds.size[3]).to.be.equal(1);
      expect(ds.size[4]).to.be.equal(2);
      expect(ds.size[5]).to.be.equal(1);
    });

    it("should create set with seven nodes", () => {
      const ds = disjointSet(7);
      unionBySize(ds, 1, 2);
      unionBySize(ds, 2, 3);
      unionBySize(ds, 4, 5);

      expect(
        findUltimateParent(ds, 6) === findUltimateParent(ds, 7),
      ).to.be.equal(false);

      unionBySize(ds, 6, 7);

      expect(
        findUltimateParent(ds, 6) === findUltimateParent(ds, 7),
      ).to.be.equal(true);
      expect(ds.size[1]).to.be.equal(3);
      expect(ds.size[2]).to.be.equal(1);
      expect(ds.size[3]).to.be.equal(1);
      expect(ds.size[4]).to.be.equal(2);
      expect(ds.size[5]).to.be.equal(1);
      expect(ds.size[6]).to.be.equal(2);
      expect(ds.size[7]).to.be.equal(1);
    });

    it("should create set with connecting two components", () => {
      const ds = disjointSet(7);
      unionBySize(ds, 1, 2);
      unionBySize(ds, 2, 3);
      unionBySize(ds, 4, 5);
      unionBySize(ds, 6, 7);

      expect(
        findUltimateParent(ds, 5) === findUltimateParent(ds, 6),
      ).to.be.equal(false);

      unionBySize(ds, 5, 6);

      expect(
        findUltimateParent(ds, 5) === findUltimateParent(ds, 6),
      ).to.be.equal(true);

      expect(
        findUltimateParent(ds, 4) === findUltimateParent(ds, 6),
      ).to.be.equal(true);
      expect(
        findUltimateParent(ds, 4) === findUltimateParent(ds, 5),
      ).to.be.equal(true);
      expect(
        findUltimateParent(ds, 4) === findUltimateParent(ds, 7),
      ).to.be.equal(true);

      expect(
        findUltimateParent(ds, 5) === findUltimateParent(ds, 7),
      ).to.be.equal(true);

      expect(
        findUltimateParent(ds, 3) === findUltimateParent(ds, 7),
      ).to.be.equal(false);

      unionBySize(ds, 3, 7);

      expect(
        findUltimateParent(ds, 3) === findUltimateParent(ds, 7),
      ).to.be.equal(true);

      expect(
        findUltimateParent(ds, 2) === findUltimateParent(ds, 7),
      ).to.be.equal(true);
      expect(
        findUltimateParent(ds, 5) === findUltimateParent(ds, 3),
      ).to.be.equal(true);
      expect(
        findUltimateParent(ds, 2) === findUltimateParent(ds, 4),
      ).to.be.equal(true);
      expect(ds.size[1]).to.be.equal(3);
      expect(ds.size[4]).to.be.equal(7);
    });
  });
});
