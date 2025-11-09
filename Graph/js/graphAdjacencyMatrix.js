GraphImplementationUsingAdjacencyMatrix();
function GraphImplementationUsingAdjacencyMatrix() {
  const vertexStorage = ["A", "B", "C", "D"];
  const noOfVertex = vertexStorage.length;
  const graph = Array.from({ length: noOfVertex }, () =>
    new Array(noOfVertex).fill(0)
  );

  addEdge(graph, "A", "B");
  addEdge(graph, "B", "C");
  addEdge(graph, "C", "D");
  addEdge(graph, "D", "A");
  /*

  console.log(isEdgePresent(graph, "A", "B"));
  console.log(isEdgePresent(graph, "A", "D"));

  findNeighbors(graph, "A");

  removeEdge(graph, "A", "D");

  printAdjacencyMatrix(graph);
  displayGraph(graph, vertexData);
  */

  printAdjacencyMatrix(graph);
  console.log("------------------------------------");
  console.log(graph);
  removeVertex(graph, vertexStorage, "D");
  console.log(graph);
  //   printAdjacencyMatrix(graph);
  //   displayGraph(graph, vertexStorage);
  //   console.log("------------------------------------");
  //   printAdjacencyMatrix(graph);

  //   addVertex(graph, vertexStorage, "E");

  //   console.log("------------------------------------");
  //   printAdjacencyMatrix(graph);
}

export function addVertex(graph, vertexStorage, vertex) {
  const isVertexPresent = vertexStorage.indexOf(vertex);

  if (isVertexPresent !== -1) {
    console.log("Vertex already present");
    return;
  }

  const newGraph = graph.slice();

  // add row
  newGraph.push(new Array(newGraph).fill(0));

  // add column
  for (let rowIndex = 0; rowIndex < newGraph.length; rowIndex++) {
    newGraph[rowIndex].push(0);
  }

  graph = newGraph;
}

export function addEdge(graph, firstVertext, secondVertex) {
  const firstVertextIndex = getIndex(firstVertext);
  const secondVertexIndex = getIndex(secondVertex);
  graph[firstVertextIndex][secondVertexIndex] = 1;
  graph[secondVertexIndex][firstVertextIndex] = 1;
}

function getIndex(vertex) {
  return vertex.charCodeAt(0) - 65;
}

export function removeEdge(graph, firstVertext, secondVertex) {
  const firstVertexIndex = getIndex(firstVertext);
  const secondVertexIndex = getIndex(secondVertex);
  graph[firstVertexIndex][secondVertexIndex] = 0;
  graph[secondVertexIndex][firstVertexIndex] = 0;
}

export function removeVertex(graph, vertexStorage, vertex) {
  // remove row
  const vertexIndex = getIndex(vertex);

  // remove column
  for (let rowIndex = 0; rowIndex < graph.length; rowIndex++) {
    graph[rowIndex].splice(vertexIndex, 1);
  }

  // remove vertex from vertexStorage
  vertexStorage.splice(vertexIndex, 1);
}

export function isEdgePresent(graph, firstVertext, secondVertex) {
  const firstVertextIndex = getIndex(firstVertext);
  const secondVertexIndex = getIndex(secondVertex);
  if (
    graph[firstVertextIndex][secondVertexIndex] === 1 &&
    graph[secondVertexIndex][firstVertextIndex] === 1
  ) {
    return true;
  }

  return false;
}

export function findNeighbors(graph, vertex) {
  const vertexIndex = getIndex(vertex);
  const neighbors = [];

  for (let index = 0; index < graph.length; index++) {
    if (graph[vertexIndex][index] === 1) {
      neighbors.push(String.fromCharCode(65 + index));
    }
  }
  console.log(`${vertex}: ${neighbors.join(" -> ")}`);
}

export function displayGraph(graph, vertex) {
  for (let rowIndex = 0; rowIndex < vertex.length; rowIndex++) {
    const connections = graph[rowIndex]
      .map((edge, columnIndex) =>
        edge ? String.fromCharCode(65 + columnIndex) : null
      )
      .filter(Boolean)
      .join("-> ");

    console.log(`${vertex[rowIndex]}: ${connections}`);
  }
}

function printAdjacencyMatrix(matrix) {
  for (let index = 0; index < matrix.length; index++) {
    const element = matrix[index];
    console.log(element);
  }
}
