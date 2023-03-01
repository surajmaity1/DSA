package TopologicalSort;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.Stack;

class Graph{
    private int TOTAL_VERTEX;
    private ArrayList<ArrayList<Integer>> adjList;
    Graph(int size){
        this.TOTAL_VERTEX = size;
        adjList = new ArrayList<>(size);
        for (int i = 0; i < TOTAL_VERTEX; i++) {
            adjList.add(new ArrayList<>());
        }
    }
    void addDirectedEdge(int currentVertex, int nextConnectedVertex){
        adjList.get(currentVertex).add(nextConnectedVertex);
    }
    void topologicalSortRecursion(int V, boolean[] isVisited, Stack<Integer> s){
        isVisited[V] = true;
        Integer vertex;

        Iterator<Integer> it = adjList.get(V).iterator();
        while (it.hasNext()){
            vertex = it.next();
            if (!isVisited[vertex]) topologicalSortRecursion(vertex, isVisited, s);
        }
        s.push(new Integer(V));
    }
}
public class TopologicalSort {
    public static void main(String[] args){

    }

}
