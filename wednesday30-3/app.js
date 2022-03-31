"use strict";
 let regform=[];

function checkform() {
    // let  regesfrom=document.getElementById("divForm").value;
    let firstname=document.getElementById("fName").value;
    let lastname=document.getElementById("lName").value ;
    let birthdat=document.getElementById("date") .value;
    let email_=document.getElementById("email") .value;
    let confemail=document.getElementById("emailCon") .value;
    let pass1=document.getElementById("pass") .value;
    let confpass1=document.getElementById("passCon") .value;

    let pwd_expression = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    let letters = /[A-Za-z]+$/;
    let filter = /([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let capital=/[A_Z]/;

if(firstname==''){
    alert('Please enter your first name'); 
}else if (letters.test(lastname)){
    alert('First name field required only alphabet characters');
}


else if(lastname==''){
    alert('Please enter your last name.');
}else if( letters.test(lastname)){
    alert('First name field required only alphabet characters');
}
else if(email_=='')
{
    alert('Please enter your user email id');
}
else if (!filter.test(email_))
{
    alert('Invalid email');
}
else if(confemail=='')
{
    alert('Please enter Email confirmation');
}
else if (confemail != confemail)
{
    alert('email does not match');
}

else if(pass1=='')
{
    alert('Please enter Password');
}
else if(confpass1=='')
{
    alert('Enter Confirm Password');
}
else if(!pwd_expression.test(pass1) && !capital.test(pass1[0]))

{
    alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
}
else if(pass1 != confpass1)
{
    alert ('Password not Matched');
}
else if(document.getElementById("pass").value.length < 8)
{
    alert ('Password minimum length is 8');
}
else if(document.getElementById("pass").value.length > 32)
{
    alert ('Password max length is 32');
}
else
{                                           
       alert('Thank You for Registration');
}
regform.push(firstname,lastname,email_,birthdat);

}


















