const readline = require("readline");

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.leftThread = false;
        this.rightThread = false;
    }
}

function insert(root, key) {
    let current = root;
    let parent = null;
    let isFound = false;

    while (current !== null) {
        if (current.value === key) {
            isFound = true;
            console.log("Node already exists");
            break;
        }

        parent = current;

        if (key < current.value) {
            if (current.leftThread) {
                current = current.left;
            } else {
                break;
            }
        } else {
            if (current.rightThread) {
                current = current.right;
            } else {
                break;
            }
        }
    }

    if (!isFound) {
        const newNode = new Node(key);

        if (parent === null) {
            root = newNode;
            newNode.left = null;
            newNode.right = null;
        } else if (key < parent.value) {
            newNode.left = parent.left;
            newNode.right = parent;
            parent.leftThread = true;
            parent.left = newNode;
        } else {
            newNode.left = parent;
            newNode.right = parent.right;
            parent.rightThread = true;
            parent.right = newNode;
        }
    }
    return root;
}

function inorderSuccessor(current) {
    if (!current.rightThread) {
        return current.right;
    } else {
        current = current.right;
        while (current.leftThread) {
            current = current.left;
        }
        return current;
    }
}

function inorder(root) {
    if (root === null) {
        console.log("null");
        return;
    }

    let current = root;
    while (current.leftThread) {
        current = current.left;
    }

    while (current !== null) {
        process.stdout.write(`${current.value} `);
        // console.log(`${current.value} `);
        current = inorderSuccessor(current);
    }
}

function preorderSuccessor(node) {
    if (node === null) {
        console.log("Invalid node");
        return null;
    }

    if (node.leftThread) {
        return node.left;
    }

    let current = node;
    while (!current.rightThread) {
        current = current.right;
    }

    return current.right;
}

function inorderTraversal() {
    
}

// Main execution
function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    let root = null;

    function askQuestion() {
        rl.question("\nEnter choice: ", (choice) => {
            if (choice === "1") {

                /*
                            20
                          /    \
                        10      50
                       /       /   \
                      5      34    69
                            /   \
                          21    48
                               /   \
                             40     49
                            /  \
                          35   41
                * */

                const arr = [20, 10, 5, 50, 34, 69, 21, 48, 40, 49, 35, 41];
                arr.forEach((value) => {
                    root = insert(root, value);
                });
                console.log("Tree has been built.");
                askQuestion();
            } else if (choice === "2") {
                inorder(root);
                askQuestion();
            } else if (choice === "3") {
                if (root && root.right && root.right.left) {
                    const node = root.right.left; // Example node
                    const store = inorderSuccessor(node);
                    console.log(`Inorder successor of ${node.value} is: ${store.value}`);
                } else {
                    console.log("Invalid operation: Tree or node is missing.");
                }
                askQuestion();
            } else if (choice === "4") {
                if (root && root.right && root.right.left && root.right.left.right && root.right.left.right.right) {
                    const node = root.right.left.right.right; // Example node
                    const store = preorderSuccessor(node);
                    if (store !== null) {
                        console.log(`Preorder successor of ${node.value} is: ${store.value}`);
                    }
                } else {
                    console.log("Invalid operation: Tree or node is missing.");
                }
                askQuestion();
            } else {
                console.log("Exiting program.");
                rl.close();
            }
        });
    }

    askQuestion();
}

main();
