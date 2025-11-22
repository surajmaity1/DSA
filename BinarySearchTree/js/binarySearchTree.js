// Code a BST
// Take numbers one-by-one from the user and insert them into the tree

let root = null;

function createNode(value) {
  return {
    value: value,
    left: null,
    right: null,
  };
}

function insertNodeIterative(value) {
  const newNode = createNode(value);

  if (!root) {
    root = newNode;
    return;
  }

  let currentNode = root;
  let previousNode = null;

  while (currentNode !== null) {
    previousNode = currentNode;

    if (value > currentNode.value) {
      currentNode = currentNode.right;
    } else if (value < currentNode.value) {
      currentNode = currentNode.left;
    } else {
      console.log(`Node with ${value} already present.`);
      return;
    }
  }

  if (value > previousNode.value) {
    previousNode.right = newNode;
  } else {
    previousNode.left = newNode;
  }
}

function insertNodeRecursive(root, value) {
  if (root === null) {
    return createNode(value);
  }

  if (value < root.value) {
    root.left = insertNodeRecursive(root.left, value);
  } else if (value > root.value) {
    root.right = insertNodeRecursive(root.right, value);
  } else {
    console.log(`Node with ${value} already present.`);
  }

  return root;
}

function printBinarySearchTree() {
  let currentNode = root;
  console.log("\npreOrderTraversal: ");
  preOrderTraversal(currentNode);
  currentNode = root;
  console.log("\ninOrderTraversal: ");
  inOrderTraversal(currentNode);
  currentNode = root;
  console.log("\npostOrderTraversal: ");
  postOrderTraversal(currentNode);
}

function inOrderTraversal(node) {
  if (node) {
    inOrderTraversal(node.left);
    console.log(node.value + " ");
    inOrderTraversal(node.right);
  }
}

function preOrderTraversal(node) {
  if (node) {
    console.log(node.value + " ");
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
  }
}

function postOrderTraversal(node) {
  if (node) {
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    console.log(node.value + " ");
  }
}

function main() {
  const bstStorage = [10, 40, 20, 90, 30, 8, 9, 6, 7, 10];
  for (let index = 0; index < bstStorage.length; index++) {
    // insertNodeIterative(bstStorage[index]);
    root = insertNodeRecursive(root, bstStorage[index]);
  }
  printBinarySearchTree();
}

main();
