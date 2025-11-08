public class Dowel {

	private String woodType;
	private double radius;
	private double length;
	
	public Dowel() {
		woodType = "";
		radius = 0;
		length = 0;
	}
	
	public Dowel(String wood, double r, double len) {
		woodType = wood;
		radius = r;
		length = len;
	}
	
	public double getRadius() {
		return radius;
	}
	
	public double getLength() {
		return length;
	}

	public String getWoodType() {
		return woodType;
	}
	
	public void setRadius(double r) {
		radius = r;
	}
	
	public void setLength(double len) {
		length = len;
	}

	public void setWoodType(String w) {
		woodType = w;
	}
	
	public double volume() {
		return Math.PI * radius * radius * length;
	}
	
	public double surfaceArea() {
		return 2 * Math.PI * radius * radius +  2 * Math.PI * radius * length;
	}
	
	public String toString() {
		return "Wood " + woodType + ", Radius = " + radius + ", Length = " + length;
	}
}
	