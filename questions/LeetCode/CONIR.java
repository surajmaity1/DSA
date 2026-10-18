package LeetCode;

public class CONIR {
    //https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/
    //BEST SOL
    public int countOdds(int low, int high) {
        return (high + 1) / 2 - low / 2;
    }
    int countOdds3(int low, int high) {
        if(low % 2 == 0 && high % 2 == 0)
            return (high-low)/2;
        return (high-low)/2+1;
    }
    public int countOdds2(int low, int high) {
        if((low&1) == 1 || (high&1) == 1){
            return (high-low)/2 + 1;
        }

        return (high-low)/2;
    }
    //BRUTE-FORCE
    public int countOdds1(int low, int high) {
        int count = 0;
        for(int i = low; i <= high; i++){
            if((i&1) == 1) count++;
        }
        return count;
    }
}
