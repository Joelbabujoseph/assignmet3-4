
function xyz(){
    var name = document.forms["RegForm"]["Name"];
    var email = document.forms["RegForm"]["Email"];
    var address = document.forms["RegForm"]["Address"];
    var phone = document.forms["RegForm"]["Telephone"];
    
    
     if (name.value == ""){
         window.alert(" Enter your name :");
         name.focus();
         return false;
     }
     else if (name.length < 7)
     {
         window.alert(" Enter the correct length");
         name.focus();
         return false;
     }
     if (address.value == ""){
         window.alert(" Enter your address :");
         address.focus();
         return false;
     }
     if (email.value == ""){
         window.alert(" Enter a valid E-mail address:");
         email.focus();
         return false;
     }
     if (phone.value == ""){
         window.alert(" Enter your telephone no :");
         phone.focus();
         return false;
     }
     
     
     
     return true
}
