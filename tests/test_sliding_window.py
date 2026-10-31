from unittest import TestCase
from sliding_window.sliding_window import SlidingWindow

class SlidingWindowTests(TestCase):
    def setUp(self):
        self.sliding_window = SlidingWindow()
    
    def test_two_pointer(self):
        array_input = [2, 5, 1, 7, 10]
        sum_input = 14

        result = self.sliding_window.two_pointer(array_input, sum_input)
        self.assertTupleEqual(result, (3, [5, 1, 7]))
    
    def test_two_pointer_with_complex_list(self):
        array_input = [29, 5, 1, 7, 10]
        sum_input = 14

        result = self.sliding_window.two_pointer(array_input, sum_input)
        self.assertTupleEqual(result, (3, [5, 1, 7]))

    def test_two_pointer_with_entire_array(self):
        array_input = [1, 2, 3, 4]
        sum_input = 10

        result = self.sliding_window.two_pointer(array_input, sum_input)
        self.assertTupleEqual(result, (4, [1, 2, 3, 4]))

    def test_two_pointer_with_single_element(self):
        array_input = [5, 2, 8, 3]
        sum_input = 3

        result = self.sliding_window.two_pointer(array_input, sum_input)
        self.assertTupleEqual(result, (1, [3]))
    
    def test_two_pointer_with_sum_equal_to_k(self):
        array_input = [2, 3, 5, 1]
        sum_input = 10

        result = self.sliding_window.two_pointer(array_input, sum_input)
        self.assertTupleEqual(result, (3, [3, 5, 1]))

    def test_two_pointer_with_all_elements_greater_than_k(self):
        array_input = [10, 20, 30]
        sum_input = 5

        result = self.sliding_window.two_pointer(array_input, sum_input)
        self.assertTupleEqual(result, (0, []))

    def test_two_pointer_with_repeated_elements(self):
        array_input = [2, 2, 2, 2, 2]
        sum_input = 6

        result = self.sliding_window.two_pointer(array_input, sum_input)
        self.assertTupleEqual(result, (3, [2, 2, 2]))

    def test_two_pointer_with_empty_array(self):
        array_input = []
        sum_input = 10

        result = self.sliding_window.two_pointer(array_input, sum_input)
        self.assertTupleEqual(result, (0, []))

    def test_two_pointer_with_zero_sum_limit(self):
        array_input = [1, 2, 3]
        sum_input = 0

        result = self.sliding_window.two_pointer(array_input, sum_input)
        self.assertTupleEqual(result, (0, []))
