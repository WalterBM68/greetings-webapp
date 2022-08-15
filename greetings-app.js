module.exports = function greetingsFunction(){
    let name = '';
    let duplicateNames = [];
    let noDuplicateNames = [];
    let language = '';

    function setName(userName){
        name = userName;
        if(name){
            duplicateNames.push(name);    
        }
    } 
    function storingNames(){
        if(name && language){
            if(noDuplicateNames.indexOf(name) < 0){
                noDuplicateNames.push(name);
            }           
        }
    } 

    function getName(){
        return name;
    }

    function setLanguage(theLanguage){
        language = theLanguage;
    }
    function getLanguage(){
        if(language === 'english' && name !== ''){
            return 'Hello';
        }else if(language === 'zulu' && name !== ''){
            return 'Sawubona';
        }else if(language === 'pedi' && name !== ''){
            return 'Thobela';
        }else if(name !== ''){
            return name = '';
        }else{
            return language = '';
        }
    }

    function displayigErrorMessages(){
        if(!language){
            return 'Please select a language';
        }
        if(name === '' && language !== ''){
            return 'Name is required!';
        }
    }

    function greetingTheUser(){
        let message = `${getLanguage()} ${name}`
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
        
            return noDuplicateNames.length;
        
        
    }

    function returnNoDuplicates(){
        return noDuplicateNames;
    }

    function returnDuplicates(){
        return duplicateNames;
    }

    function clearData(){
        name = '';
        duplicateNames = [];
        noDuplicateNames = [];
        language = '';
        message = '';
    }

    return{
        setName,
        getName,
        setLanguage,
        getLanguage,
        displayigErrorMessages,  
        greetingTheUser, 
        countingAllGreetedUsers,
        showTheCounter,
        returnNoDuplicates,
        returnDuplicates,
        clearData,
        storingNames
    }
}
