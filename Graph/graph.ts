type CustomList = {
  vertex: number;
  weight: number;
};

export type Graph = {
  adjacencyList: Map<number, CustomList[]>;
};

export function constructGraph(): Graph {
  return {
    adjacencyList: new Map(),
  };
}

export function removeVertex(graph: Graph, vertex: number): boolean {
  if (!getVertex(graph, vertex)) {
    return false;
  }

  const neighbours = graph.adjacencyList.get(vertex)!;

  for (let index = 0; index < neighbours.length; index++) {
    const neighbourVertex = neighbours[index]!.vertex;

    if (graph.adjacencyList.has(neighbourVertex)) {
      graph.adjacencyList.set(
        neighbourVertex,
        graph.adjacencyList
          .get(neighbourVertex)!
          .filter((item) => item.vertex !== vertex),
      );
    }
  }

  graph.adjacencyList.delete(vertex);

  return true;
}

export function removeEdge(
  graph: Graph,
  oneVertex: number,
  anotherVertex: number,
) {
  const edgeValue1 = getEdgeValue(graph, oneVertex, anotherVertex);
  const edgeValue2 = getEdgeValue(graph, anotherVertex, oneVertex);

  if (edgeValue1 !== undefined && edgeValue1 === edgeValue2) {
    graph.adjacencyList.set(
      oneVertex,
      graph.adjacencyList
        .get(oneVertex)!
        .filter((item) => item.vertex !== anotherVertex),
    );
    graph.adjacencyList.set(
      anotherVertex,
      graph.adjacencyList
        .get(anotherVertex)!
        .filter((item) => item.vertex !== oneVertex),
    );

    return true;
  }

  return false;
}

export function getEdgeValue(
  graph: Graph,
  oneVertex: number,
  anotherVertex: number,
) {
  return graph.adjacencyList
    .get(oneVertex)
    ?.find((edge) => edge.vertex === anotherVertex)?.weight;
}

export function addEdge(
  graph: Graph,
  oneVertex: number,
  anotherVertex: number,
  weight: number,
): boolean {
  if (
    graph.adjacencyList.has(oneVertex) &&
    graph.adjacencyList.has(anotherVertex)
  ) {
    graph.adjacencyList.get(oneVertex)!.push({
      vertex: anotherVertex,
      weight: weight,
    });

    graph.adjacencyList.get(anotherVertex)!.push({
      vertex: oneVertex,
      weight: weight,
    });

    return true;
  }

  return false;
}

export function getVertex(graph: Graph, vertex: number): boolean {
  return graph.adjacencyList.has(vertex);
}

function addVertex(graph: Graph, vertex: number) {
  if (graph.adjacencyList.has(vertex)) {
    return false;
  }

  graph.adjacencyList.set(vertex, []);

  return true;
}

export function addVertices(graph: Graph, input: number[]) {
  for (let index = 0; index < input.length; index++) {
    addVertex(graph, input[index]!);
  }
}
