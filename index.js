const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const flash = require('express-flash');
const session = require('express-session');
const app = express();
const pgPromise = require("pg-promise");
const pgp = pgPromise();
const Greet = require("./greetings-app");
const Routes = require('./routes');
const GreetingDb = require('./database');

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

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://postgres:pg123@localhost:5432/greetings';
const config = {
  connectionString: DATABASE_URL
}
const db = pgp(config);
const greetings = Greet();
const greetingDb = GreetingDb(db);
const routes = Routes(greetingDb, greetings);

app.get("/", routes.showTheInterface)
app.get("/greet", routes.getInterface);
app.post("/greet", routes.postInterface);
app.get('/greeted', routes.showGreetedNames);
app.get("/counter/:name", routes.countForEachUser);
app.post('/clear', routes.clearingGreetedUsers);

const PORT = process.env.PORT || 5001;
app.listen(PORT, function(){
  console.log("The greetings app started at port:", PORT);
});
