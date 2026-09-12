import sys

def bellman_ford_algorithm(vertices: list[int], adjacency_list: list, source: int):
    distances = [sys.maxsize] * len(vertices)
    distances[source] = 0
    
    for _ in range(len(vertices) - 1):
        for edges in adjacency_list:
            for neighbour_weight, neighbour_vertex in adjacency_list[edges]:
                if distances[edges] != sys.maxsize and distances[edges] + neighbour_weight < distances[neighbour_vertex]:
                    distances[neighbour_vertex] = distances[edges] + neighbour_weight
    
    # to detect negative cycle in graph, we need to traversa Nth time ( where N = no. of vertices)
    for edges in adjacency_list:
        for neighbour_weight, neighbour_vertex in adjacency_list[edges]:
            if distances[edges] != sys.maxsize and distances[edges] + neighbour_weight < distances[neighbour_vertex]:
                return True, [-1]
    
    return False, distances

def create_adjacency_list(vertices: list[int]):
    adjacency_list = dict.fromkeys(vertices, [])

    # (weight, edge)
    adjacency_list[0] = [(5, 1)]
    adjacency_list[1] = [(-2, 2), (-3, 5)]
    adjacency_list[2] = [(3, 4)]
    adjacency_list[3] = [(6, 2), (-2, 4)]
    adjacency_list[5] = [(1, 3)]
    
    return adjacency_list

if __name__ == "__main__":
    vertices = [0, 1, 2, 3, 4, 5]
    source = vertices[0]
    adjacency_list = create_adjacency_list(vertices)
    
    detect_cycle, distances = bellman_ford_algorithm(vertices, adjacency_list, source)
    
    print(f'cycle exist?: {detect_cycle} & distances: {distances}')
