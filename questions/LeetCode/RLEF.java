package LeetCode;

public class RLEF {
    //https://leetcode.com/problems/remove-letter-to-equalize-frequency/description/
    //2423. Remove Letter To Equalize Frequency
    public static void main(String[] args) {
        String str = "abcc";
        System.out.println(equalFrequency(str));

    }
    static boolean equalFrequency(String word) {
        if (word == null || word.length() == 0) return false;

        int[] freq = new int[26];
        for(char c : word.toCharArray()) freq[c-'a']++;

        for (int i = 0; i < 26; i++) {
            freq[i]--;
            if (isEqual(freq)) return true;
            freq[i]++;
        }
        return false;
    }
    static boolean isEqual(int[] a){
        int lastCount = 0;
        for(int frequency : a){
            if (frequency == 0) continue;
            if (lastCount != 0 && frequency != lastCount) return false;
            lastCount = frequency;
        }
        return true;
    }
}
