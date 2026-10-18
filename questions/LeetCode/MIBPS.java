package LeetCode;
/*
    Explanation:


        res represents the number of left/right parentheses already added.
        right represents the number of right parentheses needed.

        1) case )
        If we meet a right parentheses , right--.
        If right < 0, we need to add a left parentheses before it.
        Then we update right += 2 and res++
        This part is easy and normal.

        2) case (
        If we meet a left parentheses,
        we check if we have odd number ')' before.
        If we right, we have odd ')' before,
        but we want right parentheses in pairs.
        So add one ')' here, then update right--; res++;.
        Note that this part is not necessary if two consecutive right parenthesis not required.

        Because we have ), we update right += 2.
         */
public class MIBPS {
    // https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/description/
    public int minInsertions(String s) {
        int res = 0, right = 0;
        for (int i = 0; i < s.length(); ++i) {
            if (s.charAt(i) == '(') {
                if (right % 2 > 0) {
                    right--;
                    res++;
                }
                right += 2;
            } else {
                right--;
                if (right < 0) {
                    right += 2;
                    res++;
                }
            }
        }
        return right + res;
    }
}
