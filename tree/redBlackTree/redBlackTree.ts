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
  let parentNode: node = currentNode;
  let grandParentNode: node = currentNode;

  while (currentNode !== null) {
    grandParentNode = parentNode;
    parentNode = currentNode;

    if (value < currentNode.value) {
      currentNode = currentNode.left;
    } else if (value > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      console.log("Duplicate not allowed");
      return root;
    }
  }

  if (value < parentNode.value) {
    parentNode.left = createNode(value);
  } else {
    parentNode.right = createNode(value);
  }

  root = validateRedBlackTree(root, grandParentNode, parentNode);
  // inOrderTraversal(root);

  return root;
}

function validateRedBlackTree(
  root: node,
  grandParentNode: node,
  parentNode: node,
): node {
  if (!root) {
    console.log("Tree not found");
    return root;
  }

  if (!parentNode.colour) {
    return root;
  }

  let uncleNode;

  if (grandParentNode.left?.value !== parentNode.value) {
    uncleNode = grandParentNode.left;
  } else {
    uncleNode = grandParentNode.right;
  }

  if (uncleNode?.colour) {
    // recolouring
    uncleNode.colour = false;
    parentNode.colour = false;

    if (grandParentNode.value !== root.value) {
      grandParentNode.colour = true;
    }
  } else {
    // rotate
  }

  return root;
}

export function insertNode(input: number[]): node | null {
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
