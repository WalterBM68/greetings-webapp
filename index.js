const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const Greet = require("./greetings-app");
const flash = require('express-flash');
const session = require('express-session');

const app = express();
const greetings = Greet();

app.engine("handlebars", exphbs.engine({ extname: "handlebars", defaultLayout: false }));
app.set("view engine", "handlebars");

app.use(express.static("public"));
// app.use(flash());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res){
  res.render("index", {
    settings: greetings.getName(),
    greeted: greetings.returnMessage()
  });
  // req.flash('info', 'Welcome');
});

app.post("/greeted", function(req, res){
  greetings.setName(
    req.body.name
  );
  greetings.greetingTheUser(req.body.radioBtn);
  
  res.redirect("/");
});

app.get("/counter", function(req, res){});

const PORT = process.env.PORT || 5001;

app.listen(PORT, function(){
  console.log("The greetings app started at port:", PORT);
});
