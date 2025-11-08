steps = open('steps.txt', 'r')

day = int(steps.readline())
countJ = 0
countF = 0
countM = 0
countA = 0
totalJ = 0
totalF = 0
totalM = 0
totalA = 0

for i in range(1, 32):
    countJ = countJ + 1
    totalJ = totalJ + day
    day = int(steps.readline())

for i in range(1, 29):
    countF = countF + 1
    totalF = totalF + day
    day = int(steps.readline())

for i in range(1, 32):
    countM = countM + 1
    totalM = totalM + day
    day = int(steps.readline())

for i in range(1, 31):
    day = int(day)
    countA = countA + 1
    totalA = totalA + day
    day = (steps.readline())

averageJ = totalJ/countJ
averageF = totalF/countF
averageM = totalM/countM
averageA = totalA/countA
print('The average steps taken in January is', format(averageJ, '.0f'), 'steps')
print('The average steps taken in February is', format(averageF, '.0f'), 'steps')
print('The average steps taken in March is', format(averageM, '.0f'), 'steps')
print('The average steps taken in April is', format(averageA, '.0f'), 'steps')
steps.close()
