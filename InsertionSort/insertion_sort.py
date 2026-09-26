def insertion(user_input: list[int]):
    size = len(user_input)
    
    if size < 2:
        return
    
    outer_index = 1
        
    # one way
    while outer_index < size:
        picked_element = user_input[outer_index]
        inner_index = outer_index - 1
        
        while inner_index >= 0 and user_input[inner_index] > picked_element:
            user_input[inner_index + 1] = user_input[inner_index]
            inner_index = inner_index - 1
        
        user_input[inner_index + 1] = picked_element
        outer_index = outer_index + 1

    # another  way
    # while outer_index < size:
    #     inner_index = outer_index
        
    #     while inner_index > 0 and user_input[inner_index - 1] > user_input[inner_index]:
    #         user_input[inner_index - 1] , user_input[inner_index] = user_input[inner_index] , user_input[inner_index - 1]
    #         inner_index = inner_index - 1
        
    #     outer_index = outer_index + 1

if __name__ == "__main__":
    user_input = [93, 1, 22, 3, 49, 0, 11]
    insertion(user_input=user_input)
    
    print(f'result = {user_input}')