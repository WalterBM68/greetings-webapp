module.exports = function greetingsFunction(){
    let name = '';
    let errorMessage = '';
    let duplicateNames = [];
    let noDuplicateNames = [];

    function setName(userName){
        name = userName;
        if(name === ''){
            return errorMessage = 'Name is required!';
        }
        if(name == Number(name)){
            return errorMessage = 'Enter the name not the number'; 
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
        }  
        if(name == Number(name)){
            return 'Enter the name not the number';
        }
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

    let count = 0;
    function countingAllGreetedUsers(name){
       for(let i = 0; i < duplicateNames.length; i++){
            if(duplicateNames[i].includes(name)){
                count++;
            }
        }
        return count;
    }

    function returnNumberOfGreetedUsers(){
        return countingAllGreetedUsers();
    }

    function showTheCounter(){
        return noDuplicateNames.length
    }

    function returnDuplicates(){
        return duplicateNames;
    }

    return{
        setName,
        getName,
        displayigErrorMessages,  
        greetingTheUser, 
        returnMessage,
        countingAllGreetedUsers,
        returnNumberOfGreetedUsers,
        showTheCounter,
        returnDuplicates
    }
}

// function selectingTheLanguage(){
//     return 'Please select the language';
// }

// function messageAfterTheResetBtnClicked(){
//     return 'You have deleted all the names';
// }

// let counting = name.length; 
        // return counting;

// name = theName; 
        // duplicateNames.push(name); 

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