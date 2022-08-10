module.exports = function greetingsFunction(){
    let name = '';
    let duplicateNames = [];
    let noDuplicateNames = [];
    let errorMessage = '';

    function setName(userName){
        name = userName;
        if(name === ''){
            return 'Name is required!';
        }
        if(name == Number(name)){
            return 'Enter the name not the number'; 
        }
        duplicateNames.push(name);

        if(noDuplicateNames.indexOf(name) < 0){
            noDuplicateNames.push(name);
        }
    }

    function getName(){
        return name;
    }

    function displayigErrorMessages(){
        if(name === ''){
            return 'Name is required!';
        }else if(!name.match(/^[a-zA-Z]+$/)){
            return "Please enter correct name";
        }else if(name == Number(name)){
            return 'Enter the name not the number';
        }
        // else{
        //     return "Please select the language";
        // }
    }

    let message = '';
    function greetingTheUser(selectedBtn){
        if(selectedBtn === "venda"){
            message = `Ndi matsheloni ${getName()}`;
        }
        if(selectedBtn === "english"){
            message = `Hello ${getName()}`;
        }
        if(selectedBtn === "zulu"){
            message = `Sawubona ${getName()}`;
        }
        if(selectedBtn === "pedi"){
            message = `Thobela ${getName()}`;
        }
        if(selectedBtn === "sotho"){
            message = `Dumelang ${getName()}`;
        } 
        return message;
    }

    function returnMessage(){
        return message;
    }

    function countingAllGreetedUsers(name){
       let count = 0;
       for(let i = 0; i < duplicateNames.length; i++){
            if(duplicateNames[i] === name){
                count++;
            }
        }
        return count;
    }

    function showTheCounter(){
        return noDuplicateNames.length
    }

    function returnNoDuplicates(){
        return noDuplicateNames;
    }

    return{
        setName,
        getName,
        displayigErrorMessages,  
        greetingTheUser, 
        returnMessage,
        countingAllGreetedUsers,
        showTheCounter,
        returnNoDuplicates,
    }
}

 /*
        if(userName){
            if(userName.match(/^[a-zA-Z]+$/)){
                let lowerCase = userName.toLowerCase();
                if(name[lowerCase] === undefined || name[lowerCase] === null && name[lowerCase] !== Number){
                    name[lowerCase] = 0;
                }
                name[lowerCase]++;
                console.log(name);
            }  
        }
        */

        // 