import { describe, expect, it } from "vitest";
import { minHeap } from "../Heap/minHeap.ts";
import { inputTests } from "./fixtures/minHeap.ts";

describe("Min Heap", () => {
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
    expect(heap.peek()).toBe(5);
  });

  it.todo("should create heap with few elements", () => {
    const heap = minHeap();

    expect(heap.isEmpty()).toBe(false);
    expect(heap.peek()).toBe(5);

    for (const item of inputTests) {
      heap.push(item);
    }

    expect(heap.isEmpty()).toBe(false);
    expect(heap.peek()).toBe(5);
  });
});
