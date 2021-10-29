const mongoose = require("mongoose");
const chalk = require("chalk");

module.exports = function () {
  mongoose
    .connect(process.env.DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(chalk.yellow("Connecting to MongoDB")));
};
