// fs promise API
// import * as fs from 'fs/promises';
const fs = require('fs').promises;
const path = require('path');

async function readFile() {
  try {
    // const data = await fs.readFile('readme.md');
    const data = await fs.readFile(
      path.join(__dirname, '/api', 'api.txt'),
      'utf8'
    ); // Actual Data
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}



readFile();



// Using fs.promises allows you to work with file system functions that return promises rather than using callbacks.

// utf8 is an encoding standard used to represent text. It stands for "Unicode Transformation Format, 8-bit" and is one of the most widely used text encoding formats on the web. Here’s what makes it notable: