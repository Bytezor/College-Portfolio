// Louis Yagodich
// CalcPi.java
// 3/2/2022
// Program to print pi of inputted length

import java.util.Scanner;

public class CalcPi {
	
	public static void main(String[] args) {
	//variable definiting
	Scanner input = new Scanner(System.in);
	int max;
	double sum = 0;
	double num1 = 0;
	double num2 = 0;
	System.out.print("Enter a number ");
	max = input.nextInt();
	for (int i = 1; i <= max; i++) {
		num1 = (i*4-3)*(i*4-1);
		num2 = 1/num1;
		sum = sum + num2;
	}
	sum = sum * 8;
	System.out.println("Pi = "+sum);
	}
}