import { describe, it, expect } from "vitest";
import {
  addEdge,
  addVertices,
  constructGraph,
  getEdgeValue,
  getVertex,
  removeEdge,
  removeVertex,
} from "../Graph/graph.ts";
import { testVertices } from "./fixtures/graph.ts";

describe("Graph", () => {
  it("should add vertices in graph", () => {
    const graph = constructGraph();
    addVertices(graph, testVertices);

    for (let index = 0; index < testVertices.length; index++) {
      expect(getVertex(graph, testVertices[index]!)).to.be.equal(true);
    }

    expect(graph.adjacencyList.size).to.be.equal(testVertices.length);

    expect(getVertex(graph, -1)).to.be.equal(false);
    expect(getVertex(graph, 55)).to.be.equal(false);
  });

  it("should add edges in graph", () => {
    const graph = constructGraph();
    addVertices(graph, testVertices);

    addEdge(graph, 0, 1, 2);
    addEdge(graph, 0, 2, 1);
    addEdge(graph, 1, 2, 1);
    addEdge(graph, 2, 3, 2);
    addEdge(graph, 2, 4, 2);
    addEdge(graph, 3, 4, 1);

    expect(getEdgeValue(graph, 2, 4)).to.be.equal(2);
    expect(getEdgeValue(graph, 0, 1)).to.be.equal(2);
    expect(getEdgeValue(graph, 2, 3)).to.be.equal(2);
    expect(getEdgeValue(graph, 0, 2)).to.be.equal(1);
    expect(getEdgeValue(graph, 2, 1)).to.be.equal(1);
    expect(getEdgeValue(graph, 4, 3)).to.be.equal(1);
  });

  it("should remove edge", () => {
    const graph = constructGraph();
    addVertices(graph, testVertices);

    addEdge(graph, 0, 1, 2);
    addEdge(graph, 0, 2, 1);
    addEdge(graph, 1, 2, 1);
    addEdge(graph, 2, 3, 2);
    addEdge(graph, 2, 4, 2);
    addEdge(graph, 3, 4, 1);

    expect(getEdgeValue(graph, 3, 4)).to.be.equal(1);
    expect(removeEdge(graph, 3, 4)).to.be.equal(true);
    expect(getEdgeValue(graph, 3, 4)).to.be.equal(undefined);
  });

  it("should remove vertex", () => {
    const graph = constructGraph();
    addVertices(graph, testVertices);

    addEdge(graph, 0, 1, 2);
    addEdge(graph, 0, 2, 1);
    addEdge(graph, 1, 2, 1);
    addEdge(graph, 2, 3, 2);
    addEdge(graph, 2, 4, 2);
    addEdge(graph, 3, 4, 1);

    for (let index = 0; index < testVertices.length; index++) {
      const vertex = testVertices[index]!;

      expect(getVertex(graph, vertex)).to.be.equal(true);
      expect(removeVertex(graph, vertex)).to.be.equal(true);
      expect(getVertex(graph, vertex)).to.be.equal(false);
    }
  });
});
