# CS0016
# allowance.py
# Louis Yagodich
# Program to calculate allowance for a business trip

name = input('Enter employee name..')
mileage = int(input('Enter mileage..'))
meals = float(input('Enter cost of meals..'))
lodging = float(input('Enter cost of lodging..'))

if mileage < 150:
    miallowance = mileage * 0.55
elif mileage >= 150 and mileage < 300:
    miallowance = mileage * 0.52
elif mileage >= 300:
    miallowance = mileage * 0.47

if meals < 150:
    meallowance = meals * 0.28
elif meals >= 150:
    meallowance = meals * 0.35

if lodging > 200:
    loallowance = lodging
elif lodging >= 100 and lodging <= 200:
    loallowance = lodging * 0.5
elif lodging < 100:
    loallowance = 0

total = miallowance + meallowance + loallowance

print('Name....................', name)
print('Mileage Allowance.......', format(miallowance, '.2f'))
print('Meal Allowance..........', format(meallowance, '.2f'))
print('Lodging Allowance.......', format(loallowance, '.2f'))
print('Total Allowance.........', format(total, '.2f'))
