import { readFile } from "fs/promises";
import fs from "fs";

// ----------------- CALLBACKS EXAMPLE 1 -----------------
function sum(a, b, display) {
    let result = a + b;
    console.log(`Sum inside sum(): ${result}`);
    display(result);
};

function display(result) {
    let text = "Devendra";
    console.log(`Sum:${result}\tName:${text}`);
};

let a = 4, b = 5;
sum(a, b, display);

// ----------------- CALLBACKS EXAMPLE 2 -----------------
fs.readFile("../Full_Stack_4_Month_Roadmap.pdf", (error, data) => {
    if (error) {
        return console.log(`Error: ${error.message}`);
    }
    console.log(`Success: File reading completed, size = ${data.length} bytes`);
});

// ----------------- PROMISES EXAMPLE 3 -----------------
// readFile("../Full_Stack_4_Month_Roadmap.pdf")
//     .then(data => console.log(`File reading completed, size = ${data.length} bytes`))
//     .catch(error => console.log(`Error: ${error.message}`));


// --------------------ASYNC AWAIT 4 ------------------------
const fileRead =async () => {
    try {
        const data = await readFile("../Full_Stack_4_Month_Roadmap.pdf", "utf8");
        console.log(`data ${data}`)
    } catch (error) {
        console.log(error)
    }
};
fileRead();
