// TODO: fix this
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
    console.log(
      `node: ${popppedElement.value}, bf: ${popppedElement.balanceFactor}`,
    );

    if (popppedElement?.left !== null) {
      queue.push(popppedElement?.left);
    }

    if (popppedElement?.right !== null) {
      queue.push(popppedElement?.right);
    }
  }

  return result;
}

function calculateHeight(root: node): number {
  let leftSubTreeHeight = 0,
    rightSubTreeHeight = 0;

  if (root.left !== null) {
    leftSubTreeHeight = root.left.height;
  }

  if (root.right !== null) {
    rightSubTreeHeight = root.right.height;
  }

  return Math.max(leftSubTreeHeight, rightSubTreeHeight);
}

function calculateBalanceFactor(root: node): number {
  let leftSubTreeBalanceFactor = 0;
  let rightSubTreeBalanceFactor = 0;

  if (root.left !== null) {
    leftSubTreeBalanceFactor = root.left.balanceFactor;
  }

  if (root.right !== null) {
    rightSubTreeBalanceFactor = root.right.balanceFactor;
  }

  return leftSubTreeBalanceFactor - rightSubTreeBalanceFactor;
}

export function LLRotation(root: node): node {
  const child = root.right;

  if (child === null) {
    return root;
  }

  const leftSubTreeOfChild = child?.left;
  child.left = root;
  root.right = leftSubTreeOfChild;

  // child.balanceFactor += 1;
  // root.balanceFactor += 2;
  if (child.value === 20) {
    console.log(
      ` before node ( ${child.value} ) height: ${child.height}, bf: ${child.balanceFactor}`,
    );
  }

  child.height = calculateHeight(child);
  root.height = calculateHeight(root);

  if (child.value === 20) {
    console.log(
      `mid node ( ${child.value} ) height: ${child.height}, bf: ${child.balanceFactor}`,
    );
  }

  child.balanceFactor = calculateBalanceFactor(child);
  root.balanceFactor = calculateBalanceFactor(root);

  if (child.value === 20) {
    console.log(
      ` after node ( ${child.value} ) height: ${child.height}, bf: ${child.balanceFactor}`,
    );
  }

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

  root.height = calculateHeight(root) + 1;

  // perform rotation
  if (root.height < -1 || root.height > 1) {
    if (root.balanceFactor === -2) {
      root = LLRotation(root);
    }
  }
  // console.log(`root: ${root.value}, bf: ${root.balanceFactor}`);

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
