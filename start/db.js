const mongoose = require("mongoose");
const chalk = require("chalk");

const connectionString =
  "mongodb+srv://Kjae:Kjaeisfun26&@werewolfcluster.vtvz3.mongodb.net/werewolf?retryWrites=true&w=majority";

module.exports = function () {
  mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(chalk.yellow("Connecting to MongoDB")));
};
