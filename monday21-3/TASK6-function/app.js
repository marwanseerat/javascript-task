
// 1
// Write a function named tellFortune that:
// takes 4 arguments: number of children,
// partner's name, geographic location, job title.
// outputs your fortune to the screen like so:
// "You will be a X in Y, and married to Z with N kids."

// Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
// => "You will be a software engineer in Jordan, and married to Alice with 3 kids."

function tellfortune(A,B,C,D) {
  return(` You will be a${A} in ${B} and married to ${C} with ${D} kids`);
}

document.getElementById("task1").innerHTML=tellfortune("software engineer","Jordan","Alice",3);
// 2
// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion
// rate of 1 human year to 7 dog years.
// outputs the result to the screen like so:
// "Your doggie is NN years old in dog years!"

// Ex: calculateDogAge(1);
// => "Your doggie is 7 years old in dog years!"

function calculateDogAge (age) {
  let dogage=7*age
  return(` Your doggie is ${dogage} years old in dog years!`);
}

document.getElementById("task2").innerHTML=calculateDogAge(1)
// 3
// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age 100).
// outputs the result to the screen like so:
// "You will need NN to last you until the ripe old age of X"

// Ex: calculateSupply(30, 3);
// => 'You will need 76650 cups of tea to last you until the ripe old age of 100;

function calculateSupply(age,amountperday) {
 let  maxage = 100;
let needperday=(amountperday*365)*(maxage-age);
return(` You will need ${needperday} cups of tea to last you until the ripe old age of${maxage}`);
}

document.getElementById("task3").innerHTML=calculateSupply(30, 3)
// 4
// Write a function called greet that:
// takes 1 argument: name.
// and it will return hello + name

// Ex: greet("Adam")
// => "Hello Adam"

function greet(Name) {
  return(`Hello ${Name}`)
}
greet("Marwa")
document.getElementById("task4").innerHTML=greet("Marwa")
// 5
// what is the error:
// function double(cat) {
//   return 2 * cat;
// }

// function double(i=7) {
//   return 2 * 7;
// }

// function double(m) {
//   return 2 * '7';
// }





// // 6
// // fix these functions:
// function double1(x ){
//   return 2 * x ;
// }

// functiondouble2 (x){
// return 2 * x;
// }

// function double3(x)  {
//   return 2 * x;
// }




// 7
// Write a function called cube that:
// accept 1 parameter and calculate the cube of this number

// Ex: cube(4)
// => 64
function cube(x) {
  return x*x*x
}

document.getElementById("task7").innerHTML=cube(4)
// 8
// Write a function called multiply that:
// accept 2 parameters and calculate the multiply of these 2 numbers

// Ex: multiply(3,4)
// => 12
// Ex: multiply(5,4)
// => 20
function multiply(x,y) {
 return x*y
}

document.getElementById("task8").innerHTML=multiply(3,4)
// 9
// Write a function called canIGetADrivingLicense that:
// accept 1 parameter represent the age
// and if the age greater than or equal to 20 return "yes you can"
// otherwise return "please come back after X years to get one"

// Ex: canIGetADrivingLicense(21)
// => "yes you can"

// Ex: canIGetADrivingLicense(17)
// => "please come back after 3 years to get one"

// Ex: canIGetADrivingLicense(20)
// => "yes you can"

function canIGetADrivingLicense(z) {
  if (z>18) {
return "yes you can"
  }else{
   return "please come back after 3 years to get one"
  }
}

document.getElementById("task9").innerHTML=canIGetADrivingLicense(21) +" , "+ canIGetADrivingLicense(17);

// 10
// Write a function called sameLength
// that accepts two strings as arguments,
// and returns true if those strings have the same length, and false otherwise.

// **hint: how we can know string length   Ex: : "tree".length   => 4

// Ex: sameLength("tree","clue")
// => true

// Ex: sameLength("tree","car")
// => false
function sameLength(x,y) {
  if((x.Length) == (y.Length)){
    return (true);
  }
  else{
    return (false);
  }
 

}

document.getElementById("task10").innerHTML=sameLength("tree","clue");

// 11
// Write a function called largerNubmer
// that accept two numbers as arguments,
// and return the first larger numbers

// Ex: largerNubmer(5,6)
// => 6

// Ex: largerNubmer(5,3)
// => 5

function largerNubmer(g,k) {
  if(g>k){
    return g;
  }
    return k
  
}
document.getElementById("task11").innerHTML=largerNubmer(5,3)+" , "+largerNubmer(5,6)
// 12
// Write a function called smallerNubmer
// that accept three numbers as arguments,
// and return the first smaller number

// Ex: smallerNubmer(8,6,7)
// => 6

// Ex: smallerNubmer(8,6,7)
// => 5

// Ex: smallerNubmer(5,99,3)
// => 3

// Ex: smallerNubmer(5,3,3)
// => 3
function smallerNubmer(num1,num2,num3) {
  let smaller=num1
  if(num2 < smaller){
    smaller = num2;
  }
  if(num3 < smaller){
    smaller = num3;
  }
  return smaller
}




document.getElementById("task12").innerHTML=smallerNubmer(8,6,7)+" ,"+smallerNubmer(10,44,7)+" ,"+smallerNubmer(11,56,9)
// 13
// Write a function called shorterString
// that accept five string as an arguments,
// and return the first shorter string

// Ex: shorterString("air","school","car","by","github")
// => by

// Ex: shorterString("air","tr","car","by","github")
// => tr

// Ex: shorterString("by","tr","car","air","github")
// => by

// Ex: shorterString("air","by","car","school","github")
// => by

// Ex: shorterString("air","tr","by","car","github")
// => by

// Ex: shorterString("air","tr","car","github","by")
// => by

