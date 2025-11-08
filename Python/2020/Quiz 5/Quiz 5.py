examfile1 = open('exam1.txt', 'r')
examfile2 = open('exam2.txt', 'r')

exam1 = examfile1.readlines()
exam2 = examfile2.readlines()

for i in range(len(exam1)):
    exam1[i] = float(exam1[i])
    exam2[i] = float(exam2[i])

average = []
averagefile = open('average.txt', 'w')
for i in range(len(exam1)):
    average.append((exam1[i] + exam2[i]) / 2)
    averagefile.writelines(str(average[i]) + '\n')

averagefile.close()
examfile1.close()
examfile2.close()
