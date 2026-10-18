package SB;

public class ReverseWordInSentence {
    /*
            Input: This is my car
            Output: car my is This
            Reverse
     */

    public static void main(String[] args) {
        String a = "This is my car";
        System.out.println(reverseWords(a));
    }
    static String reverseWords(String s) {
        String res = "";
        int i = 0;
        int n = s.length();

        while(i<n){

            while(i < n && s.charAt(i) == ' '){
                i++;
            }
            if(i>=n) break;

            int j = i + 1;

            while(j<n && s.charAt(j) != ' '){
                j++;
            }

            if(res.length() != 0){
                res = s.substring(i,j) + " " + res;
            }
            else{
                res = s.substring(i,j);
            }

            i = j+1;

        }
        return res;
    }
}
