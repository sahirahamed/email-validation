const email = document.getElementById('email');

const submit = document.getElementById('submit');

const message = document.getElementById('message');



function validateMail(emailValue){

    var emailValue = email.value.trim();

    RegExp = /^([a-zA-Z0-9-.])+\@([a-z])+\.([a-z])+$/
if(!RegExp.test(emailValue)){
email.style.border = '2px solid red';
message.innerText ='enter a valid email ....@'

return false;
}
else{
    email.style.border = '4px solid green';
message.innerHTML="";

return true;




}



}



