console.log("its Running");

function newFunc(){
    return 10;
}

const islwinner = () => {
     return "KeralaBlasters";
}

// setInterval(() => {
//     console.log("its Running after interval");
// }, 2000);

const interval = setInterval(() => {
    console.log("its Running after interval");
}, 2000);

setTimeout(() => {
   clearInterval(interval);
}, 10000);

setTimeout(() => {
    console.log("its Running timeout");
}, 6000);


console.log(newFunc());
console.log(islwinner());
console.log(global);


const logger = require("./utils");
console.log(logger());