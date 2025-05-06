import readline from "readline";

// Set up the tool to ask user questions
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to validate user input: For user to only supply number
const validateInput = (input: string, min: number, max: number) => {
  const value = parseInt(input);
  if (isNaN(value) || value < min || value > max) {
    return false; // Invalid input
  }
  return true; // Valid input
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

console.log("Welcome to the Simple Age Calculator!");

// Ask for birth year
function askBirthYear() {
  rl.question("Enter your birth year (e.g., 2000): ", (yearAnswer) => {
    if (validateInput(yearAnswer, 1900, currentYear)) {
      birthYear = parseInt(yearAnswer);
      askBirthMonth(); // Proceed to the next question
    } else {
      console.log(
        `Invalid input. Please enter a valid year between 1900 and ${currentYear}.`
      );
      askBirthYear(); // Ask again if invalid
    }
  });
}

// Ask for birth month
function askBirthMonth() {
  rl.question("Enter your birth month (1-12): ", (monthAnswer) => {
    if (validateInput(monthAnswer, 1, 12)) {
      birthMonth = parseInt(monthAnswer);
      askBirthDay(); // Proceed to the next question
    } else {
      console.log("Invalid month. Please enter a number between 1 and 12.");
      askBirthMonth(); // Ask again if invalid
    }
  });
}

// Ask for birth day
function askBirthDay() {
  rl.question("Enter your birth day (1-31): ", (dayAnswer) => {
    if (validateInput(dayAnswer, 1, 31)) {
      birthDay = parseInt(dayAnswer);
      calculateAge(); // Now calculate the age
    } else {
      console.log("Invalid day. Please enter a number between 1 and 31.");
      askBirthDay(); // Ask again if invalid
    }
  });
}

// Calculate the age
function calculateAge() {
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
}

// Start the process by asking for the birth year
askBirthYear();
