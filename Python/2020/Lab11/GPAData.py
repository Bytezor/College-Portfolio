# CS0016
# GPAData.py
# Louis Yagodich
# Program to convert txt file of GPAs into a list

GPA = open('GPAData.txt', 'r')

GPA_List = GPA.readlines()

for i in range(len(GPA_List)):
    GPA_List[i] = float(GPA_List[i])
    
print('Number of GPAs =', len(GPA_List))

total = 0
for i in range(len(GPA_List)):
    total = total + GPA_List[i]
average = total / len(GPA_List)
print('Average of GPAs =', format(average, '.2f'))

high = 0
med = 0
low = 0
below = 0
for i in range(len(GPA_List)):
    if GPA_List[i] >= 3:
        high = high + 1
    elif GPA_List[i] >= 2 and GPA_List[i] <= 2.99:
        med = med + 1
    elif GPA_List[i] >= 1 and GPA_List[i] <= 1.99:
        low = low + 1
    else:
        below = below + 1
print('Number of GPAs >= 3 is', high)
print('Number of GPAs from 2 to 2.99 is', med)
print('Number of GPAs from 1 to 1.99 is', low)
print('Number of GPAs below 1 is', below)
print('\nHighest GPA is', max(GPA_List))
print('Lowest GPA is', min(GPA_List))

GPA.close()
