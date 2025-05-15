# import json

# # Load the JSON file
# file = "Quiz application.json"
# with open(file, "r") as f:
#     data = json.load(f)

# # Loop through each question in the JSON data and print it

# for i, item in enumerate(data["questions"], start=1):
#     print(f"Question {i}: {item['question']}")
#     for j, option in enumerate(item["options"], start=1):
#         print(f"  {j}. {option}")
#     user_answer = input("Enter your choice (1/2/3/4): ")
    
#     # Convert user's choice to the corresponding option text
#     try:
#         selected_option = item["options"][int(user_answer) - 1]
#     except (IndexError, ValueError):
#         print("Invalid choice.")
#         continue
    
#     # Check if the answer is correct
#     if selected_option == item["answer"]:
#         print("Correct!\n")
#     else:
#         print(f"Wrong. The correct answer is: {item['answer']}\n")



import tkinter as tk
import json

# Set up the main window
window = tk.Tk()
window.title("TMKOC")
window.geometry("400x300")
# # Load the JSON file
file = "Quiz application.json"
with open(file, "r") as f:
    data = json.load(f)

# Loop through each question in the JSON data and print it

for i, item in enumerate(data["questions"], start=1):
    print(f"Question {i}: {item['question']}")
    for j, option in enumerate(item["options"], start=1):
        print(f"  {j}. {option}")
    user_answer = input("Enter your choice (1/2/3/4): ")
    
    # Convert user's choice to the corresponding option text
    try:
        selected_option = item["options"][int(user_answer) - 1]
    except (IndexError, ValueError):
        print("Invalid choice.")
        continue
    
    # Check if the answer is correct
    if selected_option == item["answer"]:
        print("Correct!\n")
    else:
        print(f"Wrong. The correct answer is: {item['answer']}\n")


# Add a button in the top frame
button = tk.Button( text="Button", fg="red",)
# button.grid(row=1, column=1, padx=20, pady=10)
button.pack(side='left',padx=100,pady=100)
# Run the main loop
window.mainloop()
