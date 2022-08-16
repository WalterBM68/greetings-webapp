const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const Greet = require("./greetings-app");
const flash = require('express-flash');
const session = require('express-session');

const app = express();
const greetings = Greet();

app.engine("handlebars", exphbs.engine({ extname: "handlebars", layoutsDir: __dirname + '/views/layouts' }));
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
    greetedNames: greetings.showTheCounter(),
    settings: greetings.getName(),
    theUser: greetings.greetingTheUser()
  }); 
});

app.post("/greet", function(req, res){
  const name = req.body.name;
  const language = req.body.language;
  greetings.setName(
    name
  );
  greetings.setLanguage(
    language
  );
  greetings.storingNames();
  req.flash('info', greetings.displayigErrorMessages());
  res.redirect('/')
});

app.get('/greeted', function(req, res){
  res.render('greeted', {
    greeted: greetings.returnNoDuplicates(),
  });
});

app.get("/counter/:name", function(req, res){
  const name = req.params.name;
  res.render('counter',{
    user: name,
    count: greetings.countingAllGreetedUsers(name)
  });
});

app.post('/clear', function(req, res){
  greetings.clearData();
  res.redirect('/');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, function(){
  console.log("The greetings app started at port:", PORT);
});
