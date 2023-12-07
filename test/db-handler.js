const mongoose = require("mongoose");

/**
 * Connect to the database.
 */

module.exports.connect = async () => {
  const uri = "mongodb+srv://munirkhaliqyar:2vmJgN0QHO0wDFfJ@cluster0.k5q7web.mongodb.net/test";

  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  await mongoose.connect(uri, mongooseOpts);
};

/**
 * Drop database and close the connection.
 */

module.exports.closeDatabase = async () => {
  //await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  console.log("closing db");
};

/**
 * Remove all the data for all db collections.
 */

module.exports.clearDatabase = async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany();
  }
  console.log("clearing db");
};
