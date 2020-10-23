// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'))


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgerController.js");

app.use(routes);

app.listen(PORT, function () {
      console.log("App listening on PORT " + PORT);
    });
