
module.exports = function GreetingDb(db){

    async function storeName(name){
        const results = await db.manyOrNone('select * from greet where name = $1;', [name]);
        if(results.length === 0){
            await db.manyOrNone('insert into greet (name, count) values ($1, $2);', [name, 1]);
        }else{
            await db.manyOrNone('update greet set name = $1, count = count + 1 where name = $1;', [name]);
        }
    }

    async function getCounter(){
        const queery = await db.manyOrNone('select * from greet;');
        return queery.length;
    }

    async function getStoredNames(){
        const names = await db.many('select * from greet;');
        return names;
    }

    async function getUser(name){
        const [users] = await db.manyOrNone('select * from greet where name = $1;', [name]);
        return users;
    }

    async function clearingData(){
        const clearTable = await db.none('delete from greet;');
        return clearTable;
    }

    return{
        storeName,
        getStoredNames,
        getCounter,
        clearingData,
        getUser,
    }
}