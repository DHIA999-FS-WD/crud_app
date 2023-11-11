const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dhia:dhia123@cluster0.z2r2j4n.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("data base connected");
  } catch (error) {
    console.log("faild to connect to database  ");
  }
};
module.exports = connectDB;
