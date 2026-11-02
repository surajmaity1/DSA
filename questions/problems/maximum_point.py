# Maximum point we can obtain from n cards
# Question's details - https://youtu.be/pBWCOCS636U?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz

def maximum_point(array_input: list[int], total_selected_value: int) -> int:
    result = -1
    size = len(array_input)

    if total_selected_value > size:
        return result
    
    left_sum = 0
    right_sum = 0
    right_index = size - 1
    
    for left_index in range(no_of_selected_item):
        left_sum = left_sum + array_input[left_index]
    
    result = left_sum
    
    for left_index in range(no_of_selected_item -1, -1, -1):
        left_sum = left_sum - array_input[left_index]
        right_sum = right_sum + array_input[right_index]
        
        result = max(result, left_sum + right_sum)
        right_index = right_index - 1
    
    return result


if __name__ == "__main__":
    array_input = [6, 2, 3, 4, 7, 2, 1, 7, 1]
    no_of_selected_item = 4
    
    print(f'maximum: {maximum_point(array_input, no_of_selected_item)}')