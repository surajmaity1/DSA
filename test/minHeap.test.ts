import { describe, expect, it } from "vitest";
import { minHeap } from "../Heap/minHeap.ts";

describe("Min Heap", () => {
  describe("PUSH Operation", () => {
    it("should create min heap without elements", () => {
      const heap = minHeap();
      expect(heap.isEmpty()).toBe(true);
      expect(heap.peek()).toBe(undefined);
    });

    it("should create heap with one element", () => {
      const heap = minHeap();

      expect(heap.isEmpty()).toBe(true);
      expect(heap.peek()).toBe(undefined);

      heap.push(5);

      expect(heap.isEmpty()).toBe(false);
      expect(heap.peek()!.value).toBe(5);
    });

    it("should create heap without heapify", () => {
      const heap = minHeap();

      expect(heap.isEmpty()).toBe(true);
      expect(heap.peek()).toBe(undefined);

      heap.push(5);
      heap.push(10);
      heap.push(15);
      heap.push(20);
      heap.push(25);
      heap.push(30);

      expect(heap.isEmpty()).toBe(false);
      const root = heap.peek()!;

      expect(root.value).toBe(5);
      expect(root.left!.value).toBe(10);
      expect(root.right!.value).toBe(15);
      expect(root.left!.left!.value).toBe(20);
      expect(root.left!.right!.value).toBe(25);
      expect(root.right!.left!.value).toBe(30);
    });

    it("should create heap with two elements heapify", () => {
      const heap = minHeap();

      expect(heap.isEmpty()).toBe(true);
      expect(heap.peek()).toBe(undefined);

      heap.push(10);
      heap.push(5);

      expect(heap.isEmpty()).toBe(false);

      const root = heap.peek()!;

      expect(root.value).toBe(5);
      expect(root.left!.value).toBe(10);
    });

    it("should create heap with three elements heapify", () => {
      const heap = minHeap();

      expect(heap.isEmpty()).toBe(true);
      expect(heap.peek()).toBe(undefined);

      heap.push(10);
      heap.push(5);
      heap.push(2);

      expect(heap.isEmpty()).toBe(false);

      const root = heap.peek()!;

      expect(root.value).toBe(2);
      expect(root.left!.value).toBe(10);
      expect(root.right!.value).toBe(5);
    });

    it("should create heap with heapify with some other value", () => {
      const heap = minHeap();

      expect(heap.isEmpty()).toBe(true);
      expect(heap.peek()).toBe(undefined);

      heap.push(55);
      heap.push(29);

      expect(heap.isEmpty()).toBe(false);

      const root = heap.peek()!;

      expect(root.value).toBe(29);
      expect(root.left!.value).toBe(55);
    });

    it("should create heap with heapify", () => {
      const heap = minHeap();

      expect(heap.isEmpty()).toBe(true);
      expect(heap.peek()).toBe(undefined);

      heap.push(55);
      heap.push(29);
      heap.push(20);

      expect(heap.isEmpty()).toBe(false);

      const root = heap.peek()!;

      expect(root.value).toBe(20);
      expect(root.left!.value).toBe(55);
      expect(root.right!.value).toBe(29);
    });

    it("should create heap with four elements heapify", () => {
      const heap = minHeap();

      expect(heap.isEmpty()).toBe(true);
      expect(heap.peek()).toBe(undefined);

      heap.push(55);
      heap.push(29);
      heap.push(20);
      heap.push(10);

      expect(heap.isEmpty()).toBe(false);

      const root = heap.peek()!;

      expect(root.value).toBe(10);
      expect(root.left!.value).toBe(20);
      expect(root.right!.value).toBe(29);
      expect(root.left!.left!.value).toBe(55);
    });

    it("should create heap with five elements heapify", () => {
      const heap = minHeap();

      expect(heap.isEmpty()).toBe(true);
      expect(heap.peek()).toBe(undefined);

      heap.push(55);
      heap.push(29);
      heap.push(20);
      heap.push(10);
      heap.push(9);

      expect(heap.isEmpty()).toBe(false);

      const root = heap.peek()!;

      expect(root.value).toBe(9);
      expect(root.left!.value).toBe(10);
      expect(root.right!.value).toBe(29);
      expect(root.left!.left!.value).toBe(55);
      expect(root.left!.right!.value).toBe(20);
    });

    it("should create heap with six elements heapify", () => {
      const heap = minHeap();

      expect(heap.isEmpty()).toBe(true);
      expect(heap.peek()).toBe(undefined);

      heap.push(55);
      heap.push(29);
      heap.push(20);
      heap.push(10);
      heap.push(9);
      heap.push(2);

      expect(heap.isEmpty()).toBe(false);

      const root = heap.peek()!;

      expect(root.value).toBe(2);
      expect(root.left!.value).toBe(10);
      expect(root.right!.value).toBe(9);
      expect(root.left!.left!.value).toBe(55);
      expect(root.left!.right!.value).toBe(20);
      expect(root.right!.left!.value).toBe(29);
    });

    it("should maintain heap property after each push", () => {
      const heap = minHeap();

      heap.push(50);
      expect(heap.peek()!.value).toBe(50);

      heap.push(30);
      expect(heap.peek()!.value).toBe(30);

      heap.push(40);
      expect(heap.peek()!.value).toBe(30);

      heap.push(10);
      expect(heap.peek()!.value).toBe(10);

      heap.push(20);
      expect(heap.peek()!.value).toBe(10);
    });

    it("should maintain min-heap after multiple complex pushes", () => {
      const heap = minHeap();
      const values = [100, 50, 30, 20, 60, 10, 5, 70, 1];
      values.forEach((v) => heap.push(v));
      const root = heap.peek()!;
      expect(root.value).toBe(1);
      expect(root.left!.value).toBeLessThanOrEqual(
        root.value === 1 ? 10 : Infinity,
      );
      expect(root.left!.value).toBe(5);
      expect(root.left!.value).toBeLessThanOrEqual(root.left!.left!.value);
      expect(root.left!.value).toBeLessThanOrEqual(root.left!.right!.value);
      expect(root.right!.value).toBeLessThanOrEqual(root.right!.left!.value);
    });
  });

  describe("POP Operation", () => {
    it("should handle single element correctly", () => {
      const heap = minHeap();
      heap.push(42);
      expect(heap.isEmpty()).toBe(false);
      expect(heap.peek()!.value).toBe(42);
      expect(heap.pop()).toBe(42);
      expect(heap.isEmpty()).toBe(true);
    });

    it("should safely handle empty heap operations", () => {
      const heap = minHeap();

      expect(heap.pop()).toBe(undefined);
      expect(heap.peek()).toBe(undefined);
      expect(heap.isEmpty()).toBe(true);
    });

    it("should handle two elements correctly", () => {
      const heap = minHeap();
      expect(heap.isEmpty()).toBe(true);
      heap.push(42);
      heap.push(55);

      expect(heap.isEmpty()).toBe(false);
      expect(heap.peek()!.value).toBe(42);
      expect(heap.pop()).toBe(42);

      expect(heap.isEmpty()).toBe(false);
      const peekNode = heap.peek()!;
      expect(peekNode.value).toBe(55);

      expect(peekNode.left).toBeUndefined();
      expect(peekNode.right).toBeUndefined();
      expect(heap.pop()).toBe(55);
      expect(heap.isEmpty()).toBe(true);
    });

    it("should handle pop operation with three elements correctly", () => {
      const heap = minHeap();
      expect(heap.isEmpty()).toBe(true);
      heap.push(42);
      heap.push(55);
      heap.push(56);

      expect(heap.isEmpty()).toBe(false);
      expect(heap.peek()!.value).toBe(42);
      expect(heap.pop()).toBe(42);
      expect(heap.isEmpty()).toBe(false);

      let peekNode = heap.peek()!;
      expect(peekNode.value).toBe(55);
      expect(peekNode.left).toBeDefined();
      expect(peekNode.right).toBeUndefined();
      expect(heap.pop()).toBe(55);
      expect(heap.isEmpty()).toBe(false);

      peekNode = heap.peek()!;
      expect(peekNode.value).toBe(56);
      expect(peekNode.left).toBeUndefined();
      expect(peekNode.right).toBeUndefined();
      expect(heap.isEmpty()).toBe(false);
      expect(heap.pop()).toBe(56);
      expect(heap.isEmpty()).toBe(true);
    });

    it("should handle pop operation with heapify", () => {
      const heap = minHeap();
      expect(heap.isEmpty()).toBe(true);
      heap.push(6);
      heap.push(10);
      heap.push(11);

      expect(heap.pop()).toBe(6);
      let peekNode = heap.peek()!;
      expect(peekNode.value).toBe(10);
      expect(peekNode.left).toBeDefined();
      expect(peekNode.right).toBeUndefined();

      expect(heap.pop()).toBe(10);
      peekNode = heap.peek()!;
      expect(peekNode.value).toBe(11);
      expect(peekNode.left).toBeUndefined();
      expect(peekNode.right).toBeUndefined();
    });

    it("should handle pop operation with heapify for five elements", () => {
      const heap = minHeap();
      heap.push(42);
      heap.push(55);
      heap.push(56);
      heap.push(80);
      heap.push(59);

      expect(heap.pop()).toBe(42);

      let peekNode = heap.peek()!;
      expect(peekNode.value).toBe(55);
      expect(peekNode.left).toBeDefined();
      expect(peekNode.right).toBeDefined();
      expect(peekNode.left!.left).toBeDefined();

      expect(peekNode.left!.value).toBe(59);
      expect(peekNode.right!.value).toBe(56);
      expect(peekNode.left!.left!.value).toBe(80);

      expect(heap.pop()).toBe(55);
      peekNode = heap.peek()!;
      expect(peekNode.value).toBe(56);
      expect(peekNode.left).toBeDefined();
      expect(peekNode.right).toBeDefined();
      expect(peekNode.left!.value).toBe(59);
      expect(peekNode.right!.value).toBe(80);
      expect(peekNode.left!.left).toBeUndefined();
      expect(peekNode.left!.right).toBeUndefined();
      expect(peekNode.right!.left).toBeUndefined();
      expect(peekNode.right!.right).toBeUndefined();
    });

    it("should handle pop operation with heapify for six elements", () => {
      const heap = minHeap();
      heap.push(13);
      heap.push(16);
      heap.push(31);
      heap.push(41);
      heap.push(51);
      heap.push(100);

      expect(heap.pop()).toBe(13);
      const peekNode = heap.peek()!;
      expect(peekNode.value).toBe(16);
      expect(peekNode.left).toBeDefined();
      expect(peekNode.right).toBeDefined();
      expect(peekNode.left!.value).toBe(41);
      expect(peekNode.right!.value).toBe(31);
      expect(peekNode.left!.left).toBeDefined();
      expect(peekNode.left!.right).toBeDefined();
      expect(peekNode.left!.left!.value).toBe(100);
      expect(peekNode.left!.right!.value).toBe(51);
      expect(peekNode.right!.left).toBeUndefined();
      expect(peekNode.right!.right).toBeUndefined();
      expect(peekNode.left!.left!.left).toBeUndefined();
      expect(peekNode.left!.left!.right).toBeUndefined();
      expect(peekNode.left!.right!.left).toBeUndefined();
      expect(peekNode.left!.right!.right).toBeUndefined();
    });

    it("should handle pop operation with heapify for nine elements", () => {
      const heap = minHeap();
      heap.push(1);
      heap.push(4);
      heap.push(3);
      heap.push(7);
      heap.push(6);
      heap.push(5);
      heap.push(8);
      heap.push(9);
      heap.push(10);

      expect(heap.pop()).toBe(1);
      const peekNode = heap.peek()!;
      expect(peekNode.value).toBe(3);
      expect(peekNode.left).toBeDefined();
      expect(peekNode.right).toBeDefined();
      expect(peekNode.left!.value).toBe(4);
      expect(peekNode.right!.value).toBe(5);
      expect(peekNode.left!.left).toBeDefined();
      expect(peekNode.left!.right).toBeDefined();
      expect(peekNode.left!.left!.value).toBe(7);
      expect(peekNode.left!.right!.value).toBe(6);
      expect(peekNode.right!.left!.value).toBe(10);
      expect(peekNode.right!.right!.value).toBe(8);
      expect(peekNode.left!.left!.left!.value).toBe(9);
    });
  });
});
