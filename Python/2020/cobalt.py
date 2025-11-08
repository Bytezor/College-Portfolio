cobalt = 100
years = 0

while cobalt >= 20:
    print('After', years, 'year(s) there are', format(cobalt, '.2f'), 'grams remaining')
    cobalt = cobalt - (cobalt * 0.12)
    years += 1
