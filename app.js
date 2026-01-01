const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());
mongoose.connect(`${process.env.API_URL}/UsersDb`).then(() => {
  console.log("connected to server");
});

const userRouter = require("./src/Controllers/Users/UserController");
app.use("/api/users", userRouter);

app.listen(process.env.PORT, () => {
  console.log("running");
});
