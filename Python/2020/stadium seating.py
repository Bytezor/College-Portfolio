def main():
    aclass = int(input('Insert number of Class A Tickets.. '))
    bclass = int(input('Insert number of Class B Tickets.. '))
    cclass = int(input('Insert number of Class C Tickets.. '))
    total = income(aclass, bclass, cclass)
    print('Your total income is $', total)

def income(a, b, c):
    return (a * 20) + (b * 15) + (c * 10)

main()
