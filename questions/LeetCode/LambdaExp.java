package LeetCode;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

interface PerformOperation {
    boolean check(int number);
}

class OperationLambda {
    public static boolean checker(PerformOperation performOperation, int number) {
        return performOperation.check(number);
    }

    PerformOperation isOdd() {
        PerformOperation performOperation =
                (int number) -> number % 2 != 0;
        return performOperation;
    }

    PerformOperation isPrime() {
        PerformOperation performOperation =
                (int number) -> {
                    if (number == 1) return true;
                    for (int i = 2; i < Math.sqrt(number); i++) {
                        if (number % i == 0) return false;
                    }
                    return true;
                };

        return performOperation;
    }
    PerformOperation isPalindrome() {
        PerformOperation performOperation =
                (int number) -> {
                    int made = 0;
                    int operationNumber = number;
                    while(operationNumber > 0) {
                        int rem = operationNumber%10;
                        made = made * 10 + rem;
                        operationNumber /= 10;
                    }
                    return  made == number;
                };


        return performOperation;
    }
}

public class LambdaExp {
    public static void main(String[] args) throws IOException {
        OperationLambda operationLambda = new OperationLambda();
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        PerformOperation performOperation;
        String answer = null;

        int T = Integer.parseInt(br.readLine());

        while (T-- > 0) {
            String str = br.readLine().trim();
            StringTokenizer stringTokenizer = new StringTokenizer(str);

            int choice = Integer.parseInt(stringTokenizer.nextToken());
            int number = Integer.parseInt(stringTokenizer.nextToken());

            switch (choice) {
                case 1: {
                    performOperation = operationLambda.isOdd();
                    answer = (OperationLambda.checker(performOperation, number)) ? "ODD": "EVEN";
                }
                break;
                case 2: {
                    performOperation = operationLambda.isPrime();
                    answer = (OperationLambda.checker(performOperation, number)) ? "PRIME": "COMPOSITE";
                }
                break;
                case 3: {
                    performOperation = operationLambda.isPalindrome();
                    answer = (OperationLambda.checker(performOperation, number)) ? "PALINDROME": "NOT PALINDROME";
                }
                break;
                default: {
                    answer = null;
                }
            }
            System.out.println(answer);
        }

        br.close();
    }
}
