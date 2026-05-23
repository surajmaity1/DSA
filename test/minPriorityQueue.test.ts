import { describe, expect, it } from "vitest";
import {
    enqueue,
  minPriorityQueue,
  peek,
} from "../QueueImplementation/minPriorityQueue.ts";

describe("Minimum Priority Queue", () => {
  describe("Insert", () => {
    it("should create queue without elements", () => {
      const queue = minPriorityQueue();
      expect(queue.size).to.be.equal(0);
      expect(peek(queue)).toBeUndefined();
    });

    it("should create queue with elements", () => {
      const queue = minPriorityQueue();
      expect(enqueue(queue, "avi", 2)).to.be.equal(true);
      expect(peek(queue)).toBeDefined();
      expect(peek(queue)).to.be.equal("avi");
    });
  });
});
