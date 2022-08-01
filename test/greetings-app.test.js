const assert = require('assert');
const GreetApp = require("../greetings-app");

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

    it("It should print 'This name has been greeted before' if the user entered the same name for the second time", function(){
        const greet = GreetApp();

        greet.setName('Walter');
        assert.equal('This name has been greeted', greet.displayigErrorMessages());
    });

    // it("It should print 'Please select the language' if the radio btn is not clicked", function(){
    //     const greet = GreetApp();

    //     greet.setName('Boss');
    //     assert.equal('Please select the language', greet.displayigErrorMessages());
    // });

    it('It should be able to greet the user in English', function(){
        const greet = GreetApp();
        
        greet.setName('Walter');
        assert.equal('Hello Walter', greet.greetingTheUser('english'));
    });

    it('It should be able to greet the user in Tshivenda', function(){
        const greet = GreetApp();
        
        greet.setName('Nedzelele');
        assert.equal('Ndi matsheloni Nedzelele', greet.greetingTheUser('venda'));
    });

    it('It should be able to greet the user in IsiZulu', function(){
        const greet = GreetApp();
        
        greet.setName('Sipho');
        assert.equal('Sawubona Sipho', greet.greetingTheUser('zulu'));
    });

    it('It should be able to greet the user in Sepedi', function(){
        const greet = GreetApp();
        
        greet.setName('Kgotso');
        assert.equal('Thobela Kgotso', greet.greetingTheUser('pedi'));
    });

    it('It should be able to greet the user in SeSotho', function(){
        const greet = GreetApp();
        
        greet.setName('Tumelo');
        assert.equal('Dumelang Tumelo', greet.greetingTheUser('sotho'));
    });

    it('It should be able to count how many times a user has been greeted', function(){
        const greet = GreetApp();
        
        greet.setName('Tshepo');
        greet.setName('Musa');
        assert.equal(2, greet.returnNumberOfGreetedUsers().length);
    });

    // it('count', function(){
    //     const greet = GreetApp();
        
    //     greet.setName('Tumelo');
    //     assert.equal(1, greet.greetedUsers().length);
    // });

});