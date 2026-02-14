package org.surajmyt.HashTables;

import java.util.Hashtable;
import java.util.Map;

public class Hashtable1 {
    public static void main(String[] args) {
        Hashtable<Integer, String> hashtable = new Hashtable<>();

        hashtable.put(100,"Amit");
        hashtable.put(101,"Vijay");
        hashtable.put(102,"Ravi");
        hashtable.put(103,"Rahul");
        hashtable.putIfAbsent(103, "Demo");

        for (Map.Entry map: hashtable.entrySet()) {
            System.out.println(map + " " + map.getKey() + " " + map.getValue());
        }
    }
}
