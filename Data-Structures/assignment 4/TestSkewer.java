import java.util.Arrays;

public class TestSkewer {
	public static void main(String[] args) {
		FoodSkewer sk = new FoodSkewer(3);
		FoodItem f1 = new FoodItem("Carrot", "Vegetable");
		FoodItem f2 = new FoodItem("Pineapple", "Fruit");
		FoodItem f3 = new FoodItem("Carrot", "Vegetable");
		FoodItem f4 = new FoodItem("Chicken", "Meat");
		FoodItem f5 = new FoodItem("Beef", "Meat");
		FoodItem f6 = new FoodItem("Zucchini", "Vegetable");
		FoodItem f7 = new FoodItem("Onion", "Vegetable");
		FoodItem f8 = new FoodItem("Carrot", "Vegetable");
		FoodItem f9 = new FoodItem("Beef", "Meat");
		FoodItem f10 = new FoodItem("Mushroom", "Vegetable");

		sk.add(f1);
		sk.add(f2);
		sk.add(f3);
		sk.add(f4);
		sk.removeLastFoodItem();
		sk.add(f5);
		sk.add(f6);
		sk.add(f7);
		sk.add(f8);
		sk.removeLastFoodItem();
		sk.add(f9);
		sk.add(f10);
		
		System.out.println("The skewer is:");
		System.out.println(Arrays.toString(sk.toArray()));
		System.out.println("The top item in the skewer is " + sk.getLastFoodItem());
		
		FoodItem search1 = new FoodItem("Zucchini", "Vegetable");
		FoodItem search2 = new FoodItem("Chicken", "Meat");
		FoodItem search3 = new FoodItem("Carrot", "Vegetable");
		
		if (sk.contains(search1))
			System.out.println(search1.getFood() + " is on the skewer"); 
		else
			System.out.println(search1.getFood() + " is not on the skewer"); 

		if (sk.contains(search2))
			System.out.println(search2.getFood() + " is on the skewer"); 
		else
			System.out.println(search2.getFood() + " is not on the skewer"); 
		
		System.out.println(search3.getFood() + " appears on the skewer " 
			+ sk.getFrequencyOf(search3) + " times."); 
			
		sk.clear();
		System.out.println("The stack is:");
		System.out.println(Arrays.toString(sk.toArray()));
	
		
	}
}

		
		
		