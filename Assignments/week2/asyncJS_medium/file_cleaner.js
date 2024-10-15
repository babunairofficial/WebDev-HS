/*
 * File cleaner
   Read a file, remove all the extra spaces and write it back to the same file.
 */

// Import the built-in 'fs' (file system) module
const fs = require('fs');

// Define a function to clean the contents of a file
const cleanFile = () => {
    // Read the contents of the file asynchronously
    fs.readFile(filePath, 'utf8', (err, data) => {
        // Check if there was an error reading the file
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }

        // Clean the file content:
        // 1. Replace multiple whitespace characters with a single space
        // 2. Remove leading and trailing whitespace
        const cleanedContent = data.replace(/\s+/g, ' ').trim();

        // Write the cleaned content back to the file
        fs.writeFile(filePath, cleanedContent, 'utf8', (err) => {
            // Check if there was an error writing to the file
            if (err) {
                console.error('Error writing to the file:', err);
                return;
            }
            
            // Log a success message if the file was cleaned and written successfully
            console.log("File cleaned successfully.");
        });
    });
};

// Specify the path of the file to be cleaned
const filePath = 'b.txt';

// Call the cleanFile function with the specified file path
cleanFile(filePath);
