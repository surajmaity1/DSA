// draft: min heap using tree

type MinHeap = {
  isEmpty: () => boolean;
  peek: () => number | undefined;
  push: (value: number) => boolean;
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

const lastNode = (root: node | undefined) => {
  if (!root) {
    return undefined;
  }

  const queue = [root];
  let lastNode = root;

  while (queue.length > 0) {
    const poppedNode = queue.shift()!;

    lastNode = poppedNode;

    if (!poppedNode.left) {
      queue.push(lastNode.left!);
    }

    if (!poppedNode.right) {
      queue.push(lastNode.right!);
    }
  }
};

export const minHeap = (): MinHeap => {
  let root: node | undefined = undefined;

  const isEmpty = (): boolean => {
    return root ? false : true;
  };

  const peek = (): number | undefined => {
    return root ? root.value : undefined;
  };

  const push = (value: number): boolean => {
    if (!root) {
      root = createNode(value);
      return true;
    }

    return false;
  };

  return {
    isEmpty,
    peek,
    push,
  };
};
