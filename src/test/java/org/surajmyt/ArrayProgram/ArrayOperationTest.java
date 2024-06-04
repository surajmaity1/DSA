package org.surajmyt.ArrayProgram;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ArrayOperationTest {

    // Array Size Test With Negative Number
    @Test
    public void arraySizeTest1() {
        ArrayOperation arrayOperation = new ArrayOperation(-2);
        assertTrue(arrayOperation.isValidArray(), "Array Size Initialization With Negative Number Not Allowed");
    }

    // Array Size Test With 0
    @Test
    public void arraySizeTest2() {
        ArrayOperation arrayOperation = new ArrayOperation(0);
        assertTrue(arrayOperation.isValidArray(), "Array Size Initialization With Zero Not Allowed");
    }

    // Array Initialization Test With Positive Number
    @Test
    public void arraySizeTest3() {
        ArrayOperation arrayOperation = new ArrayOperation(4);
        assertTrue(arrayOperation.isValidArray(), "Array Initialized successfully with size = " + 4);
    }

    // Array Append Test
    @Test
    public void appendTest1() {
    }
}