import { expect } from "chai";
import { addVertex, displayList } from "../Graph/js/graphAdjacencyList.js";

describe("Graph", () => {
  let graph;

  beforeEach(() => {
    graph = [];
  });

  it("should add vertex in the graph", () => {
    addVertex(graph, "A");
    expect(displayList).to.be.equal('');
  });
});
