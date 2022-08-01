module.exports = function greetingsFunction(){
    let message = '';
    let name = '';
    let errorMessages = [];
    let greetUsers = [];

    function setName(theName){
        name = theName;
    }
    function getName(){
        return name;
    }

    function displayigErrorMessages(){
        if(getName() === ''){
            return 'Name is required!';
        }  
        if(getName() == Number(getName())){
            return 'Enter the name not the number';
        }  
        if(getName() === getName()){
            return "This name has been greeted";
        } 
    }

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

    function countingAllGreetedUsers(){ 
        if(returnMessage()){
            greetUsers.push(returnMessage())
        }
        // return greetUsers;
    }
    function returnNumberOfGreetedUsers(){
        return greetUsers;
    }
  
    return{
        setName,
        getName,
        displayigErrorMessages,  
        greetingTheUser, 
        returnMessage,
        countingAllGreetedUsers,
        returnNumberOfGreetedUsers
    }
}

// function selectingTheLanguage(){
//     return 'Please select the language';
// }

// function messageAfterTheResetBtnClicked(){
//     return 'You have deleted all the names';
// }