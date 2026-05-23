import { describe, it } from "vitest";
import { addEdge, addVertices, constructGraph } from "../Graph/graph.ts";
import { testVertices } from "./fixtures/graph.ts";
import { generateMST } from "../tree/spanningTree/prims/prims.ts";

describe("Prims Algorithm", () => {
  it("should create MST", () => {
    const graph = constructGraph();
    addVertices(graph, testVertices);

    addEdge(graph, 0, 1, 2);
    addEdge(graph, 0, 2, 1);
    addEdge(graph, 1, 2, 1);
    addEdge(graph, 2, 3, 2);
    addEdge(graph, 2, 4, 2);
    addEdge(graph, 3, 4, 1);

    const prims = generateMST(graph);
  });
});
