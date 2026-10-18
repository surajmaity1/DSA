package LeetCode;

public class VP {
    public boolean isPalindrome(String s) {
        int t = s.length() - 1;
        if (t < 0) return true;

        int h = 0;
        char sc, ec;

        while (h <= t) {
            sc = s.charAt(h);
            ec = s.charAt(t);

            if (!Character.isLetterOrDigit(sc)) h++;
            else if (!Character.isLetterOrDigit(ec)) t--;
            else {
                if (Character.toLowerCase(sc)!= Character.toLowerCase(ec)) return false;
                h++;
                t--;
            }
        }
        return true;
    }
}
