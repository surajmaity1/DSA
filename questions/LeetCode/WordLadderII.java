package LeetCode;

import java.util.*;

public class WordLadderII {
    //https://leetcode.com/problems/word-ladder-ii/


    public List<List<String>> findLadders(String beginWord, String endWord, List<String> wordList) {
        List<List<String>> ans = new ArrayList<>();
        Map<String, Set<String>> reverse = new HashMap<>(); // reverse graph start from endWord
        Set<String> wordSet = new HashSet<>(wordList); // remove the duplicate words
        wordSet.remove(beginWord); // remove the first word to avoid cycle path
        Queue<String> queue = new LinkedList<>(); // store current layer nodes
        queue.add(beginWord); // first layer has only beginWord
        Set<String> nextLevel = new HashSet<>(); // store nextLayer nodes
        boolean findEnd = false; // find endWord flag
        while (!queue.isEmpty()) { // traverse current layer nodes
            String word = queue.remove();
            for (String next : wordSet) {
                if (isLadder(word, next)) { // is ladder words
                    // construct the reverse graph from endWord
                    Set<String> reverseLadders = reverse.computeIfAbsent(next, k -> new HashSet<>());
                    reverseLadders.add(word);
                    if (endWord.equals(next)) {
                        findEnd = true;
                    }
                    nextLevel.add(next); // store next layer nodes
                }
            }
            if (queue.isEmpty()) { // when current layer is all visited
                if (findEnd) break; // if find the endWord, then break the while loop
                queue.addAll(nextLevel); // add next layer nodes to queue
                wordSet.removeAll(nextLevel); // remove all next layer nodes in wordSet
                nextLevel.clear();
            }
        }
        if (!findEnd) return ans; // if can't reach endWord from startWord, then return ans.
        Set<String> path = new LinkedHashSet<>();
        path.add(endWord);
        // traverse reverse graph from endWord to beginWord
        findPath(endWord, beginWord, reverse, ans, path);
        return ans;
    }


    private void findPath(String endWord, String beginWord, Map<String, Set<String>> graph,
                          List<List<String>> ans, Set<String> path) {
        Set<String> next = graph.get(endWord);
        if (next == null) return;
        for (String word : next) {
            path.add(word);
            if (beginWord.equals(word)) {
                List<String> shortestPath = new ArrayList<>(path);
                Collections.reverse(shortestPath); // reverse words in shortest path
                ans.add(shortestPath); // add the shortest path to ans.
            } else {
                findPath(word, beginWord, graph, ans, path);
            }
            path.remove(word);
        }
    }

    private boolean isLadder(String s, String t) {
        if (s.length() != t.length()) return false;
        int diffCount = 0;
        int n = s.length();
        for (int i = 0; i < n; i++) {
            if (s.charAt(i) != t.charAt(i)) diffCount++;
            if (diffCount > 1) return false;
        }
        return diffCount == 1;
    }


    public List<List<String>> findLadders2(String beginWord, String endWord, List<String> wordList) {
        Set<String> set = new HashSet<>(wordList);
        Map<String, Integer> dist = new HashMap();
        List<List<String>> res = new ArrayList<>();
        short_path(set, dist,beginWord,endWord);

        if (dist.get(endWord) == null)
            return res;

        List<String> path = new ArrayList<>();
        path.add(endWord);
        dfs(endWord, path, dist,res,beginWord);
        return res;

    }

    public void short_path(Set<String> set, Map<String, Integer> dist,String beginWord, String endWord) {
        Queue<String> q = new LinkedList();
        q.offer(beginWord);
        dist.put(beginWord, 0);
        while(q.size() > 0) {
            String cur = q.poll();
            if (cur.equals(endWord) ) break;
            char[] charCur = cur.toCharArray();
            for (int i = 0; i < cur.length(); i++) {
                char c = charCur[i];
                for (char j = 'a'; j <= 'z'; j++) {
                    charCur[i] = j;
                    String s = new String(charCur);
                    if (set.contains(s) && dist.get(s) == null) {
                        dist.put(s, dist.get(cur) + 1);
                        q.offer(s);
                    }

                }
                charCur[i] = c;
            }
        }
    }

    public void dfs(String word, List<String> path,  Map<String, Integer> dist, List<List<String>> res, String beginWord) {
        if (word.equals(beginWord)) {
            List list = new ArrayList(path);
            Collections.reverse(list);
            res.add(list);
            return;
        }
        char[] charCur = word.toCharArray();
        for (int i = 0; i < word.length(); i++) {
            char c = charCur[i];
            for (char j = 'a'; j <= 'z'; j++) {
                charCur[i] = j;
                String s = new String(charCur);
                if (dist.get(s) != null && dist.get(s) + 1 == dist.get(word)) {
                    path.add(s);
                    dfs(s, path, dist,res,beginWord);
                    path.remove(path.size() - 1);
                }

            }
            charCur[i] = c;
        }
    }
}
