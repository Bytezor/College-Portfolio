# CS0016
# functions.py
# Louis Yagodich
# Program to use functions to calculate the average, smallest, center, largest of three numbers, and determine if they are all same or different

def main():
    first = int(input('Enter first integer '))
    second = int(input('Enter second integer '))
    third = int(input('Enter third integer '))
    print('Average =', format(average(first, second, third), '.2f'))
    print('Smallest =', smallest(first, second, third))
    print('Center =', center(first, second, third))
    print('Largest =', largest(first, second, third))
    print('Are numbers all different?', different(first, second, third))
    print('Are numbers all the same?', same(first, second, third))

def average(a, b, c):
    return (a+b+c)/3

def smallest(a, b, c):
    if a <= b and a <= c:
        return a
    elif b <= a and b <= c:
        return b
    else:
        return c

def center(a, b, c):
    if (a >= b and a <= c) or (a <= b and a >= c):
        return a
    elif (b >= a and b <= c) or (b <= a and b >= c):
        return b
    else:
        return c

def largest(a, b, c):
    if a >= b and a >= c:
        return a
    elif b >= a and b >= c:
        return b
    else:
        return c

def different(a, b, c):
    if a != b and a != c and b != c:
        return True
    else:
        return False

def same(a, b, c):
    if a == b and a == c and b == c:
        return True
    else:
        return False

main()
