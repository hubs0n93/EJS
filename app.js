const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Buy food", "Cook Food"];
let workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public"));

// *          ------ HOME  "/" ------         *
app.get("/", function(req, res){
  let today = new Date();
  let options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
    };
  let day = today.toLocaleDateString("en-US", options);

  res.render("list", {listTitle: day, newItems: items});
});


app.post("/", function(req, res) {
  if (req.body.list === "Work List"){
    workItems.push(req.body.addItem);
    res.redirect("/work")
  } else {
  items.push(req.body.addItem);
  res.redirect("/")
  }
});

// *          ------ /WORK    ------         *
app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", newItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function(){
  console.log("Server started on port 3000")
});
