export function addVertex(graph, vertex) {
  if (graph[vertex]) {
    console.log("vertex present");
    return;
  }
  graph[vertex] = [];
}

export function addEdge(graph, firstVertext, secondVertex) {
  graph[firstVertext].push(secondVertex);
  graph[secondVertex].push(firstVertext);
}

export function removeEdge(graph, firstVertext, secondVertex) {
  if (!isEdgePresent(graph, firstVertext, secondVertex)) {
    return;
  }

  let index = graph[firstVertext].indexOf(secondVertex);
  graph[firstVertext].splice(index, 1);

  index = graph[secondVertex].indexOf(firstVertext);
  graph[secondVertex].splice(index, 1);
}

export function removeVertex(graph, vertex) {
  if (!graph[vertex]) {
    console.log("no vertex found");
    return;
  }

  delete graph[vertex];

  for (const item in graph) {
    const foundIndex = graph[item].indexOf(vertex);
    if (foundIndex !== -1) {
      graph[item].splice(foundIndex, 1);
    }
  }
}

export function isEdgePresent(graph, oneVertex, anotherVertex) {
  if (!graph[oneVertex] || !graph[anotherVertex]) {
    console.log("no vertex found");
    return false;
  }

  if (
    graph[oneVertex].includes(anotherVertex) &&
    graph[anotherVertex].includes(oneVertex)
  ) {
    return true;
  }

  return false;
}

export function findNeighbors(graph, vertex) {
  if (!graph[vertex]) {
    console.log("no vertex found");
    return null;
  }
  console.log(`${vertex}: ${graph[vertex].join(" -> ")}`);
}

export function displayList(graph) {
  for (const vertex in graph) {
    console.log(`${vertex}: ${graph[vertex].join(" -> ")}`);
  }
}

function GraphImplementationUsingAdjacencyList() {
  const graph = [];

  addVertex(graph, "A");
  addVertex(graph, "B");
  addVertex(graph, "C");

  addEdge(graph, "A", "B");
  addEdge(graph, "B", "C");
  addEdge(graph, "C", "A");

  removeVertex(graph, "C");
  console.log(isEdgePresent(graph, "A", "B"));
  console.log(isEdgePresent(graph, "A", "D"));

  findNeighbors(graph, "A");
  // console.log(graph);

  displayList(graph);
  console.log("removing...");
  removeEdge(graph, "A", "B");

  displayList(graph);
}

GraphImplementationUsingAdjacencyList();
