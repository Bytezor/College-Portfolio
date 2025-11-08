n um = float(input('Insert number 0-36 \n'))
if num == 0:
    print('The pocket selected is green')
elif num % 2 == 0:
    if (num >= 1 and num <= 10) or (num > 19 and num < 29):
        print('The pocket selected is black')
    elif (num > 11 and num <= 18) or (num >= 30 and num <= 36):
        print('The pocket selected is red')
    else:
        print('Invalid Number')
elif num % 2 == 1:
    if (num >= 1 and num <= 10) or (num > 19 and num < 29):
        print('The pocket selected is red')
    elif (num > 11 and num <= 18) or (num >= 30 and num <= 36):
        print('The pocket selected is black')
    else:
        print('Invalid Number')
