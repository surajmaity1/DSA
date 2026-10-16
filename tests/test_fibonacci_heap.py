from unittest import TestCase

from fibonacci_heap.fibonacci_heap import FibonacciHeap

class TestFibonacciHeap(TestCase):
    def setUp(self):
        self.fibonacci_heap = FibonacciHeap()
    
    def test_insert_and_extract_single_node(self):
        self.assertEqual(self.fibonacci_heap.count, 0)
        self.assertEqual(self.fibonacci_heap.get_minimum(), None)
        
        self.fibonacci_heap.insert(5)
        self.assertEqual(self.fibonacci_heap.count, 1)
        self.assertEqual(self.fibonacci_heap.get_minimum().key, 5)
        self.assertEqual(self.fibonacci_heap.extract_minimum().key, 5)
        self.assertEqual(self.fibonacci_heap.get_minimum(), None)
        self.assertEqual(self.fibonacci_heap.count, 0)
    
    def test_insert_and_extract_two_nodes(self):
        self.fibonacci_heap.insert(5)
        self.fibonacci_heap.insert(2)
        
        self.assertEqual(self.fibonacci_heap.count, 2)
        self.assertEqual(self.fibonacci_heap.get_minimum().key, 2)
        self.assertEqual(self.fibonacci_heap.extract_minimum().key, 2)
        self.assertEqual(self.fibonacci_heap.count, 1)
        self.assertEqual(self.fibonacci_heap.get_minimum().key, 5)
        self.assertEqual(self.fibonacci_heap.extract_minimum().key, 5)
        self.assertEqual(self.fibonacci_heap.get_minimum(), None)
        self.assertEqual(self.fibonacci_heap.count, 0)
    
    def test_insert_and_extract_multiple_nodes(self):
        self.fibonacci_heap.insert(5)
        self.fibonacci_heap.insert(2)
        self.fibonacci_heap.insert(16)
        
        self.assertEqual(self.fibonacci_heap.count, 3)
        self.assertEqual(self.fibonacci_heap.get_minimum().key, 2)
        self.assertEqual(self.fibonacci_heap.extract_minimum().key, 2)
        self.assertEqual(self.fibonacci_heap.count, 2) 
        self.assertEqual(self.fibonacci_heap.get_minimum().key, 5)
        self.assertEqual(self.fibonacci_heap.extract_minimum().key, 5)
        self.assertEqual(self.fibonacci_heap.get_minimum().key, 16)
        self.assertEqual(self.fibonacci_heap.extract_minimum().key, 16)
        self.assertEqual(self.fibonacci_heap.get_minimum(), None)
        self.assertEqual(self.fibonacci_heap.count, 0)

    def test_insert_and_extract_child_nodes(self):
        two = self.fibonacci_heap.insert(2)
        five = self.fibonacci_heap.insert(5)
        nine = self.fibonacci_heap.insert(9)
        sixteen = self.fibonacci_heap.insert(16)
        nineteen = self.fibonacci_heap.insert(19)
        twentytwo = self.fibonacci_heap.insert(22)
        
        twelve = self.fibonacci_heap.insert(12)
        seventeen = self.fibonacci_heap.insert(17)
        
        five.child = nineteen
        nineteen.child = twentytwo
        
        nine.child = twelve
        nine.child = seventeen
        
        self.assertEqual(self.fibonacci_heap.count, 8)
        self.assertEqual(self.fibonacci_heap.get_minimum(), two)
        self.assertEqual(self.fibonacci_heap.extract_minimum(), two)
        self.assertEqual(self.fibonacci_heap.count, 7)
        self.assertEqual(self.fibonacci_heap.get_minimum(), five)
        self.assertEqual(five, nine.parent)

    def test_complext_fibonacci_heap(self):
        five = self.fibonacci_heap.insert(5)
        two = self.fibonacci_heap.insert(2)
        sixteen = self.fibonacci_heap.insert(16)
        nine = self.fibonacci_heap.insert(9)
        twelve = self.fibonacci_heap.insert(12)
        thirty_eight = self.fibonacci_heap.insert(38)
        nineteen = self.fibonacci_heap.insert(19)
        thirty_one = self.fibonacci_heap.insert(31)
        twenty_two = self.fibonacci_heap.insert(22)
        twenty_nine = self.fibonacci_heap.insert(29)
        twenty_five = self.fibonacci_heap.insert(25)
        fifty_nine = self.fibonacci_heap.insert(59)
        thirty_two = self.fibonacci_heap.insert(32)
        
        two.child = twelve
        twelve.parent = two
        thirty_eight.parent = two
        nineteen.parent = two
        
        sixteen.child = twenty_nine
        twenty_nine.parent = sixteen
        
        nine.child = twenty_five
        twenty_five.parent = nine
        fifty_nine.parent = nine
        twenty_five.child = thirty_two
        thirty_two.parent = twenty_five
        
        self.assertEqual(self.fibonacci_heap.count, 13)
        self.assertEqual(self.fibonacci_heap.get_minimum(), two)
        self.assertEqual(self.fibonacci_heap.extract_minimum(), two)
        self.assertEqual(self.fibonacci_heap.count, 12)
        self.assertEqual(self.fibonacci_heap.get_minimum(), five)
        
        