# open file and make text in file string variable file_text, also create converted_text currently empty
opened_file = input("File: ")
converted_text = ""
# convert file_text to lowercase, later conversion easier

# assign each letter it's nato counterpart using dicts
nato_alphabet = { 'a': 'Alfa ', 'b': 'Bravo ', 'c': 'Charlie ', 'd': 'Delta ', 'e': 'Echo ', 
'f': 'Foxtrot ', 'g': 'Golf ', 'h': 'Hotel ', 'i': 'India ', 'j': 'Juliett ', 'k': 'Kilo ', 
'l': 'Lima ', 'm': 'Mike ', 'n': 'November ', 'o': 'Oscar ', 'p': 'Papa ', 'q': 'Quebec ', 
'r': 'Romeo ', 's': 'Sierra ', 't': 'Tango ', 'u': 'Uniform ', 'v': 'Victor ', 'w': 'Whiskey ', 
'x': 'X-ray ', 'y': 'Yankee ', 'z': 'Zulu ' }

# for loop that increments through every character in file_text
with open(opened_file) as file_text:
    for line in file_text:
        line = line.lower()
        for word in line.split():
            for char in word:
                # check if the current char is a key for nano_alphabet
                if char in nato_alphabet:
                # I don't remember if we covered the way I used the 'in' function in class yet, an alternate form without using it would be using several if statements
                # if char == 'a': converted_text += 'Alfa ' | if char == 'b'... but thats ugly code
                    converted_text += nato_alphabet[char]
            converted_text += "\n"
print(converted_text)