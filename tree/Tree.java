package org.surajmyt.tree;

import java.util.ArrayList;
import java.util.List;

public class Tree {
    public static void main(String[] args) {

        // no of nodes
        int noOfNodes = 11;

        // root node
        int rootNode = 1;

        // Adjacency list to store tree
        List<List<Integer>> adjacencyList = new ArrayList<>();

        for (int i = 0; i < noOfNodes + 1; i++) {
            adjacencyList.add(new ArrayList<>());
        }



        adjacencyList.get(1).add(2);
        adjacencyList.get(2).add(1);

        adjacencyList.get(1).add(3);
        adjacencyList.get(3).add(1);

        adjacencyList.get(1).add(4);
        adjacencyList.get(4).add(1);

        adjacencyList.get(2).add(6);
        adjacencyList.get(6).add(2);

        adjacencyList.get(3).add(7);
        adjacencyList.get(7).add(3);

        adjacencyList.get(7).add(8);
        adjacencyList.get(8).add(7);

        adjacencyList.get(7).add(9);
        adjacencyList.get(9).add(7);

        adjacencyList.get(7).add(10);
        adjacencyList.get(10).add(7);

        adjacencyList.get(7).add(11);
        adjacencyList.get(11).add(7);

        System.out.println(adjacencyList);
    }
}
