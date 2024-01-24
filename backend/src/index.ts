import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`App is listening on PORT: ${PORT}`);
});
