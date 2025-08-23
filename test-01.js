import fs from "fs";

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
