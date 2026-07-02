class PriorityQueue:
    def __init__(self):
        self.queue = []

    def is_empty(self) -> bool:
        return len(self.queue) == 0
    
    def size(self) -> int:
        return len(self.queue)
    
    def push(self, value: str, priority: int):
        if self.is_empty():
            self.queue.append({
                "value": value,
                "priority": priority,
            })
        
        
    
    def peek(self) -> str:
        return self.queue[0].get("value") if not self.is_empty() else "EMPTY"
    
    def pop(self) -> str:
        popped_element = self.queue[0].get("value") if not self.is_empty() else "EMPTY"
        
        del self.queue[0]
        
        return popped_element
    
    