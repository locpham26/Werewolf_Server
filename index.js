const express = require("express");
const chalk = require("chalk");
const cors = require("cors");
const http = require("http");

const app = express();
const server = http.createServer(app);
app.use(cors());

require("./start/apis")(app);
require("./start/socket")(server);
require("./start/db")();

server.listen(process.env.PORT, () =>
  console.log(chalk.yellow(`Listening on port ${process.env.PORT}...`))
);
