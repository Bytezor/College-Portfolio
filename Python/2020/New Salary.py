employee_name = input("Please Input Your Name.\n")
salary = float(input("Input your current salary.\n"))
increase = float(input("Input your salary increase by percentage. (Ex: 50)\n"))
new_salary = salary + salary * increase/100
print(employee_name, "your new salary is $", new_salary)
