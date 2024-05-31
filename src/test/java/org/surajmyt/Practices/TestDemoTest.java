package org.surajmyt.Practices;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class TestDemoTest {

    @Test
    void createTest1() {
        int size2 = 1;
        boolean result2 = TestDemo.create(size2);
        assertTrue(result2, "Expected true with size = " + size2);
    }

    @Test
    void createTest2() {
        int size1 = -1;
        boolean result1 = TestDemo.create(size1);
        assertTrue(result1, "Expected true with size = " + size1);
    }
}