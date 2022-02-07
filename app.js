const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const docs = require(__dirname + "/modules/docs.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("index", { objects: docs });
});

const route = process.env.PORT || 3000;

app.listen(route, function () {
  console.log("Server started at port 3000");
});
