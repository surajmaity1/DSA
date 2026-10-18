package LeetCode;

import java.util.ArrayList;
import java.util.List;

public class APFST {

    //All Paths From Source to Target

    //https://leetcode.com/problems/all-paths-from-source-to-target/

    static void dfs(int[][] graph, List<List<Integer>> result, List<Integer> path, int u){
        path.add(u);
        if (u == graph.length - 1) result.add(new ArrayList<>(path));
        else{
            for (int v: graph[u])
                dfs(graph, result, path, v);
        }
        path.remove(path.size()-1);
    }
    public List<List<Integer>> allPathsSourceTarget(int[][] graph) {
        List<List<Integer>> result = new ArrayList<>();
        List<Integer> path = new ArrayList<>();
        dfs(graph, result, path, 0);
        return result;
    }
}
