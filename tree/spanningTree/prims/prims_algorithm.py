import heapq

def prims_algorithm(vertices: list[str], adjacency_list: dict[str, list], source_vertex: str):
    priority_queue = []
    visited = [False] * (len(vertices) + 1)
    
    result = []
    edges_sum: int = 0
    
    heapq.heappush(priority_queue, (0, int(source_vertex), -1))
    
    while len(priority_queue) > 0:
        edge_weight, vertex, parent_vertex = heapq.heappop(priority_queue)
        
        if visited[vertex]:
            continue
        
        visited[vertex] = True
        
        if parent_vertex != -1 or edge_weight != 0:
            edges_sum = edges_sum + edge_weight
            result.append((parent_vertex, vertex))

        for neighbour_weight, neighbour_vertex in adjacency_list[str(vertex)]:
            if not visited[neighbour_vertex]:
                heapq.heappush(priority_queue, (neighbour_weight, neighbour_vertex, vertex))

    return result, edges_sum

def create_adjacency_list(vertices: list[str]) -> dict[str, list]:
    adjacency_list = dict.fromkeys(vertices, [])
    
    # note: storing format - (weight, node)
    adjacency_list['0'] = [(1, 2), (2, 1)]
    adjacency_list['1'] = [(2, 0), (1, 2)]
    adjacency_list['2'] = [(1, 0), (1, 1), (2, 4), (2, 3)]
    adjacency_list['3'] = [(2, 2), (1, 4)]
    adjacency_list['4'] = [(2, 2), (1, 3)]
    
    return adjacency_list

def main():
    vertices = ['0', '1', '2', '3', '4']
    adjacency_list = create_adjacency_list(vertices)
    source_vertex = vertices[0]
    
    mst, edge_sum = prims_algorithm(vertices, adjacency_list, source_vertex)
    print(f'Minimum spanning Tree: {mst}')
    print(f"Minimum spanning Tree's wieght: {edge_sum}")

main()