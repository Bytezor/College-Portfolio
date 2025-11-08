// Louis Yagodich
// SumSquares.java
// 3/2/2022
// Program to find the sum of inputted numbers squared

import java.util.Scanner;

public class SumSquares {
	
	public static void main(String[] args) {
		//variable definiting
		Scanner input = new Scanner(System.in);
		int num;
		int count = 2;
		double sum = 0;
		System.out.print("Insert a positive and even number.. ");
		num = input.nextInt();
		
		//loop for invlid numbers
		while (num % 2 != 0 || num <= 0){
			System.out.print("Invalid number, input a positive and even number.. ");
			num = input.nextInt();
		}
		
		//loop for valid number
		while (count <= num){
			sum = sum + Math.pow(count, 2);
			count = count + 2;
		}
		
		System.out.println("\nThe sum of is "+sum);
	}
}