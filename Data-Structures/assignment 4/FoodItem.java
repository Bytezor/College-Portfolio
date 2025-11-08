public class FoodItem {
	
	private String food;
	private String type;
	
	public FoodItem(String f, String t) {
		food = f;
		type = t;
	}
	
	public String getFood() {
		return food;
	}
	
	public String getType() {
		return type;
	}
	
	public void setFood(String f) {
		food = f;
	}
	
	public void setType(String t) {
		type = t;
	}
	
	public boolean equals(String food, String type) {
		if (this.food == food) {
			if (this.type == type) {
				return true;
			}
		}
		return false;
	}
	
	public String toString() {
		return ("Food: " + food + " Type: " + type);
	}
}