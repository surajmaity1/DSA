package org.surajmyt.BinarySearch;

import java.util.Scanner;

public class SQRT {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int number = sc.nextInt();

        // power calculation using binary search
        System.out.println(mySqrt(number));
    }

    static int mySqrt(int x) {
        if(x==0 || x== 1){return x;}

        int start = 1;
        int end = x;
        int ans = -1;

        while(start <= end){
            int mid = (start + ((end - start)/2));

            if(mid > x/mid){
                end = mid - 1;
            }
            else if(mid < x/mid){
                start = mid + 1;
                ans = mid;
            }
            else{
                return mid;
            }
        }
        return ans;
    }
}
