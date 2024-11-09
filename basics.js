// console.log(__filename);
// console.log(__dirname);

const path = require("path");
// console.log(path.basename(__filename));
// console.log(path.join(__dirname, "api","script.js"));
     //result :- C:\nodetest\api\script.js

const fs = require("fs");

// 1. to create a folder
// fs.mkdir(path.join(__dirname, "/api"), {}, (err) => {
//   if (err) throw err;
// });

// fs.mkdir(path.join(__dirname, "/api", "api.txt" ), {}, (err) => {
//     if (err) throw err;
//   });

//2. to delete a folder
//recursive: true --this is for deleting folder inside folder

  // fs.rmdir(path.join(__dirname, "/api2"), { recursive: true }, (err) => {
  //   if (err) throw err;
  // });
  // fs.rm(path.join(__dirname, "/api"), { recursive: true }, (err) => {
  //   if (err) throw err;
  // });


//3. write something in a file
const user = "izan";

  // fs.writeFile(path.join(__dirname, "/api", "api.txt"), "User Name: Navas", (err) => {
  //   if (err) throw err;
  // });

//   fs.writeFile(path.join(__dirname, "/api2", "api.txt"), `User Name: ${user}`, (err) => {
//     if (err) throw err;
//   });


// Appending Data: fs.appendFile appends the specified text to api2.txt. If api2.txt doesn’t exist, appendFile will create it automatically.
  // fs.appendFile(path.join(__dirname, "/api", "api2.txt"), `\n User Name: ${user}`, (err) => {
  //   if (err) throw err;
  // });

  fs.readFile(path.join(__dirname, "/api", "api.txt"), "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });




// event in node


// EventEmitter is a class provided by the events module in Node.js. It allows for creating, emitting, and listening for custom events.
const EventEmitter = require("events");   // EventEmitter is actually a class

// Here, an instance of EventEmitter is created. This object will manage the custom events.
const emitter = new EventEmitter();  // all class need 1 object, thats y


// The emitter.on method registers a listener for the "message" event. When this event is fired, it will execute the provided callback function, which in this case logs the data passed to it.
emitter.on("message", (data) => {
  console.log(data);
});     // retrive an event

emitter.on("logout", (data) => {
    console.log(data);
  });
// The emit method fires the "message" event, sending an object { text: "User Logged In", id: 1 } as data to any listeners for this event.
emitter.emit("message", { text: "User Logged In", id:1 });  // fire an event / pass an event

emitter.emit("logout", { text: "User Logged OUT" });  // fire an event