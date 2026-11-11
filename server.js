const http = require("http");
const port = Number(process.env.PORT || 18789);
http.createServer((req, res) => {
  res.writeHead(req.url === "/health" ? 200 : 404, { "content-type": "text/plain" });
  res.end(req.url === "/health" ? "ok" : "not found");
}).listen(port, "0.0.0.0", () => console.log("probe listening on " + port));
