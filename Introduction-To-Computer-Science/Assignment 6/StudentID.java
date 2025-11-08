// Louis Yagodich
// StudentID.java
// 2/10/2022
// Program to generate a student ID based on inputs

import java.util.Scanner;

public class StudentID {
	
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		
		//variable defining
		String studentID;
		String inputs;
		int last;
		
		//input for last name
		System.out.println("Please enter your last name.. ");
		inputs = input.nextLine();
		inputs = inputs.toUpperCase();
		last = inputs.length();
		
		//calculation for last name
		switch(inputs.substring(0,1)){
			case "B", "C", "D", "G", "J", "P", "Q", "R", "S", "X":
				studentID = "X";
				break;
			case "A", "E", "I", "O", "U", "Y":
				studentID = "Y";
				break;
			default:
				studentID = "Z";
		}
		
		//input for campus
		System.out.println("Enter the campus you are attending, use one of the following abbreviations:");
		System.out.println("Main		Main");
		System.out.println("Centerfield	Cent");
		System.out.println("South		Sout");
		System.out.println("Janetown	Jane");
		System.out.println("Cantsburg	Cant");
		System.out.println("Fielding	Fiel");
		System.out.println("Other Campus");
		inputs = input.nextLine();
		inputs = inputs.toLowerCase();
		
		//calculation for campus
		switch(inputs){
			case "main":
				studentID = studentID.concat("101");
				break;
			case "cent":
				studentID = studentID.concat("102");
				break;
			case "sout":
				studentID = studentID.concat("103");
				break;
			case "jane":
				studentID = studentID.concat("104");
				break;
			case "cant":
				studentID = studentID.concat("105");
				break;
			case "fiel":
				studentID = studentID.concat("106");
				break;
			default:
				studentID = studentID.concat("110");
		}
		
		//input for birth month
		System.out.println("Enter your birth month (abbrevations also work ");
		inputs = input.nextLine();
		inputs = inputs.substring(0,3);
		inputs = inputs.toLowerCase();
		//calculation for birth month
		switch(inputs){
			case "jan", "feb":
				studentID = studentID.concat("01");
				break;
			case "mar", "apr":
				studentID = studentID.concat("02");
				break;
			case "may", "jun":
				studentID = studentID.concat("03");
				break;
			case "jul", "aug":
				studentID = studentID.concat("04");
				break;
			case "sep", "oct":
				studentID = studentID.concat("05");
				break;
			case "nov", "dec":
				studentID = studentID.concat("06");
				break;
		}
		
		//calculation for last name length
		inputs = String.valueOf(last);
		studentID = studentID.concat(inputs);
		
		//printing ID
		System.out.println("Your student ID is "+studentID);
	}
}