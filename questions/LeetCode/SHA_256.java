package LeetCode;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.*;

public class SHA_256 {

    // link - https://www.hackerrank.com/challenges/sha-256/problem?isFullScreen=false
    public static void main(String[] args) throws NoSuchAlgorithmException {
        Scanner input = new Scanner(System.in);
        MessageDigest m = MessageDigest.getInstance("SHA-256");

        m.reset();
        m.update(input.nextLine().getBytes());

        for (byte item: m.digest()) {
            System.out.print(String.format("%02x", item));
        }
        System.out.println();
    }
}
