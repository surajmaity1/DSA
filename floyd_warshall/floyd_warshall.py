def floyd_warshall(adjacency_matrix: list[list[float]]):
    size = range(len(vertices))
    
    for via_vertex in size:
        for i in size:
            for j in size:
                if adjacency_matrix[i][via_vertex] != float("inf") and adjacency_matrix[via_vertex][j] != float("inf"):
                    adjacency_matrix[i][j] = min(adjacency_matrix[i][j], adjacency_matrix[i][via_vertex] + adjacency_matrix[via_vertex][j])

    # detect negative cycle
    for index in size:
        if adjacency_matrix[index][index] < 0:
            return True

    return False

def initialize_edges(adjacency_matrix: list[list[float]]):
    for index in range(len(vertices)):
        adjacency_matrix[index][index] = 0
    
    adjacency_matrix[0][1] = 2
    adjacency_matrix[1][0] = 1
    adjacency_matrix[1][2] = 3
    adjacency_matrix[3][0] = 3
    adjacency_matrix[3][1] = 5
    adjacency_matrix[3][2] = 4
    
    # example - graph that contain negative cycle
    # vertices = [0, 1, 2]
    # adjacency_matrix[0][1] = -2
    # adjacency_matrix[1][2] = -3
    # adjacency_matrix[2][0] = 2

if __name__ == "__main__":
    vertices = [0, 1, 2, 3]
    size = len(vertices)
    
    adjacency_matrix = [[float('inf') for _ in range(size)] for _ in range(size)]
    initialize_edges(adjacency_matrix)
    
    print(f"Before: {adjacency_matrix}")
    
    negative_cycle_detect = floyd_warshall(adjacency_matrix=adjacency_matrix)
    
    print(f"After: {adjacency_matrix}")
    print(f"Is negative cycle preset? ans: {negative_cycle_detect}")