# CS0016
# list_demo.py
# Louis Yagodich
# Program to demonstrate lists
# Complete using information in comments
# Use one command for each operation except the last
# two which require a for loop


list_names = ['Joe', 'Tim', 'Jane', 'Kate', 'Ben']
list_ages = [11, 5, 8, 23, 18]

# change second entry (index 1) in list_names to 'Paul'
list_names[1] = 'Paul'

# change last entry (index 4) in list_ages to 28
list_ages[4] = 28

# add the name 'John' to the end of list_names
list_names.append('John')

# add the age 27 to the end of list_ages
list_ages.append(27)

# Insert the name 'Jo' at index 4 in list_names
# Items at index 4 onward will "move over"
list_names.insert(4, 'Jo')

# Insert the age 23 at index 4 in list_ages
# Items at index 4 onward will "move over"
list_ages.insert(4, 23)

# Print list_names
print(list_names)


# Print list_ages
print(list_ages)


# sort list_names
list_names.sort()

# sort list_ages
list_ages.sort()

# reverse the order of the items in list_names
list_names.reverse()

# reverse the order of the items in list_ages
list_ages.reverse()

# delete the second entry (index 1) in list_names 
del list_names[1]

# delete the second entry (index 1) in list_ages 
del list_ages[1]

# concatenate list_names and list_ages into one list called list_all
list_all = list_names + list_ages

# Print list_all
print(list_all)

# find and print the average age of the ages >= 18
# in list_ages(requires for loop)
count = 0
total = 0
for i in range(len(list_ages)):
    if list_ages[i] >= 18:
        count = count + 1
        total = total + list_ages[i]
average = total / count
print('The average of ages >= 18 is', format(average, '.2f'))


# print the contents of list_names and list_ages in two columns
# name in the first and age in the second  (requires for loop)
for i in range(len(list_names)):
    print(list_names[i], '\t', list_ages[i])
