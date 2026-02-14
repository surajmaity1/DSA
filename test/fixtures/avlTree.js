import { levelOrder, Node } from "../../AVLTree/AVLTree.js";


// avl tree fixtures
/*
         10
        /  \
       5    15
      / \   / \
     3   8 12 16

*/
export const testAvlTreeRoot = new Node(10);
testAvlTreeRoot.left = new Node(5);
testAvlTreeRoot.right = new Node(15);
testAvlTreeRoot.left.left = new Node(3);
testAvlTreeRoot.left.right = new Node(8);
testAvlTreeRoot.right.left = new Node(12);
testAvlTreeRoot.right.right = new Node(16);


levelOrder(testAvlTreeRoot);