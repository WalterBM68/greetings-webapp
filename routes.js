
module.exports = Routes = (greetingDb, greetings) => {
    async function showTheInterface(req, res){
        const count = await greetingDb.getCounter();
        res.render("index", { 
            count      
        });
    }
    async function postInterface(req, res){
        const {name, language} = req.body;
        greetings.setName(
            name
        );
        greetings.setLanguage(
            language
        );
        greetings.getName() !== "" ? greetingDb.storeName(greetings.getName()) : '';
        const count = await greetingDb.getCounter();
        const theUser = greetings.greetingTheUser();
        res.render('index', {
           count,
           theUser
        })
        // res.redirect('/');
    }

    async function getInterface(req, res){
        const {name, language} = req.body;
        greetings.setName(
            name
        );
        greetings.setLanguage(
            language
        );
        greetings.getName() !== "" ? greetingDb.storeName(greetings.getName()) : '';
        const count = await greetingDb.getCounter();
        const theUser = greetings.greetingTheUser();
        res.render('index', {
           count,
           theUser
        })
        // res.redirect('/');
    }

    async function showGreetedNames(req, res){
        const allNames = await greetingDb.getStoredNames();
        res.render('greeted', {
            allNames
        });
    }

    async function countForEachUser(req, res){
        const name = req.params.name;
        const username = await greetingDb.getUser(name);
        const greetMsg = username.count  > 1 ? username.name + " you have been greeted " + username.count + " times " : 
            username.name + " you have been greeted " + username.count + " time ";

        res.render('counter',{
          greetMsg
        });
    }

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
        getInterface  
    }
} 