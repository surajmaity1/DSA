function main() {

  const totalNodes = 6;

  const inputMatrix = Array.from(Array(totalNodes + 1), () => Array(totalNodes + 1));

  // Defining edges with weights

  inputMatrix[1][2] = 7;

  inputMatrix[1][3] = 9;

  inputMatrix[1][6] = 14;

  inputMatrix[2][1] = 7;

  inputMatrix[2][3] = 10;

  inputMatrix[2][4] = 15;

  inputMatrix[3][1] = 9;

  inputMatrix[3][2] = 10;
  inputMatrix[3][4] = 11;

  inputMatrix[3][6] = 2;

  inputMatrix[4][2] = 15;

  inputMatrix[4][3] = 11;

  inputMatrix[4][5] = 6;

  inputMatrix[5][4] = 6;

  inputMatrix[5][6] = 9;

  inputMatrix[6][1] = 14;

  inputMatrix[6][3] = 2;

  inputMatrix[6][5] = 9;

  // console.log(inputMatrix);

  // return;

  // step 1

  const result = Array.from(Array(totalNodes + 1), () => Array(totalNodes + 1));

  const maxvalue = Number.MAX_VALUE;

  // step 2

  for (let row = 0; row < totalNodes + 1; row++) {
    for (let column = 0; column < totalNodes + 1; column++) {
      result[row][column] = maxvalue;
    }
  }

  result[1][1] = 0;

  const unvisitedNodes = [1, 2, 3, 4, 5, 6];

  // console.log(result);

  // step 3

  for (let index = 0; index < totalNodes; index++) {

    const currentNode = unvisitedNodes[index];

    for (let columnIndex = 1; columnIndex < totalNodes + 1; columnIndex++) {

      if (inputMatrix[currentNode][columnIndex] != undefined && inputMatrix[currentNode][columnIndex] < result[currentNode][columnIndex]) {
        result[currentNode][columnIndex] = inputMatrix[currentNode][columnIndex];
      }
    }
  }

  //console.log(result);
  dijkstra(result, unvisitedNodes);
  // console.log('after');
  // console.log(result);
}

function dijkstra(result, unvisitedNodes) {
  // step 4
  let startingNode = result[1][1];
  const totalNodes = result.length;
  const minimumNode = {
    node: 1,
    weight: Number.MAX_VALUE,
  };

  // console.log(result);

  while (unvisitedNodes.length > 0) {
    const currentNodeIndex = unvisitedNodes.indexOf(minimumNode.node);
    const currentNode = unvisitedNodes.splice(currentNodeIndex, 1)[0];
    // console.log(currentNodeIndex);
    // console.log(currentNode);

    // check neighbor
    for (let index = 0; index < unvisitedNodes.length; index++) {
      if (index === currentNode) {
        continue;
      }

      const columnIndex = unvisitedNodes[index];
      const temp1 = result[currentNode][currentNode];
      const temp2 = result[currentNode][columnIndex];
      const sum = result[currentNode][currentNode] + result[currentNode][columnIndex];

      if (result[currentNode][columnIndex] > sum) {
        result[currentNode][columnIndex] = sum;
      }

      if (minimumNode.weight > result[currentNode][columnIndex]) {
        minimumNode.weight = result[currentNode][columnIndex];
        minimumNode.node = columnIndex;
      }
    }

    /*
    for (let columnIndex = 1; columnIndex < totalNodes; columnIndex++) {
      if (columnIndex === currentNode) {
        continue;
      }

      if (minimumNode.weight > result[currentNode][columnIndex]) {
        minimumNode.weight = result[currentNode][columnIndex];
        minimumNode.node = columnIndex;
      }

      // const sum = startingNode + result[currentNode][columnIndex];
      //
      // if (sum < result[currentNode][columnIndex]) {
      //   result[currentNode][columnIndex] = sum;
      //   minimumNode.weight = sum;
      //   minimumNode.node = columnIndex;
      // }
    }
    */

    result[minimumNode.node][minimumNode.node] = minimumNode.weight;
    console.log(minimumNode);
    console.log(minimumNode);
  }

  console.log('after');
  console.log(result);
}

main();