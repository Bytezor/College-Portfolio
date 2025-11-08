# CS0016
# numbers.py
# Louis Yagodich
# Program to input 10 numbers and count all non-zero numbers and calculate the average of numbers between 0 and 11
num = 0
nonzeroes = 0
count = 0
lessten = 0

for x in range(1, 11):
    num = int(input('Input a number...'))
    if num != 0:
        nonzeroes = nonzeroes + 1
        if num > 0 and num <= 10:
            lessten = lessten + num
            count = count + 1

average = lessten / count
print('Number of non-zero integers =', nonzeroes)
print('Average of integers <= 10 =', average)
