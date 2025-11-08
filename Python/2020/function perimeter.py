def main():
    length = float(input('insert length'))
    width = float(input('insert width'))
    answer = perimeter(length, width)
    print('Perimeter =', format(answer, '.2f'))
    
def perimeter(length, width):
    return 2*(length + width)

main()
