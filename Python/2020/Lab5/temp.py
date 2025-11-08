# CS0016
# temp.py
# Louis Yagodich
# Program to make a table of inputted temperatures from celsius to farenheit

temps_correct = False
print('Enter two temperatures in Celsius divisble by 10')
while not(temps_correct):
    cstart = int(input('Enter starting temperature\n'))
    end = int(input('Enter ending temperature\n'))
    if cstart % 10 != 0 or end % 10 != 0 or cstart >= end:
        print('Invalid numbers, check if starting temp is less than ending temp')
    else:
        temps_correct = True

print('Celsius \t Farenheit')
while cstart != end + 10:
    fstart = (cstart * (9 / 5)) + 32
    print(cstart, '\t \t', format(fstart, '.0f'))
    cstart = cstart + 10
