# CS0016
# SalaryData.py
# Louis Yagodich
# program to read a text file of salaries and print certain facts about it

data = open('salaryData.txt', 'r')

salary = data.readline()
count = 0
over = 0
under = 0
total = 0

while salary != '':
    salary = int(salary)
    
    count = count + 1
    total = total + salary
    if salary > 100000:
        over = over + 1
    elif salary < 50000:
        under = under + 1
    salary = data.readline()

print('There are', count, 'salaries total')
print('The sum of salaries is $', total, sep='')
average = total / count
print('The average salary is $', format(average, '.2f'), sep='')
print('There were', over, 'salaries more than $100000')
print('There were', under, 'salaries less than $50000')

data.close()
