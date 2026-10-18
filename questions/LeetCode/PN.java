package LeetCode;

import java.io.*;
import java.util.*;

class Helper {

    /*
     * Complete the 'getPhoneNumber' function below.
     *
     * The function is expected to return a STRING.
     * The function accepts STRING s as parameter.
     */

    public static String getPhoneNumber(String s) {
        if (s == null || s.isEmpty()) return "";

        StringBuilder sb = new StringBuilder();

        Map<String, Integer> map = new HashMap<>();
        map.put("one", 1);
        map.put("two", 2);
        map.put("three", 3);
        map.put("four", 4);
        map.put("five", 5);
        map.put("six", 6);
        map.put("seven", 7);
        map.put("eight", 8);
        map.put("nine", 9);
        map.put("zero", 0);

        String[] arr = s.split(" ");
        boolean findInc = false;
        int checker = 0;

        for (int index = 0; index < arr.length; index++) {
            String digit = arr[index];

            if (digit.equals("double") || digit.equals("triple")) {
                findInc = true;
                checker = (digit.equals("double")) ? 2 : 3;
            }
            else {
                int number = map.get(digit);
                sb.append(number+"");

                if (findInc) {
                    while(checker--> 1) {
                        sb.append(number+"");
                    }

                    findInc = false;
                    checker = 0;
                }
            }
        }

        return sb.toString();
    }

}

public class PN {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String s = bufferedReader.readLine();

        String result = Helper.getPhoneNumber(s);

        bufferedWriter.write(result);
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}