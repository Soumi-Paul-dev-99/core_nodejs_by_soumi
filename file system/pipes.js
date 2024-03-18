const fs = require("node:fs");
const zlib = require("node:zlib");
const gzib = zlib.createGzip();
const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

readableStream.pipe(gzib).pipe(fs.WriteStream("./file2.txt.gz"));
const writableStream = fs.createWriteStream("./file2.txt");
readableStream.pipe(writableStream);
