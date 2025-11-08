student_scores = open('student_scores.txt', 'r')

name = student_scores.readline()
count = 0
Agrade = 0
Bgrade = 0
total = 0

while name !='':

    name = name.rstrip('\n')
    score = float(student_scores.readline())

    count = count + 1
    total = total + score
    if score >= 80:
        if score >= 90:
            Agrade = Agrade + 1
        else:
            Bgrade = Bgrade + 1
    
    print('Name:', name)
    print('Score:', score)

    name = student_scores.readline()

average = total / count
print('The average grade is', average)
print('There were', Agrade, 'A\'s and', Bgrade, 'B\'s')
student_scores.close()
