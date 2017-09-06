const path = require("path");
const express = require("express");

const routes = require("./routes/index");

let app = express();


// set the view dir for templates
app.set("views", path.join(__dirname, "views"));
// set view engine to ejs
app.set("view engine", "ejs");

// assert location of public assets
app.use(express.static(path.join(__dirname, "public")));


// use routes
app.use("/", routes);

app.get("/", (req, res) => {
  res.render("index");
});


module.exports = app;
