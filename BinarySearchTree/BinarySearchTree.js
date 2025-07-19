class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function constructRecursive(root, item) {
  if (root === null) {
    return new Node(item);
  }

  if (item < root.data) {
    root.left = constructRecursive(root.left, item);
  } else if (item > root.data) {
    root.right = constructRecursive(root.right, item);
  } else {
    console.log(`${item} already present`);
    return root;
  }

  return root;
}

function constructIterative(root, data) {
  if (root === null) {
    return new Node(data);
  }

  let pointer = root;
  let current = null;

  while (pointer !== null) {
    current = pointer;
    if (data < pointer.data) {
      pointer = pointer.left;
    } else if (data > pointer.data) {
      pointer = pointer.right;
    } else {
      console.log(`${data} already present`);
      return root;
    }
  }
  if (data < current.data) {
    current.left = new Node(data);
  } else {
    current.right = new Node(data);
  }

  return root;
}

function deleteNodeRecursive(root, data) {
  if (root === null) {
    return null;
  }

  if (data < root.data) {
    root.left = deleteNodeRecursive(root.left, data);
  } else if (data > root.data) {
    root.right = deleteNodeRecursive(root.right, data);
  } else {
    // one child present ( either left or right )
    if (root.left === null) {
      return root.right;
    } else if (root.right === null) {
      return root.left;
    }
    // both child present
    const minimumValueNode = findMinIterative(root.right);
    root.data = minimumValueNode.data;
    root.right = deleteNodeRecursive(root.right, root.data);
  }
  return root;
}

// incomplete
function transplant(parent, currentNode, replacedNode) {
  // check wheter current node is left or right children of parent
  let isLeftChild = false;

  if (parent === null) {
    parent = replacedNode;
    return parent;
  } else if (parent.left === currentNode) {
    isLeftChild = true;
    parent.left = replacedNode;
  } else {
    parent.right = replacedNode;
  }

  if (replacedNode !== null) {
    if (isLeftChild) {
      parent.left = replacedNode;
    } else {
      parent.right = replacedNode;
    }
  }
  return parent;
}

function deleteNode(parent, replacedNode) {
  // Case 1: Node has no left child — replace with right child
  if (replacedNode.left === null) {
    parent = transplant(parent, replacedNode, replacedNode.right);
  } else if (replacedNode.right === null) {
    // Case 2: Node has no right child — replace with left child
    parent = transplant(parent, replacedNode, replacedNode.left);
  } else {
    // Case 3: Node has two children
    const minimumNode = findMinIterative(replacedNode.right);

    // If in-order successor is not direct right child of replacedNode
    if (minimumNode !== replacedNode.right) {
      let parentOfMinimumNode = null;

      // parent === null check means wheter we're deleting root node
      if (parent === null) {
        // so find the parent of minimumNode from replacedNode subtree
        parentOfMinimumNode = findParentNode(replacedNode, minimumNode.data);
      } else {
        parentOfMinimumNode = findParentNode(parent, minimumNode.data);
      }
      transplant(parentOfMinimumNode, minimumNode, minimumNode.right);
      minimumNode.right = replacedNode.right;
      parent = transplant(parent, replacedNode, minimumNode);
      minimumNode.left = replacedNode.left;
    } else {
      // If in-order successor is direct right child of replacedNode
      parent = transplant(parent, replacedNode, minimumNode);
      minimumNode.left = replacedNode.left;
      parent.right = minimumNode;
    }
  }

  return parent;
}

function findParentNode(root, data) {
  let parent = null;
  while (root && root.data !== data) {
    parent = root;
    root = data < root.data ? root.left : root.right;
  }

  return root ? parent : null;
}

// iterative approach
function deleteNodeIterative(parent, deletedNode) {
  if (!parent || deletedNode === null) {
    return parent;
  }

  let node = parent;
  let parentNode = null;

  while (node) {
    if (deletedNode < node.data) {
      parentNode = node;
      node = node.left;
    } else if (deletedNode > node.data) {
      parentNode = node;
      node = node.right;
    } else {
      const newParent = deleteNode(parentNode, node);

      // check wheter we're deleting root node
      if (!parentNode) {
        return newParent;
      }

      return parent;
    }
  }

  return null;
}

// Recursive search
function searchRecursive(root, data) {
  if (root === null) {
    return null;
  }

  if (data < root.data) {
    return searchRecursive(root.left, data);
  } else if (data > root.data) {
    return searchRecursive(root.right, data);
  } else {
    return root;
  }
}

// Iterative search
function searchIterative(root, data) {
  while (root !== null) {
    if (data < root.data) {
      root = root.left;
    } else if (data > root.data) {
      root = root.right;
    } else {
      return root;
    }
  }

  return null;
}

function findMinIterative(root) {
  if (root === null) {
    return null;
  }

  while (root.left !== null) {
    root = root.left;
  }

  return root;
}

function findMinRecursive(root) {
  if (root === null) {
    return null;
  } else if (root.left === null) {
    return root;
  }
  return findMinRecursive(root.left);
}

function findMaxRecursive(root) {
  if (root === null) {
    return null;
  }
  if (root.right === null) {
    return root;
  }
  return findMaxRecursive(root.right);
}

function findMaxIterative(root) {
  if (root === null) {
    return null;
  }

  while (root.right !== null) {
    root = root.right;
  }

  return root;
}

function preorderRecursive(root) {
  if (root !== null) {
    console.log(root.data);
    preorderRecursive(root.left);
    preorderRecursive(root.right);
  }
}

function inorderRecursive(root) {
  if (root !== null) {
    inorderRecursive(root.left);
    process.stdout.write(root.data + " ");
    inorderRecursive(root.right);
  }
}

function main() {
  let root = null;
  const arr = [20, 10, 5, 50, 34, 69, 21, 48, 40, 49, 35, 41];

  // Construct BST
  for (const item of arr) {
    root = constructIterative(root, item);
  }

  // InOrder traversal
  console.log("InOrder:");
  inorderRecursive(root);
  /*
    // Search
    const searchValue = 34;
    const foundNode = searchIterative(root, searchValue);
    if (foundNode) {
        console.log(`Found: ${foundNode.data}`);
    } else {
        console.log("Not found");
    }

    // Find minimum
    const minNode = findMinIterative(root);
    if (minNode) {
        console.log(`Minimum value: ${minNode.data}`);
    }

    // Find maximum
    const maxNode = findMaxIterative(root);
    if (maxNode) {
        console.log(`Maximum value: ${maxNode.data}`);
    }

    inorderRecursive(root);
    */

  const deleteNodeValue = 34;
  console.log(`\ndeleting node: ${deleteNodeValue}`);
  // root = deleteNodeRecursive(root, deleteNodeValue);
  root = deleteNodeIterative(root, deleteNodeValue);
  if (root) {
    console.log(`${deleteNodeValue} node deleted `);
    inorderRecursive(root);
  } else {
    console.log(`${deleteNodeValue} node not found`);
  }
}

// Run main
main();
