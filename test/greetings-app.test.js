const assert = require('assert');
const GreetApp = require("../greetings-app");
// const pgPromise = require("pg-promise");
// const pgp = pgPromise();

// const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://postgres:pg123@localhost:5432/greetings';
// const config = {
//     connectionString: DATABASE_URL
// }
// const db = pgp(config);

describe('The Greeting App', function(){
    it('It should be able to set the name', function(){
        const greet = GreetApp();
        greet.setName('Walter');
        assert.equal('Walter', greet.getName());
    });

    it("It should print 'Name is required!' message if the user didn't enter his or her name", function(){
        const greet = GreetApp();
        greet.setName('');
        assert.equal('Name is required!', greet.displayigErrorMessages());
    });

    it("It should print 'Enter the name not the number' message if the user entered the number", function(){
        const greet = GreetApp();
        greet.setName(5);
        assert.equal('Enter the name not the number', greet.displayigErrorMessages());
    });

    it("It should print 'Please select the language' if the radio btn is not clicked", function(){
        const greet = GreetApp();
        greet.setName('Boss');
        assert.equal('Please select the language', greet.displayigErrorMessages());
    });

    it('It should be able to greet the user in English', function(){
        const greet = GreetApp(); 
        greet.setName('Walter');
        assert.equal('Hello Walter', greet.greetingTheUser());
    });

    it('It should be able to greet the user in IsiZulu', function(){
        const greet = GreetApp();
        greet.setName('Sipho');
        assert.equal('Sawubona Sipho', greet.greetingTheUser());
    });

    it('It should be able to greet the user in Sepedi', function(){
        const greet = GreetApp();
        greet.setName('Kgotso');
        assert.equal('Thobela Kgotso', greet.greetingTheUser());
    });

    // this.afterAll(function(){
    //    db.$pool.end(); 
    // });

});


/*
beforeEach(async function(){
    await db.none('delete from greet');
});
*/