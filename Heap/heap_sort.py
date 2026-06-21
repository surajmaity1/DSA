class HeapSort:
    def __init__(self, input: list):
        self.input: list = input
    
    def parent(self, index: int) -> int:
        return (index // 2) - 1
    
    def left_child(self, index: int) -> int:
        return (2 * index) + 1
    
    def right_child(self, index: int) -> int:
        return (2 * index) + 2
    
    def swap(self, first_index: int, second_index: int):
        first_item_value = self.input[first_index]
        self.input[first_index] = self.input[second_index]
        self.input[second_index] = first_item_value
    
    def shift_down(self, index: int, input_length: int):
        parent_index = index - 1
        largest = parent_index
        left_index = self.left_child(parent_index)
        right_index = self.right_child(parent_index)
        
        if left_index < input_length and self.input[left_index] > self.input[parent_index]:
            largest = left_index
        if right_index < input_length and self.input[right_index] > self.input[largest]:
            largest = right_index
        
        if largest != parent_index:
            self.swap(first_index=largest, second_index=parent_index)
            self.shift_down(largest + 1, input_length)
    
    def build_heap(self) -> list:
        input_length = len(self.input)
        
        for index in range(input_length // 2, 0, -1):
            self.shift_down(index, input_length)
        
        return self.input
    
    def extract_max(self) -> int | None:
        input_length = len(self.input)
        
        if input_length == 0:
            return None
        if input_length == 1:
            return self.input.pop()
        
        result = self.input[0]
        self.input[0] = self.input.pop()
        self.shift_down(1, input_length - 1)
        
        return result
    
    def heap_sort(self) -> list:
        self.build_heap()
        input_length = len(self.input)
        
        while input_length > 0:
            self.swap(first_index=0, second_index=input_length - 1)
            input_length = input_length - 1
            self.shift_down(index=1, input_length=input_length)
        
        return self.input
