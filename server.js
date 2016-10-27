var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));

var controllers = require("./controllers");

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/view/index.html');
});

app.get('/api', controllers.api.index);

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
