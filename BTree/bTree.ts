type node = {
  root: any;
  leaf: boolean;
  childrens: node[];
  keys: number[];
};

function createNode(): node {
  return {
    root: null,
    leaf: true,
    childrens: [],
    keys: [],
  };
}

function insertNonFull(root: node, key: number): node {
  const newNode = createNode();
  const degreeOfBTree = 2;
  let index = root.keys.length - 1;

  if (root.leaf) {
    while (index >= 0 && key < root.keys[index]) {
      root.keys[index + 1] = root.keys[index];
      index--;
    }
    root.keys[index + 1] = key;
  } else {
    while (index >= 0 && key < root.keys[index]) {
      index--;
    }
    index++;

    if (root.childrens[index].keys.length === 2 * degreeOfBTree - 1) {
      splitChild(root, index);
      if (key > root.keys[index]) {
        index++;
      }
    }
    return insertNonFull(root.childrens[index], key);
  }
  return root;
}

function splitChild(root: node, index: number) {
  const degreeOfBTree = 2;
  const newNode = createNode();
  const existNode = root.childrens[index];

  newNode.leaf = existNode.leaf;

  for (let keyIndex = 0; keyIndex < degreeOfBTree; keyIndex++) {
    // copy key from existing node
    newNode.keys[keyIndex] = existNode.keys[degreeOfBTree + 1];
    // delete copied key from existing node
    existNode.keys.splice(degreeOfBTree + 1, 1);
  }

  if (!root.leaf) {
    // copy childs
    for (let childIndex = 0; childIndex < degreeOfBTree; childIndex++) {
      newNode.childrens[childIndex] =
        existNode.childrens[childIndex + degreeOfBTree + 1];
    }
  }

  const rootLenth = root.keys.length;

  // move childrens one position right to insert new childrent
  for (let childIndex = rootLenth; childIndex > index + 1; childIndex--) {
    root.childrens[childIndex + 1] = root.childrens[childIndex];
  }

  root.childrens[index + 1] = newNode;

  // more keys one position right to insert new key
  for (let keyIndex = rootLenth; keyIndex > index; keyIndex--) {
    root.keys[keyIndex + 1] = root.keys[keyIndex];
  }

  root.keys[index] = existNode.keys[degreeOfBTree];
}

export function insert(head: node | null, key: number): node {
  if (!head) {
    const newNode = createNode();
    newNode.keys.push(key);
    return newNode;
  }

  const degreeOfBTree = 2;

  if (head.keys.length === 2 * degreeOfBTree - 1) {
    const newNode = createNode();
    newNode.keys.push(key);
    newNode.childrens[0] = head;
    head.root = newNode;
    splitChild(head, 0);
    return insertNonFull(newNode, key);
  }

  return insertNonFull(head, key);
}

function main() {
  // const root = createNode(3);

  // const firstChildOfRoot = createNode(1);
  // root.links?.push(firstChildOfRoot);
  // insertKey(firstChildOfRoot, 2);

  // const secondChildOfRoot = createNode(4);
  // root.links?.push(secondChildOfRoot);
  // insertKey(secondChildOfRoot, 5);

  // levelOrderTraversal(root);

  // const searchingNode = 4;
  // console.log(`Is ${searchingNode} present? ${search(root, searchingNode)}`);

  let root = null;
  const input = [1, 2, 3, 4, 5, 6, 7];
  const length = input.length;

  for (let index = 0; index < length; index++) {
    // root = buildBTree(root, input[index]);

    root = insert(root, input[index]);

    // if (input[index] === 2) {
    //   break;
    // }
  }

  // levelOrderTraversal(root);
}

main();
/*
function levelOrderTraversal(root: node | null) {
  if (!root) {
    return;
  }

  const queue = [root];

  while (queue.length > 0) {
    const poppedNode = queue.shift();
    console.log(poppedNode?.keys.join(", "));

    if (poppedNode?.childrens) {
      for (const eachNode of poppedNode?.childrens) {
        queue.push(eachNode);
      }
    }
  }
}

function insertKey(node: node, key: number) {
  if (!node) {
    return null;
  }

  node.keys.push(key);
}

function validateKeysLength(keys: number) {
  const degree = 2;

  // minimum & maximum key check
  if (keys >= degree - 1 || keys <= 2 * degree - 1) {
    return false;
  }

  return true;
}

function validateNodesLength(nodes: number): boolean {
  const degree = 2;

  // minimum & maximum no of nodes check
  if (nodes >= degree || nodes <= 2 * degree) {
    return false;
  }

  return true;
}

function search(startingNode: node, key: number): boolean {
  if (!startingNode) {
    return false;
  }

  let previousNode = null;

  while (startingNode !== null) {
    if (checkKeyPresent(startingNode, key)) {
      return true;
    }

    const startingNodeTotalLinks = startingNode.childrens.length;

    let start = 0;
    let end = startingNodeTotalLinks - 1;

    while (start <= end) {
      const middle = Math.floor(start + (end - start) / 2);
      const currentNodeValue = startingNode.childrens[middle];

      if (checkKeyPresent(currentNodeValue, key)) {
        return true;
      } else if (
        key < currentNodeValue.keys[currentNodeValue.keys.length - 1]
      ) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }

    // let tempLength = 0;
    // while (tempLength < startingNode.links.length) {
    //   const currentNode = startingNode.links[tempLength];
    //   const currentNodeKeys = currentNode.keys;

    //   if (checkKeyPresent(currentNode, key)) {
    //     return true;
    //   }
    //   tempLength++;
    // }

    // previousNode = startingNode;
    // startingNode = startingNode.links[0];
  }

  return false;
}

function checkKeyPresent(currentNode: node, searchKey: number) {
  if (!currentNode || !searchKey) {
    return false;
  }

  let start = 0;
  let end = currentNode.keys.length - 1;

  while (start <= end) {
    const middle = Math.floor(start + (end - start) / 2);
    if (currentNode.keys[middle] === searchKey) {
      return true;
    } else if (searchKey < currentNode.keys[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return false;
}

// TODO : draft: incomplete
function buildBTree(root: node | null, newKey: number): node {
  if (!root) {
    return createNode(newKey);
  }

  const newNode = createNode(newKey);
  if (root.childrens.length === 0) {
    root.childrens.push(newNode);
    return root;
  }

  const degree = 2;
  let previousNode = root;
  let currentNodeIndex = 0;
  let previousNodeLinks = -1;
  let currentNode = root.childrens[currentNodeIndex];

  while (currentNode !== null) {
    if (
      currentNode.keys.length !== 0 &&
      currentNode.keys.length < 2 * degree - 1
    ) {
      currentNode.keys.push(newKey);
    } else if (previousNode.childrens.length < 2 * degree) {
      previousNodeLinks++;
      previousNode.childrens.push(newNode);
      currentNode = previousNode.childrens[previousNodeLinks];
    } else {
      // previousNode = currentNode;
      currentNode = previousNode.childrens[currentNodeIndex];
    }
  }

  return root;
}

*/
