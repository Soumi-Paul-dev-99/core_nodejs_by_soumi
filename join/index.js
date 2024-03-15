const path = require("path");
console.log(path.join("folder1", "folder2", "index.html"));
console.log(path.join("/folder1", "//folder2", "/index.html"));
console.log(path.join("/folder1", "folder2", "index.html"));
console.log(path.join("/folder1", "/folder2", "../index.html"));
console.log(path.join(__dirname, "data.json"));

console.log(
  "hello world !  difference between join method   and resolve method"
);

console.log(path.resolve("folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "//folder2", "/index.html"));
console.log(path.resolve("/folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "/folder2", "../index.html"));
console.log(path.resolve(__dirname, "data.json"));