function shorterString(str1,str2,str3,str4,str5) {
  let shottstring = str1
  if (str2.length < shottstring .length) {
    shorter = str2;
  }
  if (str3.length < shottstring .length) {
    shottstring  = str3;
  }
  if (str4.length < shottstring .length) {
    shottstring  = str4;
  }
  if (str5.length < shottstring .length) {
    shottstring  = str5;
  }
  return shottstring 
}
document.getElementById("task13").innerHTML=shorterString("air","tr","car","github","by")
// 14
// Write a function called longerString
// that accept four string as an arguments,
// and return the first longer string

// Ex: longerString("air","school","car","github")
// => school

// Ex: longerString("air","schoo","car","github")
// => github

// try all the cases (change the order of the longestString)
function longerString(str1,str2,str3,str4){
  let longstring=str1
  if (str2.length>longstring.length) {
    longstring=str2
  }
  if (str3.length>longstring.length) {
    longstring=str3
  }
  if (str4.length>longstring.length) {
    longstring=str4
  }
  return longstring;
}
document.getElementById("task14").innerHTML=longerString("air","school","car","github")
// 15
// Write a function called isEven
// that accept 1 argument as a number,
// and return true if this number is even
// and false if this number is odd

// Ex: isEven(1)
// => false
// Ex: isEven(2)
// => true

function isEven(x) {
  if (x % 2 ===0){
return true
  }
  return false
}

document.getElementById("task15").innerHTML=isEven(1)+" ,"+isEven(4)

// 16
// Write a function called isOdd
// that accept 1 argument as a number,
// and return true if this number is Odd
// and false if this number is Even

// Ex: isOdd(4)
// => false
// Ex: isOdd(5)
// => true
function isOdd(n) {
  if (n % 2 !== 0){
    return true
      }
      return false
}

document.getElementById("task16").innerHTML=isOdd(4) +" ,"+isOdd(7)

// 17
// Write a function called positive
// that accept 1 argument as a number,
// and return the positive version of the number passed

// Ex: positive(4)
// => 4
// Ex: positive(-5)
// => 5
function positive(v) {
  if (v>0) {
    return v
  }else{
return v*-1
  }
 
}


document.getElementById("task17").innerHTML=positive(-5)+" ,"+positive(4)

// 18
// Write a function called fullName
// that accept two parameters, firstName and lastName,
// and returns the firstName and lastName concatenated
// together with a space in between.

// Ex: fullName("Adam","McCallen")
// => "Adam McCallen"
// Ex: fullName("Alex", "Mercer")
// => "Alex Mercer"
function fullName(firstName , lastName) {
  return firstName + ' ' + lastName;
}


document.getElementById("task18").innerHTML=fullName("marwa","nseerat")
// 19
// Write a function called average
// that takes five numbers as inputs
// and returns the average of those numbers.

// Ex: average(1,2,3,4,5)
// => 3

// Ex: average(5,7,9,3,5)
// => 5.8
function average(n1,n2,n3,n4,n5) {
  return n1+n2+n3+n4+n5/5
}


document.getElementById("task19").innerHTML=average(1,2,3,4,5)
// 20
// Write a function called randomNumber
// that didnt takes any parameter
// and returns a random number between 0-1
// ** hint: you can seacrh using MDN

// Ex: randomNumber()
// => 0.2278

// Ex: randomNumber()
// => 0.475
function randomNumber() {
  return Math.random();
}

document.getElementById("task20").innerHTML=randomNumber()

// 21
// Write a function called randomBetweenNumbers
// that takes 2 parameters
// and returns a random number between them
// ** hint: you can seacrh using MDN

// Ex: randomBetweenNumbers(1,8)
// => 7.5412

// Ex: randomBetweenNumbers(3,100)
// => 23
function randomBetweenNumbers(xx,z) {
  return Math.floor(Math.random() * (xx - z)) + z
}

document.getElementById("task21").innerHTML=randomBetweenNumbers(1,8)

// 22
// Write a function called scoreInUniversty
// that takes 1 parameters
// and returns the alpabet in the unevirsty
// A => 95-100
// B => 85-94
// C => 70-84
// D=> 50-69
// F=> 0-49

// Ex: scoreInUniversty(96)
// => "A"

// Ex: scoreInUniversty(3)
// => "F"

// Ex: scoreInUniversty(71)
// => "C"

function scoreInUniversty(score) {
  if (score >=95 && score<100) {
    return 'A'
  }
  if (score >=85 && score<94) {
    return 'B'
  }
  if (score >=70 && score<84) {
    return 'C'
  }
  if (score >=50 && score<69) {
    return 'D'
  }
  if (score >=0 && score<49) {
    return 'F'
  }
}
document.getElementById("task22").innerHTML=scoreInUniversty(96)
// 23
// Write a function called counter
// that will returns a number bigger
// than the one that returnd before
// and start from 0

// Ex: counter()
// => 1

// Ex: counter()
// => 2

// Ex: counter()
// => 3
let count =0
function counter() {
  return count ++;
}
counter()
document.getElementById("task23").innerHTML=counter()

// 24
// Write a function called resetCounter
// that will reset the previuos function
// and return the number before reset and
// a string say that the counter reset

// Ex: counter()
// => 1

// Ex: counter()
// => 2

// Ex: counter()
// => 3

// Ex: resetCounter()
// => 3 and the counter reset now

// Ex: counter()
// => 1

// Ex: counter()
// => 2

// Ex: resetCounter()
// => 2 and the counter reset now

// Ex: counter()
// => 1

function resetCounter() {
 let repetcount=count ;
 count =1
 return repetcount+"and the counter reset now"
 }
document.getElementById("task24").innerHTML= resetCounter()
