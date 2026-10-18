package LeetCode;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Scanner;

public class MD_5 {
    public static void main(String[] args) throws NoSuchAlgorithmException {
        Scanner input = new Scanner(System.in);
        MessageDigest m = MessageDigest.getInstance("MD5");

        m.reset();
        m.update(input.nextLine().getBytes());

        for (byte item: m.digest()) {
            System.out.print(String.format("%02x", item));
        }
        System.out.println();
    }

}
