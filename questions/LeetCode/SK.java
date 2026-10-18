package LeetCode;

import java.util.LinkedList;
import java.util.Queue;

public class SK {
    //Steps by Knight

    //https://practice.geeksforgeeks.org/problems/steps-by-knight5927/1


    static class Solution
    {
        static class Pair{
            int first;
            int second;
            public Pair(int first,int second){
                this.first=first;
                this.second=second;
            }
        }

        //Function to find out minimum steps Knight needs to reach target position.
        public int minStepToReachTarget(int KnightPos[], int TargetPos[], int N)
        {
            // Code here
            int x1=KnightPos[0];
            int y1=KnightPos[1];
            int x2=TargetPos[0];
            int y2=TargetPos[1];
            if(x1==x2 && y1==y2)return 0;
            int arr[][]=new int[N][N];
            for(int i=0;i<N;i++){
                for(int j=0;j<N;j++){
                    arr[i][j]=0;
                }
            }
            Queue<Pair> q=new LinkedList<>();
            q.add(new Pair(x1 - 1, y1 - 1));

            while(!q.isEmpty()){
                Pair cur=q.peek();
                int i=cur.first;
                int j=cur.second;
                q.remove();

                if((i+1)>=0 && (i+1)<N && (j+2)>=0 && (j+2)<N && arr[i+1][j+2]==0){
                    arr[i+1][j+2]=arr[i][j]+1;
                    q.add(new Pair(i + 1, j + 2));
                }
                if((i-1)>=0 && (i-1)<N && (j+2)>=0 && (j+2)<N && arr[i-1][j+2]==0){
                    arr[i-1][j+2]=arr[i][j]+1;
                    q.add(new Pair(i - 1, j + 2));
                }
                if((i+1)>=0 && (i+1)<N && (j-2)>=0 && (j-2)<N && arr[i+1][j-2]==0){
                    arr[i+1][j-2]=arr[i][j]+1;
                    q.add(new Pair(i + 1, j - 2));
                }
                if((i-1)>=0 && (i-1)<N && (j-2)>=0 && (j-2)<N && arr[i-1][j-2]==0){
                    arr[i-1][j-2]=arr[i][j]+1;
                    q.add(new Pair(i - 1, j - 2));
                }
                if((i+2)>=0 && (i+2)<N && (j+1)>=0 && (j+1)<N && arr[i+2][j+1]==0){
                    arr[i+2][j+1]=arr[i][j]+1;
                    q.add(new Pair(i + 2, j + 1));
                }
                if((i-2)>=0 && (i-2)<N && (j-1)>=0 && (j-1)<N && arr[i-2][j-1]==0){
                    arr[i-2][j-1]=arr[i][j]+1;
                    q.add(new Pair(i - 2, j - 1));
                }
                if((i+2)>=0 && (i+2)<N && (j-1)>=0 && (j-1)<N && arr[i+2][j-1]==0){
                    arr[i+2][j-1]=arr[i][j]+1;
                    q.add(new Pair(i + 2, j - 1));
                }
                if((i-2)>=0 && (i-2)<N && (j+1)>=0 && (j+1)<N && arr[i-2][j+1]==0){
                    arr[i-2][j+1]=arr[i][j]+1;
                    q.add(new Pair(i - 2, j + 1));
                }
            }
            return arr[x2-1][y2-1];
        }
    }
}
