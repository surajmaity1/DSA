class DisJointSet:
    def __init__(self, size: int):
        self.__parents = [item for item in range(size + 1)]
        self.__size = [1] * (size + 1)
    
    def find_ultimate_parent(self, vertex: int) -> int:
        if vertex == self.__parents[vertex]:
            return vertex

        self.__parents[vertex] = self.find_ultimate_parent(self.__parents[vertex])
        return self.__parents[vertex]
    
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

def kruskals_algorithm(vertices: list[str], adjacency_list: dict[str, list]) -> int:
    edge_weight_sum = 0
    edges = []
    
    for vertex in vertices:
        for neighbour_weight, neighbour_vertex in adjacency_list[vertex]:
            edges.append((neighbour_weight, int(vertex), neighbour_vertex))
    
    edges.sort()
    
    disjoint_set = DisJointSet(len(vertices))
    
    for weight, vertex, neighbour_vertex in edges:
        if disjoint_set.find_ultimate_parent(vertex=vertex) != disjoint_set.find_ultimate_parent(vertex=neighbour_vertex):
            edge_weight_sum = edge_weight_sum + weight
            disjoint_set.union_by_size(first_vertex=vertex, second_vertex=neighbour_vertex)
    
    return edge_weight_sum

def create_adjacency_list(vertices: list[str]) -> dict[str, list]:
    adjacency_list = dict.fromkeys(vertices, [])
    
    # note: storing format - (weight, node)
    adjacency_list['1'] = [(1, 4), (4, 5)]
    adjacency_list['2'] = [(2, 1), (3, 3), (3, 4), (7, 6)]
    adjacency_list['3'] = [(3, 2), (5, 4), (8, 6)]
    adjacency_list['4'] = [(1, 1), (3, 2), (5, 3), (9, 5)]
    adjacency_list['5'] = [(4, 1), (9, 4)]
    adjacency_list['6'] = [(7, 2), (8, 3)]
    
    return adjacency_list

if __name__ == "__main__":
    vertices = ['1', '2', '3', '4', '5', '6']
    adjacency_list = create_adjacency_list(vertices)
    
    edge_weight_sum = kruskals_algorithm(vertices, adjacency_list)
    print(f"Minimum spanning Tree's wieght: {edge_weight_sum}")
