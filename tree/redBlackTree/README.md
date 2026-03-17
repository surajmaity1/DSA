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
