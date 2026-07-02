from sys import maxsize

def _get_parent(index: int) -> int:
    return (index - 1) // 2

def _get_left(index: int) -> int:
    return  2 * index + 1

def _get_right(index: int) -> int:
    return  2 * index + 2


class PriorityQueue:
    def __init__(self):
        self.queue = []

    def is_empty(self) -> bool:
        return self.size() == 0
    
    def size(self) -> int:
        return len(self.queue)
    
    def push(self, value: str, priority: int):
        if self.is_empty():
            self.queue.append({
                "value": value,
                "priority": priority,
            })

            return
        
        self.queue.append({
            "value": value,
            "priority": priority,
        })
        
        new_node_index = self.size() - 1
        parent_index = _get_parent(new_node_index)
        
        while parent_index >= 0 and self.queue[parent_index].get("priority") > self.queue[new_node_index].get("priority"):
            self.queue[parent_index], self.queue[new_node_index] = self.queue[new_node_index], self.queue[parent_index]
            
            new_node_index = parent_index
            parent_index = _get_parent(new_node_index)

    def peek(self) -> str:
        return self.queue[0].get("value") if not self.is_empty() else "EMPTY"
    
    def _shift_down(self):
        parent_index = 0        
        
        while True:
            left_index = _get_left(parent_index)
            rigt_index = _get_right(parent_index)
            
            if parent_index >= self.size():
                break
            
            parent_priority = self.queue[parent_index].get("priority")
            left_child_priority = maxsize
            right_child_priority = maxsize
            
            if left_index < self.size():
                left_child_priority = self.queue[left_index].get("priority")
            
            if rigt_index < self.size():
                right_child_priority = self.queue[rigt_index].get("priority")
                        
            if (parent_priority > left_child_priority or parent_priority > right_child_priority):
                if left_child_priority > right_child_priority:
                    self.queue[parent_index], self.queue[rigt_index] = self.queue[rigt_index], self.queue[parent_index]
                    parent_index = rigt_index
                else:
                    self.queue[parent_index], self.queue[left_index] = self.queue[left_index], self.queue[parent_index]
                    parent_index = left_index
                
            else: 
                break        
    
    def pop(self) -> str:
        popped_element = self.queue[0].get("value") if not self.is_empty() else "EMPTY"
        last_node_index = self.size() - 1
        
        self.queue[0] = self.queue[last_node_index]
        del self.queue[last_node_index]
        
        self._shift_down()
        
        return popped_element
