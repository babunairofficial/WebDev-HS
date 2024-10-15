/*
Write to a file
Using the fs library again, try to write to the contents of a file.
*/

// Importing the 'fs' module's promises API to work with filesystem asynchronously
const fs = require('fs').promises;

// Async function to write content to a file
async function writeToFile(filename, content) {
  try {
    // Using await to write the content to the specified file asynchronously
    await fs.writeFile(filename, content, 'utf8');
    
    // Log success message once file has been written successfully
    console.log('File has been written successfully');
  } catch (error) {
    // Catch and handle any errors that occur during the write operation
    console.error('Error writing to file:', error);
  }
}

// Usage example
// Calling the writeToFile function with a filename and content to be written
writeToFile('a.txt', 'Hello, world!');
