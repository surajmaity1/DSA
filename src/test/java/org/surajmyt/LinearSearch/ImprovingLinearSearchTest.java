package org.surajmyt.LinearSearch;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ImprovingLinearSearchTest {
    @Test
    public void test1() {
        ImprovingLinearSearch improvingLinearSearch = new ImprovingLinearSearch();
        assertFalse(ImprovingLinearSearch.transpositionLinearSearch(null, 0), "Check with null");
    }

    @Test
    public void test2() {
        ImprovingLinearSearch improvingLinearSearch = new ImprovingLinearSearch();
        int[] array = { 120, 10, 110,  40, 60,20, 30,130, 170};

        assertFalse(ImprovingLinearSearch.transpositionLinearSearch(array, -2), "Not present target");
    }

    @Test
    public void test3() {
        ImprovingLinearSearch improvingLinearSearch = new ImprovingLinearSearch();
        int[] array = { 120, 10, 110,  40, 60,20, 30,130, 170};

        assertTrue(ImprovingLinearSearch.transpositionLinearSearch(array, 130), "present target");
    }

    @Test
    public void test4() {
        ImprovingLinearSearch improvingLinearSearch = new ImprovingLinearSearch();
        int[] array = { 120, 10, 110,  40, 60,20, 30,130, 170};

        assertTrue(ImprovingLinearSearch.transpositionLinearSearch(array, 120), "present target");
    }

    @Test
    public void test5() {
        ImprovingLinearSearch improvingLinearSearch = new ImprovingLinearSearch();
        assertFalse(ImprovingLinearSearch.moveFrontOrHeadLinearSearch(null, 0), "Check with null");
    }

    @Test
    public void test6() {
        ImprovingLinearSearch improvingLinearSearch = new ImprovingLinearSearch();
        int[] array = { 120, 10, 110,  40, 60,20, 30,130, 170};

        assertFalse(ImprovingLinearSearch.moveFrontOrHeadLinearSearch(array, -2), "Not present target");
    }

    @Test
    public void test7() {
        ImprovingLinearSearch improvingLinearSearch = new ImprovingLinearSearch();
        int[] array = { 120, 10, 110,  40, 60,20, 30,130, 170};

        assertTrue(ImprovingLinearSearch.moveFrontOrHeadLinearSearch(array, 130), "present target");
    }

    @Test
    public void test8() {
        ImprovingLinearSearch improvingLinearSearch = new ImprovingLinearSearch();
        int[] array = { 120, 10, 110,  40, 60,20, 30,130, 170};

        assertTrue(ImprovingLinearSearch.moveFrontOrHeadLinearSearch(array, 120), "present target");
    }

}