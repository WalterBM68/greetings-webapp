/*
const assert = require('assert');
const GreetApp = require("../greetings-app");

describe('The Greeting App', function(){

    it("It should print 'Please enter the name & select a language' if the user press greet btn without a name or language", function(){
        const greet = GreetApp();
        greet.displayigErrorMessages('');
        assert.equal('Please enter the name & select a language', greet.getErrorMsg());
    });

    it("It should print 'Please enter the name' message if the user didn't enter his or her name", function(){
        const greet = GreetApp();  
        greet.displayigErrorMessages('', 'zulu'); 
        assert.equal('Please enter the name', greet.getErrorMsg());
    });

    it("It should print 'Please select the language' if the radio btn is not clicked", function(){
        const greet = GreetApp();
        greet.displayigErrorMessages('Sfiso', '');
        assert.equal('Please select the language', greet.getErrorMsg());
    });

    it('It should be able to greet the user in English', function(){
        const greet = GreetApp(); 
        greet.getLanguage('Stefan', 'english');
        assert.equal('Hello Stefan', greet.greetingTheUser());
    });

    it('It should be able to greet the user in IsiZulu', function(){
        const greet = GreetApp();
        greet.getLanguage('Mpiyakhe', 'zulu');
        assert.equal('Sawubona Mpiyakhe', greet.greetingTheUser());
    });

    it('It should be able to greet the user in Sepedi', function(){
        const greet = GreetApp();
        greet.getLanguage('Kgotso', 'pedi');
        assert.equal('Thobela Kgotso', greet.greetingTheUser());
    });
});
*/