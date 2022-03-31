////////////////////////////////Q1

let person={
  firstname:"marwa",
  lastnsme:"nseerat",
  age:23,
  dob:"14/10/1998",
  favoritefood:['pizza', 'frid chicken' , 'burger' ],
  favoritemovie :['hitch', ' valentines day' , 'long story short' ,'overboard'] 

}
console.log(person);

// document.getElementById("task1").innerHTML=" I'm "+person.firstname+" "+person.lastname+" and I'm "+person.age+" years old , My birthday is "+person.dob+ " and these are my favoritefood :"+person.favoritefood.join( ", ") +" and my favorite Movies are:" +person.favoritemovie.join(", ");

////////////////////////Q2


var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

//////Task2
function firstName(fname){
let newarray=[];
for (let i=0; i< fname.length; i++){
  newarray.push(fname[i].name.first)
}
console.log(newarray);
return newarray;
};



// document.getElementById("task2").innerHTML=firstName(persons);


//////////////////////////////////////////Q3


function averageAge(x){
  let sum=0;
  let Age_count=0;
  // let avg=sum / 5;
  
  for (let i=0; i< x.length; i++){
    sum += x[i].age;
    Age_count++;
  }

 if (Age_count == 0) {
  return 0;
 }
 let avg = sum /Age_count;
 console.log(avg);
 return avg;
}


// document.getElementById("task3").innerHTML=averageAge(persons);


//////////////////////////////////////////Q4


function olderPerson(y){
  let old=0;
  for (let i=0; i<y.length-1; i++){
    if ((y[i].age) < (y[i+1].age)){
      old=(y[i+1].name.first)+" "+(y[i+1].name.last);
      
    }
  }
 

  console.log(old);
  return old;

}

//  document.getElementById("task4").innerHTML=olderPerson(persons);





///////////////////////////////////////////////Q5
function longestName(z){
  let long = 0;

  for (let i=0; i< z.length-1; i++ ){
      if(((z[i].name.first+ z[i].name.last ).length)<((z[i+1].name.first+ z[i+1].name.last ).length)){
        long=(z[i+1].name.first+" "+ z[i+1].name.last );
      }
  }

  console.log(long);
  return long;

}


// document.getElementById("task5").innerHTML=longestName(persons);




///////////////////////////////////////////////Q7

function repeatWord(str) {
  let arr = str.split(' ');
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i].toLowerCase()]) {
      obj[arr[i].toLowerCase()] += 1
    } else {
      obj[arr[i].toLowerCase()] = 1
    }
  }
  console.log(obj);
  return obj;
}


repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO");
document.getElementById("Task7").innerHTML=`The result is in the console`


////////////////////////////////Q8

function repeatChar(char){
  let objectletter=char.split("");
  let letters={};
  

  for (let i=0; i<objectletter.length; i++){
    if (letters[objectletter[i].toLowerCase()]){
      letters[objectletter[i].toLowerCase()]+= 1

    }
    else{
      letters[objectletter[i].toLowerCase()]= 1
    }

  }
console.log(letters);
return letters;

}


repeatChar("mamababatetacedo");

document.getElementById("Task8").innerHTML=`The result is in the console`;


///////////////////////////////////////////Q9
function selectFromObject(obj, arr) {
  var result = {}
  for (var i = 0; i < arr.length; i++) {
    if (obj[arr[i].toLowerCase()]) {
      result[arr[i].toLowerCase()] = obj[arr[i].toLowerCase()]
    }
  }
  console.log(result);
  return result;
}
//  document.getElementById("Task9").innerHTML= selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd']);


/////////////////////////////////////////////Q10
let objt={firstName:"Moh",
  age:24}
  function objectToArray(){
  
    console.log((Object.keys(objt)),(Object.values(objt)));
  }

  // document.getElementById("Task10").innerHTML=  objectToArray();
  
  




////////////////////////////////////////////////Q11
function arrayToObject(arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i += 2) {
    obj[arr[i]] = arr[i + 1];
  }
  console.log(obj);
  return obj;

}

arrayToObject(["firstName","Moh","age",24])
// document.getElementById("Task11").innerHTML=`The result is in the console` ;





////////////////////////////////////////////////Q12
function onlyNumber(obj) {
  var result = {}
  for (var key in obj) {
    if (typeof obj[key] === "number") {
      result[key] = obj[key];
    }
  }
  console.log(result);
  return result;
}

onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]});
// document.getElementById("Task12").innerHTML=`The result is in the console` ;


////////////////////////////////////////////////Q13

function onlyString(obj) {
  var result = {}
  for (var key in obj) {
    if (typeof obj[key] === "string") {
      result[key] = obj[key];
    }
  }
  console.log(result);
  return result;
}

onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
// document.getElementById("Task13").innerHTML=`The result is in the console` ; 

/////////////////////////////////////////////////////Q14

function onlyArray(obj) {
  var result = {}
  for (var key in obj) {
    if (Array.isArray(obj[key])) {
      result[key] = obj[key];
    }
  }
  console.log(result);
  return result;
}
onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})

document.getElementById("Task14").innerHTML=`The result is in the console` ;

//////////////////////////////////////////////////////Q15

function keysArray(obj) {
  var result = [];
  for (var key in obj) {
    result.push(key);
  }
  console.log( result);
  return result;
}
keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
document.getElementById("Task15").innerHTML=`The result is in the console` ; 



