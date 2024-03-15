const fs = require("node:fs");
console.log("first");
const fileContent = fs.readFileSync("./file.txt", "utf-8");
console.log(fileContent);
console.log("second");
fs.readFile("./file.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

console.log("third");

fs.writeFileSync("./greet.txt", "hello world !!!!");

fs.writeFile(
  "./greet.txt",
  "hELLO ,MY SELF SOUMI ....",
  { flag: "a" },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file written");
    }
  }
);
