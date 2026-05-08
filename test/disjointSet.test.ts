import { describe, expect, it } from "vitest";
import {
  disjointSet,
  findUltimateParent,
  unionByRank,
} from "../disjointSet/disjointSet.ts";

describe("Disjoint-SET", () => {
  describe("Make-SET", () => {
    it("should create sets 1", () => {
      const ds = disjointSet(7);
      expect(
        findUltimateParent(ds, 1) === findUltimateParent(ds, 2),
      ).to.be.equal(false);
      unionByRank(ds, 1, 2);
      expect(
        findUltimateParent(ds, 1) === findUltimateParent(ds, 2),
      ).to.be.equal(true);
      expect(ds.ranks[1]).to.be.equal(1);
      expect(ds.ranks[2]).to.be.equal(0);
    });

    it("should create sets 2", () => {
      const ds = disjointSet(7);
      unionByRank(ds, 1, 2);
      expect(
        findUltimateParent(ds, 2) === findUltimateParent(ds, 3),
      ).to.be.equal(false);
      unionByRank(ds, 2, 3);
      expect(
        findUltimateParent(ds, 2) === findUltimateParent(ds, 3),
      ).to.be.equal(true);
      expect(ds.ranks[1]).to.be.equal(1);
      expect(ds.ranks[2]).to.be.equal(0);
      expect(ds.ranks[3]).to.be.equal(0);
    });

    it("should create sets 3", () => {
      const ds = disjointSet(7);
      unionByRank(ds, 1, 2);
      unionByRank(ds, 2, 3);

      expect(
        findUltimateParent(ds, 4) === findUltimateParent(ds, 5),
      ).to.be.equal(false);

      unionByRank(ds, 4, 5);

      expect(
        findUltimateParent(ds, 4) === findUltimateParent(ds, 5),
      ).to.be.equal(true);
      expect(ds.ranks[1]).to.be.equal(1);
      expect(ds.ranks[2]).to.be.equal(0);
      expect(ds.ranks[3]).to.be.equal(0);
      expect(ds.ranks[4]).to.be.equal(1);
      expect(ds.ranks[5]).to.be.equal(0);
    });

    it("should create sets 4", () => {
      const ds = disjointSet(7);
      unionByRank(ds, 1, 2);
      unionByRank(ds, 2, 3);
      unionByRank(ds, 4, 5);

      expect(
        findUltimateParent(ds, 6) === findUltimateParent(ds, 7),
      ).to.be.equal(false);

      unionByRank(ds, 6, 7);

      expect(
        findUltimateParent(ds, 6) === findUltimateParent(ds, 7),
      ).to.be.equal(true);
      expect(ds.ranks[1]).to.be.equal(1);
      expect(ds.ranks[2]).to.be.equal(0);
      expect(ds.ranks[3]).to.be.equal(0);
      expect(ds.ranks[4]).to.be.equal(1);
      expect(ds.ranks[5]).to.be.equal(0);
      expect(ds.ranks[6]).to.be.equal(1);
      expect(ds.ranks[7]).to.be.equal(0);
    });

    it("should create sets 5", () => {
      const ds = disjointSet(7);
      unionByRank(ds, 1, 2);
      unionByRank(ds, 2, 3);
      unionByRank(ds, 4, 5);
      unionByRank(ds, 6, 7);

      expect(
        findUltimateParent(ds, 5) === findUltimateParent(ds, 6),
      ).to.be.equal(false);

      unionByRank(ds, 5, 6);

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
    });

    it("should create sets 6", () => {
      const ds = disjointSet(7);

      unionByRank(ds, 1, 2);
      expect(
        findUltimateParent(ds, 2) === findUltimateParent(ds, 3),
      ).to.be.equal(false);
      // console.log(
      //   `before ${findUltimateParent(ds, 2)}, ${findUltimateParent(ds, 3)}`,
      // );
      unionByRank(ds, 2, 3);
      // console.log(
      //   `after ${findUltimateParent(ds, 2)}, ${findUltimateParent(ds, 3)}`,
      // );
      expect(
        findUltimateParent(ds, 2) === findUltimateParent(ds, 3),
      ).to.be.equal(true);

      expect(
        findUltimateParent(ds, 4) === findUltimateParent(ds, 5),
      ).to.be.equal(false);
      unionByRank(ds, 4, 5);
      expect(
        findUltimateParent(ds, 4) === findUltimateParent(ds, 5),
      ).to.be.equal(true);
      return;
      // unionByRank(ds, 6, 7);
      // unionByRank(ds, 5, 6);

      expect(
        findUltimateParent(ds, 3) === findUltimateParent(ds, 7),
      ).to.be.equal(false);
      unionByRank(ds, 3, 7);
      expect(
        findUltimateParent(ds, 3) === findUltimateParent(ds, 7),
      ).to.be.equal(true);
    });
  });
});
