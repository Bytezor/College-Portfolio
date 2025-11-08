// Louis Yagodich
// Rental.java
// 3/2/2022
// Program to calculate the price of rental cars

import java.util.Scanner;

public class Rental {
	
	public static void main(String[] args) {
		//variable defining
		Scanner input = new Scanner(System.in);
		String type;
		int days;
		int miles;
		String YN;
		
		//selecting type of car
		System.out.println("Input the class of car rented or an abbreviations:");
		System.out.printf("Class\t\tAbbreviation\n");
		System.out.printf("Compact\t\tC\n");
		System.out.printf("Midsize\t\tM\n");
		//for Truck/SUV I added S as a potential abbreviation in case someone rented a SUV and inputted SUV for the scanner
		System.out.printf("Truck/SUV\tT/S\n");
		System.out.printf("Other\t\tO\n");
		type = input.nextLine();
		type = type.toUpperCase();
		char ctype = type.charAt(0);
		
		//handling for invalid input
		while(!((ctype == 'C') || (ctype == 'M') || (ctype == 'T') || (ctype == 'S') || (ctype == 'O'))) {
			System.out.print("Invalid input, please enter any of the above classes.. ");
			type = input.nextLine();
			type = type.toUpperCase();
			ctype = type.charAt(0);
		}
		
		//inputting days rented
		System.out.println("Input the number of days rented.. ");
		days = input.nextInt();
		//inputting miles traveled
		System.out.println("Input the number miles driven.. ");
		miles = input.nextInt();
		
		//inputting concessions
		System.out.printf("Do you qualify for concession? Input Y or N for Yes or No.. ");
		YN = input.nextLine();
		YN = input.nextLine();
		YN = YN.toUpperCase();
		char cYN = YN.charAt(0);
		
		//handling for invalid input
		while(!((cYN == 'Y') || (cYN == 'N'))) {
			System.out.printf("Invalid input, enter Y or N for Yes or No.. ");
			YN = input.nextLine();
			YN = YN.toUpperCase();
			cYN = YN.charAt(0);
		}
		
		//calculating price
		switch (ctype) {
			case 'C':
				if (days > 3) {
					if (cYN == 'Y') {
						final double cost = ((60*days) + (0.1*miles)) * 0.95;
						System.out.printf("Your total cost is $"+"%.2f", cost);
					}
					else {
						final double cost = (60*days) + (0.1*miles);
						System.out.printf("Your total cost is $"+"%.2f", cost);
					}
				}
				else {
					if (cYN == 'Y') {
						final double cost = (150 + (0.1*miles)) * 0.95;
						System.out.printf("Your total cost is $"+"%.2f", cost);
					}
					else {
						final double cost = 150 + (0.1*miles);
						System.out.printf("Your total cost is $"+"%.2f", cost);
					}
				}
				break;
			case 'M':
				if (days > 3) {
					if (cYN == 'Y') {
						final double cost =((70*days) + (0.15*miles)) * 0.95;
						System.out.printf("Your total cost is $"+"%.2f", cost);
					}
					else {
						final double cost = (70*days) + (0.15*miles);
						System.out.printf("Your total cost is $"+"%.2f", cost);
					}
				}
				else {
					if (cYN == 'Y') {
						final double cost = (180 + (0.15 * miles)) * 0.95;
						System.out.printf("Your total cost is $"+"%.2f", cost);
					}
					else {
						final double cost = 180 + (0.15 * miles);
						System.out.printf("Your total cost is $"+"%.2f", cost);
					}
				}
				break;
			case 'T','S':
				if (days > 2) {
					if (cYN == 'Y') {
						final double cost =((80*days) + (0.2*miles)) * 0.95;
						System.out.printf("Your total cost is $"+"%.2f", cost);
					}
					else {
						final double cost = (80*days) + (0.2*miles);
						System.out.printf("Your total cost is $"+"%.2f", cost);
					}
				}
				else {
					if (cYN == 'Y') {
						final double cost = (140 + (0.2 * miles)) * 0.95;
						System.out.printf("Your total cost is $"+"%.2f", cost);
					}
					else {
						final double cost = 140 + (0.2 * miles);
						System.out.printf("Your total cost is $"+"%.2f", cost);
					}
				}
				break;
			case 'O':
				if (days > 2) {
					if (cYN == 'Y') {
						final double cost =((120*days) + (0.25*miles)) * 0.95;
						System.out.printf("Your total cost is $"+"%.2f", cost);
					}
					else {
						final double cost = (120*days) + (0.25*miles);
						System.out.printf("Your total cost is $"+"%.2f", cost);
					}
				}
				else {
					if (cYN == 'Y') {
						final double cost = (200 + (0.25 * miles)) * 0.95;
						System.out.printf("Your total cost is $"+"%.2f", cost);
					}
					else {
						final double cost = 200 + (0.25 * miles);
						System.out.printf("Your total cost is $"+"%.2f", cost);
					}
				}
				break;
			
		}
	}
}
		
		