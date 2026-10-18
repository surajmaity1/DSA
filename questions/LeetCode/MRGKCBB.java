package LeetCode;

public class MRGKCBB {
    //https://leetcode.com/contest/biweekly-contest-85/problems/minimum-recolors-to-get-k-consecutive-black-blocks/


    //TODO:NOT COMPLETED
    public int minimumRecolors(String blocks, int k) {
        char[] arr = blocks.toCharArray();
        int d = 0;

        int n = arr.length;
        for(int i = 0; i<n;i++){
            if(i>0 && arr[i-1] == 'B' && arr[i] == 'B'){
                d++;
            }
        }

        if(d>=k){return 0;}
        int op = Integer.MAX_VALUE;

        for(int i = 0; i<n;i++){
            int count = 0;
            int loop = (i+k);

            if((k+i) >n){
                loop = n;
            }

            for(int j = i; j<loop;j++){
                if(arr[j] == 'B'){
                    count++;
                }
            }
            op = Math.min(count, op);

        }
        return op;
    }
}
