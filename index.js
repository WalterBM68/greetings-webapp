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
    greeted: greetings.returnMessage(),
    counting: greetings.returnNumberOfGreetedUsers(),
    greetedNames: greetings.showTheCounter()
  });
  
  
});

app.post("/greeted", function(req, res){
  greetings.setName(
    req.body.name
  );
  req.flash('info', greetings.displayigErrorMessages());

  greetings.greetingTheUser(req.body.radioBtn);
  greetings.countingAllGreetedUsers();
  
  res.redirect("/");
});

app.get('/greet', function(req, res){
  res.render('greet', {
    names: greetings.returnDuplicates(),
  });

  res.redirect('/');
});

app.get("/counter/:name", function(req, res){
  const name = req.params.name

  res.render('counter',{
    user: name,
    count: greetings.countingAllGreetedUsers(name),
   
  });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, function(){
  console.log("The greetings app started at port:", PORT);
});



