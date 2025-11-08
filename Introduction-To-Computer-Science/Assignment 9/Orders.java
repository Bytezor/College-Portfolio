// Louis Yagodich
// Orders.java
// 3/2/2022
// Program to input orders under a conditional loop

import java.util.Scanner;

public class Orders {
	
	public static void main(String[] args) {
	//variable defining
	Scanner input = new Scanner(System.in);
	String Code = "";
	int quantity;
	int quantityAXA = 0;
	int quantityDPA = 0;
	int quantityESS = 0;
	int quantityQXK = 0;
	int quantityPLP = 0;
	double totalAXA = 0;
	double totalDPA = 0;
	double totalESS = 0;
	double totalQXK = 0;
	double totalPLP = 0;
	double total = 0;
	
	//loop for repeating input
	while (Code != "ZZZZ") {
		System.out.print("Please enter the product code: ");
		Code = input.nextLine();
		if (Code.equals("AXA3")) {
			System.out.print("Please enter quantity: ");
			quantity = input.nextInt();
			while (quantity < 0) {
				System.out.print("Error, enter a positive quantity");
				quantity = input.nextInt();
			}
			quantityAXA = quantityAXA + quantity;
		}
		if (Code.equals("DPA5")) {
			System.out.print("Please enter quantity: ");
			quantity = input.nextInt();
			while (quantity < 0) {
				System.out.print("Error, enter a positive quantity");
				quantity = input.nextInt();
			}
			quantityDPA = quantityDPA + quantity;
		}
		if (Code.equals("ESS7")) {
			System.out.print("Please enter quantity: ");
			quantity = input.nextInt();
			while (quantity < 0) {
				System.out.print("Error, enter a positive quantity");
				quantity = input.nextInt();
			}
			quantityESS = quantityESS + quantity;
		}
		if (Code == "QXK7") {
			System.out.print("Please enter quantity: ");
			quantity = input.nextInt();
			while (quantity < 0) {
				System.out.print("Error, enter a positive quantity");
				quantity = input.nextInt();
			}
			quantityQXK = quantityQXK + quantity;
		}
		if (Code == "PLP8") {
			System.out.print("Please enter quantity: ");
			quantity = input.nextInt();
			while (quantity < 0) {
				System.out.print("Error, enter a positive quantity");
				quantity = input.nextInt();
			}
			quantityPLP = quantityPLP + quantity;
		}
		else {
			System.out.print("Error, invalid item code");
		}
	}
	totalAXA = quantityAXA * 3.16;
	totalDPA = quantityDPA * 22.15;
	totalESS = quantityESS * 7.52;
	totalQXK = quantityQXK * 8.99;
	totalPLP = quantityPLP * 18.23;
	total = totalAXA + totalDPA + totalESS + totalQXK + totalPLP;
	System.out.println("AXA3: "+quantityAXA+" items	Price = $"+totalAXA);
	System.out.println("DPA5: "+quantityDPA+" items	Price = $"+totalDPA);
	System.out.println("ESS7: "+quantityESS+" items	Price = $"+totalESS);
	System.out.println("QXK7: "+quantityQXK+" items	Price = $"+totalQXK);
	System.out.println("PLP8: "+quantityPLP+" items	Price = $"+totalPLP);
	System.out.println("Total Price: "+total);
}
}
		