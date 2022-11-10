const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      process.env.MONGO_URI,
      (err, db) => {
        if (err) throw err;
        db.collection("products").createIndex({
          title: "text",
        });
      },
      {
        useNewUrlParser: true,
      }
    );
    console.log(`MongoDb connected: ${connect.connection.host}`.cyan.bold);
  } catch (error) {
    console.log("[err--]", error);
  }
};

module.exports = connectDB;
