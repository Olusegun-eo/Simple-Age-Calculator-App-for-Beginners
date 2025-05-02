// Import 'readline' to allow asking questions in the terminal
import readline from 'readline';

// Set up the tool to ask user questions
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// We will store all the answers here
let birthYear: number;
let birthMonth: number;
let birthDay: number;
let currentYear: number;
let currentMonth: number;
let currentDay: number;

// Step-by-step questions
console.log(" Welcome to the Simple Age Calculator!");

// Ask for birth year
rl.question("Enter your birth year (e.g., 2000): ", (yearAnswer) => {
  birthYear = parseInt(yearAnswer);

  // Ask for birth month
  rl.question("Enter your birth month (1-12): ", (monthAnswer) => {
    birthMonth = parseInt(monthAnswer);

    // Ask for birth day
    rl.question("Enter your birth day (1-31): ", (dayAnswer) => {
      birthDay = parseInt(dayAnswer);

      // Ask for current year
      rl.question("Enter the current year (e.g., 2025): ", (currentYearAnswer) => {
        currentYear = parseInt(currentYearAnswer);

        // Ask for current month
        rl.question("Enter the current month (1-12): ", (currentMonthAnswer) => {
          currentMonth = parseInt(currentMonthAnswer);

          // Ask for current day
          rl.question("Enter the current day (1-31): ", (currentDayAnswer) => {
            currentDay = parseInt(currentDayAnswer);

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
            console.log(" You are " + age + " years old.");

            // Close the question tool
            rl.close();
          });
        });
      });
    });
  });
});
