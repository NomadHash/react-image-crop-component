const mongoose = require("mongoose");
const config = requre("../config");

const imageSchema = mongoose.Schema({
  profileImage: {
    type: String,
    default: "",
  },
});

const Image = mongoose.model("Image", imageSchema);
module.exports = Image;
