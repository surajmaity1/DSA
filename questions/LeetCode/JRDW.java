package LeetCode;

import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class JRDW {
    // link - https://www.hackerrank.com/challenges/duplicate-word/problem?isFullScreen=false
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());

        String regex = "\\b(\\w+)(?:\\W+\\1\\b)+";
        Pattern pattern = Pattern.compile(regex, Pattern.CASE_INSENSITIVE);

        while (n-->0) {
            String inputStr = scanner.nextLine();
            Matcher matcher = pattern.matcher(inputStr);

            while (matcher.find()) {
                inputStr = inputStr.replaceAll(matcher.group(), matcher.group(1));
            }
            System.out.println(inputStr);
        }
        scanner.close();
    }
}
