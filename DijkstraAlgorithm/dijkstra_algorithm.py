import heapq

# Dijkstra's algorithm using priority queue
def dijkstra_algorithm(vertices: list[str], adjacency_list: dict[str, list], source_vertex: str):
    distances = [float('inf') ] * len(vertices)
    priority_queue = []
    
    heapq.heappush(priority_queue, (0, int(source_vertex)))
    distances[int(source_vertex)] = 0
    
    while len(priority_queue) > 0:
        distance, vertex = heapq.heappop(priority_queue)
        
        if distance > distances[vertex]:
            continue
        
        for neighbour_distance, neighbour_vertex in adjacency_list[str(vertex)]:
            calculated_distance_from_source = distance + neighbour_distance
            
            if distances[neighbour_vertex] > calculated_distance_from_source:
                heapq.heappush(priority_queue, (calculated_distance_from_source, neighbour_vertex))
                distances[neighbour_vertex] = calculated_distance_from_source
    
    return distances

def create_adjacency_list(vertices: list[str]) -> dict[str, list]:
    result = dict.fromkeys(vertices, list())
    
    # note: storing format - (distance, node)
    result['0'] = [(4, 1), (4, 2)]
    result['1'] = [(4, 0), (2, 2)]
    result['2'] = [(4, 0), (2, 1), (3, 3), (1, 4), (6, 5)]
    result['3'] = [(3, 2), (2, 5)]
    result['4'] = [(1, 2), (3, 5)]
    result['5'] = [(6, 2), (2, 3), (3, 4)]
    
    return result

# Dijkstra's algorithm using set
def dijkstras_algorithm_using_set(vertices: list[str], adjacency_list: dict[str, list], source_vertex: str):
    distances = [float('inf') ] * len(vertices)
    set_storage = set()
    
    set_storage.add((0, int(source_vertex)))
    distances[int(source_vertex)] = 0
    
    while len(set_storage) > 0:
        distance, vertex = set_storage.pop()
        
        for neighbour_distance, neighbour_vertex in adjacency_list[str(vertex)]:
            calculated_distance_from_source = distance + neighbour_distance
            
            if distances[neighbour_vertex] > calculated_distance_from_source:
                # remove because some other vertex already reached and it's distance is greater
                # note: it'll take log(n)
                if distances[neighbour_vertex] != float('inf'):
                    set_storage.remove((distances[neighbour_vertex], neighbour_vertex))
                
                set_storage.add((calculated_distance_from_source, neighbour_vertex))
                distances[neighbour_vertex] = calculated_distance_from_source

    return distances

def main():
    vertices = ['0', '1', '2', '3', '4', '5']
    source_vertex = vertices[0]
    adjacency_list = create_adjacency_list(vertices)
    # result = dijkstra_algorithm(vertices, adjacency_list, source_vertex)
    result = dijkstras_algorithm_using_set(vertices, adjacency_list, source_vertex)
    
    for index in range(len(result)):
        print(f'distance from 0 to {index}: {result[index]}')

main()