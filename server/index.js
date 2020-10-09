const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const config = require("./config/index");
const { DB_URL, SERVER_PORT } = config;

// * ====================
// *      IMPORT_ROUTES
// * ====================
const userUploadImage = require("./routes/api/user_uploadImage");

// * ====================
// *      MIDDLE_WARE
// * ====================
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ? SET_STATIC
app.use("/uploads", express.static("uploads"));

// * ====================
// *      MONGOOSE
// * ====================
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use(cors());
// * ====================
// *      ROUTES
// * ====================
app.use("/api/upload", userUploadImage);

// ? RUN_SERVER
app.listen(SERVER_PORT, (req, res) => {
  console.log(`Server on port ${SERVER_PORT}`);
});
