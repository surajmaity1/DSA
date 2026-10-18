package LeetCode;

public class PO {
    //https://leetcode.com/problems/plus-one/
    public int[] plusOne(int[] digits) {
        if(digits == null || digits.length == 0){
            return digits;
        }

        int n = digits.length;

        for(int i = n-1; i >= 0 ; i--){
            if(digits[i] < 9){
                digits[i]++;
                return digits;
            }

            digits[i] = 0;
        }

        int[] modifiedDigits = new int[n+1];
        modifiedDigits[0] = 1;

        return modifiedDigits;
    }
}
