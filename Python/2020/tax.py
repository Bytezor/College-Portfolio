item1 = float(input("Insert price of item #1.\n"))
item2 = float(input("Insert price of item #2.\n"))
item3 = float(input("Insert price of item #3.\n"))
item4 = float(input("Insert price of item #4.\n"))
item5 = float(input("Insert price of item #5.\n"))
subtotal = item1 + item2 + item3 + item4 + item5
total = subtotal * 1.07
print("Your total is $", subtotal, 'without tax and $', total, 'with tax.')
