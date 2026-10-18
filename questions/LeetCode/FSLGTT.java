package LeetCode;

public class FSLGTT {

    // https://leetcode.com/problems/find-smallest-letter-greater-than-target/

    public char nextGreatestLetter(char[] letters, char target) {
        int s = 0;
        int n = letters.length;
        int e = n - 1;

        while (s <= e) {
            int m = s + (e - s) / 2;
            if (letters[m] > target) e = m - 1;
            else s = m + 1;
        }

        return letters[s % n];
    }
}
