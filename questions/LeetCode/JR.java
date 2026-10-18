package LeetCode;

import java.util.Scanner;

class CustomRegexOne {
    public String pattern = "((\\d|\\d\\d|[0-1]\\d\\d|2[0-4][0-9]|25[0-5])\\.){3}(\\d|\\d\\d|[0-1]\\d\\d|2[0-4][0-9]|25[0-5])";
}
public class JR {
    // link - https://www.hackerrank.com/challenges/java-regex/problem?isFullScreen=false
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (scanner.hasNext()) {
            String ip_address = scanner.next();
            System.out.println(ip_address.matches(new CustomRegexOne().pattern));
        }
        scanner.close();
    }
}
