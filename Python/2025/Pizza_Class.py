# Zachary Gantner
# Kayleigh Harper - added area func, and priceperinch func, and then made table with inputted data
# Louis Yagodich - code optimization, added commands to add, remove, and find averages for pizzas

PIZZA_SIZES = {
    "SMALL": 10,
    "MEDIUM": 12,
    "LARGE": 16
}
pizzas = []

class Pizza:
    def __init__(self, location, size, diameter, price):
        self.location = location
        self.size = size
        self.diameter = diameter
        self.price = price
       
    def __repr__(self):
        return f"{self.location} - {self.size} (${self.price})"
    
    def area(self):
        radius = self.diameter / 2
        return 3.14 * radius * radius
    
    def price_per_sq_in(self):
        return self.price / self.area()

#functions. Not in class
#add new pizza
def add_pizzas():
    while True:
        location = input("Enter the pizza location or 'done' to finish: ").strip()
        if location.lower() == "done":
            break

        size = input("Enter size (small, medium, large): ").strip().upper()

        while size not in PIZZA_SIZES:
            print("Invalid size. Please choose small, medium, or large.")
            size = input("Enter size (small, medium, large): ").strip().upper()

        diameter = PIZZA_SIZES[size]

        while True:
            try:
                price = float(input("Enter the pizza price: "))
                break
            except ValueError:
                print("Please enter a valid number for the price.")
        pizzas.append(Pizza(location, size, diameter, price))
    display_pizzas(pizzas)

#remove a pizza
def remove_pizzas():
    while True:
        selection = input(("Which pizza would you like to remove? Enter it's number in order on the table or 'cancel' to cancel: "))
        if selection.strip().upper() == "CANCEL":
            print("Removal canceled.")
            break
        try:
            index = int(selection) - 1
            if index < 0 or index >= len(pizzas):
                print(f"Invalid number. Please enter a number between 1 and {len(pizzas)}, or 'cancel' to exit.")
                continue
            removed = pizzas.pop(index)
            print(f"Removed {removed.location} - {removed.size} pizza.")
            display_pizzas(pizzas)
            break
        except ValueError:
            print(f"Invalid number. Please enter a number between 1 and {len(pizzas)}, or 'cancel' to exit.")

#display list of pizzas
def display_pizzas(pizzas):
    if not pizzas:
        print("No pizzas entered.")
    else:
        print("\nPizza Data Table:")
        print(f"{'Location':<15} {'Size':<10} {'Diameter':<10} {'Price':<10} {'$/sq in':<10}")
        print("-" * 60)
        for pizza in pizzas:
            print(f"{pizza.location:<15} {pizza.size:<10} {pizza.diameter:<10} ${pizza.price:<10.2f} ${pizza.price_per_sq_in():<10.3f}")
        best = get_best_deal(pizzas)
        if best:
            print(f"\nBest deal: {best.location} - {best.size} ({best.diameter} inch) "
            f"for ${best.price:.2f} (${best.price_per_sq_in():.2f} per sq inch)")

#get best overall deal
def get_best_deal(pizzas):
    if not pizzas:
        return None
    best_pizza = pizzas[0]
    for p in pizzas[1:]:
        if p.price_per_sq_in() < best_pizza.price_per_sq_in():
            best_pizza = p
    return best_pizza

#get average for location or size
def calculate_average(pizzas, pizza_type):
    while True:
        selection = input(f"Input {pizza_type} name or 'cancel' to cancel: ").strip().lower()
        if pizza_type == "size" and selection not in PIZZA_SIZES:
            print("Invalid size. Please choose small, medium, or large.")
            continue
        if selection == "cancel":
            print("Average calculation canceled.")
            break
        if pizza_type == "location":
            matching_pizzas = [p for p in pizzas if p.location.lower() == selection]
        elif pizza_type == "size":
            matching_pizzas = [p for p in pizzas if p.size.lower() == selection]
        if not matching_pizzas:
            print(f"No pizzas found for {pizza_type} '{selection}'.")
            continue
        average = sum(p.price_per_sq_in() for p in matching_pizzas) / len(matching_pizzas)
        print(f"{pizza_type.capitalize()} pizzas:")
        for pizza in matching_pizzas:
            if pizza_type == "location":
                print(f"{pizza.size:<10} {pizza.diameter:<10} ${pizza.price:<10.2f} ${pizza.price_per_sq_in():<10.3f}")
            elif pizza_type == "size":
                print(f"{pizza.location:<15} {pizza.diameter:<10} ${pizza.price:<10.2f} ${pizza.price_per_sq_in():<10.3f}")
        print(f"Average price per square inch for {selection.lower()}: ${average:.3f}")
        break
                

#test/main section
add_pizzas()
print("Further Commands:\n" \
    "Add - Add an additional Pizza\n" \
    "Remove - Remove a pizza\n" \
    "Average - Get the average price per square inch for a location or size\n" \
    "Exit - Exit program")
while True:
    command = input("\nEnter a command: ").strip().lower()
    if command == "add":
        add_pizzas()
    elif command == "remove":
        remove_pizzas()
    elif command == "average":
        selection_type = input("Would you like the average of a location or size: ").strip().lower()
        if selection_type == "location" or selection_type == "size":
            calculate_average(pizzas, selection_type)
        else:
            print("Invalid Input.")
    elif command == "help":
        print("Further Commands:\n" \
        "Add - Add an additional Pizza\n" \
        "Remove - Remove a pizza\n" \
        "Average - Get the average price per square inch for a location or size\n" \
        "Exit - Exit program")
    elif command == "exit":
        print("Exiting program.")
        break
    else:
        print("Invalid Command. Please Try Again. Input 'help' to see command list again.")
    