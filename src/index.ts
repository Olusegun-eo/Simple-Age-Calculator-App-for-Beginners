// Import 'readline' to allow you to ask questions in the terminal
//It is used to collect input from the user via keyboard and store it in a variable
import readline from "readline";

// Set up the tool to ask user questions
//This is to store input from the user, and to display output to the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to validate user input: For user to only supply number
const validateInput = (input: string, min: number, max: number) => {
  const value = parseInt(input); //This is to convert input from the user to NUMBER
  if (isNaN(value) || value < min || value > max) { //This is to Check if the input IS NOT A NUMBER
    throw new Error(
      `Invalid input. Please enter a number between ${min} and ${max}.`
    );
  }
  return value;
};

// We will store all the answers here
let birthYear: number;
let birthMonth: number;
let birthDay: number;

// Get today's date
const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth() + 1; // Months are zero-indexed
const currentDay = today.getDate();

// Step-by-step questions
console.log("Welcome to the Simple Age Calculator!");

// Ask for birth year
rl.question("Enter your birth year (e.g., 2000): ", (yearAnswer) => {
  try {
    birthYear = validateInput(yearAnswer, 1900, currentYear);
  } catch (error) {
    console.error((error as Error).message);
    rl.close();
    return;
  }

  // Ask for birth month
  rl.question("Enter your birth month (1-12): ", (monthAnswer) => {
    try {
      birthMonth = validateInput(monthAnswer, 1, 12);
    } catch (error) {
      console.error((error as Error).message);
      rl.close();
      return;
    }

    // Ask for birth day
    rl.question("Enter your birth day (1-31): ", (dayAnswer) => {
      try {
        birthDay = validateInput(dayAnswer, 1, 31);
      } catch (error) {
        console.error((error as Error).message);
        rl.close();
        return;
      }

      // 🧮 Now calculate the age

      let age = currentYear - birthYear;

      // If the birthday hasn't happened yet this year, subtract 1
      if (currentMonth < birthMonth) {
        age = age - 1;
      } else if (currentMonth === birthMonth) {
        if (currentDay < birthDay) {
          age = age - 1;
        }
      }

      // Show the result
      console.log("You are " + age + " years old.");

      // Close the question tool
      rl.close();
    });
  });
});
