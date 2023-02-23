const bodyParser = require("body-parser");
const express = require("express");

const https = require("https");
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("/publick"));
app.use("/publick", express.static(__dirname + "/publick"));

app.get("/", (req, res) => {
  res.render("main");
});

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});
