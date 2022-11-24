package DijkstraAlgorithm;

import java.util.Scanner;

public class DijkstraAlgorithm {
    /*
    Time Complexity: O(V^2)
    Auxiliary Space: O(V)
     */

    static void dijkstraAlgorithm(int[][] adj){
        int v = adj.length;
        int[] distance = new int[v];
        boolean[] visited = new boolean[v];
        int max = Integer.MAX_VALUE;

        for (int i = 1; i < v; i++) {
            distance[i] = max;
        }
        distance[0] = 0;
        for (int i = 0; i < v - 1; i++) {
            // FIND VERTEX WITH MINIMUM DISTANCE
            int minVertex = findMinVertex(distance, visited);
            visited[minVertex] = true;

            // EXPLORING NEIGHBOURS
            for (int j = 0; j < v; j++) {
                if (adj[minVertex][j] != 0 &&
                        !visited[j] && distance[minVertex] != max){
                    int newDistance = distance[minVertex] + adj[minVertex][j];

                    if (newDistance < distance[j]){distance[j] = newDistance;}
                }
            }
        }

        //PRINT RESULT:
        for (int i = 0; i < v; i++) {
            System.out.println(i + " " + distance[i]);
        }
    }
    static int findMinVertex(int[] d, boolean[] v){
        // Here, mv = minVertex, d = distance, v = visited
        int mv = -1;
        int V = d.length;
        for (int i = 0; i < V; i++) {
            if (!v[i] && (mv == -1 ||
                    d[i]<d[mv])){
                mv = i;
            }
        }
        return mv;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int v = sc.nextInt();
        int e = sc.nextInt();
        int[][] adjacencyMatrix = new int[v][v];

        for (int i = 0; i < e; i++) {
            int v1 = sc.nextInt();
            int v2 = sc.nextInt();
            int weight = sc.nextInt();
            adjacencyMatrix[v1][v2] = weight;
            adjacencyMatrix[v2][v1] = weight;

        }
        dijkstraAlgorithm(adjacencyMatrix);
    }
}
