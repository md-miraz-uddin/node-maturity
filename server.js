const express = require("express");
const app = express();
const server = require("http").Server(app);

app.use(express.static("public"));

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

//start the server
server.listen(8080);
