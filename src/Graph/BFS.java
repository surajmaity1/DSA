package Graph;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;

public class BFS {
    public static void main(String[] args) {
        int n = 7;
        ArrayList<ArrayList<Integer>> adj = new ArrayList<>();

        for (int i = 0; i <= n; i++) {
            adj.add(new ArrayList<>());
        }

        // 1--2
        adj.get(1).add(2);
        adj.get(2).add(1);

        // 2--3
        adj.get(2).add(3);
        adj.get(3).add(2);

        // 2--7
        adj.get(2).add(7);
        adj.get(7).add(2);

        // 3--5
        adj.get(3).add(5);
        adj.get(5).add(3);

        // 7--5
        adj.get(7).add(5);
        adj.get(5).add(7);

        //4--6
        adj.get(4).add(6);
        adj.get(6).add(4);

        for (int i = 1; i < n; i++) {
            for (int j = 0; j < adj.get(i).size(); j++) {
                System.out.print(adj.get(i).get(j) + " ");
            }
            System.out.println();
        }
        System.out.println("BFS: " + bfs(n, adj));
    }
    static ArrayList<Integer> bfs(int n, ArrayList<ArrayList<Integer>> adj){
        ArrayList<Integer> bfs = new ArrayList<>();
        boolean[] visited = new boolean[n+1];

        for(int i = 1; i <= n; i++){
            if (!visited[i]){
                Queue<Integer> queue = new LinkedList<>();
                queue.add(i);
                visited[i] = true;

                while (!queue.isEmpty()){
                    Integer node = queue.poll();
                    bfs.add(node);

                    for(Integer element : adj.get(node)){
                        if(!visited[element]){
                            visited[element] = true;
                            queue.add(element);
                        }
                    }
                }
            }
        }

        return bfs;
    }
}
