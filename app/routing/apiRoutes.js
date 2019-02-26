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



  let userInput = req.body;
  let userResponses = userInput.scores;

  let matchName = "";
  let matchImage = "";
  let totalDifference = 10000;

  for (i = 0; i < friends.length; i++) {

	  let diff = 0;
	  for (j = 0; j < userResponses.length; j++) {
		  diff += Math.abs(friends[i].scores[j] - userResponses[j]);
	  }

	  if (diff < totalDifference) {
		  totalDifference = diff;
		  matchName = friends[i].name;
		  matchImage = friends[i].photo;
	  }
  }

    friends.push(userInput);
	res.json({status: "OK", matchName: matchName, matchImage: matchImage});


});
}
