// tuxxis-xufCof-3hitti  Password for Mongodb

//string = mongodb+srv://chinmay:<password>@collabme.wqvc3sf.mongodb.net/?retryWrites=true&w=majority

const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://chinmay:tuxxis-xufCof-3hitti@collabme.wqvc3sf.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Connected to MongoDb");
  })
  .catch((err) => {
    console.log(err);
  });

