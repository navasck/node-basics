// in Node.js, streams are a powerful feature used to handle reading and writing data efficiently. Streams can handle large amounts of data, enabling you to process data without needing to load it entirely into memory.


const fs = require('fs');
const path = require('path');

// Create a readable stream
// This creates a readable stream that reads from source.txt. The 'utf8' encoding is specified to handle text data.
const readableStream = fs.createReadStream(
  path.join(__dirname, 'source.txt'),
  'utf8'
);

// Create a writable stream
// This creates a writable stream that writes to destination.txt.
const writableStream = fs.createWriteStream(
  path.join(__dirname, 'destination.txt')
);


// This pipes the data from the readable stream (source.txt) to the writable stream (destination.txt).
readableStream.pipe(writableStream);

// Event when the readable stream finishes
// We listen for the 'end' event on the readable stream to log when the file reading and writing is complete.
readableStream.on('end', () => {
  console.log(
    'Reading from source.txt and writing to destination.txt completed!'
  );
});

// Event when an error occurs
readableStream.on('error', (err) => {
  console.log('Error reading the file:', err);
});

writableStream.on('error', (err) => {
  console.log('Error writing to the file:', err);
});
