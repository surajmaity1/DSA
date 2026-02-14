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

function dfs(adjacencyList) {
  const totalNodes = adjacencyList.length + 1;
  const visitedNode = Array(totalNodes).fill(false);
  const queue = [];
  const dfs = Array(totalNodes);

  queue.push(1);

  while (queue.length > 0) {
    const poppedNode = queue.shift();

    for (let index = 0; index < adjacencyList[poppedNode].length; index++) {
      const element = adjacencyList[poppedNode][index];

      if (!visitedNode[element]){
        queue.push(element);
      }
    }

    dfs.push(poppedNode);
  }

  console.log(dfs.join(', '));
}

function main() {
  const totalNodes = 9;
  const adjacencyList = [];

  // handle input
  input(totalNodes, adjacencyList);

  // view
  inputDisplay(adjacencyList);

  dfs(adjacencyList);
}

main();