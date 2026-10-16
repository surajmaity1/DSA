class Node:
    def __init__(self, key: int):
        self.key = key
        self.degree: int = 0
        self.mark: bool = False
        self.left: Node | None = None
        self.right: Node | None = None
        self.parent: Node | None = None
        self.child: Node | None = None


class FibonacciHeap:
    def __init__(self):
        self.min: Node | None = None
        self.root_list: Node | None = None
        self.count: int = 0
    
    def get_minimum(self):
        return self.min
    
    def merge_with_root_list(self, node: Node):
        if self.root_list is None:
            self.root_list = node
        else:
            node.right = self.root_list
            node.left = self.root_list.left
            self.root_list.left.right = node
            self.root_list.left = node
    
    def insert(self, key: int):
        node = Node(key)
        node.left = node
        node.right = node
        
        self.merge_with_root_list(node)
        
        if self.min is None or self.min.key > node.key:
            self.min = node
        
        self.count = self.count + 1
        
        return node
    
    def iterate_doubly_linked_list(self, node: Node):
        current = node
        
        while True:
            yield current
            current = current.right
            
            if current == node:
                break
    
    def remove_from_root_list(self, node: Node):
        if self.root_list == node:
            self.root_list = node.right
        
        node.left.right = node.right
        node.right.left = node.left
    
    def merge_with_children(self, parent: Node, new_child: Node, degrees: list[Node | None] ):
        if parent.child:
            parent.child.left.right = new_child
            new_child.left = parent.child.left
            parent.child.left = new_child
            new_child.right = parent
        else:
            parent.child = new_child
        
        degrees[parent.degree] = None
        parent.degree = parent.degree + 1
        new_child.parent = parent
        
        exist_same_degree_node = degrees[parent.degree]
        
        if not exist_same_degree_node:
            degrees[parent.degree] = parent
    
    def consolidate(self):
        degrees: list[Node | None] = [None] * (self.count - 1)
        current: Node = self.root_list
        
        while True:
            degree = current.degree
            
            if self.min.key > current.key:
                self.min = current
            
            if degrees[degree]:
                existing_node: Node = degrees[degree]
                
                if existing_node.key < current.key:
                    self.merge_with_children(existing_node, current, degrees)
                else:
                    self.merge_with_children(current, existing_node, degrees)
                
            else:
                degrees[degree] = current
                current = current.right
            
            if current.right == self.root_list:
                break
    
    def extract_minimum(self):
        minimum_node = self.get_minimum()
        
        if minimum_node is not None:
            if minimum_node.child is not None:
                children: list[Node] = [child for child in self.iterate_doubly_linked_list(minimum_node.child)]
                
                for child in children:
                    self.merge_with_root_list(child)
                    child.parent = None
            
            self.remove_from_root_list(minimum_node)
            
            if minimum_node == minimum_node.right:
                self.min = None
                self.root_list = None
            else:
               self.min = self.min.right
               self.consolidate()
            
            self.count = self.count - 1
        
        return minimum_node
        
    def print_fibonacci_heap(self):
        root = self.root_list
        
        while True:
            print(root.key)
            root = root.right
            
            if root == self.root_list:
                break
