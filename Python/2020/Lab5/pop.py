# CS0016
# pop.py
# Louis Yagodich
# Program to calculate year when the population exceeds 9 billion

year = 2020
pop = 7.8

while pop < 9:
    pop = pop * 1.0105
    year = year + 1

print('The year will be', year, 'when the population exceeds 9 Billion')
