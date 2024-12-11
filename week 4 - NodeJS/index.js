// function sum(a,b){
//     return a+b;
// }
// const ans = sum(1,3);
// console.log(ans);

//Assignment#1 - Create a CLI that lets the user specify a file path and the nodejs process counts the number of lines inside it.

// Import the built-in Node.js file system module for file operations
const fs = require('fs');

// Import the Commander.js library for creating command-line interfaces
const {Command} = require('commander');

// Create a new Command instance to define the CLI application
const program = new Command();

// Configure the CLI application with a name, description, and version
program.name('counter')
       .description('CLI to do file based tasks')
       .version('0.8.0');

// Define a command called 'count' with a description and an argument
program.command('count')
       // Describe the purpose of the command
       .description('Count the number of lines in a file')
       // Specify the required file argument
       .argument('<file>', 'file to count')
       // Define the action to be performed when the command is run
       .action((file) => {
           // Read the file asynchronously with UTF-8 encoding
           fs.readFile(file, 'utf-8', (err, data) => {
               // Check if there's an error reading the file
               if(err){
                   // Log any errors that occur during file reading
                   console.log(err);
               } else {
                   // Split the file contents by newline and count the number of lines
                   const lines = data.split('\n').length;
                   
                   // Print the number of lines in the file
                   console.log(`There are ${lines} lines in ${file}`);
               }
           });
       });

// Parse the command-line arguments
program.parse();