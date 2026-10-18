package LeetCode;

public class ASEMMS {
    //https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/
    public double average(int[] salary) {
        double res = 0.0;
        int max = -1;
        int min = 1000001;
        int n = salary.length;

        for(int val : salary){
            res += val;
            if(min > val) min = val;
            if(max < val) max = val;
        }
        res -= (min+max);
        res /= (n-2);
        return res;
    }
}
