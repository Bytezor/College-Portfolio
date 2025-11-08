# CS0016
# donut.py
# Louis Yagodich
# Program to calculate the price of donuts that cost less after the first 15

donuts = float(input('Insert the amount of donuts purchased. \n'))
if donuts > 0:
    if donuts <= 15:
        price = donuts * .85
    elif donuts > 15:
        price = 12.75 + ((donuts - 15) * 0.65)
    print('Your total price is $', price)
else:
    print('Invalid number')
    
