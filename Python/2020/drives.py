num_drives = int(input('Enter number of drives '))
if num_drives >= 0:
    price = num_drives * 15
    print('Your total price is $', price)
elif num_drives >= 5 and num_drives <= 10:
    price = num_drives * 13
    print('Your total price is $', price)
elif num_drives > 10:
    price = num_drives * 11
    print('Your total price is $', price)
else:
    print('Invalid number')
