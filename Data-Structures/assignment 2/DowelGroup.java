

public class DowelGroup {
	
	private int numDowels;
	private Dowel[] dowelArray;
	
	public DowelGroup()
	{
		numDowels = 0;
		dowelArray = new Dowel[50];
	}
	
	public int getNumDowels()
	{
		return numDowels;
	}
	
	public Dowel getDowel(int i)
	{
		return dowelArray[i];
	}
	
	
	public void setNumDowels(int n)
	{
		numDowels = n;
	}
	
	public void addDowels(Dowel r)
	{
		dowelArray[numDowels] = r;
		numDowels = numDowels + 1;
	}
	
	public boolean isEmpty()
	{
		if (numDowels > 0) {
			return false;
		}
		else {
			return true;
		}
	}
	
	public double largestArea()
	{
		double area = 0;
		for(int i = 0; i < numDowels; i++) {
			if (area < dowelArray[i].surfaceArea()) {
				area = dowelArray[i].surfaceArea();
			}
		}
		return area;
	}
	
	public double largestVolume()
	{
		double vol = 0;
		for(int i = 0; i < numDowels; i++) {
			if (vol < dowelArray[i].volume()) {
				vol = dowelArray[i].volume();
			}
		}
		return vol;
	}
	
	public String dowelsMadeOf(String wood) {
		String woodTotal = "";
		for(int i = 0; i < numDowels; i++) {
			if (wood == dowelArray[i].getWoodType()) {
				woodTotal = woodTotal + dowelArray[i] + " | ";
			}
		}
		return woodTotal;
	}
	
	public void printLargeDowels(DowelGroup dg) {
		for (int i = 0; i < dg.getNumDowels(); i++) {
			Dowel temp = dg.getDowel(i);
			if (temp.volume() > 500) {
				System.out.println(temp + " has a volume above 500");
			}
		}
	}
				
}