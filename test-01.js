import fs from "fs";
import crypto from "crypto"

/**
 * Task 01
 */

//Heavy CPU tasks (crypto,compression,xlib)
crypto.pbkdf2("password", "salt", 100000, 64, "sha512", () => {
    console.log("Hasing done"); 
});

//Timers:Node js will to libuv run this after this much time libuv/os will compare with system clock runs
setTimeout(() => console.log("Timer done"), 100);

// Node js gives the tasks like I/O operations,disk,timers,DNS to libuv , which OS level API
fs.readFile("Full_Stack_4_Month_Roadmap.pdf", "utf8", (err, data) => {
    console.log("File read completed");
});

// Node js enviromnet it self completes simple synchronous operation,loops,manipulation and json parsing
let sum = 0;
for (let i = 0; i <= 10; i++){
    sum += i;
}
console.log({ sum });

/**
 * Task 02
 */
console.log("START");

setTimeout(() => {
    console.log("setTimeout callback")
}, 0);

setImmediate(() => {
    console.log("setImmediate Call back")
});

Promise.resolve().then(() => {
    console.log("Promise Resolved");    
});

console.log("END");