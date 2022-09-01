
document.addEventListener('DOMContentLoaded', function(){
    let errorMsg = document.querySelector('.name-validate');
    
    if(errorMsg.innerHTML !== ''){
        setTimeout(function(){
            errorMsg.innerHTML = '';
        }, 4000);
    }
});