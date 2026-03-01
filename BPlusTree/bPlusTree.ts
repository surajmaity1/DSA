type node = {
  keys: number[],
  children: node[],
  leaf: boolean,
  next: node | null
}

function createNode(key: number): node {
  return {
    keys: [key],
    children: [],
    leaf: true,
    next: null
  }
}

function isOverFlowKeys(givenNode: node, order: number): boolean {
  return givenNode.keys.length === order - 1;
}

function splitNonLeafNode(currentNode: node, key: number, order: number) {
  const currentKeys = currentNode.keys;
  currentKeys.push(key);
  currentKeys.sort((firstValue, secondValue) => firstValue - secondValue);

  const middleIndex: number = order % 2 === 0 ? (order / 2) : Math.ceil(order / 2);
  const middleKey: number = currentKeys[middleIndex];

  // copy keys
  const newSibling = createNode(middleKey);
  for (let index: number = middleIndex + 1; index < currentKeys.length; index++) {
    newSibling.keys.push(currentKeys[index]);
  }
  newSibling.keys.shift();
  // let siblingOfCurrentNode: node;
  // siblingOfCurrentNode.keys = currentKeys.slice(middleIndex + 2, currentKeys.length);

  currentNode.keys = currentKeys.slice(0, middleIndex);

  let newRoot: node = createNode(middleKey);
  newRoot.keys.sort((firstNumber, secondNumber) => firstNumber - secondNumber);
  newRoot.children.push(currentNode);
  newRoot.children.push(newSibling);
  newRoot.leaf = false;
  newRoot.next = null;

  const sibchild = currentNode.children.filter(
    (child) =>
      !currentNode.keys.includes(child.keys[0]) && newSibling.keys.includes(child.keys[0])
  );
  // console.log(sibchild)

  for (let index = 0; index < sibchild.length; index++) {
    newSibling.children.push(sibchild[index])
  }
  // newSibling.children.sort((firstNode, secondNode) => firstNode.keys[0] - secondNode.keys[0])

  currentNode.children = currentNode.children.filter((child) =>
    child.keys[0] <= currentNode.keys[currentNode.keys.length - 1]
  )

  return {
    newRoot,
    newSibling
  };
}

function splitNode(currentNode: node, key: number, order: number, queue: node[]): node {
  const currentKeys = currentNode.keys;
  currentKeys.push(key);
  currentKeys.sort((firstValue, secondValue) => firstValue - secondValue);

  const middleIndex: number = order % 2 === 0 ? (order / 2) : Math.ceil(order / 2);
  const middleKey: number = currentKeys[middleIndex];

  // copy keys
  const siblingOfCurrentNode = createNode(middleKey);
  for (let index: number = middleIndex + 1; index < currentKeys.length; index++) {
    siblingOfCurrentNode.keys.push(currentKeys[index]);
  }

  currentNode.keys = currentKeys.slice(0, middleIndex);

  let newRoot: node;
  if (!queue) {
    newRoot = createNode(middleKey);
    newRoot.children.push(currentNode);
    newRoot.children.push(siblingOfCurrentNode);
    newRoot.leaf = false;
    currentNode.next = siblingOfCurrentNode;
  } else {
    // if (key === 20) {
    //   console.log('else key:', 20)
    // }
    queue.pop();
    newRoot = queue.pop();
    if (key === 20) {
      console.log(`keylength : ${newRoot.keys.length}`)
      console.log(`keys[0] : ${newRoot.keys[0]}`)
    }

    if (isOverFlowKeys(newRoot, order)) {
      let newSibling: node
      const temp = splitNonLeafNode(newRoot, key, order);
      newRoot = temp.newRoot;
      newSibling = temp.newSibling;
      newSibling.children.push(siblingOfCurrentNode);
      newSibling.children.sort((child1, child2) => child1.keys[0] - child2.keys[0])
      // console.log(newSibling)
      newSibling.leaf = false;
      newSibling.next = null;
    } else {
      newRoot.keys.push(middleKey);
      newRoot.keys.sort((firstNumber, secondNumber) => firstNumber - secondNumber);
      newRoot.leaf = false;
      newRoot.next = null;
      newRoot.children.push(siblingOfCurrentNode);
      currentNode.next = siblingOfCurrentNode;
    }
  }

  return newRoot;
}

// draft
function insert(root: node | null, key: number): node {
  const newNode = createNode(key);

  if (!root) {
    return newNode;
  }

  if (key === 28) {
    console.log(`key : ${key}`);
  }

  const order = 4;
  let currentNode = root;

  if (isOverFlowKeys(currentNode, order) && currentNode.leaf) {
    // split
    return splitNode(currentNode, key, order, null);
  } else {
    const queue = [currentNode];

    if (key === 42) {
      console.log(42)
    }

    while (!currentNode.leaf) {
      let keyNodeToTraverse = currentNode.keys[0];

      for (let index = 1; index < currentNode.keys.length; index++) {
        if (key > currentNode.keys[index]) {
          keyNodeToTraverse = currentNode.keys[index];
        }
      }
      let check = false;
      // find the appropriate child
      for (let childIndex = 0; childIndex < currentNode.children.length; childIndex++) {
        if (keyNodeToTraverse === currentNode.children[childIndex].keys[0]) {
          currentNode = currentNode.children[childIndex];
          queue.push(currentNode);
          break;
        } else if (keyNodeToTraverse <= currentNode.children[childIndex].keys[0]) {
          check = true;
          currentNode = currentNode.children[childIndex];
          break;
        }
      }
      if (check) {
        queue.push(currentNode);
      }
    }

    if (isOverFlowKeys(currentNode, order)) {
      return splitNode(currentNode, key, order, queue);
    } else {
      currentNode.keys.push(key);
      currentNode.keys.sort((firstValue, secondValue) => firstValue - secondValue);
    }
  }
  return root;
}

function levelOrderTraversal(root: node) {
  const queue = [root];
  while (queue.length > 0) {
    const poppedNode = queue.shift();
    console.log(poppedNode.keys.join(', '));

    // if (poppedNode.keys.length === 2 && poppedNode.keys[0] === 7 && poppedNode.keys[1] === 17) {
    //   console.log('--')
    //   console.log(`node: `)
    //   console.log(poppedNode)
    //   console.log('--')
    //   console.log(poppedNode.children)
    //   console.log('--')
    // }

    if (poppedNode.keys.length === 1 && poppedNode.keys[0] === 25) {
      console.log('--')
      console.log(`node: `)
      console.log(poppedNode)
      console.log('--')
      console.log(poppedNode.children)
      console.log('--')
    }

    for (let index = 0; index < poppedNode.children.length; index++) {
      queue.push(poppedNode.children[index]);
    }
  }
}

function main() {
  let root = null;
  const input = [1, 4, 7, 10, 17, 21, 31, 25, 19, 20, 28, 42];
  const length = input.length;

  for (let index = 0; index < length; index++) {
    root = insert(root, input[index]);
    // if (input[index] === 28) break;
  }

  levelOrderTraversal(root);
}

main();