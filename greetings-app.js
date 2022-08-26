module.exports = function greetingsFunction(){
    let name = '';
    let language = '';

    function setName(userName){
        name = userName;
    } 
    function getName(){
        return name;
    }
    function setLanguage(theLanguage){
        language = theLanguage;
    }
    function getLanguage(){
        if(language === 'english'){
            return 'Hello';
        }else if(language === 'zulu'){
            return 'Sawubona';
        }else if(language === 'pedi'){
            return 'Thobela';
        }else if(name !== ''){
            return name = '';
        }else{
            return language = '';
        }
    }
    function displayigErrorMessages(){
        if(name === '' && language !== ''){
            return 'Name is required!';
        }
        else if(name == Number(name)){
            return 'Enter the name not the number';
        }
        else if(!language){
            return 'Please select a language';
        }
    }
    function greetingTheUser(){
        let message = `${getLanguage()} ${name}`
        return message; 
    }
    function clearData(){
        name = '';
        language = '';
    }
    return{
        setName,
        getName,
        setLanguage,
        getLanguage,
        displayigErrorMessages,  
        greetingTheUser, 
        clearData,
    }
}
