# CS0016
# arithmetic.py
# Louis Yagodich
# Program to do some simple integer arithmetic

student_name = input('What is your name? ')
first_num = int(input('Enter first integer: '))
second_num = int(input('Enter second integer '))

total = first_num + second_num
# calculate diff and average below
diff = first_num - second_num
average = total / 2
print('\nMy name is', student_name)
print('Sum is', total)
# print other two quantities in a similar way
print('Difference is', diff)
print('Average is', average)
