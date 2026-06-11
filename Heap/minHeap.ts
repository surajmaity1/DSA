type MinHeap = {
  isEmpty: () => boolean;
  peek: () => node | undefined;
  push: (value: number) => boolean;
  pop: () => number | undefined;
};

type node = {
  value: number;
  left: node | undefined;
  right: node | undefined;
};

const createNode = (value: number): node => {
  return {
    value: value,
    left: undefined,
    right: undefined,
  };
};

const insertNode = (root: node, value: number): node => {
  const queue = [root];
  let index = 0;

  while (index < queue.length) {
    const poppedNode = queue[index]!;

    if (!poppedNode.left || !poppedNode.right) {
      if (!poppedNode.left) {
        poppedNode.left = createNode(value);
        queue.push(poppedNode.left);
      } else {
        poppedNode.right = createNode(value);
        queue.push(poppedNode.right);
      }

      return heapify(queue);
    }

    if (poppedNode.left) {
      queue.push(poppedNode.left);
    }
    if (poppedNode.right) {
      queue.push(poppedNode.right);
    }
    index++;
  }

  return root;
};

const heapify = (queue: node[]): node => {
  let newRoot = queue[0]!;
  let helperNode: node | undefined;

  const isChildMatch = (parent: node, value: number) => {
    return (
      (parent.left && value === parent.left!.value) ||
      (parent.right && value === parent.right!.value)
    );
  };

  while (queue.length > 0) {
    const poppedNode = queue.pop()!;

    if (queue.length > 0) {
      helperNode = queue.pop()!;

      while (!isChildMatch(helperNode, poppedNode.value)) {
        helperNode = queue.pop()!;
      }

      if (helperNode.value > poppedNode.value) {
        swapNodeValue(helperNode, poppedNode);

        if (poppedNode.value === newRoot.value) {
          return helperNode;
        }

        queue.push(helperNode);
      }
    } else {
      if (
        helperNode &&
        helperNode.value < poppedNode.value &&
        isChildMatch(poppedNode, helperNode.value)
      ) {
        swapNodeValue(helperNode, poppedNode);
      }

      return poppedNode;
    }
  }

  return newRoot;
};

const helperPop = (root: node): node | undefined => {
  const result = root.value;

  const queue = [root];
  let index = 0;
  let lastNode = root;

  while (index < queue.length) {
    const poppedNode = queue[index]!;

    if (poppedNode.left) {
      queue.push(poppedNode.left);
    }
    if (poppedNode.right) {
      queue.push(poppedNode.right);
    }

    index++;
  }

  lastNode = queue[queue.length - 1]!;

  if (lastNode.value === result) {
    return undefined;
  }

  root.value = lastNode.value;
  index = queue.length - 1;

  while (index >= 0) {
    const currentNode = queue[index]!;

    if (currentNode.left && currentNode.left.value === lastNode.value) {
      currentNode.left = undefined;
      break;
    }
    if (currentNode.right && currentNode.right.value === lastNode.value) {
      currentNode.right = undefined;
      break;
    }

    index--;
  }

  // check heap property violation for min heap
  let isHeapPropertyViolate = false;

  if (
    (root.left && root.left.value < root.value) ||
    (root.right && root.right.value < root.value)
  ) {
    isHeapPropertyViolate = true;
  }

  if (isHeapPropertyViolate) {
    heapifyDown(root);
  }

  return root;
};

function swapNodeValue(firstNode: node, secondNode: node) {
  const firstNodeValue = firstNode.value;
  firstNode.value = secondNode.value;
  secondNode.value = firstNodeValue;
}

function heapifyDown(currentNode: node) {
  while (currentNode !== null) {
    if (currentNode.left === undefined && currentNode.right === undefined) {
      break;
    } else if (
      currentNode.left === undefined &&
      currentNode.right !== undefined
    ) {
      if (currentNode.right!.value < currentNode.value) {
        swapNodeValue(currentNode, currentNode.right!);
        currentNode = currentNode.right;
      } else {
        break;
      }
    } else if (
      currentNode.right === undefined &&
      currentNode.left !== undefined
    ) {
      if (currentNode.left!.value < currentNode.value) {
        swapNodeValue(currentNode, currentNode.left!);
        currentNode = currentNode.left;
      } else {
        break;
      }
    } else {
      if (
        currentNode.left!.value < currentNode.right!.value &&
        currentNode.left!.value < currentNode.value
      ) {
        swapNodeValue(currentNode, currentNode.left!);
        currentNode = currentNode.left!;
      } else if (
        currentNode.left!.value > currentNode.right!.value &&
        currentNode.right!.value < currentNode.value
      ) {
        swapNodeValue(currentNode, currentNode.right!);
        currentNode = currentNode.right!;
      } else {
        break;
      }
    }
  }
}

export const minHeap = (): MinHeap => {
  let root: node | undefined = undefined;

  const isEmpty = (): boolean => {
    return root ? false : true;
  };

  const peek = (): node | undefined => {
    return root ? root : undefined;
  };

  const push = (value: number): boolean => {
    if (!root) {
      root = createNode(value);
      return true;
    }

    root = insertNode(root, value);
    return true;
  };

  const pop = (): number | undefined => {
    if (!root) {
      return undefined;
    }

    const poppedNode = root.value;
    root = helperPop(root);

    return poppedNode;
  };

  return {
    isEmpty,
    peek,
    push,
    pop,
  };
};

function main() {}

// main();
