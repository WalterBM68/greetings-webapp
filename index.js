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
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);
app.use(flash());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res){
  res.render("index", {
    settings: greetings.getName(),
    names: greetings.returnMessage(),
    greetedNames: greetings.showTheCounter()
  }); 
});

app.post("/greet", function(req, res){
  greetings.setName(
    req.body.name
  );
  req.flash('info', greetings.displayigErrorMessages());
  greetings.greetingTheUser(req.body.radioBtn);
  
  res.redirect("/");
});

app.get('/greeted', function(req, res){
  res.render('greeted', {
    greeted: greetings.returnDuplicates(),
  });
});

app.get("/counter/:name", function(req, res){
  const { name } = req.params.name;
  greetings.countingAllGreetedUsers(name);

  res.render('counter',{
    user: name,
    count: greetings.returnAllGreetedUsers(), 
  });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, function(){
  console.log("The greetings app started at port:", PORT);
});

