from unittest import TestCase
from heap.heap_sort import HeapSort


class HeapSortTests(TestCase):
    def test_build_heap_success_with_four_elements(self):
        input = [1, 2, 3, 4]
        self.assertListEqual(HeapSort(input).build_heap(), [4, 2, 3, 1])
    
    def test_build_heap_success(self):
        input = [9, 4, 3, 8, 10, 2, 5]
        self.assertListEqual(HeapSort(input).build_heap(), [10, 9, 5, 8, 4, 2, 3])
        
    def test_build_heap_for_complex_heapify_success(self):
        input = [9, 4, 3, 8, 10, 2, 5, 1, 2, 1, 2, 99, 100]
        self.assertListEqual(HeapSort(input).build_heap(), [100, 10, 99, 8, 4, 9, 5, 1, 2, 1, 2, 3, 2])
    
    def test_heap_sort_success(self):
        input = [9, 4, 3, 8, 10, 2, 5]
        expected_result = sorted(input)
        self.assertListEqual(HeapSort(input).heap_sort(), expected_result)
