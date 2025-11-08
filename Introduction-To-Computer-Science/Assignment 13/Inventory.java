// CS0410
// Louis Yagodich
// Inventory.java
// Program to input arrays and edit them



import java.util.Scanner;

public class Inventory {
	public static void main(String[] args) {
		
		//initialization of arrays
		String[] id = new String[5];
		double[] price = new double[5];
		int[] inven = new int[5];
		
		//calling methods
		arrinput(id, price, inven);
		printing(id, price, inven);
		edit(id, price, inven);
		total(id, price, inven);
	}
	
	public static void arrinput(String[] arr1, double[] arr2, int[] arr3) {
		//inputs 5 times for id, price, and inventory numbers and puts them into the arrays
		Scanner input = new Scanner(System.in);
		String stemp;
		int itemp;
		double dtemp;
		System.out.print("Input the 5 product IDs.. ");
		for (int num = 0; num < arr1.length; num++) {
			stemp = input.nextLine();
			arr1[num] = stemp;
		}
		System.out.print("Input the 5 product Prices.. ");
		for (int num = 0; num < arr2.length; num++) {
			dtemp = input.nextDouble();
			arr2[num] = dtemp;
		}
		System.out.print("Input the 5 product Inventory Numbers.. ");
		for (int num = 0; num < arr3.length; num++) {
			itemp = input.nextInt();
			arr3[num] = itemp;
		}
	}
	
	public static void printing(String[] arr1, double[] arr2, int[] arr3) {
		//prints arrays as a chart
		System.out.printf("ID\tPrice\tInventory");
		System.out.println("");
		for (int num = 0; num < 5; num++) {
			System.out.printf(arr1[num]+"\t");
			System.out.printf(arr2[num]+"\t");
			System.out.print(arr3[num]);
			System.out.println("");
		}
	}
	
	public static void edit(String[] arr1, double[] arr2, int[] arr3) {
		//initial input
		Scanner input = new Scanner(System.in);
		String selection = "";
		int num = 0;
		System.out.print("Insert ID, Price, or Inventory to edit it, input quit to stop.. ");
		while (!selection.equals("quit")) {
			selection = input.nextLine();
			selection = selection.toLowerCase();
			//switch to determine if editing id, price, or inventory
			switch (selection) {
				case "id":
				System.out.print("Insert ID to edit, input 1-5.. ");
				num = input.nextInt();
				//extra input.nextLine() throughout cases is to fix issue of nextLine being skipped if used after nextInt
				input.nextLine();
				while (num < 1 || num > 5) {
					System.out.print("Invalid input please try again.. ");
					num = input.nextInt();
					input.nextLine();
				}
				num = num - 1;
				System.out.print("Insert edit.. ");
				arr1[num] = input.nextLine();
				num = 0;
				System.out.print("Insert ID, Price, or Inventory to edit it, input quit to stop.. ");
				break;
				
				case "price":
				System.out.print("Insert price to edit, input 1-5.. ");
				num = input.nextInt();
				input.nextLine();
				while (num < 1 || num > 5) {
					System.out.print("Invalid input please try again.. ");
					num = input.nextInt();
					input.nextLine();
				}
				num = num - 1;
				System.out.print("Insert edit.. ");
				arr2[num] = input.nextDouble();
				input.nextLine();
				num = 0;
				System.out.print("Insert ID, Price, or Inventory to edit it, input quit to stop.. ");
				break;
				
				case "inventory":
				System.out.print("Insert inventory to edit, input 1-5.. ");
				num = input.nextInt();
				input.nextLine();
				while (num < 1 || num > 5) {
					System.out.print("Invalid input please try again.. ");
					num = input.nextInt();
					input.nextLine();
				}
				num = num - 1;
				System.out.print("Insert edit.. ");
				arr3[num] = input.nextInt();
				input.nextLine();
				num = 0;
				System.out.print("Insert ID, Price, or Inventory to edit it, input quit to stop.. ");
				break;
				
				//empty case to prevent default when quitting edits
				case "quit":
				break;
				
				//error handling
				default:
				System.out.print("Invalid input please try again.. ");
				break;
			}
		}
	}
	
	public static void total(String[] arr1, double[] arr2, int[] arr3) {
		//works like printing method but with added total and overall price at end
		double total;
		double sum = 0;
		System.out.printf("ID\tPrice\tInventory\tTotal");
		System.out.println("");
		for (int num = 0; num < 5; num++) {
			System.out.printf(arr1[num]+"\t");
			System.out.printf(arr2[num]+"\t");
			System.out.print(arr3[num]+"\t");
			total = arr2[num] * arr3[num];
			sum = sum + total;
			System.out.print(total);
			System.out.println("");
		}
		System.out.println("Overall price: "+sum);
	}	
}