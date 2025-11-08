import java.util.Scanner;

public class Direction {
	public static void main(String[] args) {
		boolean valid = false;
		int xCoor = 0;
		int yCoor = 0;
		String direct = "";
		while (valid == false) {
			Scanner input = new Scanner(System.in);
			System.out.print("Input any series of the following directions: U=Up, D=Down, L=Left, R=Right S=None.. ");
			direct = input.nextLine();
			direct = direct.toUpperCase();
			valid = true;
			for (int i = 0; i < direct.length(); i++) {
				final char letter = direct.charAt(i);
				switch(letter) {
					case 'L', 'R', 'U', 'D', 'S':
					break;
					default:
					valid = false;
				}
			}
		}
		ArrayStack<Character> testStack = new ArrayStack<Character>();
		for (int i = 0; i < direct.length(); i++) {
			final char letter = direct.charAt(i);
			testStack.push(letter);
		}
		
		while (!testStack.isEmpty()) {
			switch(testStack.pop()) {
				case 'L':
				xCoor = xCoor - 1;
				break;
				case 'R':
				xCoor = xCoor + 1;
				break;
				case 'D':
				yCoor = yCoor - 1;
				break;
				case 'U':
				yCoor = yCoor + 1;
				break;
				default:
			}
		}
		System.out.println("The Coordinates are (" + xCoor + ", " + yCoor + ")");
	}
}