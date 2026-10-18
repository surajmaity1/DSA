package SB;

import java.util.Scanner;

public class PowerOfANumber {
    //https://youtu.be/fzip9Aml6og?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&t=6210

    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int base = sc.nextInt();
        int power = sc.nextInt();
        int ans = 1;

        while(power>0){
            if((power&1) == 1){
                ans *= base;
            }
            base *= base;
            power >>= 1;
        }

        System.out.print(ans);
    }
}
