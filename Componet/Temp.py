# from random import choice,randint
# AMOUNT_BY_THEM=100

# def deposit():
#     while True:
#         amount=(input("What would you like to deposit $ "))
#         if amount.isdigit():
#             amount=int(amount)
#             if amount>0:
#                 break
#             else:
#                 print ("Enter a valid amount ")
#         else:
#             print("Hey you should enter the mumber only")
#     return amount

# def cash_counter(amount):
#     attempts=3
#     while attempts>0:
#         phone_mo=(input("Enter your phone no.: "))
#         if len(phone_mo)==10 and phone_mo.isdigit():
#             pas=randint(1111,5555)
#             print(f"Here is your pass {pas}")
#             try:
#                 OTP=int(input("Enter that pass which is genrated in your phone"))
#                 if pas==OTP:
#                     print(f"Your {amount} amount is succefully transefed!\nsee you next time ")
#                     break
#                 else:
#                     attempts-=1
#                     print(f"The pass doesn't match. You have {attempts} attempt(s) left.")
#             except ValueError:
#                 print("Please enter a valid number for the OTP.")
#         else:
#             print("Enter the valid no.")
#         if attempts == 0:
#             print("You have exceeded the OTP attempts. Transaction failed.")


# def spin_reels(amount):
#     symbol=["cherry","apple","bomm","777","Banana"]

#     while True:
#         if amount < 20:  # Assume a minimum amount of $20 is needed to play
#             print(f"You should deposit more money because your current balance is ${amount}")
#             break

#         Yes_no=input("Would you wann to play more [Y]es or [N]o")
#         if Yes_no == 'y':
#             reel1=choice(symbol)
#             reel2=choice(symbol)
#             reel3=choice(symbol)
#             print(f"Reels: {reel1} | {reel2} | {reel3}")
#             if reel1==reel2==reel3:
#                 print("You won the JACKPORT")
#                 amount+=100
            
#             elif reel1==reel2 or reel2==reel3 or reel1==reel3:
#                 print("You win the small amount ")
#                 amount+=50
                
#             else:
#                 print("Try again!")
#                 amount-=70

#             print(f"Your current balance is: ${amount}")
        
#         elif Yes_no == 'n':  # If user chooses not to play
#             print("Thanks for playing! Come back next time.")
#             print("You can get your momey from the cash counter! ")
#             cash_counter(amount)
#             break
        
#         else:
#             print("Invalid input. Please enter 'Y' for Yes or 'N' for No.")
#     return amount 
# def main():
#     amount=AMOUNT_BY_THEM+deposit()
#     print(f"Initial balance: ${amount}")

#     amount = spin_reels(amount)

# main()




