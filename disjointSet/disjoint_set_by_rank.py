class DisJointSet:
    def __init__(self, size: int):
        self.__ranks = [0] * (size + 1)
        self.__parents = [item for item in range(size + 1)]
        self.__size = [1] * (size + 1)
    
    def find_ultimate_parent(self, vertex: int) -> int:
        if vertex == self.__parents[vertex]:
            return vertex

        self.__parents[vertex] = self.find_ultimate_parent(self.__parents[vertex])
        return self.__parents[vertex]
    
    def union_by_rank(self, first_vertex: int, second_vertex: int):
        # find ultimate parents (up)
        up_first_vertex = self.find_ultimate_parent(vertex=first_vertex)
        up_second_vertex = self.find_ultimate_parent(vertex=second_vertex)
        
        if up_first_vertex == up_second_vertex:
            return
        
        # find ranks of ultimate parents
        rank_up_first_vertex = self.__ranks[up_first_vertex]
        rank_up_second_vertex = self.__ranks[up_second_vertex]
        
        if rank_up_first_vertex > rank_up_second_vertex:
            self.__parents[up_second_vertex] = up_first_vertex
        elif rank_up_first_vertex < rank_up_second_vertex:
            self.__parents[up_first_vertex] = up_second_vertex
        else:
            self.__ranks[up_first_vertex] = rank_up_first_vertex + 1
            self.__parents[up_second_vertex] = up_first_vertex
    
    def union_by_size(self, first_vertex: int, second_vertex: int):
        # find ultimate parents (up)
        up_first_vertex = self.find_ultimate_parent(vertex=first_vertex)
        up_second_vertex = self.find_ultimate_parent(vertex=second_vertex)
        
        if up_first_vertex == up_second_vertex:
            return
        
        # find size of ultimate parents (up)
        size_up_first_vertex = self.__size[up_first_vertex]
        size_up_second_vertex = self.__size[up_second_vertex]
        
        if size_up_first_vertex > size_up_second_vertex:
            self.__parents[up_second_vertex] = up_first_vertex
            self.__size[up_first_vertex] = self.__size[up_first_vertex] + self.__size[second_vertex]
        else:
            self.__parents[up_first_vertex] = up_second_vertex
            self.__size[second_vertex] = self.__size[second_vertex] + self.__size[up_first_vertex]

if __name__ == "__main__":    
    disjoint_set = DisJointSet(7)
    
    # disjoint_set.union_by_rank(1, 2)
    # disjoint_set.union_by_rank(2, 3)
    # disjoint_set.union_by_rank(4, 5)
    # disjoint_set.union_by_rank(6, 7)
    # disjoint_set.union_by_rank(5, 6)
    # disjoint_set.union_by_rank(3, 7)
    
    disjoint_set.union_by_size(1, 2)
    disjoint_set.union_by_size(2, 3)
    disjoint_set.union_by_size(4, 5)
    disjoint_set.union_by_size(6, 7)
    disjoint_set.union_by_size(5, 6)
