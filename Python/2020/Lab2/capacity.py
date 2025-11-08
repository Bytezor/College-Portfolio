# CS0016
# capacity.py
# Louis Yagodich
# Program to calculate the max number of boxes that can fit in a truck and size left

capacity = float(input('Enter capacity of truck.. '))
box_size = float(input('Enter size of a single box.. '))
max_boxes = capacity // box_size
space_left = capacity % box_size
print('Number of boxes in truck =', format(max_boxes, '.0f'))
print('Space left in truck =', format(space_left, '.0f'))
