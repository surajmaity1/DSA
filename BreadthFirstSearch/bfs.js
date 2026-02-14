function input(totalNodes, adjacencyList) {
  for (let index = 1; index <= totalNodes; index++) {
    adjacencyList[index] = [];
  }

  adjacencyList[1].push(2);
  adjacencyList[1].push(6);

  adjacencyList[2].push(1);
  adjacencyList[2].push(3);
  adjacencyList[2].push(4);

  adjacencyList[3].push(2);

  adjacencyList[4].push(2);
  adjacencyList[4].push(5);

  adjacencyList[5].push(4);
  adjacencyList[5].push(8);

  adjacencyList[6].push(1);
  adjacencyList[6].push(7);
  adjacencyList[6].push(9);

  adjacencyList[7].push(6);
  adjacencyList[7].push(8);

  adjacencyList[8].push(5);
  adjacencyList[8].push(7);

  adjacencyList[9].push(6);
}

function inputDisplay(adjacencyList) {
  for (let index = 1; index < adjacencyList.length; index++) {
    console.log(`${index} -> ${adjacencyList[index].join(", ")}`);
  }
}

function bfs(totalNodes, adjacencyList) {
  const queue = [];
  const visitedList = Array(totalNodes + 1).fill(false);
  const traversedNode = [];

  queue.push(1);

  while (queue.length > 0) {
    const currentNode = queue.shift();
    if (visitedList[currentNode]) {
      continue;
    }

    traversedNode.push(currentNode);
    visitedList[currentNode] = true;

    for (let index = 0; index < adjacencyList[currentNode].length; index++) {
      const element = adjacencyList[currentNode][index];
      queue.push(element);
    }
  }

  console.log(traversedNode.join(", "));
}

function main() {
  const totalNodes = 9;
  const adjacencyList = [];

  // input
  input(totalNodes, adjacencyList);

  // input display
  console.log('Input: ');
  inputDisplay(adjacencyList);

  console.log('Output: ');
  bfs(totalNodes, adjacencyList);
}

main();
