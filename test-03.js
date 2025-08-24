/**
 *  Streams
 *  Streams process data piece by piece instead of loading everything into memory
 */
import { error } from "console";
import fs from "fs";

const readStream = fs.createReadStream("./sample.txt", "utf8");

readStream.on("data", (chunk) => {
    console.log(`Received Chunk: ${chunk}`);
});

readStream.on("end", () => {
    console.log(`Finished reading file`);
});

readStream.on("error", (error) => {
    console.log(`Error reading file:${error}`);
});

const writeStream = fs.createWriteStream("./sample.txt");
writeStream.write("\n I added second line here.");
writeStream.end("This is last line.\n");

writeStream.on("finish", () => {
    console.log(`All data written succesfully`);
});
writeStream.on("error", (error) => {
    console.log(`Error in writing file:${error}`);
});

