package SB;

public class ROWS {
    //REVERSE ONLY WORDS IN A STRING

    /*
            Input: the boy ran
            Output: eht yob nar
            Reverse
     */
    public static void main(String[] args) {
        String str = "the boy ran";
        System.out.println(InverseWordsInSameOrder(str));
    }
    static String InverseWordsInSameOrder(String str){
        if(str == null || str.length() == 0){
            return null;
        }
        int n = str.length();
        String res = "";
        int i = 0;
        while (i<n){
            while (i< n && str.charAt(i) == ' '){
                res += " ";
                i++;
            }
            int j = i + 1;
            while (j < n && str.charAt(j) != ' '){
                j++;
            }
            if(j <= n && i < n){
                res += reverse(str.substring(i,j));
            }
            i=j;
        }

        return res;
    }
    static String reverse(String str){

        char[] arr = str.toCharArray();
        int n = arr.length;

        for (int i = 0; i < n/2; i++) {
            char temp = arr[i];
            arr[i] = arr[n-i-1];
            arr[n-i-1] = temp;
        }
        return new String(arr);
    }
}
