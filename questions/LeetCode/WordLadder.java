package LeetCode;

import java.util.*;

public class WordLadder {


    //https://leetcode.com/problems/word-ladder/
    public static void main(String[] args) {
        String beginWord = "hit", endWord = "cog";
        List<String> wordList = new ArrayList<>();
        wordList.add("hot");
        wordList.add("dot");
        wordList.add("dog");
        wordList.add("lot");
        wordList.add("log");
        wordList.add("cog");
        System.out.println(ladderLength(beginWord, endWord, wordList));
    }


    static int ladderLength(String beginWord, String endWord, List<String> wordList) {
        Set<String> set = new HashSet<>(wordList);
        if(!set.contains(endWord)) return 0;

        Queue<String> queue = new LinkedList<>();
        queue.add(beginWord);

        Set<String> visited = new HashSet<>();
        queue.add(beginWord);

        int changes = 1;

        while(!queue.isEmpty()){
            int size = queue.size();
            for(int i = 0; i < size; i++){
                String word = queue.poll();
                if(word.equals(endWord)) return changes;

                for(int j = 0; j < word.length(); j++){
                    for(int k = 'a'; k <= 'z'; k++){
                        char arr[] = word.toCharArray();
                        arr[j] = (char) k;

                        String str = new String(arr);
                        if(set.contains(str) && !visited.contains(str)){
                            queue.add(str);
                            visited.add(str);
                        }
                    }
                }
            }
            ++changes;
        }
        return 0;
    }

    static int ladderLength2(String beginWord, String endWord, List<String> wordList){
        Set myset = new HashSet(wordList);


        if(!myset.contains(endWord)) return 0;

        Queue<String> q = new LinkedList<>();
        q.add(beginWord);
        int depth = 0;

        while(!q.isEmpty())
        {
            depth+=1;
            int lsize = q.size();   //No of elements at a level
            while(lsize-- > 0)
            {
                String curr = q.poll();
                //check for all possible 1 depth words
                for(int i=0;i<curr.length();++i)  //For each index
                {
                    StringBuilder temp1 = new StringBuilder(curr);
                    for(char c='a';c<='z';++c)  //Try all possible chars
                    {
                        temp1.setCharAt(i, c);
                        String temp = temp1.toString();

                        if(curr.compareTo(temp) == 0)
                            continue;   //Skip the same word
                        if(temp.compareTo(endWord) == 0)
                            return depth+1; //endWord found
                        if(myset.contains(temp))
                        {
                            q.add(temp);
                            myset.remove(temp);
                        }
                    }
                }
            }
        }
        return 0;
    }

}
