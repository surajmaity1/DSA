package SB;

public class DecryptString {

    /*
    Input: vmxibkgrlm
    Output: encryption
     */

    public static void main(String[] args) {
        System.out.println(Decrypt("vmxibkgrlm"));
    }
    static String Decrypt(String str){
        if(str == null || str.length() == 0){
            return null;
        }
        char[] arr = str.toCharArray();
        int n = arr.length;
        for (int i = 0; i < n; i++) {
            /*
                int a = arr[i] - 'a';
                int b = 25 - a;
                arr[i] = 'a' + b;
             */
            arr[i] =(char) (97 + (25-((int)arr[i] - 97)));
        }
        return new String(arr);
    }
}
