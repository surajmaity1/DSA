package SB;

import java.util.Scanner;

public class Pattern {


    /*

     *
     * *
     * * *
     * * * *
     * * * * *

     */
    static void pattern1(int n){
        for(int i = 1; i<=n;i++){
            for(int j = 1; j<=i;j++){
                System.out.print("* ");
            }
            System.out.println();
        }
    }

    /*
    1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5

    */
    static void pattern2(int n){
        for(int i = 1; i<=n;i++){
            for(int j = 1; j<=i;j++){
                System.out.print(j +" ");
            }
            System.out.println();
        }
    }

    /*
    A
    B B
    C C C
    D D D D
    E E E E E

    */
    static void pattern3(int n){
        for(int i = 1; i<=n;i++){
            for(int j = 1; j<=i;j++){
                System.out.print((char)(i+64));
            }
            System.out.println();
        }
    }

    /*

     * * * * *
     * * * *
     * * *
     * *
     *

     */

    static void pattern4(int n){
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n-i+1; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }

    /*

    1 2 3 4 5
    1 2 3 4
    1 2 3
    1 2
    1

     */

    static void pattern5(int n){
        for(int i = n; i>=1;i--){
            for(int j = 1; j<=i;j++){
                System.out.print(j+" ");
            }
            System.out.println();
        }
    }

    /*

             *
           * * *
         * * * * *
       * * * * * * *
     * * * * * * * * *

     */

    static void pattern6(int n){
        for (int i = 1; i <= n; i++) {
            for(int k = 2*n ; k>2*i;k--){
                System.out.print(" ");
            }

            for (int j = 1; j <=2*i-1; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }

    /*

            1
          2 3 2
        3 4 5 4 3
      4 5 6 7 6 5 4
    5 6 7 8 9 8 7 6 5

     */
    static void pattern7(int n){
        for (int row = 1; row <= n; row++) {


        }


    }

    /*

    *
    * *
    * * *
    * * * *
    * * *
    * *
    *

     */

    static void pattern8(int n){
        for (int row = 0; row <2*n; row++) {
            int totalColsInRow = row > n ? 2*n-row : row;
            for (int col = 0; col < totalColsInRow; col++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }

    /*

        *
       * *
      * * *
     * * * *
      * * *
       * *
        *

     */
    static void pattern9(int n) {
        for (int row = 1; row < 2 * n; row++) {

            int totalColNos = row > n ? 2*n - row : row;
            int totalSpaceNo = n - row;
            totalSpaceNo = (totalSpaceNo < 0) ? totalSpaceNo*-1 : totalSpaceNo;

            for (int space = 1; space <= totalSpaceNo; space++) {
                System.out.print(" ");
            }

            for (int col = 1; col <= totalColNos; col++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }

    /*

            1
          2 1 2
        3 2 1 2 3
      4 3 2 1 2 3 4
    5 4 3 2 1 2 3 4 5

     */
    static void pattern10(int n){
        for (int row = 1; row <= n; row++) {

            for (int space = n-row; space >= 1; space--) {
                System.out.print("  ");
            }

            for (int firstHalf = row; firstHalf >= 1; firstHalf--) {
                System.out.print(firstHalf + " ");
            }
            for (int secondHalf = 2; secondHalf <= row; secondHalf++) {
                System.out.print(secondHalf + " ");
            }
            System.out.println();
        }

    }

    /*

            1
          2 1 2
        3 2 1 2 3
      4 3 2 1 2 3 4
    5 4 3 2 1 2 3 4 5
      4 3 2 1 2 3 4
        3 2 1 2 3
          2 1 2
            1


     */
    static void pattern11(int n){
        for (int row = 1; row <= 2 * n; row++) {
            int col = row > n ? 2*n-row : row;
            for (int space = 0; space < n - col; space++) {
                System.out.print("  ");
            }
            for (int c = col; c >= 1; c--) {
                System.out.print(c +" ");
            }
            for (int c = 2; c <= col; c++) {
                System.out.print(c + " ");
            }
            System.out.println();
        }
    }

    /*

    3 3 3 3 3 3 3
    3 2 2 2 2 2 3
    3 2 1 1 1 2 3
    3 2 1 0 1 2 3
    3 2 1 1 1 2 3
    3 2 2 2 2 2 3
    3 3 3 3 3 3 3

     */

    static void pattern12(int n){
        int originalN = n;
        n *= 2;
        for (int row = 0; row <=n; row++) {
            for (int col = 0; col <= n; col++) {
                int atEveryIndex = originalN - Math.min(Math.min(row,col), Math.min(n-row, n-col));
                System.out.print(atEveryIndex + " ");
            }
            System.out.println();
        }
    }

    /*

            1
          2 3 2
        3 4 5 4 3
      4 5 6 7 6 5 4
    5 6 7 8 9 8 7 6 5


     */
    static void pattern13(int n) {
        for (int row = 1; row <= n; row++) {
            for (int space = 1; space <= n - row; space++) {
                System.out.print("  ");
            }

            int val = row;
            for (int firstHalf = 1; firstHalf <= row; firstHalf++) {
                System.out.print(val++ + " ");
            }

            val -= 2;
            for (int secondHalf = 1; secondHalf < row; secondHalf++) {
                System.out.print(val-- + " ");
            }


            System.out.println();
        }
    }

    /*

     * * * * * * * * *
       * * * * * * *
         * * * * *
          * * *
            *


     */
    private static void pattern14(int n) {
        for (int row = n; row >= 1; row--) {
            for (int s = row; s < n; s++) {
                System.out.print("  ");
            }
            for (int col = 2 * row - 1; col >= 1; col--) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }

    /*

         1
        1 1
       1 2 1
      1 3 3 1
     1 4 6 4 1


     */

    static void pattern15(int n) {
        int number = 1;
        for (int i = 0; i < n; i++) {
            for (int s = 1; s <= n-i; s++) {
                System.out.print(" ");
            }

            number = 1;
            for (int j = 0; j <= i; j++) {
                System.out.print(number + " ");
                number = number * (i-j)/(j+1);
            }
            System.out.println();

        }
    }

    /*

    1
    2 3
    4 5 6
    7 8 9 10

     */

    static void pattern16(int n) {
        int number = 1;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j <= i; j++) {
                System.out.print(number++ + " ");
            }
            System.out.println();
        }
    }
    /*

     * * * * *
     * * * * *
     * * * * *

     */

    static void pattern17(int row, int col) {

        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }


    /*

     * * * * *
     *       *
     * * * * *

     */

    static void pattern18(int row, int col) {

        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                if ( i== 0 || i == row-1 || j==0 || j == col - 1){
                    System.out.print("* ");
                }
                else {
                    System.out.print("  ");
                }
            }
            System.out.println();
        }
    }
    /*

     * * * * * *
     *       *
     *     *
     *   *
     * *
     *

     */

    static void pattern19(int n) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n - i; j++) {
                if (i == 0 || i == n - 1 || j == 0 || j == n-i-1){
                    System.out.print("* ");
                }
                else{
                    System.out.print("  ");
                }
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        pattern15(n);
    }





}
