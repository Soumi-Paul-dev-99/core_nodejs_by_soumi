const http = require("node:http");
const server = http.createServer((req, res) => {
  const superHero = {
    firstName: "Soumi",
    lastName: "Paul",
  };
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(superHero));
});
server.listen(3000, () => {
  console.log(`server running on the port http://localhost:${3000}`);
});
