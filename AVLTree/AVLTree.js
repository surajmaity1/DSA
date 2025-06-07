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

    return newRoot;
}

export function rightRotate(previousRoot) {
    const newRoot = previousRoot.left;

    previousRoot.left = newRoot.right;
    newRoot.right = previousRoot;

    return newRoot;
}

export function levelOrder(root) {
    if (root === undefined || root === null) {
        return null;
    }
}