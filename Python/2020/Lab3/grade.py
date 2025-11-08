# CS0016
# grades.py
# Louis Yagodich
# Program to calculate curve and grade lettering

score = int(input('Insert your score \n'))
if score >= 0 and score <= 100:
    if score == 100:
        curve = 0
    elif score >= 90 and score < 100:
        curve = 1
    elif score >= 80 and score < 90:
        curve = 2
    elif score >= 70 and score < 80:
        curve = 3
    elif score >= 60 and score < 70:
        curve = 4
    elif score < 60:
        curve = 5

    final_score = score + curve

    if final_score >= 90:
        grade = 'A'
    elif final_score >= 80 and score < 90:
        grade = 'B'
    elif final_score >= 70 and score < 80:
        grade = 'C'
    elif final_score >= 60 and score < 70:
        grade = 'D'
    elif final_score <= 59:
        grade = 'F'

    print('You have a curve of', curve, 'with a new score of', final_score, 'and a grade lettering of', grade)
else:
    print('Invalid number (0-100 only)')
