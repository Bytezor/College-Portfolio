import sys

#get starting temperature
attempts = 3
while attempts > 0:
    try:
        start_temp = float(input('Starting temp: '))
        break
    except ValueError:
        print("Sorry, that's not a floating point number.")
        attempts -= 1
#if an exception is made 3 times to make attempts = 0 the program terminates
else: 
    print("Shutting down: Too many bad inputs.")
    sys.exit(0)

#get ending temperature
attempts = 3
while attempts > 0:
    try:
        end_temp = float(input('Ending temp: '))
        break
    except ValueError:
        print("Sorry, that's not a floating point number.")
        attempts -= 1
else: 
    print("Shutting down: Too many bad inputs.")
    sys.exit(0)

#get number of steps
attempts = 3
while attempts > 0:
    try:
        steps = int(input('Number of steps: '))
        if steps <= 0:
            raise ValueError
        break
    except ValueError:
        print("Sorry, steps needs to be a positive int.")
        attempts -= 1
else: 
    print("Shutting down: Too many bad inputs.")
    sys.exit(0)

#calculate the difference between steps (in fahrenheit)
step_amount = (start_temp - end_temp) / steps

print(f"{'Fahr':>7} {'Cel':>7}")
#loop through each step getting the farenheit temperature then converting it to celsius
for current_step in range(steps + 1):
    farenheit = start_temp - step_amount * current_step
    celsius = (farenheit - 32) * 5/9
    print(f"{farenheit:7.1f} {celsius:7.1f}")