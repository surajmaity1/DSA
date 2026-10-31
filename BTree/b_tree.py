from typing import Optional


class Node:
    def __init__(self):
        self.parent: Optional[Node] = None
        self.keys: list[int] = []
        self.child: list[Node] = []


class BTree:
    def __init__(self, order):
        self.order = order
        self.root = None
    
    def split_child(self, current: Node, value: int) -> Node:
        sibling = Node()
        sibling.keys.append(value)
        
        new_parent = Node()
        new_parent.keys = current.keys[self.order // 2: ]
        current.keys = current.keys[0: self.order // 2]
        
        new_parent.child.append(current)
        new_parent.child.append(sibling)
        
        sibling.parent = new_parent
        current.parent = new_parent
        
        return new_parent
    
    def insert(self, value):
        if not self.root:
            self.root = Node()
        
        current = self.root
        
        # Testing start
        
        while current:
            size = len(current.keys)
            low = current.keys[0]
            high = current.keys[size -1]
            
            if value > low and value < high:
                pass
            else:
                
          
        
        
        # Testing end
        
        
        total_keys = len(current.keys)
        
        if total_keys < self.order - 1:
            current.keys.append(value)
            current.keys.sort()
        else:
            self.root = self.split_child(current, value)
    
    def is_empty(self):
        return self.root == None
    
    def display(self):
        if self.is_empty():
            print("Empty")
            return
        
        current = self.root
        
        while current:
            for item in current.keys:
                print(item, end=", ")
            
            print('\n')
            
            for children in current.child:
                for item in children.keys:
                    print(item, end=", ")
                print(' | ', end="")
            
            break


if __name__ == "__main__":
    order = 4
    user_input = [10, 20, 40, 50]
    
    b_tree = BTree(order)
    
    for node in user_input:
        b_tree.insert(node)
    
    b_tree.display()