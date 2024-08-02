import http from "node:http";
import fs from "node:fs";
import "dotenv/config";

const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, {"Content-Type": "text/html"});
      fs.createReadStream("index.html").pipe(res);
    } else if (req.url === "/about") {
      res.writeHead(200, {"Content-Type": "text/html"});
      fs.createReadStream("about.html").pipe(res);
    } else if (req.url === "/contact-me") {
      res.writeHead(200, {"Content-Type": "text/html"});
      fs.createReadStream("contact-me.html").pipe(res);
    } else {
      res.writeHead(404, {"Content-Type": "text/html"});
      fs.createReadStream("404.html").pipe(res);
    }
  })
  .listen(8000);
