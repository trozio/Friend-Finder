let path = require("path");
let express = require("express");
let app = express();


var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

app.listen(PORT, function (err) {
  if (err) {
    return console.error(err)
  }

  console.log(`Listening on port ${PORT}.`)
})
