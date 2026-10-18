package LeetCode;

public class FUCS {
    //https://leetcode.com/problems/first-unique-character-in-a-string/

    public int firstUniqChar(String s) {
        int[] arr = new int[26];
        int l = s.length();
        for(int i = 0; i < l; i++){
            arr[s.charAt(i) - 97]++;
        }

        for(int i = 0; i < l; i++){
            if(arr[s.charAt(i) - 97] == 1){
                return i;
            }
        }
        return -1;
    }

    public int firstUniqChar2(String s) {
        int n = s.length();
        boolean checked = false;
        for(int i = 0; i<n; i++){
            checked = false;
            for(int j = 0; j<n; j++){


                if(i!=j){
                    if(s.charAt(i) == s.charAt(j)){
                        checked = true;
                        break;
                    }
                }
            }

            if(!checked){
                return i;
            }
        }

        return -1;
    }
}
