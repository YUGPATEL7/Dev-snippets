from datetime import datetime

def mark_attendance():
    n = int(input("Enter how many names you have to enter: "))
    names = []
    for i in range(n):
        name = input("Enter name: ")
        names.append(name)

    # Open the file to check if the names have already been written
    with open("FP.txt", "a") as f:
        try:
            with open("FP.txt", "r") as fr:
                first_line = fr.readline().strip()
            if not first_line.startswith(names[0]):  # Assuming the first name will be on the first line
                f.write(" | ".join(names) + " |\n")  # Write names only if not already written
        except FileNotFoundError:
            # Write the names if the file doesn't exist
            f.write(" | ".join(names) + " |\n")

        # Write the current date only once
        current_date = datetime.now().date()
        f.write(f"Date: {current_date} ")

        # Write attendance for all names in a single line
        for name in names:
            while True:
                present = input(f"Is {name} present today? Enter [P]resent/[A]bsent: ").upper()
                if present in ['P', 'A']:
                    f.write(f"{present} ")  # Write attendance next to each name
                    break  # Valid input, so break out of the inner loop
                else:
                    print("Invalid input. Please enter 'P' for Present or 'A' for Absent.")
        
        f.write("\n")  # Move to the next line after writing all attendance

mark_attendance()


