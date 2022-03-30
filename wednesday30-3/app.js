"use strict";
 let  regesfrom=document.getElementById("divForm")
let firstname=document.getElementById("fName");
let lastname=document.getElementById("lName");
let birthdat=document.getElementById("date");
let email_=document.getElementById("email");
let confemail=document.getElementById("emailCon");
let pass1=document.getElementById("pass");
let confpass1=document.getElementById("passCon");

function getinfo(fName,lName,date,email,emailCon,pass,passCon) {
    this.fName=fName;
    this.lName=lName;
    this.date=date;
    this.email=email;
    this.emailCon=emailCon;
    this.pass=pass;
    this.passCon=passCon;
    this.fullname=checkinfo(this.fName, this.lName);
    this.date= checkdate(this.date)
    this.fullemail=checkemail(this.email,this.emailCon)
    console.log( this.fullname);
    console.log(this.date );
    console.log(this.email,this.emailCon);
}

function checkinfo(fName,lName) {
    let regex = /[a-zA-Z\s]+$/;
    if(regex.test(fName)&&(regex.test(lName))){
       return  fName+lName
    }else{
        return `the name is incorrect`
    }
    
   
}


function checkdate(date) {
    let regex1=/(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
if(regex1.test(date)){
    return date;

}else{
    return `invalid date`
}
}



function checkemail(email,emailCon) {
    let regex2=/(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regex2.test(email)&&(regex2.test(emailCon))){
        return  email+emailCon
     }else{
         return `the E-mail is incorrect`
     }


}










regesfrom.addEventListener("submit",handelsubmit);
function handelsubmit(e) {
    e.preventDefault();

    let fristname =e.target.fristname.value;
     let lastname=e.target.lastname.value;
     let password=e.target.password.value;
     let passwordcon=e.target.passwordcon.value;
     let date=e.target.date.value;
     let email=e.target.email.value;
     let emailconf=e.target.emailconf.value;

     new getinfo(fristname,lastname,password,passwordcon,date,email,emailconf)
}
handelsubmit() 


