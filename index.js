const express = require("express");
const chalk = require("chalk");
const cors = require("cors");
const http = require("http");

const app = express();
const server = http.createServer(app);
app.use(cors());

if (process.env.NODE_ENV !== "production") require("dotenv").config();

require("./start/apis")(app);
require("./start/socket")(server);
require("./start/db")();

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

server.listen(process.env.PORT, () =>
  console.log(chalk.yellow(`Listening on port ${process.env.PORT}...`))
);
