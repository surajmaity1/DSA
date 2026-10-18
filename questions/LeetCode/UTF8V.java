package LeetCode;

public class UTF8V {
    //https://leetcode.com/problems/utf-8-validation/
    public boolean validUtf8(int[] data) {
        int nrb = 0;
        for (int val : data) {
            if (nrb == 0) {
                if ((val >> 5) == 0b110) nrb = 1;           // no. of bytes 2
                else if ((val >> 4) == 0b1110) nrb = 2;     // no. of bytes 3
                else if ((val >> 3) == 0b11110) nrb = 3;    // no. of bytes 4
                else if ((val >> 7) != 0b0) return false;   // no. of bytes 1
            } else {
                if ((val >> 6) != 0b10) return false;
                nrb--;
            }
        }
        return nrb == 0;
    }
}
