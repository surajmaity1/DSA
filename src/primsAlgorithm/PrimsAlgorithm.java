package primsAlgorithm;

public class PrimsAlgorithm {
    public static void main(String[] args) {
        int [][]graph = { {0, 4, 6, 0, 0, 0},
            {4, 0, 6, 3, 4, 0},
            {6, 6, 0, 1, 8, 0},
            {0, 3, 1, 0, 2, 3},
            {0, 4, 8, 2, 0, 7},
            {0, 0, 0, 3, 7, 0} };

        int v = graph.length;
        primsAlgo(graph);
    }
    static void primsAlgo(int[][] graph){
        int v = graph.length;

        int[] val = new int[v];
        boolean[] mst = new boolean[v];
        int[] parent = new int[v];

        int max = Integer.MAX_VALUE;
        for (int i = 1; i < v; i++) {
            val[i] = max;
        }

        parent[0] = -1;

        for (int i = 0; i < v-1; i++) {
            int u = minWeight(val, mst);
            mst[u] = true;

            for (int j = 0; j < v; j++) {
                if (graph[u][j] != 0 && !mst[j] && graph[u][j] < val[j]){
                    val[j] = graph[u][j];
                    parent[j] = u;
                }
            }
        }

        for (int i = 1; i < v; i++) {
            System.out.println("U->V: "+ parent[i] + "->"+i
                    + "  wt = " +graph[parent[i]][i]);
        }
    }
    static int minWeight(int[] arr, boolean[] mst){
        int vertex = -1;
        int l = arr.length;
        int min = Integer.MAX_VALUE;

        for (int i = 0; i < l; i++) {
            if (!mst[i] && min > arr[i]){
                vertex = i;
                min = arr[i];
            }
        }
        return vertex;
    }
}
