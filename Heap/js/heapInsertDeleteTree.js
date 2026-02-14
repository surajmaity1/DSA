function TreeNode(val, parent = null, left = null, right = null) {
  return { val, parent, left, right };
}

const heap = {
  root: null,
  size: 0,
};

function insert(heap, value) {
  const newNode = TreeNode(value);
  heap.size++;

  if (!heap.root) {
    heap.root = newNode;
    return;
  }

  const queue = [heap.root];

  /**
   * insert - 11

            10
          /  \
       8      7
     /  \   /  \ 
    4    2  1   3

   */

  while (queue.length > 0) {
    const node = queue.shift();

    if (!node.left) {
      newNode.parent = node;
      node.left = newNode;
      heapifyUp(newNode);
      return;
    }

    if (!node.right) {
      newNode.parent = node;
      node.right = newNode;
      heapifyUp(newNode);
      return;
    }

    queue.push(node.left);
    queue.push(node.right);
  }
}

function heapifyUp(child) {
  let parent = child.parent;

  while (parent && child.val > parent.val) {
    const temp = child.val;
    child.val = parent.val;
    parent.val = temp;

    child = parent;
    parent = child.parent;
  }
}

function extractMax(heap) {
  if (!heap.root) return null;

  if (heap.size === 1) {
    const max = heap.root.val;
    heap.root = null;
    heap.size = 0;
    return max;
  }

  const queue = [heap.root];
  let lastNode = null;

  while (queue.length > 0) {
    lastNode = queue.shift();
    if (lastNode.left) queue.push(lastNode.left);
    if (lastNode.right) queue.push(lastNode.right);
  }

  const maxValue = heap.root.val;
  heap.root.val = lastNode.val;

  const parent = lastNode.parent;
  if (parent.left === lastNode) parent.left = null;
  else parent.right = null;

  heap.size--;

  heapifyDown(heap.root);

  return maxValue;
}

function heapifyDown(node) {
  while (node) {
    let largest = node;

    if (node.left && node.left.val > largest.val) {
      largest = node.left;
    }

    if (node.right && node.right.val > largest.val) {
      largest = node.right;
    }

    if (largest === node) break;

    const temp = node.val;
    node.val = largest.val;
    largest.val = temp;

    node = largest;
  }
}

insert(heap, 10);
insert(heap, 4);
insert(heap, 15);
insert(heap, 7);
insert(heap, 20);

console.log(extractMax(heap));
console.log(extractMax(heap));
console.log(extractMax(heap));
