import { describe, it, expect } from "vitest";
import { graph, insertVertex } from "../Graph/graph.ts";

describe("Graph", () => {
  it("should create graph", () => {
    const G = graph();

    const vertexA = insertVertex(G, "a");
    const vertexB = insertVertex(G, "b");

    vertexA.connect(vertexB, 4);
  });
});
