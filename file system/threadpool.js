// const fs = require("node:fs");
// console.log("first");

// fs.readFile("./file.txt", "utf-8", (err, data) => {
//   console.log("file content");
// });

// console.log("last");

const crypto = require("node:crypto");
process.env.UV_THREADPOOL_SIZE = 15;
const MAX_CALLS = 14;
const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.log(`Hash: ${i + 1}`, Date.now() - start);
  });
}

// const start = Date.now();
// crypto.pbkdf2Sync("password", "salt", 10000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 10000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 10000, 512, "sha512");
// console.log("Hash :", Date.now() - start);
