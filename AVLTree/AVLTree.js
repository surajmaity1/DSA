export class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 0;
    }
}

export function leftRotate(previousRoot) {
    const newRoot = previousRoot.right;
    previousRoot.right = newRoot.left;
    newRoot.left = previousRoot;

    previousRoot.height = 1 + Math.max(getHeight(previousRoot.left), getHeight(previousRoot.right));
    newRoot.height = 1 + Math.max(getHeight(newRoot.left), getHeight(newRoot.right));

    return newRoot;
}

export function rightRotate(previousRoot) {
    const newRoot = previousRoot.left;
    previousRoot.left = newRoot.right;
    newRoot.right = previousRoot;

    previousRoot.height = 1 + Math.max(getHeight(previousRoot.left), getHeight(previousRoot.right));
    newRoot.height = 1 + Math.max(getHeight(newRoot.left), getHeight(newRoot.right));

    return newRoot;
}

export function levelOrder(root) {
    if (root === null) {
        return null;
    }

    let current = root;
    const stack = [current];

    while (stack.length !== 0) {
        current = stack.shift();
        // console.log(current.data);
        process.stdout.write(`${current.data} `);
        // console.log(`data: ${current.data}, balanceFactor: ${getBalance(current)}`);
        // console.log(`data: ${current.data}, height: ${getHeight(current)}`);

        if (current.left !== null) {
            stack.push(current.left);
        }
        if (current.right !== null) {
            stack.push(current.right);
        }
    }
}

function getHeight(node) {
    if (node === null) {
        return -1;
    }
    return node.height;
}

function getBalance(node) {
    if (node === null) {
        return 0;
    }
    return getHeight(node.left) - getHeight(node.right);
}

export function insert(root, data) {
    if (root === null || root === undefined) {
        return new Node(data);
    }

    if (root.data > data) {
        root.left = insert(root.left, data);
    } else if (root.data < data) {
        root.right = insert(root.right, data);
    } else if (root.data === data) {
        console.log("Duplicate data not allowed.");
        return root;
    }

    root.height = 1 + Math.max(getHeight(root.left), getHeight(root.right));

    const balanceFactor = getBalance(root);
    // Balancing tree
    // Left-Left rotation
    if (balanceFactor > 1 && getBalance(root.left) >= 0) {
        return rightRotate(root);
    }

    // Left-Right rotation
    if (balanceFactor > 1 && getBalance(root.left) < 0) {
        root.left = leftRotate(root.left)
        return rightRotate(root);
    }

    // Right-Right rotation
    if (balanceFactor < -1 && getBalance(root.right) <= 0) {
        return leftRotate(root);
    }

    // Right-Left rotation
    if (balanceFactor < -1 && getBalance(root.right) > 0) {
        root.right = rightRotate(root.right);
        return leftRotate(root);
    }

    return root;
}

function main() {
    let root = null;
    // original input : [ 14, 17, 11, 7, 53, 4, 13, 12, 8, 60, 19, 16, 20 ]
    const nodes = [14, 17, 11, 7, 53, 4, 13, 12, 8, 60, 19, 16, 20];

    for (let index = 0; index < nodes.length; index++) {
        root = insert(root, nodes[index]);
    }

    levelOrder(root);
}

main();