const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const authRoute = require("./routes/auth");

app.use(express.json());
app.use(morgan("dev"));
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log("err......", err));

app.use("/api/auth", authRoute);

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
