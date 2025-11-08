# CS0016
# discount.py
# Louis Yagodich
# Program to calculate discount

item_name = input('Please enter name of item.. ')
item_price = float(input('Please enter price of item.. $'))
item_discount = float(input('Please enter percent discount.. '))
discount_price = item_price * ((100 - item_discount) * 0.01)
print(item_name, 'has sale price $' + format(discount_price, ',.2f'))
