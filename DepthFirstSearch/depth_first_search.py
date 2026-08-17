def dfs(vertices: list[str], adjacency_list: dict[str, list], vertex: str, visted_list: list[bool], result: list[str]):
    result.append(vertex)
    visted_list[int(vertex)] = True
    
    for neighbour_vertex in adjacency_list[vertex]:
        if not visted_list[int(neighbour_vertex)]:
            dfs(vertices, adjacency_list, neighbour_vertex, visted_list, result)

def depth_first_search(vertices: list[str], adjacency_list: dict[str, list]):
    visted_list = [False] * (len(vertices) + 1)
    bfs_result: list[str] = []
    source = vertices[0]
    
    dfs(vertices, adjacency_list, source, visted_list, bfs_result)
    
    return bfs_result

def create_adjacency_list(vertices: list[str]) -> dict[str, list]:
    adjacency_list = dict.fromkeys(vertices, [])
    
    adjacency_list['1'] = ['2', '3']
    adjacency_list['2'] = ['1', '5', '6']
    adjacency_list['3'] = ['1', '4', '7']
    adjacency_list['4'] = ['3', '8']
    adjacency_list['5'] = ['2']
    adjacency_list['6'] = ['2']
    adjacency_list['7'] = ['3', '8']
    adjacency_list['8'] = ['4', '7']
    
    return adjacency_list

def main():
    vertices = ['1', '2', '3', '4', '5', '6', '7', '8']
    adjacency_list = create_adjacency_list(vertices)
    dfs_result = depth_first_search(vertices, adjacency_list)
    print(dfs_result)

main()