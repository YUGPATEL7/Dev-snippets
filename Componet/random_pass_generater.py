from random import choice
import string

def generate_password(length=12,upper_case=True,lower_case=True,digit=True,special_char=True):
    if length < 0:
        raise ValueError ("The password does not have the 0 length!")
    char_set=[]
    if upper_case:
        char_set.append(string.ascii_uppercase)
    if lower_case:
        char_set.append(string.ascii_lowercase)
    if digit:
        char_set.append(string.digits)
    if special_char:
        char_set.append(string.printable)

    if not char_set:
        raise ValueError("NO charter i selected , you should atlest one ")
    

    all_char=''.join(char_set)
    all_char=all_char.replace(' ','')
    password=''.join(choice(all_char) for i in range(length))
    return password


if __name__=="__main__":
    length=12
    upper_case=True
    lower_case=True
    digit=True
    special_char=True

    password = generate_password(length=12, upper_case=True, lower_case=True, digit=True, special_char=True)
    print(f"Generated Password: {password}")




