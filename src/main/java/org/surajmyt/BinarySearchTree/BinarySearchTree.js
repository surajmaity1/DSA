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

function preorderRecursive(root) {
    if (root !== null) {
        preorderRecursive(root.left);
        console.log(root.data);
        preorderRecursive(root.right);
    }
}

function main() {
    let root = null;
    const arr = [20, 10, 5, 50, 34, 69, 21, 48, 40, 49, 35, 41];

    // Construct BST
    for (const item of arr) {
        root = constructRecursive(root, item);
    }

    // Pre-order traversal
    console.log("PreOrder:");
    preorderRecursive(root);

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
}

// Run main
main();