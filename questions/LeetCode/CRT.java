package LeetCode;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

// link - https://www.hackerrank.com/challenges/java-covariance/problem?isFullScreen=true

class Flower {
    String whatsYourName() {
        return "I have many names and types.";
    }
}

class Jasmine extends Flower {
    @Override
    String whatsYourName() {
        return "Jasmine";
    }
}

class Lotus extends Flower {
    @Override
    String whatsYourName() {
        return "Lotus";
    }
}

class Lily extends Flower {
    @Override
    String whatsYourName() {
        return "Lily";
    }
}

class Region {
    Flower yourNationalFlower() {
        return new Flower();
    }
}

class WestBengal extends Region {
    @Override
    Jasmine yourNationalFlower() {
        return new Jasmine();
    }
}

class AndhraPradesh extends Region {
    @Override
    Lily yourNationalFlower() {
        return new Lily();
    }
}

public class CRT {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        Region region = null;

        String input = br.readLine();
        region = switch (input) {
            case "WestBengal" -> new WestBengal();
            case "AndhraPradesh" -> new AndhraPradesh();
            default -> region;
        };

        Flower flower = region.yourNationalFlower();
        System.out.println(flower.whatsYourName());
        br.close();

    }
}
