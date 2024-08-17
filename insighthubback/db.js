const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.DB, connectionParams);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Couldn't connect to the database:", error);
  }
};
