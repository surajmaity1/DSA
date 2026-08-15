def bfs(vertices: list[str], adjacency_list: dict[str, list]):
    visted_list = [False] * (len(vertices) + 1)
    queue: list[str] = [] * len(vertices)
    bfs_result: list[str] = []

    queue.append(vertices[0])
    visted_list[int(vertices[0])] = True
    
    while len(queue) > 0:
        popped_vertex = queue.pop(0)
        bfs_result.append(popped_vertex)
        
        for vertex in adjacency_list[popped_vertex]:
            if not visted_list[int(vertex)]:
                visted_list[int(vertex)] = True
                queue.append(vertex)
    
    return bfs_result

def create_adjacency_list(vertices: list[str]) -> dict[str, list]:
    adjacency_list = dict.fromkeys(vertices, [])
    
    adjacency_list['1'] = ['2', '6']
    adjacency_list['2'] = ['1', '3', '4']
    adjacency_list['3'] = ['2']
    adjacency_list['4'] = ['2', '5']
    adjacency_list['5'] = ['4', '8']
    adjacency_list['6'] = ['1', '7', '9']
    adjacency_list['7'] = ['6', '8']
    adjacency_list['8'] = ['5', '7']
    adjacency_list['9'] = ['6']
    
    return adjacency_list

def main():
    vertices = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    adjacency_list = create_adjacency_list(vertices)
    
    bfs_result = bfs(vertices, adjacency_list)
    print(bfs_result)

main()