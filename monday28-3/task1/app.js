'use strict';
/*
Instructions: 
 - You should solve all these questions using .map() function 
*/


//////////////////////////////////////////////////////////////////////////////Exercise 1: 

let arr=[4, 10, 200];
 let double=arr.map(function doubleNumbers(arr1)
 {
    return arr1 * 2
  });
  console.log(double);

document.getElementById("task1").innerHTML=double
//////////////////////////////////////////////////////////////////////////////Exercise 2: 

let array=[2, 5, 100]
let string=array.map(function (d)
{
  return d.toString()
  

});
console.log(string);
document.getElementById("task2").innerHTML=string

//////////////////////////////////////////////////////////////////////////////Exercise 3: 
let array1=["john", "JACOB", "jinGleHeimer", "schmidt"];
let cap=array1.map(function(x){
  return x.charAt(0).toUpperCase()+ x.slice(1);

})
console.log(cap);
document.getElementById("task3").innerHTML=cap.join(" ,")
//////////////////////////////////////////////////////////////////////////////Exercise 4: 

let names;
 function namesOnly(array){ 
    names=array.map(function(v,index){
  return v.name; 
    })
 }
 
 namesOnly([ 
  {
     name: "Angelina Jolie",
             age: 80

                }, 

    { 
        name: "Eric Jones",
              age: 2

              },

     {
       name: "Paris Hilton",
                age: 5 

               }, 

       {
       name: "Kayne West",
               age: 16
                }, 

        {
        name: "Bob Ziroll",
        age: 100,
        }
 ]);

 console.log(names);

 document.getElementById("task4").innerHTML=names.join(" ,  ");

 //////////////////////////////////////////////////////////////////////////////Exercise 5:  

let array5;
function makeStrings(arr){
    array5=arr.map(function(i,index){
        let dd='';
        if(i.age<18){
            dd='is under age!!';
        }
        else{
            dd='can go to The Matrix';
        }
        return i.name + dd;
    })
}
makeStrings([
        {
           name: "Angelina Jolie",
           age: 80
       },
       {
           name: "Eric Jones",
           age: 2
       },
       {
           name: "Paris Hilton",
           age: 5
       },
       {
           name: "Kayne West",
           age: 16
       },
       {
           name: "Bob Ziroll",
           age: 100
       }
     ]); 

     console.log(array5);
     document.getElementById("task5").innerHTML=array5
////////////////////////////////////////////////////////////////////////////////////////////Exercise6
let array6;
function readyToPutInTheDOM(array){
  array6=array.map(function(v,index){
        return `<h1> ${v.name}</h1><h2>${v.age}</h2>`;
    })
}
readyToPutInTheDOM([
    {
       name: "Angelina Jolie",
       age: 80
   },
   {
       name: "Eric Jones",
       age: 2
   },
   {
       name: "Paris Hilton",
       age: 5
   },
   {
       name: "Kayne West",
       age: 16
   },
   {
       name: "Bob Ziroll",
       age: 100
   }
]);
console.log(array6);
// document.getElementById("task6").innerHTML=array6.join(" ,"); 
///////////////////////////////////////////////////////////////////////////////////////////////////Exercise 7:


let array7;
function doubleValues(array) {
    array7 =array.map(function(i,index){
        return i*2;
    });
}
doubleValues([1,-2,-3]);
console.log(array7);

document.getElementById("task7").innerHTML=array7;
///////////////////////////////////////////////////////////////////////////////////////////////////Exercise 8:
 
let array8;
function valTimesIndex(array){
    array8=array.map(function(i,index){
        return i*index;
    })
}
valTimesIndex([1,-2,-3]);
console.log(array8);
document.getElementById("task8").innerHTML=array8;
 ////////////////////////////////////////////////////////////////////////////////////////////////////Exercise 9:
  
 let array9;
function extractkey (array , key){
    array9=array.map(function(i,index){
        return i[key];
    })
}
extractkey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name');
console.log(array9);
document.getElementById("task9").innerHTML=array9.join("  ");
   ///////////////////////////////////////////////////////////////////////////////////////////////////Exercise 10:

  
  extractFullName=[{first: 'Elie', last:"Schoppik"}, 
  {first: 'Tim', last:"Garcia"},
  {first: 'Matt', last:"Lane"},
  {first: 'Colt', last:"Steele"}];


extract2=extractFullName.map(arr => arr.first+" "+arr.last)
console.log(extract2);
document.getElementById("task10").innerHTML=extract2;