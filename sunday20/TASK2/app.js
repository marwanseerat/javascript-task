"use strict";
    
  
    {
    let input=prompt("enter the number");
    
    let num=Number(input);
    
    
    let day;
    
    switch (num) {
        case 1:{
            console.log("saturday");
            day=("Saturday");
           break;
        }
    
        case 2: {
            console.log("sunday");
            day=("Sunday");
            break;
        }
    
        case 3: {
            console.log("monday");
            day=("Monday");
            break;
        }
    
    
        case 4: {
            console.log("tuesday");
            day=("Tuesday");
            break;
        }
    
    
        case 5: {
            console.log("wednesday");
            day=("Wednesday");
            break;
        }
    
    
        case 6: {
            console.log("thursday");
            day=("Thursday");
            break;
        }
    
        case 7: {
            console.log("friday");
            day=("Friday");
            
            break;
        }
        default :{
        console.log("unknown day");
       
        break;
        }
    
    
    }
    document.getElementById("today").innerHTML = day ;
    
    }