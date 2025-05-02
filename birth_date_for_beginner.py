# Simple Age Calculator App for Beginners

# Print a welcome message
print("Welcome to the Simple Age Calculator!")

# Ask the user for their year of birth
birth_year = int(input("Enter your birth year (e.g., 2000): "))

# Ask the user for their birth month
birth_month = int(input("Enter your birth month (1-12): "))

# Ask the user for their birth day
birth_day = int(input("Enter your birth day (1-31): "))

# Ask the user for today's year
current_year = int(input("Enter the current year (e.g., 2025): "))

# Ask the user for today's month
current_month = int(input("Enter the current month (1-12): "))

# Ask the user for today's day
current_day = int(input("Enter the current day (1-31): "))

# Start by calculating the difference in years
age = current_year - birth_year

# If the current month is before the birth month, subtract 1 from age
if current_month < birth_month:
    age = age - 1
# If the current month is the same as the birth month, check the day
elif current_month == birth_month:
    if current_day < birth_day:
        age = age - 1

# Print the result
print("You are", age, "years old.")
