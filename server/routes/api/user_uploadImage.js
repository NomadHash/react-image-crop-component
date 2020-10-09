const express = require("express");
const router = express.Router();
const multer = require("multer");

router.get("/", (req, res) => {
  return res.json({
    success: true,
  });
});

module.exports = router;
