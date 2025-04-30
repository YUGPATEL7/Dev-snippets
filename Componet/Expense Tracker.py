import json
from datetime import date
import matplotlib.pyplot as plt

def log_expense(category, amount, file='expenses.json'):
    new_e = {
        'date': str(date.today()),
        'category': category,
        'amount': amount
    }
    
    # Check if the file exists; if not, create and initialize it
    try:
        with open(file, "r+") as f:
            data = json.load(f)
            data['expenses'].append(new_e)
            f.seek(0)
            json.dump(data, f, indent=4)
    except FileNotFoundError:
        # If file doesn't exist, create it with an initial structure
        with open(file, "w") as f:
            data = {"expenses": [new_e]}
            json.dump(data, f, indent=4)

def check_limit(category, limit, file='expenses.json'):
    with open(file) as f:
        date=json.load(f)
    total=sum(exp['amount'] for exp in date['expenses'] if exp ['category']==category)

    if total > limit:
        print(f"Alert! You have exceeded your budget for {category}\nthis is how much you spend {total}$.")
    else:
        print(f"You are within the budget for {category}\nthis is how much you spend {total}$.")
# Example usage

def visualize_expenses(file='expenses.json'):
    with open(file) as f:
        data =json.load(f)
    
    categories = [exp['category'] for exp in data['expenses']]
    amounts = [exp['amount'] for exp in data['expenses']]
    plt.bar(categories,amounts)
    plt.xlabel("Categories")
    plt.ylabel("Amount Spent")
    plt.title("Expenses by Category")
    plt.show()

while True:
    user=input("1 for the data enter ,2 for check ,3 for graph,4 bahar nikal ne kali : ")
    if user == '1':  
        log_expense('fish', 1)
    elif user=="2":
        category=input("Enter which category you have to see ")
        check_limit(category,limit=6500)
    elif user == '3':
        visualize_expenses()
    else:
        break


