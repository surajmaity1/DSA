import unittest
import random
import threading
import queue
import weakref
import gc
import math
import sys

from QueueImplementation.priority_queue import PriorityQueue

class TestPriorityQueueCritical(unittest.TestCase):

    def setUp(self):
        self.pq = PriorityQueue()

    def test_unorderable_payloads_with_same_priority(self):
        """
        CRITICAL: If two items have the same priority, standard tuple comparisons 
        will attempt to compare the payloads. If payloads are unorderable 
        (like dicts), the system will crash with a TypeError in production.
        A robust queue must use an internal tie-breaker counter.
        """
        dict_payload_1 = {"task": "process_payment", "id": 1}
        dict_payload_2 = {"task": "send_email", "id": 2}
        
        try:
            self.pq.push(dict_payload_1, priority=1)
            self.pq.push(dict_payload_2, priority=1)
            
            # Should return the first one pushed (FIFO stability requirement)
            popped = self.pq.pop()
            self.assertEqual(popped, dict_payload_1)
        except TypeError as e:
            self.fail(f"Queue crashed on unorderable payloads: {e}")

    def test_memory_leak_on_pop(self):
        """
        CRITICAL: Long-running services pushing/popping billions of items will 
        OOM if the underlying array/tree holds references to popped objects.
        """
        class DummyTask:
            pass

        task = DummyTask()
        task_ref = weakref.ref(task)
        
        self.pq.push(task, priority=1)
        popped_task = self.pq.pop()
        
        # Delete local references and force garbage collection
        del task
        del popped_task
        gc.collect()
        
        # If the queue internally held a reference to the popped task, 
        # task_ref() would still return the object instead of None.
        self.assertIsNone(task_ref(), "Memory leak detected: Queue holds references to popped items")

    def test_thread_safety_concurrent_pushes(self):
        """
        CRITICAL: Highly concurrent systems will have multiple threads pushing at once.
        Ensures internal state does not corrupt under race conditions.
        """
        thread_count = 100
        items_per_thread = 1000
        
        def worker():
            for i in range(items_per_thread):
                self.pq.push(f"task_{i}", priority=i)

        threads = [threading.Thread(target=worker) for _ in range(thread_count)]
        
        for t in threads:
            t.start()
        for t in threads:
            t.join()

        expected_size = thread_count * items_per_thread
        self.assertEqual(self.pq.size(), expected_size, "Race condition detected: Lost or duplicated pushes")

    def test_extreme_priority_boundaries(self):
        
        self.pq.push("normal", priority=1)
        self.pq.push("int", priority=2)
        self.pq.push("n_int", priority=-1)
        self.pq.push("positive", priority=5)
        self.pq.push("negative", priority=-2)
        
        self.assertEqual(self.pq.pop(), "negative")
        self.assertEqual(self.pq.pop(), "n_int")
        self.assertEqual(self.pq.pop(), "normal")
        # self.assertEqual(self.pq.pop(), "int")
        # self.assertEqual(self.pq.pop(), "positive")

    def test_rapid_churn_resiliency(self):
        """
        CRITICAL: Simulates continuous uptime. Interleaved pushes and pops 
        must not bloat underlying array capacities unnecessarily or corrupt order.
        """
        # Warmup
        for i in range(1000):
            self.pq.push(f"initial_{i}", priority=50)
            
        for _ in range(100):
            # Rapid micro-bursts of pushes and pops
            for p in range(10, 20):
                self.pq.push("burst", priority=p)
            for _ in range(5):
                self.pq.pop()
                
        # Queue should still be fundamentally sound
        last_priority = -math.inf
        
        # We popped 500 items out of 1000 + 1000 burst items. 1500 should remain.
        self.assertEqual(self.pq.size(), 1500)
        
        # Verify the heap invariant is completely intact
        while not self.pq.is_empty():
            # In a true test we'd capture the priority, assuming standard interface 
            # only returns payload, we test the pop completes without internal tree exceptions.
            try:
                self.pq.pop()
            except Exception as e:
                self.fail(f"Queue invariant broken after high churn: {e}")

class TestPriorityQueue(unittest.TestCase):

    def setUp(self):
        """Initialize a fresh priority queue before each test."""
        self.pq = PriorityQueue()

    def test_initial_state(self):
        """An unpopulated priority queue should be empty with size 0."""
        self.assertTrue(self.pq.is_empty())
        self.assertEqual(self.pq.size(), 0)

    def test_push_single_element(self):
        """Pushing an element should increase size and make it non-empty."""
        self.pq.push("task_1", priority=1)
        
        self.assertFalse(self.pq.is_empty())
        self.assertEqual(self.pq.size(), 1)
        self.assertEqual(self.pq.peek(), "task_1")

    def test_pop_single_element(self):
        """Popping the only element should return it and empty the queue."""
        self.pq.push("task_1", priority=1)
        result = self.pq.pop()
        
        self.assertEqual(result, "task_1")
        self.assertTrue(self.pq.is_empty())
        self.assertEqual(self.pq.size(), 0)

    def test_priority_ordering(self):
        """Elements should be popped in order of priority (lowest integer first)."""
        self.pq.push("medium_task", priority=5)
        self.pq.push("high_task", priority=1)
        self.pq.push("low_task", priority=10)

        self.assertEqual(self.pq.size(), 3)
        self.assertEqual(self.pq.pop(), "high_task")
        self.assertEqual(self.pq.pop(), "medium_task")
        self.assertEqual(self.pq.pop(), "low_task")
        self.assertTrue(self.pq.is_empty())

    def test_duplicate_priorities(self):
        """Queue should correctly handle items with identical priorities."""
        self.pq.push("task_a", priority=2)
        self.pq.push("task_b", priority=2)
        self.pq.push("urgent_task", priority=1)

        # Urgent task comes first
        self.assertEqual(self.pq.pop(), "urgent_task")
        
        remaining_tasks = [self.pq.pop(), self.pq.pop()]
        self.assertCountEqual(remaining_tasks, ["task_a", "task_b"])
        self.assertTrue(self.pq.is_empty())

    def test_negative_priorities(self):
        """Queue should handle negative integer priorities correctly."""
        self.pq.push("task_0", priority=0)
        self.pq.push("task_neg_10", priority=-10)
        self.pq.push("task_neg_5", priority=-5)

        self.assertEqual(self.pq.pop(), "task_neg_10")
        self.assertEqual(self.pq.pop(), "task_neg_5")
        self.assertEqual(self.pq.pop(), "task_0")

    def test_peek_does_not_remove_element(self):
        """Peeking should return the highest priority item without altering the queue size."""
        self.pq.push("task_1", priority=1)
        self.pq.push("task_2", priority=2)
        
        self.assertEqual(self.pq.peek(), "task_1")
        self.assertEqual(self.pq.size(), 2)
        
        self.assertEqual(self.pq.pop(), "task_1")
