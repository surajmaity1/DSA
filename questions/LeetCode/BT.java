package LeetCode;

import java.util.Arrays;

public class BT {
    //https://leetcode.com/problems/bag-of-tokens/
    public int bagOfTokensScore(int[] tokens, int power) {
        if(tokens == null || tokens.length == 0) return 0;

        Arrays.sort(tokens);
        int s = 0, e = tokens.length - 1, score = 0, maxScore = 0;

        while(s <= e){
            if(power >= tokens[s]){
                power -= tokens[s++];
                maxScore = Math.max(++score, maxScore);
            }
            else if(score > 0){
                power += tokens[e--];
                score--;
            }
            else{
                break;
            }
        }
        return maxScore;
    }
}
