export type node = {
  value: number;
  left: node | null;
  right: node | null;
  colour: boolean; // RED: true, BLACK: false
  height: number;
  balanceFactor: number;
};

function createNode(value: number): node {
  return {
    value: value,
    left: null,
    right: null,
    colour: true,
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

  // colouring
  child.colour = false;
  grandRoot.colour = true;

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
  grandRoot.colour = true;

  grandRoot.height = calculateHeight(grandRoot);
  child.height = calculateHeight(child);

  grandRoot.balanceFactor = calculateBalanceFactor(grandRoot);
  child.balanceFactor = calculateBalanceFactor(child);

  // colouring
  child.colour = false;

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

  // colouring
  child.colour = false;
  root.colour = true;

  return child;
}

export function LLRotation(root: node): node {
  let child = root.right;

  if (child === null) {
    return root;
  }

  const leftSubTreeOfChild = child?.left;
  child.left = root;
  root.colour = true;
  root.right = leftSubTreeOfChild;

  root.height = calculateHeight(root);
  child.height = calculateHeight(child);

  root.balanceFactor = calculateBalanceFactor(root);
  child.balanceFactor = calculateBalanceFactor(child);

  child.colour = false;
  root.colour = true;

  return child;
}

function insert(root: node | null, value: number): node {
  if (root === null) {
    root = createNode(value);
    root.colour = false;

    return root;
  }

  let previousNode = root;
  let currentNode: node | null = root;
  const stack = [];

  while (currentNode !== null) {
    previousNode = currentNode;

    if (value < currentNode.value) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    } else if (value > currentNode.value) {
      stack.push(currentNode);
      currentNode = currentNode.right;
    } else {
      return root;
    }
  }

  const newNode = createNode(value);

  if (value < previousNode.value) {
    previousNode.left = newNode;
  } else if (value > previousNode.value) {
    previousNode.right = newNode;
  }

  while (stack.length > 0) {
    const poppedNode = stack.pop();
    let grandParent = null;

    if (poppedNode) {
      poppedNode.height = calculateHeight(poppedNode);
      poppedNode.balanceFactor = calculateBalanceFactor(poppedNode);

      if (
        poppedNode.colour &&
        (poppedNode.left?.colour || poppedNode.right?.colour)
      ) {
        const parent = poppedNode;

        if (stack.length > 0) {
          const newPopped = stack.pop();

          if (newPopped) {
            grandParent = newPopped;
            grandParent.height = calculateHeight(grandParent);
            grandParent.balanceFactor = calculateBalanceFactor(grandParent);
          }
        }

        if (grandParent !== null) {
          const uncleNode =
            grandParent.left?.value === parent.value
              ? grandParent.right
              : grandParent.left;

          // colouring
          if (uncleNode !== null && uncleNode.colour) {
            uncleNode.colour = false;
            parent.colour = false;

            if (grandParent.value !== root.value) {
              grandParent.colour = true;
            }
          }
          // rotation
          else if (
            uncleNode === null ||
            (uncleNode !== null && !uncleNode.colour)
          ) {
            if (
              grandParent.balanceFactor < -1 ||
              grandParent.balanceFactor > 1
            ) {
              if (
                grandParent.balanceFactor >= 2 &&
                grandParent.left !== null &&
                grandParent.left?.balanceFactor <= -1
              ) {
                grandParent = LRRotation(grandParent);
              } else if (
                grandParent.balanceFactor <= -2 &&
                grandParent.right !== null &&
                grandParent.right?.balanceFactor >= 1
              ) {
                grandParent = RLRotation(grandParent);
              } else if (grandParent.balanceFactor <= -2) {
                grandParent = LLRotation(grandParent);
              } else if (grandParent.balanceFactor >= 2) {
                grandParent = RRRotation(grandParent);
              }
            }
          }
        }
      }
    }

    if (grandParent !== null) {
      const previousNode = stack.length > 0 ? stack[stack.length - 1] : null;

      if (previousNode !== null) {
        if (grandParent.value < previousNode.value) {
          previousNode.left = grandParent;
        } else if (grandParent.value > previousNode.value) {
          previousNode.right = grandParent;
        }

        previousNode.height = calculateHeight(previousNode);
        previousNode.balanceFactor = calculateBalanceFactor(previousNode);
      } else {
        root = grandParent;
      }
    }
  }

  return root;
}

export function deleteNode(root: node | null, value: number): node | null {
  if (
    root === null ||
    (root.value === value && root.left === null && root.right === null)
  ) {
    return null;
  }

  let currentNode: node | null = root;
  const stack: node[] = [];

  while (currentNode !== null) {
    if (value < currentNode.value) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    } else if (value > currentNode.value) {
      stack.push(currentNode);
      currentNode = currentNode.right;
    } else {
      let newRoot: node | null = null;

      // leaf node
      if (currentNode.left === null && currentNode.right === null) {
        while (stack.length > 0) {
          const poppedNode = stack.pop();

          if (poppedNode) {
            newRoot = poppedNode;
          }

          if (newRoot) {
            if (newRoot.left && value === newRoot.left?.value) {
              newRoot.left = null;
            } else if (newRoot.right && value === newRoot.right?.value) {
              newRoot.right = null;
            }

            newRoot.height = calculateHeight(newRoot);
            newRoot.balanceFactor = calculateBalanceFactor(newRoot);
          }
        }
      } else {
        // non-leaf node
        const successor = inorderSuccessor(currentNode);

        if (successor !== null) {
          if (
            currentNode.value === root.value &&
            currentNode.right?.value === successor.value
          ) {
            successor.colour = false;
            newRoot = successor;
          }
        } else {
          const predecessor = inorderPredecessor(currentNode);

          if (predecessor !== null) {
            if (
              currentNode.value === root.value &&
              currentNode.left?.value === predecessor?.value
            ) {
              predecessor.colour = false;
              newRoot = predecessor;
            }
          }
        }
      }

      root = newRoot;
      break;
    }
  }

  // while(stack.length > 0) {
  //   const poppedNode = stack.pop();

  //   if (poppedNode !== null) {
  //     if (poppedNode?.left?.value === value) {

  //     }
  //   }
  // }

  return root;
}

function inorderPredecessor(root: node): node | null {
  let successor = root.left;

  if (successor === null) {
    return null;
  }

  while (successor?.right !== null) {
    successor = successor?.right;
  }

  return successor;
}

function inorderSuccessor(root: node): node | null {
  let successor = root.right;

  if (successor === null) {
    return null;
  }

  while (successor?.left !== null) {
    successor = successor?.left;
  }

  return successor;
}

export function insertNode(input: number[]): node | null {
  let root: node | null = null;

  for (let index = 0; index < input.length; index++) {
    const element = input[index];
    root = insert(root, element);
  }

  return root;
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
    // console.log(
    //   `node (${popppedElement.value}), col: ${popppedElement.colour}, bf: ${popppedElement.balanceFactor}, height: ${popppedElement.height}`,
    // );

    if (popppedElement?.left !== null) {
      queue.push(popppedElement?.left);
    }

    if (popppedElement?.right !== null) {
      queue.push(popppedElement?.right);
    }
  }

  return result;
}

function main() {
  const root = insertNode([30, 20, 10]);
  console.log(levelOrder(root));
}

// main();
