package org.surajmyt.Practices;

public class TestDemo {
    public static void main(String[] args) {
        System.out.println("TestDemo Exercise");
    }
    public static boolean create(int size) {
        if (size < 1) {
            return false;
        }
        int[] array = new int[size];
        return true;
    }
}