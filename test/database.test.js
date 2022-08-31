
const assert = require('assert');
const GreetingDb = require('../database');
const pgPromise = require("pg-promise");
const pgp = pgPromise();

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://postgres:pg123@localhost:5432/testing';
const config = {
    connectionString: DATABASE_URL
}
if (process.env.NODE_ENV == 'production') {
	config.ssl = { 
		rejectUnauthorized : false
	}
}
const db = pgp(config);

describe('Testing Database', function(){

    it('Should insert Palesa into the table', async function(){
        try{
            let greetingDb = GreetingDb(db);
            await greetingDb.storeName('Palesa');
            let results = await greetingDb.getStoredNames();
            
            assert.equal('Palesa', results[0].name);
            await db.none('delete from greet;')
        }catch(err){
            console.log(err);
        }
    });

    it('Should update Palesa into the table and counter will go to 2', async function(){
        try{
            let greetingDb = GreetingDb(db);
            await greetingDb.storeName('Palesa');
            await greetingDb.storeName('Palesa');
            let results = await greetingDb.getStoredNames();
    
            assert.equal(2, results[0].count);
            await db.none('delete from greet;')
        }catch(err){
            console.log(err);
        }
    });

    it('Should select all names that are in the table', async function(){
        try{
            let greetingDb = GreetingDb(db);
            await greetingDb.storeName('Palesa');
            await greetingDb.storeName('Morena');
            await greetingDb.storeName('Dikeledi');
            let results = await greetingDb.getStoredNames();

            assert.equal('Palesa', results[0].name);
            assert.equal('Morena', results[1].name);
            assert.equal('Dikeledi', results[2].name);
            await db.none('delete from greet;')
        }catch(err){
            console.log(err);
        }
    });

    it('Should return 1 because Morena only greet once', async function(){
        try{
            let greetingDb = GreetingDb(db);
            await greetingDb.storeName('Morena')
            let results = await greetingDb.getStoredNames()
            assert.equal(1, results[0].count);
            await db.none('delete from greet;')
        }catch(err){
            console.log(err);
        }
    });

    it('Should return 2 because Dikeledi has been greet twice', async function(){
        try{
            let greetingDb = GreetingDb(db);
            await greetingDb.storeName('Dikeledi');
            await greetingDb.storeName('Dikeledi');
            let results = await greetingDb.getStoredNames();
            assert.equal(2, results[0].count);
            await db.none('delete from greet;')
        }catch(err){
            console.log(err);
        }
    });

    it('Should delete all names in the table', async function(){
        try{
            let greetingDb = GreetingDb(db);
            assert.equal(null, await greetingDb.clearingData());
        }catch(err){
            console.log(err);
        }
    });

    after(function(){
        db.$pool.end;
    });
});

// beforeEach(async function(){
    //     await db.none('delete from greet;')
    // });