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
    }
    else if (item > root.data) {
        root.right = constructRecursive(root.right, item);
    }
    else {
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
        }
        else if (data > pointer.data) {
            pointer = pointer.right;
        }
        else {
            console.log(`${data} already present`);
            return root;
        }
    }
    if (data < current.data) {
        current.left = new Node(data);
    }
    else {
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
}

function deleteNode(parent, replacedNode) {
  if (replacedNode.left === null) {
    transplant(parent, replacedNode, replacedNode.right);
  } else if (replacedNode.right === null) {
    transplant(parent, replacedNode, replacedNode.left);
  } else {
    const minimumNode = findMinIterative(replacedNode.right);
    if (replacedNode.right !== minimumNode) {
      transplant(parent, minimumNode, minimumNode.right);
      minimumNode.right = replacedNode.right;
      parent.right = minimumNode;
    }
    transplant(parent, replacedNode, minimumNode);
    minimumNode.left = replacedNode.left;
    parent.left = minimumNode;
  }
}

function deleteNodeIterative(root, deletedNode) {
  if (root === null || deletedNode === null) {
    return root;
  }

  let rootParent = null;

  while (root !== null) {
    rootParent = root;
    if (deletedNode < root.data) {
      root = root.left;
    } else if (deletedNode > root.data) {
      root = root.right;
    } else {
      deleteNode(rootParent, root);
      break;
    }
  }
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

    while(root.left !== null) {
        root = root.left;
    }

    return root;
}

function findMinRecursive(root) {
    if (root === null) {
        return null;
    }
    else if (root.left === null) {
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
        console.log(root.data);
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
    const deleteNodeValue = 34;
    console.log(`delete node: ${deleteNodeValue}`);
    // root = deleteNodeRecursive(root, deleteNodeValue);
    //root = deleteNodeIterative(root, deleteNodeValue);
    console.log(`${deleteNodeValue} node deleted `);
    inorderRecursive(root);
}

// Run main
main();