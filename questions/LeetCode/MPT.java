package LeetCode;

import java.util.ArrayList;
import java.util.List;
import java.util.PriorityQueue;

public class MPT {
    //https://leetcode.com/problems/maximum-performance-of-a-team/
    static int maxPerformance(int n, int[] speed, int[] efficiency, int k) {
        long maxPerformance = 0;
        long teamSpeed = 0;
        List<Engineer> engineers = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            engineers.add(new Engineer(speed[i], efficiency[i]));
        }
        engineers.sort((a,b) -> b.efficiency - a.efficiency);
        PriorityQueue<Engineer> currentTeam = new PriorityQueue<>((a,b) -> a.speed - b.speed);

        for(Engineer newEngineer : engineers ){
            if (currentTeam.size() == k){
                Engineer slowEngineer = currentTeam.poll();
                teamSpeed -= slowEngineer.speed;
            }
            currentTeam.add(newEngineer);
            teamSpeed += newEngineer.speed;
            long performanceWithNewEngineer = teamSpeed * (long) newEngineer.efficiency;
            maxPerformance = Math.max(performanceWithNewEngineer, maxPerformance);
        }
        return (int) (maxPerformance % 1000000007);
    }
    static class Engineer{
        int speed;
        int efficiency;
        public Engineer(int speed, int efficiency){
            this.speed = speed;
            this.efficiency = efficiency;
        }
    }
    public static void main(String[] args) {
        int n = 6;
        int[] speed = {2,10,3,1,5,8};
        int[] efficiency = {5,4,3,9,7,2};
        int k = 2;
        System.out.println(maxPerformance(n,speed, efficiency,k));
    }

}
