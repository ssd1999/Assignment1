package com.cloud;

import java.util.Random;

public class Shuffle {

	public static void main(String[] args) {
     int inputArry[] = {1, 2, 3, 4, 5, 6, 7};
  
     Random ran = new Random();
     
    for (int i = inputArry.length - 1; i > 0; i--) {
    	 
    	
         // Generate a random index j such that 0 <= j <= i
         int j = ran.nextInt(i + 1);

         // Swap array[i] and array[j]
         int temp = inputArry[i];
         inputArry[i] = inputArry[j];
         inputArry[j] = temp;
     }
     
     for(int x =0; x < inputArry.length;x++) {
    	 System.out.println(inputArry[x] + " ");
     }
     
	}

}
