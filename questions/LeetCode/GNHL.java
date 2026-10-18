package LeetCode;

public class GNHL {
    //374. Guess Number Higher or Lower
    //https://leetcode.com/problems/guess-number-higher-or-lower/description/
    //using ternary search
    int pick;
    public int guessNumber1(int n) {
        int s = 1;
        int e = n;

        while (s <= e){
            int cal = (e -s)/3;
            int mid1 = s + cal;
            int mid2 = e - cal;

            int res1 = guess(mid1);
            int res2 = guess(mid2);

            if (res1 == 0) return mid1;
            else if (res2 == 0) return mid2;
            else if (res1 < 0) e = mid1 - 1;
            else if (res2 > 0) s = mid2 + 1;

            else {
                s = mid1 + 1;
                e = mid2 - 1;
            }
        }

        return -1;
    }

    //using binary search
    public int guessNumber2(int n) {
        int s = 1;
        int e = n;

        while(s <= e){
            int m = s + (e-s)/2;
            int g = guess(m);

            if(g == 1){
                s = m + 1;
            }
            else if(g == -1){
                e = m-1;
            }
            else{
                return m;
            }
        }

        return -1;
    }
    public int guess(int num){
        if (pick == num) return 0;
        else if (pick > num) return 1;
        return -1;
    }
}
