const express = require("express");
const app = express();
const flash = require('express-flash');
const session = require('express-session');

app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);
app.use(flash());

module.exports = Routes = (greetingDb, greetings) => {
    //Home route
    async function showTheInterface(req, res){
        const theUser = greetings.greetingTheUser();
        const count = await greetingDb.getCounter();
        res.render("index", {
            count,
            theUser    
        });
    }

    //Greet route
    async function postInterface(req, res){
        const name = req.body.name;
        const language = req.body.language;
        if(name && language){
            let user = name.charAt(0).toUpperCase() + name.slice(1);
            greetingDb.storeName(user);
            greetings.getLanguage(user, language);
        }else{
            req.flash('info', greetings.displayigErrorMessages(name, language));
        } 
        res.redirect('/');
    }

    //Greeted names route
    async function showGreetedNames(req, res){
        let allNames = await greetingDb.getStoredNames();
        res.render('greeted', {
            allNames
        });
    }

    //Count route
    async function countForEachUser(req, res){
        const name = req.params.name;
        const username = await greetingDb.getUser(name);
        const greetMsg = username.count  > 1 ? username.name + " you have been greeted " + username.count + 
            " times " : username.name + " you have been greeted " + username.count + " time ";
        res.render('counter',{
          greetMsg
        });
    }

    //Clearing/deleting route
    async function clearingGreetedUsers(req, res){
        await greetingDb.clearingData();
        res.redirect('/');
    }

    return{
        showTheInterface,
        postInterface,
        showGreetedNames,
        countForEachUser,
        clearingGreetedUsers, 
    }
} 
