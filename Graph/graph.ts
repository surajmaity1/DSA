type Graph = {
  vertices: string[];
  edges: number[];
  directed: boolean;
};

type VertexType = {
  vertex: string;
  connect: (vertexValue: string, wieghtValue: number) => void;
};

export function graph(isDirected: boolean = false): Graph {
  return {
    vertices: [],
    edges: [],
    directed: isDirected,
  };
}

export function insertVertex(graph: Graph, vertexValue: string): VertexType {
  const vertex = vertexValue[0].toLowerCase();

  if (!graph.vertices.includes(vertex)) {
    graph.vertices.push(vertex);
  }

  return {
    vertex,
    connect: connect,
  };
}

function connect(vertexValue: string, wieghtValue: number) {
    
}
