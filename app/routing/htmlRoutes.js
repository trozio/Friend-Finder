let path = require("path");
let express = require("express");
let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

module.exports = function(app){
app.get("/", function(req, res) {

  res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});
}
