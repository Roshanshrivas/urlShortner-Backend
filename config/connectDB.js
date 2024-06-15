const mongoose = require("mongoose");

require("dotenv").config();

const connectDB = () => {
  
  mongoose.connect(process.env.DATABASE_URL)
    .then(console.log("DataBase Connect successfully"))
    .catch((error) => {
      console.log(error), 
      console.log("Database connection Error!!");
      process.exit(1);
    });
};

module.exports = connectDB;
