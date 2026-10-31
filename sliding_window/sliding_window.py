class SlidingWindow:
    # Brute Force
    # Question - Given an array with positive number.
    #            Find the longest subarray with sum less than or equal to give numbers (k)
    def brute_force(self, array_input: list[int], sum_input: int):
        max_length = 0
        size = len(array_input)
        sub_array = []
        
        if size < 1:
            return -1
        
        for outer_index in range(size):
            total = 0
            
            for inner_index in range(outer_index, size):
                total = total + array_input[inner_index]
                
                if total <= sum_input:
                    new_length = inner_index - outer_index + 1
                    max_length = max(max_length, new_length)
                    
                    if new_length >= max_length:
                        sub_array = array_input[outer_index: inner_index + 1]
                else:
                    break
        
        return max_length, sub_array
    
    # Constant Window
    # Question - Given an array with positive and negative number.
    #            Find the largest sum using k consecutive integers.
    def constant_window(self, array_input: list[int], no_of_consecutive_integers: int) -> int:
        if  no_of_consecutive_integers < 1:
            return -1
        
        size = len(array_input)
        
        if size < no_of_consecutive_integers:
            return -1
        
        start = 0
        max_sum = 0
        
        for index in range(start, no_of_consecutive_integers):
            max_sum = max_sum + array_input[index]
        
        while no_of_consecutive_integers < size:
            sum = max_sum
            sum = sum - array_input[start] + array_input[no_of_consecutive_integers]
            max_sum = max(sum, max_sum)

            start = start + 1
            no_of_consecutive_integers = no_of_consecutive_integers + 1
        
        return max_sum
    
    # Two Pointers
    # Question - Given an array with positive number.
    #            Find the longest subarray with sum less than or equal to give numbers (k)
    # time complexity = O(n) + O(n) = O(n) [ here first O(n) is for outer while loop & second O(n) is for shrinking]
    def two_pointer(self, array_input: list[int], sum_input: int):
        size = len(array_input)
        max_sub_array_length = 0
        max_sub_array = []
        
        if size < 0:
            return (max_length, max_sub_array)
        
        total = 0
        left = 0
        right = 0

        while right < size:
            total = total + array_input[right]
            
            while total > sum_input:
                total = total - array_input[left]
                left = left + 1
            
            if total <= sum_input:
                new_length = right - left + 1
                
                if max_sub_array_length <= new_length:
                    max_sub_array_length = new_length
                    max_sub_array = array_input[left: right + 1]
            
            right = right + 1
        
        return (max_sub_array_length, max_sub_array)

    # Please note - below will not work if it's asked to print subarray, it'll work only for subarray length
    # Two Pointers
    # Question - Given an array with positive number.
    #            Find the longest subarray length( not subarray) with sum less than or equal to give numbers (k)
    # time complexity = O(n) + O(n) = O(n) [ here first O(n) is for outer while loop & second O(n) is for shrinking]
    def two_pointer_optimal(self, array_input: list[int], sum_input: int):
        size = len(array_input)
        max_sub_array_length = 0
        
        if size < 0:
            return max_length
        
        total = 0
        left = 0
        right = 0

        while right < size:
            total = total + array_input[right]
            
            if total > sum_input:
                total = total - array_input[left]
                left = left + 1
            
            if total <= sum_input:
                new_length = right - left + 1
                
                if max_sub_array_length <= new_length:
                    max_sub_array_length = new_length
            
            right = right + 1
        
        return max_sub_array_length

if __name__ == "__main__":
    sliding_window = SlidingWindow()
    # array_input = [-1, 2, 3, 3, 4, 5, -1]
    # no_of_consecutive_integers = 4
    
    # result = sliding_window.constant_window(array_input, no_of_consecutive_integers)
    # print(result)
    
    # array_input = [2, 5, 1, 7, 10]
    # sum_input = 14
    
    # result = sliding_window.brute_force(array_input, sum_input)
    # print(result)
    
    # array_input = [2, 5, 1, 7, 10]
    # array_input = [29, 5, 1, 7, 10]
    # sum_input = 14
    
    # result = sliding_window.two_pointer(array_input, sum_input)
    # print(result)
    
    # to print only subarray length ( not subarray)
    
    array_input = [2, 5, 1, 7, 10]
    sum_input = 14
    print(sliding_window.two_pointer_optimal(array_input, sum_input))