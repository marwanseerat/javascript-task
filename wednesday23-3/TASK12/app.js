let botton_ =document.getElementById("Submit");
 
   function Passwordcheck() {
       let passw1 = document.getElementById("password1");
       let passw2 = document.getElementById("password2");
       let passchec1 = document.getElementById("passcheck1");
       let  passchec2 = document.getElementById("passcheck2");
      
       if(passw1.value.length >= 6){
        passchec1.innerHTML = "Correct Password length";
       }
       else{
        passchec1.innerHTML="*Password must be at least 6 characters long";
       }

       if (passw1.value == passw2.value) {
        passchec2.innerHTML= "The two passwords match";
        botton_.style.visibility="visible";
       }
       else if(passw1.value != passw2.value && passw1.value.length <6){
        passchec2.innerHTML="*The two passwords must match";
       }

}