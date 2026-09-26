# Maximum subarray sum
import sys


def kadane(arr: list[int]):
    maximum_sum = -sys.maxsize + 1
    sum = 0
    size = len(arr)
    start_index, end_index = -1, -1
    start = -1
    
    for index in range(size):
        if sum == 0:
            start = index
        
        sum = sum + arr[index]
        
        if sum < 0:
            sum = 0
        
        if maximum_sum < sum:
            maximum_sum = sum
            start_index = start
            end_index = index
    
    return maximum_sum, arr[start_index: end_index + 1]

if __name__ == "__main__":
    arr = [-2, -3, 4, -1, -2, 1, 5, -3]
    
    max_sum, sub_array = kadane(arr)
    
    print(f'Maximum sum: {max_sum}')
    print(f'Sub array of maximum sum: {sub_array}')