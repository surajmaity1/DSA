package LeetCode;

import java.util.ArrayDeque;
import java.util.Deque;
import java.util.PriorityQueue;

public class MVE {
    //https://leetcode.com/problems/max-value-of-equation/

    public static void main(String[] args) {
        int[][] points = {
                {1,3},
                {2,0},
                {5,10},
                {6,-10}
        };
        int k = 3;
        System.out.println(findMaxValueOfEquation1(points, k ));
    }

    // BEST SOLUTION
    /*
    public int findMaxValueOfEquation(int[][] points, int k) {
        PriorityQueue<Pair<Integer, Integer>> pq = new PriorityQueue<>((a, b) -> (a.getKey() == b.getKey() ? a.getValue() - b.getValue() : b.getKey() - a.getKey()));
        int res = Integer.MIN_VALUE;
        for (int[] point : points) {
            while (!pq.isEmpty() && point[0] - pq.peek().getValue() > k) {
                pq.poll();
            }
            if (!pq.isEmpty()) {
                res = Math.max(res, pq.peek().getKey() + point[0] + point[1]);
            }
            pq.offer(new Pair<>(point[1] - point[0], point[0]));
        }
        return res;
    }

     */

    //BRUTE FORCE
    static int findMaxValueOfEquation1(int[][] points, int k) {
        int n = points.length;
        int max = Integer.MIN_VALUE;

        for (int i = 0; i < n; i++) {

                int temp = points[i][0];
                for (int l = i+1; l < n; l++) {
                    int abs = Math.abs(temp - points[l][0]);
                    if (abs <= k){
                        int result = points[i][1] + points[l][1] + abs;
                        max = Math.max(result, max);
                    }
                }
        }
        return max;
    }
}
