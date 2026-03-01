function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function countNodes(root) {
  if (!root) return 0;
  return 1 + countNodes(root.left) + countNodes(root.right);
}

function getNodeAtIndex(root, index) {
  if (!root || index < 0) return null;
  if (index === 0) return root;

  const path = [];
  let temp = index + 1;

  while (temp > 1) {
    path.push(temp % 2);
    temp = Math.floor(temp / 2);
  }

  let current = root;
  for (let i = path.length - 1; i >= 0; i--) {
    if (!current) return null;
    current = path[i] === 0 ? current.left : current.right;
  }

  return current;
}

function heapify(node) {
  if (!node) return;

  let largest = node;

  if (node.left && node.left.val > largest.val) {
    largest = node.left;
  }

  if (node.right && node.right.val > largest.val) {
    largest = node.right;
  }

  if (largest !== node) {
    const temp = node.val;
    node.val = largest.val;
    largest.val = temp;

    heapify(largest);
  }
}

function convertToHeap(root) {
  if (!root) return root;

  const totalNodes = countNodes(root);

  for (let i = Math.floor(totalNodes / 2) - 1; i >= 0; i--) {
    const node = getNodeAtIndex(root, i);
    if (node) {
      heapify(node);
    }
  }

  return root;
}

function isValidHeap(node) {
  if (!node) return true;

  if (node.left && node.left.val < node.val) {
    return false;
  }

  if (node.right && node.right.val < node.val) {
    return false;
  }

  return isValidHeap(node.left) && isValidHeap(node.right);
}

function printTree(node, prefix = "", isLeft = true) {
  if (!node) return;

  console.log(prefix + (prefix ? (isLeft ? "├── " : "└── ") : "") + node.val);

  if (node.left || node.right) {
    if (node.left) {
      printTree(
        node.left,
        prefix + (prefix ? (isLeft ? "│   " : "    ") : ""),
        true
      );
    }
    if (node.right) {
      printTree(
        node.right,
        prefix + (prefix ? (isLeft ? "│   " : "    ") : ""),
        false
      );
    }
  }
}

function getLevelOrderValues(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node.val);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return result;
}

const root1 = new TreeNode(10);
root1.left = new TreeNode(5);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(2);
root1.left.right = new TreeNode(8);
root1.right.left = new TreeNode(7);
root1.right.right = new TreeNode(6);

printTree(root1);
console.log("Values:", getLevelOrderValues(root1));
console.log("Is valid heap before? " + isValidHeap(root1));

convertToHeap(root1);

console.log("\nAfter conversion to Max-Heap:");
printTree(root1);
console.log("Values:", getLevelOrderValues(root1));
console.log("Is valid heap after? " + isValidHeap(root1));
