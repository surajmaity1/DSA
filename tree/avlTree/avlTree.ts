export type node = {
  value: number;
  left: node | null;
  right: node | null;
  height: number;
  balanceFactor: number;
};

export function createNode(value: number): node {
  return {
    value: value,
    left: null,
    right: null,
    height: 0,
    balanceFactor: 0,
  };
}

function inOrderTraversal(root: node | null) {
  if (root) {
    inOrderTraversal(root.left);
    console.log(root.value + " ");
    inOrderTraversal(root.right);
  }
}

export function levelOrder(root: node | null) {
  if (root === null) {
    return [];
  }

  const queue = [root];
  const result: number[] = [];

  while (queue.length > 0) {
    const popppedElement = queue.shift();

    if (!popppedElement) {
      break;
    }

    result.push(popppedElement?.value);

    if (popppedElement?.left !== null) {
      queue.push(popppedElement?.left);
    }

    if (popppedElement?.right !== null) {
      queue.push(popppedElement?.right);
    }
  }

  return result;
}

function calculateHeight(root: node | null): number {
  if (root === null) {
    return -1;
  }

  return Math.max(calculateHeight(root.left), calculateHeight(root.right)) + 1;
}

function calculateBalanceFactor(root: node): number {
  return calculateHeight(root.left) - calculateHeight(root.right);
}

export function LRRotation(grandRoot: node): node {
  const root = grandRoot.left;

  if (root === null) {
    return grandRoot;
  }

  // LL Rotation
  let child = root.right;

  if (child === null) {
    return grandRoot;
  }

  const leftSubTreeOfChild = child?.left;
  child.left = root;
  root.right = leftSubTreeOfChild;

  root.height = calculateHeight(root);
  child.height = calculateHeight(child);

  root.balanceFactor = calculateBalanceFactor(root);
  child.balanceFactor = calculateBalanceFactor(child);

  grandRoot.left = child;

  // RR Rotation
  child = grandRoot.left;

  grandRoot.left = child.right;
  child.right = grandRoot;

  grandRoot.height = calculateHeight(grandRoot);
  child.height = calculateHeight(child);

  grandRoot.balanceFactor = calculateBalanceFactor(grandRoot);
  child.balanceFactor = calculateBalanceFactor(child);

  return child;
}

export function RLRotation(grandRoot: node) {
  const root = grandRoot.right;

  if (root === null) {
    return grandRoot;
  }

  // RR Rotation
  let child = root.left;

  if (child === null) {
    return root;
  }

  root.left = child.right;
  child.right = root;

  root.height = calculateHeight(root);
  child.height = calculateHeight(child);

  root.balanceFactor = calculateBalanceFactor(root);
  child.balanceFactor = calculateBalanceFactor(child);

  grandRoot.right = child;

  // LL Rotation
  child = grandRoot.right;

  const leftSubTreeOfChild = child?.left;
  child.left = grandRoot;
  grandRoot.right = leftSubTreeOfChild;

  grandRoot.height = calculateHeight(grandRoot);
  child.height = calculateHeight(child);

  grandRoot.balanceFactor = calculateBalanceFactor(grandRoot);
  child.balanceFactor = calculateBalanceFactor(child);

  return child;
}

export function LLRotation(root: node): node {
  let child = root.right;

  if (child === null) {
    return root;
  }

  const leftSubTreeOfChild = child?.left;
  child.left = root;
  root.right = leftSubTreeOfChild;

  root.height = calculateHeight(root);
  child.height = calculateHeight(child);

  root.balanceFactor = calculateBalanceFactor(root);
  child.balanceFactor = calculateBalanceFactor(child);

  return child;
}

export function RRRotation(root: node): node {
  let child = root.left;

  if (child === null) {
    return root;
  }

  root.left = child.right;
  child.right = root;

  root.height = calculateHeight(root);
  child.height = calculateHeight(child);

  root.balanceFactor = calculateBalanceFactor(root);
  child.balanceFactor = calculateBalanceFactor(child);

  return child;
}

function insertRecursive(root: node | null, value: number): node {
  if (root === null) {
    root = createNode(value);
    return root;
  }

  if (value < root?.value) {
    root.balanceFactor++;
    root.left = insertRecursive(root.left, value);
  } else if (value > root.value) {
    root.balanceFactor--;
    root.right = insertRecursive(root.right, value);
  }

  root.height = calculateHeight(root);
  root.balanceFactor = calculateBalanceFactor(root);

  // perform rotation
  if (root.balanceFactor < -1 || root.balanceFactor > 1) {
    if (root.balanceFactor === 2 && root.left?.balanceFactor === -1) {
      root = LRRotation(root);
    } else if (root.balanceFactor === -2 && root.right?.balanceFactor === 1) {
      root = RLRotation(root);
    } else if (root.balanceFactor === -2) {
      root = LLRotation(root);
    } else if (root.balanceFactor === 2) {
      root = RRRotation(root);
    }
  }

  return root;
}

export function insertNode(input: number[]): node | null {
  let root: node | null = null;

  for (let index = 0; index < input.length; index++) {
    const element = input[index];
    root = insertRecursive(root, element);
  }

  return root;
}

export function deleteNodeRecursive(
  root: node | null,
  value: number,
): node | null {
  if (root === null) {
    return root;
  }

  if (value < root.value) {
    root.left = deleteNodeRecursive(root.left, value);
  } else if (value > root.value) {
    root.right = deleteNodeRecursive(root.right, value);
  } else {
    if (root.left !== null && root.right !== null) {
      const inorderSuccessorValue = findInorderSuccessor(root);
      // console.log(`inorderSuccessor.value: ${inorderSuccessorValue}`)
      root.value = inorderSuccessorValue;
    } else if (root.left === null) {
      return root.right;
    } else if (root.right === null) {
      return root.left;
    } else {
      return null;
    }
  }

  root.height = calculateHeight(root);
  root.balanceFactor = calculateBalanceFactor(root);

  // perform rotation
  if (root.balanceFactor < -1 || root.balanceFactor > 1) {
    if (root.balanceFactor === 2 && root.left?.balanceFactor === -1) {
      root = LRRotation(root);
    } else if (root.balanceFactor === -2 && root.right?.balanceFactor === 1) {
      root = RLRotation(root);
    } else if (root.balanceFactor === -2) {
      root = LLRotation(root);
    } else if (root.balanceFactor === 2) {
      root = RRRotation(root);
    }
  }

  return root;
}

function findInorderSuccessor(root: node): number {
  let previousNode: node | null = root;
  let nextNode = root.right;

  if (!nextNode) {
    return root.value;
  }

  while (nextNode?.left !== null) {
    previousNode = nextNode;
    nextNode = nextNode?.left;
  }

  if (previousNode.value === root.value) {
    previousNode.right = null;
  } else {
    previousNode.left = null;
  }

  previousNode.height = calculateHeight(previousNode);
  previousNode.balanceFactor = calculateBalanceFactor(previousNode);

  return nextNode.value;
}
