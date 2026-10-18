package SB;

import java.util.Scanner;

public class Swap2Nums {
    int a, b;
    void swap(Swap2Nums p1){
        int temp = p1.a;
        p1.a = p1.b;
        p1.b = temp;
    }
    public static void main(String[] args) {
        Swap2Nums p1 = new Swap2Nums();
        Scanner sc = new Scanner(System.in);
        p1.a = sc.nextInt();
        p1.b = sc.nextInt();
        System.out.println(p1.a + " "+ p1.b);
        p1.swap(p1);
        System.out.println(p1.a + " "+ p1.b);
    }
}
