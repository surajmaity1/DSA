### AVL Treee

- calculate edge ( not node )
- It is a BST ( binary search tree)
- balance factor (bf) = height of left subtree (hl) - height of right subtree (hr)
- bf = hl - hr = {-1, 0, 1}
- bf = | hl - hr | <= 1 ( balanced )
- bf = | hl - hr | > 1 ( imbalanced )

#### Rotation steps on pen and paper:

Note:

- Rotation will be performed on 3 nodes.
- [AVL Treee rotation steps](https://excalidraw.com/#json=TrlbUEyfPmHEz9dXh7Dvv,7VesmVO1SEkOp7_XzXPAlw)

![AVL Treee rotation steps](/tree/avlTree/avl-tree-insertion.svg)

Note:

- If n distinct node given, how many bst can be created?

![Formula](/tree/avlTree/count-no-of-bst-using-n-nodes.svg)

#### AVL Tree Creation

- we discussed why searching is faster compare to BST. Please check below information:
- [Link](https://excalidraw.com/#json=i9WroyVY2pZlMJvxWMNJN,u_CiXvcTUvluGrUHpvZ1eg)

![AVL Tree and BST](/tree/avlTree/avl-tree-bst.svg)
