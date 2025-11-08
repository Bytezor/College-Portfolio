# CS0016
# vol_sa.py
# Louis Yagodich
# Program to calculate area and volume of various shapes

import math
def display_menu():
    print('Here are the possible choices\n1. Surface area of a sphere\n2. Volume of a sphere\n3. Surface area of a cylinder\n4. Volume of a cylinder\n5. Surface area of a block\n6. Volume of a block\n7. Quit\n')

def sarea_sphere(radius):
    return 4*math.pi*(radius**2)

def volume_sphere(radius):
    return (4/3)*math.pi*(radius**3)

def sarea_cylinder(radius, height):
    return (2*math.pi*radius*height)+(2*math.pi*(radius**2))

def volume_cylinder(radius, height):
    return math.pi*(radius**2)*height

def sarea_block(length, width, height):
    return 2*((length*width)+(length*height)+(width*height))

def volume_block(length, width, height):
    return length*width*height

def main():
    loop = True
    while loop == True:
        display_menu()
        selection = int(input('Enter your choice (1 through 7) '))
        if selection == 1:
            r = int(input('Input Radius '))
            print('Surface area =', format(sarea_sphere(r), '.2f'), '\n')
        elif selection == 2:
            r = int(input('Input Radius '))
            print('Volume =', format(volume_sphere(r), '.2f'), '\n')
        elif selection == 3:
            r = int(input('Input Radius '))
            h = int(input('Input Height '))
            print('Surface area =', format(sarea_cylinder(r, h), '.2f'), '\n')
        elif selection == 4:
            r = int(input('Input Radius '))
            h = int(input('Input Height '))
            print('Volume =', format(volume_cylinder(r, h), '.2f'), '\n')
        elif selection == 5:
            l = int(input('Input Length '))
            w = int(input('Input Width '))
            h = int(input('Input Height '))
            print('Surface area =', format(sarea_block(l, w, h), '.2f'), '\n')
        elif selection == 6:
            l = int(input('Input Length '))
            w = int(input('Input Width '))
            h = int(input('Input Height '))
            print('Volume =', format(volume_block(l, w, h), '.2f'), '\n')
        elif selection == 7:
            loop = False
        else:
            print('Invalid Number Inputted\n')

main()
