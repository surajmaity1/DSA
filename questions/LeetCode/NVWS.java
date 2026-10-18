package LeetCode;

public class NVWS {
    //https://leetcode.com/problems/number-of-valid-words-in-a-sentence/

    public int countValidWords(String sentence) {
        int n = sentence.length();
        int res = 0;

        int i = 0;
        while(i< n){
            while(i < n && sentence.charAt(i) == ' ') i++;
            if(i >=n) break;

            int j = i + 1;
            while(j < n && sentence.charAt(j) != ' ') j++;

            boolean check = helper(sentence.substring(i, j));
            if(check) res++;
            i = j+1;
        }
        return res;
    }

    public boolean helper(String str){
        int total_ = 0;
        int totalP = 0;
        int n = str.length();
        for(int i = 0; i < n; i++){
            char c = str.charAt(i);
            if(c == '-') {
                if(total_ > 0 || i == 0 ||i == n-1) return false;
                if(isAlpha(str.charAt(i-1)) && isAlpha(str.charAt(i+1)))
                    total_++;
                else{
                    return false;
                }
            }
            else if(c == '!' || c == '.' || c == ','){
                if(totalP >0 || i != n-1) return false;
                totalP++;
            }
            else if (c >= '0' && c <= '9') return false;
        }
        return true;
    }
    public boolean isAlpha(char c){
        return c >= 'a' && c <= 'z';
    }


}
