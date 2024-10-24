const readline = require('readline');
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
    const current = root;
    const parent = null;
    const isFound = false;

    while (current !== null) {

        // check same key is already present or not in the tree
        if (current.value === key) {
            isFound = true;
            console.log('Node already exist');
            break;
        }

        parent = current;

        if (key < current.value) {
            // check there is any node presents on left subtree
            if (current.leftThread === false) {
                // left subtree nodes are present then traverse
                current = current.left;
            }
            else {
                break;
            }
        } else {
            // check there is any node presents on right subtree
            if (current.rightThread === false) {
                // right subtree nodes are present then traverse
                current = current.rightThread;
            }
            else {
                break;
            }
        }
    }

    if (!isFound) {
        const newNode = new Node(key);
        newNode.leftThread = true;
        newNode.rightThread = true;

        if (parent === null) {
            root = newNode;
            newNode.left = null;
            newNode.right = null;
        }
        else if (key < parent.value) {
            newNode.left = parent.left;
            newNode.right = parent;
            parent.leftThread = false;
            parent.left = newNode;
        }
        else {
            newNode.left = parent;
            newNode.right = parent.right;
            parent.rightThread = false;
            parent.right = newNode;
        }
    }
    return root;
}

function constructBinaryTree() {
    const root = new Node(1);
    root.left = new Node(5);
    root.right = new Node(11);
    root.left.left = new Node(2);
    root.right.left = new Node(16);
    root.right.right = new Node(31);

    // threads
    // root.left.ltag = 1;
    // root.left.rtag = 0;

    return root;
}

function printThreadedBinaryTree(root) {

    while (root.left !== null) {
        root = root.left;

        while (root !== null) {
            console.log(root.value);
            root = printThreadedBinaryTree(root);
        }
    }
}

function main() {

    let choice;
    do{
        let choice = process.argv[2];
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question('Enter choice: ', (input)=>{
            choice = Number(input);
            rl.close();
        });
        switch(choice) {
            case 1:{
                // console.log('Enter value: ');
                let value = 0;
                const rl = readline.createInterface({
                    input: process.stdin,
                    output: process.stdout
                });
                rl.question('Enter value: ', (input)=>{
                    value = Number(input);
                    rl.close();
                });
                insert(root,value);
            }
            default: {
                console.log('wrong input');
                break;
            }
        }
    }while(true);
}

main();