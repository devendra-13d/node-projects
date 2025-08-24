import { Console, error } from "console";
import fs from "fs";

/**
 * Error Handling
 */

// ==================Synchronous ==========================
try {
    throw new Error(`something went wrong`);
}
catch(err) {
    console.log(`Caught:${err}`)
}

let i = 2;
let j = 5;
if (i < j) {
    try {
        if (i == 0) {
            throw new Error (`Division By Zeror error:i=${i}`)
        };
        let operation = j / i;
        console.log(`result:${operation}`)
    } catch (err) {
        console.log(`Caught:${err}`);
    }
};

// ============================ASYNCH CALLBACK===============================
fs.readFile("./sample.txt", "utf8", (error, data) => {
    if (error) {
        console.error(`Error reading file:${error}`);
        return error;
    }
    console.log(`data:${data}`);
    return data;
})

// =====================================ASYNCH AWAIT ========================
const hello = async () => {
    try {
        const data = await fs.promises.readFile("./sample.txt", "utf8");
        console.log(`data:${data}`)
        return data;
    } catch (error) {
        console.log(`Error:${error}`);
        return error;
    }
};
hello();