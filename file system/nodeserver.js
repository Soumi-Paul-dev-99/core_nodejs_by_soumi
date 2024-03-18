const http = require("node:http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/Plain" });
  res.end("hello world");
});
server.listen(3000, () => {
  console.log(`Server running on the port http://localhost:${3000}`);
});
