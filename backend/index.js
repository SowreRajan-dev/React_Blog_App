const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log("err......", err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/category", categoryRoute);
app.use("/images", express.static(path.join(__dirname, "/images")));

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
