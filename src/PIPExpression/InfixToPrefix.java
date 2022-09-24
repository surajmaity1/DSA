package PIPExpression;

import java.util.Stack;

public class InfixToPrefix {

    public static void main(String[] args) {
        String expr = "K+L-M*N+(O^P)*W/U/V*T+Q";
        System.out.println(infixToPrefix(expr));
    }

    static String infixToPrefix(String str){

        Stack<Character> operators = new Stack<>();
        Stack<String> operands = new Stack<>();

        int n = str.length();

        for (int i = 0; i < n; i++) {
            char itr = str.charAt(i);

            if (itr == '(')
                operators.push(itr);
            else if ( itr == ')'){
                while (!operators.isEmpty() && operators.peek() != '('){
                    //pick two operands and make it relation
                    operation(operators, operands);
                }

                // pop open parenthesis
                operators.pop();
            }
            else if (!isOperator(itr))
                operands.push(itr+"");
            else{
                while (!operators.empty() &&
                        priorityChecker(itr) <=
                                priorityChecker(operators.peek()))
                {
                    operation(operators, operands);
                }
                operators.push(itr);
            }
        }

        while (!operators.empty()){
            operation(operators, operands);
        }

        return operands.peek();
    }


    static void operation(Stack<Character> operators, Stack<String> operands){
        String operand1 = operands.pop();
        String operand2 = operands.pop();
        char operator = operators.pop();
        operands.push(operator + operand2 + operand1);
    }


    static boolean isOperator(char c){
        return (!(c >= 'a' && c<='z') &&
                !(c >= 'A' && c<='Z') &&
                !(c >= '0' && c<='9')
        );
    }


    static int priorityChecker(char c){
        return switch (c) {
            case '+', '-' -> 1;
            case '*', '/' -> 2;
            case '^' -> 3;
            default -> 0;
        };
    }
}
