package com.cloud;


import java.util.Scanner;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a sentence: ");
        String input = scanner.nextLine().toLowerCase();

        boolean isPangram = checkForPangram(input);

        if (isPangram) {
            System.out.println("The entered sentence is a pangram.");
        } else {
            System.out.println("The entered sentence is not a pangram.");
        }
    }

    public static boolean checkForPangram(String s) {
        // Assuming ASCII values for lowercase letters (a-z) start from 97
        // and end at 122. The array size is set accordingly.
        boolean[] alphabet = new boolean[26];

        for (int i = 0; i < s.length(); i++) {
            char currentChar = s.charAt(i);

            if (currentChar >= 'a' && currentChar <= 'z') {
                alphabet[currentChar - 'a'] = true;
            }
        }

        for (boolean isPresent : alphabet) {
            if (!isPresent) {
                return false;
            }
        }

        return true;
    }
}
