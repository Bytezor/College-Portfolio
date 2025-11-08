# CS0016
# table.py
# Louis Yagodich
# Program to print a table using a for loop

last = int(input('Enter the max amount of numbers...'))

print('x \t x^2 \t x^3')
for x in range(1, (last + 1)):
    x2 = x**2
    x3 = x**3
    print(x, '\t', x2, '\t', x3)
