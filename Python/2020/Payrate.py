hours = float(input('Enter total hours'))
payrate = float(input('Enter payrate'))
if hours > 40:
    pay = (hours * payrate) * 1.5
else:
    pay = hours * payrate

print("Employee's gross is $", format(pay, '.2f'))
