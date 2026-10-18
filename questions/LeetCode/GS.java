package LeetCode;


import java.util.Arrays;

public class GS {
    //https://leetcode.com/problems/gas-station/
    public int canCompleteCircuit(int[] gas, int[] cost) {
        int total = 0;
        int res = 0;
        int diff = 0;
        int n = cost.length;
        for (int i = 0; i < n; i++) {
            total += gas[i] - cost[i];
            diff += gas[i] - cost[i];
            if (total < 0){
                total = 0;
                res = i + 1;
            }
        }
        return (diff < 0)? -1 : res;
    }
    public int canCompleteCircuit2(int[] gas, int[] cost) {
        int sumGas = Arrays.stream(gas).sum();
        int sumCost = Arrays.stream(cost).sum();

        if (sumGas < sumCost) return -1;

        int total = 0;
        int res = 0;
        int n = cost.length;
        for (int i = 0; i < n; i++) {
            total += gas[i] - cost[i];

            if (total < 0){
                total = 0;
                res = i + 1;
            }
        }
        return res;
    }
}
