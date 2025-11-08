original_price = 0.99
discount_price = original_price * 0.85

while original_price <= 9.99:
    print('Original Price:', original_price, 'Discount Price:', format(discount_price, '.2f'))
    original_price = original_price + 0.50
    discount_price = original_price * 0.85
