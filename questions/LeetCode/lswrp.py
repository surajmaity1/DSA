# Longest Substring Without Repeating Characters
# Link - https://leetcode.com/problems/longest-substring-without-repeating-characters/description/


class Solution:
    # Brute force
    def length_of_longest_substring_brute_force(self, s: str) -> int:
        size = len(s)
        
        if size < 2:
            return size
        
        s_list = list(s)
        longest_substring_length = 1
        
        for outer_index in range(size):
            temp_substring = s_list[outer_index]
            temp_substring_length = 1
            
            for inner_index in range(outer_index + 1, size):
                new_substring = temp_substring + s_list[inner_index]
                
                if len(set(new_substring)) == len(new_substring):
                    temp_substring = new_substring
                    temp_substring_length = temp_substring_length + 1
                    
                    if temp_substring_length > longest_substring_length:
                        longest_substring_length = temp_substring_length
                else:
                    break
        
        return longest_substring_length
    
    # using hasing
    def length_of_longest_substring_hashing(self, s: str) -> int:
        size = len(s)
        
        if size < 2:
            return size
        
        longest_substring_length = 1
        
        for outer_index in range(size):
            hash_storage = [False] * 255
            hash_storage[ord(s[outer_index])] = True
            
            for inner_index in range(outer_index + 1, size):
                if hash_storage[ord(s[inner_index])] == True:
                    break
                
                new_length = inner_index - outer_index + 1
                longest_substring_length = max(new_length, longest_substring_length)

                hash_storage[ord(s[inner_index])] = True
        
        return longest_substring_length
    
if __name__ == "__main__":
    solution = Solution()
    
    print(f'{solution.length_of_longest_substring_hashing("abcabcbb")}, result: {solution.length_of_longest_substring_hashing("abcabcbb") == 3}')
    print(f'{solution.length_of_longest_substring_hashing("bbbbb")}, result: {solution.length_of_longest_substring_hashing("bbbbb") == 1}')
    print(f'{solution.length_of_longest_substring_hashing("pwwkew")}, result: {solution.length_of_longest_substring_hashing("pwwkew") == 3}')
