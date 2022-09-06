const http = require("http");
const marker = "---\n";

const handler = function(req, res) {
    let body = "";
    req.on("data", chunk => { body += chunk; });
    req.on("end", () => {
        res.setHeader("Content-Type", "text/plain");
        body = body.trim();
        if (body.startsWith(marker)) {
            let idx = body.indexOf(marker, marker.length);
            console.log(body.slice(0, idx + marker.length));
            res.end(body.slice(idx + marker.length));
        } else {
            res.end(body);
        }
    });
}

const server = http.createServer(handler);
server.listen(8000, "localhost", () => {
    console.log("Server running");
});
