var express = require("express");

var app = express();
var PORT = 3010;
//listener
app.listen(PORT, function () {
    console.log("App listening on PORT:" + PORT);
});