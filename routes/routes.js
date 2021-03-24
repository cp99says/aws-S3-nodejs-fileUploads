const express = require("express");
const app = express();
app.use(express.json());
var aws = require("aws-sdk");
var bodyParser = require("body-parser");
const multer = require("multer");
const multerS3 = require("multer-s3");
require("dotenv/config");

aws.config.update({
  secretAccessKey: process.env.secretaccesskey,
  accessKeyId: process.env.accesskeyid,
  region: "ap-south-1",
});

var s3 = new aws.S3();
var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "cmsbackend",
    key: function (req, file, cb) {
      console.log(file);
      cb(null, file.originalname);
    },
  }),
});

app.post("/file", upload.array("file", 1), function (req, res, next) {
  res.send("file uploaded");
});

module.exports = app;
