module.exports = function greetingsFunction(){
    let greetingMessage = '';
    let errorMsg = '';

    function getLanguage(name, language){
        if(language === 'english' && name !== ''){
            greetingMessage = 'Hello ' + name;
        }
        if(language === 'zulu' && name !== ''){
            greetingMessage = 'Sawubona ' + name;
        }
        if(language === 'pedi' && name !== ''){
            greetingMessage = 'Thobela ' + name;
        }
        return greetingMessage;
    }

    function displayigErrorMessages(name, language){
        if(name == '' && language == null){
            errorMsg = 'Please enter the name & select a language';
        }else if(name == ''){
            errorMsg = 'Please enter the name';
        }else if(!language){
            errorMsg = 'Please select the language';
        }
        return errorMsg;
    }

    function getErrorMsg(){
        return errorMsg;
    }

    function greetingTheUser(){
        return greetingMessage; 
    }
    
    return{
        getLanguage,
        displayigErrorMessages,  
        greetingTheUser,
        getErrorMsg 
    }
}
