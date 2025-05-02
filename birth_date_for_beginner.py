# Basic Python console app to calculate age from date of birth
# This app is designed for beginners with detailed comments

from datetime import datetime  # Import the datetime module to work with dates

def calculate_age(birthdate):
    """
    Calculate age based on birthdate string in YYYY-MM-DD format.
    """
    # Convert the birthdate string to a datetime object
    birth_date = datetime.strptime(birthdate, "%Y-%m-%d")
    # Get today's date
    today = datetime.today()
    # Calculate age by subtracting birth year from current year
    age = today.year - birth_date.year
    # Adjust age if birthday hasn't occurred yet this year
    if (today.month, today.day) < (birth_date.month, birth_date.day):
        age -= 1
    return age

# Main function to run the app
if __name__ == "__main__":
    print("Welcome to the Age Calculator App!")  # Greet the user
    # Prompt user to enter their date of birth
    dob = input("Please enter your date of birth (YYYY-MM-DD): ")
    # Calculate age using the function
    age = calculate_age(dob)
    # Display the calculated age
    print(f"You are {age} years old.")
