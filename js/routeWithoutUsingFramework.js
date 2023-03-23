const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("A request is made " + req.url);
  if (req.url === "/home" || req.url === "/") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, { "Content-Type": "text/txt" });
    fs.createReadStream(
      "/Users/it012306/Desktop/node/weather-report/modules/weatherDatabase.txt"
    ).pipe(res);
  }
});

server.listen(3002, "127.0.0.1");

