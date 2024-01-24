import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://atc19168:Aakash11@cloudkitchen.b1ibgjt.mongodb.net/cloudkitchen"
    )
    .then((data) => {
      console.log(`MongoDB is connected to host ${data.connection.host}`);
    })
    .catch((error) => {
      console.log(console.error(error));
    });
};

export default connectDB;
