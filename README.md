# Age Calculator (TypeScript Console App)

This is a beginner-friendly TypeScript app that asks for your **date of birth** and calculates your **current age**.

Project: software-dev


How create a typescript project on Vscode

Create a new project directory:

mkdir my-typescript-project
cd my-typescript-project



Initialize a new Node.js project:
npm init -y


Install TypeScript and required dependencies:
File Structure/ Project Structure: Here's the recommended project structure:


├── src/
│   └── index.ts (This is the main app))
├── package.json
├── tsconfig.json
└── README.md

THE PURPOSE OF THE ABOVE FILES

index.ts	The main TypeScript file that runs the logic. It gets input, calculates age, and shows output.


package.json	Tells Node.js how to run the app, what dependencies (like ts-node) are needed, and metadata about the project.



tsconfig.json	Configuration file for TypeScript. It tells the compiler how to convert TypeScript code into JavaScript



README.md	A friendly guide for any developer who opens your project — explains how to run it, install it, and upload to GitHub.



node_modules/ (created after npm install)	Folder that stores all your libraries/dependencies like ts-node. You don't manually edit this.

How to Upload to GitHub
Step 1: Initialize Git (if not already): git init

Step 2: Add Files and Commit: git add . [To add all the Files]
git commit -m "Initial commit - Age Calculator in TypeScript"



Step 3: Create a New Repo on GitHub
Go to: https://github.com

Click New Repository

Name it: age-calculator-ts

Do not initialize with README (you already have one)

Step 4: Push Your Code:
git remote add origin https://github.com/YOUR_USERNAME/age-calculator-ts.git
git branch -M main
git push -u origin main

Notes
This project uses ts-node to run TypeScript directly without compiling first.

Make sure your input matches the format YYYY-MM-DD.



## How to Run the App IF You Clone it

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/age-calculator-ts.git
cd age-calculator-ts


### 2.
Install Dependencies
Make sure you have Node.js installed. Then run: 
npm install

Confirm yo have node installed run: 
"node --version" ====>Check the version, else install node. Run above 

### 3. Run the App
npm start

You’ll be prompted to enter your date of birth (format: YYYY-MM-DD). The app will calculate your age and display it.
