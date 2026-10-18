package LeetCode;

public class TNRBC {
    //https://leetcode.com/contest/biweekly-contest-85/problems/time-needed-to-rearrange-a-binary-string/

    //TODO:NOT COMPLETED
    public static void main(String[] args) {
        System.out.println(secondsToRemoveOccurrences("0110101"));
    }
    static int secondsToRemoveOccurrences(String s) {
        int n = s.length();
        if(n==1){return 0;}

        int minOc = 0;

        char[] arr = s.toCharArray();
        boolean checked;

        do{
            checked = false;
            for(int i = 0; i<n; i++){
                while(i < n-1 && (arr[i] =='0' && arr[i+1] =='1') ){
                    arr[i] ='1';
                    arr[i+1] ='0';
                    checked = true;
                    i += 2;
                }
            }

            if(checked){
                minOc++;
            }
        }while(checked);

        return minOc;
    }
}
