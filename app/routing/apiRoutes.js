let friends = require("../data/friends.js");
let express = require("express");
let app = express();
let path = require("path");

let friend = function Friend(name, photo, scores){
	this.name = name,
	this.sphoto = photo,
	this.scores = scores
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

module.exports = function(app){
app.get("/api/friends", function(req, res) {
  res.json(friends);
});

app.post("/api/friends", function (req, res) {
	console.log('reserve request submitted');
	console.log(req.body);
let newFriend = req.body;

  friends.push(newFriend);
  res.json(friends);

});
}
