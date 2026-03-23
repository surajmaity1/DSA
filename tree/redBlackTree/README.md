### Red-Black Tree

- Height balanced binary search tree
- Every node either red or black
- Root node is always black
- Null is always black
- Number of black nodes from root to leafs are same
- No two consecutive node are red, parent and children of red node are black node
- New inserted node is always red
- Height is log(n) <= 2log(n)

### Insertion of Red-Black Tree

- It will happen like binary search tree

### Rules

#### Rule 1

- Newly inserted node's parent is red and Newly inserted node's uncle is also red, then perform recolouring.

steps:

- Parent - black
- Uncle - black
- New node - red
- Grand parent - red ( if grand parent root, don't change the colour)
- [ Note: when grand parent become red, check grand parent's ancester and its ancestor so on... ]

#### Rule 2

- Newly inserted node's parent is red and Newly inserted node's uncle is black, then perform rotation ( like avl tree).

steps:

- Parent - red
- Uncle - red
- New node - red

### Insertion steps pen and paper

- [Red-Black Tree insertion steps](https://excalidraw.com/#json=Wdc_wLAnmKNW-QuxK-Iaq,QA6i4yMfekNEFAEQb0E-8g)

![Red-Black Tree insertion steps](/tree/redBlackTree/red-black-tree-insertion.svg)

### Deletion of Red-Black Tree

#### Steps:

#### Case 1:

- Search the node. if it exist - follow below steps:
- If node is red and it's leaf, simply delete the node
- If node is red and it has child, that child will take it's place and simply delete the node

#### Case 2:

- Search the node. if it exist - follow below steps:
- If node is black and it has child and it's sibling is red, simply delete the node, it's position will be taken by it's child and perform rotation
- another: if node is black and it has child and it's sibling is black and it's sibling's children are red, perform rotation.

#### Case 3:

1st possibility:

- Search the node. if it exist - follow below steps:
- If node is black and it has child and it's sibling is black and it's sibling's both child are black, perform recolouring. Change sibling's colour to red and change parent's colour as black.

2nd possibility:

- Search the node. if it exist - follow below steps:
- If node is black and it has child and it's sibling is black and it's sibling's child are red, perform rotation.

### Deletion steps pen and paper

- [Red-Black Tree deletion steps](https://excalidraw.com/#json=3JE_OWBA-2eyC_vPuL1wz,GaeU_wz-Zo0Bq6dPLfv4Fw)

![Red-Black Tree deletion steps](/tree/redBlackTree/red-black-tree-deletion.svg)
