import java.util.Arrays;

public final class FoodSkewer<FoodItem>
{
	private FoodItem[] skewer;
	private int numberOfItems;
	private boolean integrityOK = false;
	private static final int DEFAULT_CAPACITY = 10;
	
	public FoodSkewer() {
		this(DEFAULT_CAPACITY);
	}
	
	public FoodSkewer(int initialCapacity) {
		@SuppressWarnings("unchecked")
         FoodItem[] tempSkewer = (FoodItem[])new Object[initialCapacity]; // Unchecked cast
         skewer = tempSkewer;
         numberOfItems = 0;
	}
	
	public int getCurrentSize() {
		return numberOfItems;
	}
	
	public boolean isEmpty() {
		return numberOfItems == 0;
	}
	
	public void add(FoodItem newFoodItem) {
		if (isArrayFull()) {
			doubleCapacity();
		}
		
		skewer[numberOfItems] = newFoodItem;
		numberOfItems++;
	}
	
	public FoodItem getLastFoodItem() {
		return skewer[numberOfItems-1];
	}
	
	public FoodItem removeLastFoodItem() {
		FoodItem result = skewer[numberOfItems];
		skewer[numberOfItems] = null;
		numberOfItems--;
		return result;
	}
	
	public void clear() {
		while (!isEmpty()) {
			removeLastFoodItem();
		}
	}
	
	private boolean isArrayFull() {
		return numberOfItems >= skewer.length;
	}
	
	private void doubleCapacity() {
		int newLen = 2 * skewer.length;
		skewer = Arrays.copyOf(skewer, newLen);
	}
	
	public FoodItem[] toArray() {
		return Arrays.copyOf(skewer, numberOfItems);
	}
	
	public boolean contains(FoodItem f) {
		String temp = f.toString();
		String tempToo = "";
		int size = getCurrentSize();
		for (int i = 0; i < getCurrentSize(); i++) {
			tempToo = skewer[i].toString();
			if(temp.equals(tempToo))
			{
				return true;
			}
		}
		return false;
	}
	
	public int getFrequencyOf(FoodItem f) {
		int counter = 0;
		String temp = f.toString();
		String tempToo = "";
		int size = getCurrentSize();
      for (int i = 0; i < getCurrentSize(); i++) {
		  tempToo = skewer[i].toString();
         if (temp.equals(tempToo)) {
            counter++;
         }
	  }
	  return counter;
	}
}