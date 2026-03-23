export type node = {
  value: number;
  left: node | null;
  right: node | null;
  colour: boolean; // RED: true, BLACK: false
};

function createNode(value: number): node {
  return {
    value: value,
    left: null,
    right: null,
    colour: true,
  };
}

function inOrderTraversal(root: node | null) {
  if (root) {
    inOrderTraversal(root.left);
    console.log(root.value + " ");
    inOrderTraversal(root.right);
  }
}

function insert(root: node | null, value: number): node {
  if (root === null) {
    root = createNode(value);
    root.colour = false;

    return root;
  }

  let currentNode: node | null = root;
  let previousNode: node = currentNode;

  while (currentNode !== null) {
    previousNode = currentNode;

    if (value < currentNode.value) {
      currentNode = currentNode.left;
    } else if (value > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      console.log("Duplicate not allowed");
      return root;
    }
  }

  if (value < previousNode.value) {
    previousNode.left = createNode(value);
  } else {
    previousNode.right = createNode(value);
  }

  root = validateRedBlackTree(root);
  // inOrderTraversal(root);

  return root;
}

function validateRedBlackTree(root: node): node {
  if (!root) {
    console.log("Tree not found");
    return root;
  }

  let currentNode: node = root;

  while (currentNode !== null) {
    if (currentNode.colour) {
      if (currentNode.left !== null && currentNode.colour) {
        // violate the condition
      } else if (currentNode.right !== null && currentNode.colour) {
        // violate the condition
      }
    } else {
      if (currentNode.left !== null && !currentNode.colour) {
        // violate the condition
      } else if (currentNode.right !== null && !currentNode.colour) {
        // violate the condition
      }
    }
  }

  return root;
}

export function insertNode(input: number[]): node {
  let root: node | null = null;

  for (let index = 0; index < input.length; index++) {
    const element = input[index];
    root = insert(root, element);
  }

  return root;
}

function main() {
  const input = [10, 20, 30, 50, 40, 60, 70, 80, 4, 8];
  //   const input = [10, 20, 30];
  let root: node | null = null;

  for (let index = 0; index < input.length; index++) {
    const element = input[index];
    root = insert(root, element);
  }

  // inOrderTraversal(root);
}

// main();
