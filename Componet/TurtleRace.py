import turtle
import time
import random

WIDTH, HEIGHT = 700, 600
COLORS = ['red', 'green', 'blue', 'orange', 'yellow', 'black', 'purple', 'pink', 'brown', 'cyan']

def get_number_of_racers():
	racers = 0
	while True:
		racers = input('Enter the number of racers (2 - 10): ')
		if racers.isdigit():
			racers = int(racers)
		else:
			print('Input is not numeric... Try Again!')
			continue

		if 2 <= racers <= 10:
			return racers
		else:
			print('Number not in range 2-10. Try Again!')

def race(colors):
	turtles = create_turtles(colors)

	while True:
		for racer in turtles:
			distance = random.randrange(1, 20)
			racer.forward(distance)

			x, y = racer.pos()
			if y >= HEIGHT // 2 - 10:
				return colors[turtles.index(racer)]

def create_turtles(colors):
	turtles = []
	spacingx = WIDTH // (len(colors) + 1)
	for i, color in enumerate(colors):
		racer = turtle.Turtle()
		racer.color(color)
		racer.shape('turtle')
		racer.left(90)
		racer.penup()
		racer.setpos(-WIDTH//2 + (i + 1) * spacingx, -HEIGHT//2 + 20)
		racer.pendown()
		turtles.append(racer)

	return turtles

def init_turtle():
	screen = turtle.Screen()
	screen.setup(WIDTH, HEIGHT)
	screen.title('Turtle Racing!')

racers = get_number_of_racers()
init_turtle()

random.shuffle(COLORS)
colors = COLORS[:racers]

winner = race(colors)
print("The winner is the turtle with color:", winner)
time.sleep(5)





# Typeing test 



# from random import choice
# import time

# sentences=["Hey brother how it's going now",
# 		"Can you see the cat under the aircar",
# 		"samaj nahi aa ya merko aakhare dam",
# 		"dekha tenu tenu pehie le bar me tare ki honi ya"]
# sentence=choice(sentences)
# print("Type the following sentence:")
# print(sentence)
# input("Press Enter when you are ready to start...")


# start_time=time.time()
# user_input=input()
# end_time=time.time()

# time_taken=end_time-start_time
# time_min=time_taken/60

# word_count = len(sentence.split())
# WNP=word_count/time_min

# correct_words=sentence.split()
# typed_words=user_input.split()

# highlighted_text = ""
# for i in range(len(correct_words)):
#     if i < len(typed_words) and correct_words[i] == typed_words[i]:
#         highlighted_text += f"\033[92m{typed_words[i]}\033[0m "  # Green for correct words
#     else:
#         if i < len(typed_words):
#             highlighted_text += f"\033[91m{typed_words[i]}\033[0m "  # Red for incorrect words
#         else:
#             highlighted_text += f"\033[91m{'_' * len(correct_words[i])}\033[0m "  # Red for missing words


# print(f"\nYou typed {word_count} words in {time_taken:.2f} seconds.")
# print(f"Your typing speed is {WNP:.2f} words per minute.")
# print("Your typed text (highlighted):")
# print(highlighted_text)


