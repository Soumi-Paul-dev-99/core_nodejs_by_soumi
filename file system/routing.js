const http = require("node:http");
const fs = require("node:fs");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/Plain" });
    res.end("home page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/Plain" });
    res.end("About page");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-type": "Application/json" });
    res.end(
      JSON.stringify({
        firstName: "Soumi",
        lastName: "Paul",
      })
    );
  } else {
    res.writeHead(404);
    res.end("Page not found");
  }
});
server.listen(3000, () => {
  console.log(`server running on the port ${3000}`);
});
