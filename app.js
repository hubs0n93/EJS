// Require
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

const app = express();

let items = ["Buy food", "Cook Food"];
let workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public"));

console.log("My print:", date.getDate(), date.getDay())
// *          ------ HOME route  "/" ------         *
// GET
app.get("/", function(req, res){
  let day = date()
  res.render("list", {listTitle: day, newItems: items});
});
// POST
app.post("/", function(req, res) {
  if (req.body.list === "Work List"){
    workItems.push(req.body.addItem);
    res.redirect("/work");
  } else {
  items.push(req.body.addItem);
  res.redirect("/");
  }
});

// *          ------ '/Work' route    ------         *
// get work
app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", newItems: workItems});
});

// *          ------ '/About' route    ------         *
// get about
app.get("/about", function(req, res){
  res.render("about");
});

// **** LISTEN *****
app.listen(3000, function(){
  console.log("Server started on port 3000");
});
