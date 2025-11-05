import fs from "fs";
import fibo from "./fibo.js";

const n = 10;
const result = fibo(n);

const outputPath = "./data/fibonacci.txt";

// make sure folder exists
if (!fs.existsSync("./data")) {
  fs.mkdirSync("./data");
}

fs.writeFileSync(outputPath, `Fibonacci (${n} terms): ${result.join(", ")}`);

console.log(`Succefully inside Fibonacci series write ${outputPath}`);
