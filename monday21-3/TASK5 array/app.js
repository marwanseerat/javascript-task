// console.log ('Here is : ', 'array')




// 1
// // Correct the syntax error
// let number= [ 1 ,7 , 9 , 45]

  let name=["Str", "alex","moh"]

  let word=['the', 'fox', 'over', 'lazy', 'dog']

  



// 2
// What is the index of "Banana”, Tomato"
// var fruits=["Tomato","Banana","Watermelon"]
banana= [1]  , Tomato=[0]

document.getElementById("task2").innerHTML="index of banana is one "+'<br>'+"index of Tomato is two";



// 3
// Create an array represents your:
// 1- Favorite Food (5)
let food =['pizza', 'frid chicken' , 'burger' ,'mandi', 'maqlooba'] 
// 2- Favorite Sport (3)
let sport =['gym', 'football' , 'vollyball'] 
// 3- Favorite Movie (4)
let movie =['hitch', ' valentines day' , 'long story short' ,'overboard'] 

document.getElementById("task3").innerHTML= `Favorite [Food] is ${food} <br> Favorite [Sport] is ${sport} <br> Favorite [Movie] is ${movie}`;


// 4
// Create a function called firstOfArray
// that take an array as a parameter
// and return the first element in an array

// Ex: firstOfArray([1,4,5]) => 1
function firstOfArray(number) {
    number =[1,4,5]
  return number=number(0)
}

document.getElementById("task4").innerHTML= " number =[1,4,5]=1    alpha =[1,4,5]=0"
// Ex: firstOfArray(["t","u","g","x"]) => "t"
function firstOfArray2(alpha) {
    alpha =[1,4,5]
  return alpha=alpha(0)
}




// 5
// Create a function called lastOfArray
// that take an array as a parameter
// and return the first element in an array

// Ex: lastOfArray([1,4,5]) => 5

// function lastOfArray2(number_) {
//   number_=[1,4,5]
//  return  number_=number_[2]
// }


// Ex: lastOfArray(["t","u","g","x"]) => "x"

function lastOfArray2(word) {
  word=["t","u","g","x"]
return word=word(3)
}
document.getElementById("task5").innerHTML= " word=word(3)"

// 6
// Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
array.shift();
array.shift();
array.shift();
array.unshift(1,3,4,6,8)
array.push(10)
console.log(array);
[1,3,4,6,8,9,10]





// 7
// Using the console try to figure out what the thing that’s (push, unshift, shift, pop) return to you

// var array2 = [5,9,-7,3.5]

// array2.shift();
// array2.unshift(1,6,8)
// array2.push(10)
// console.log(array2);

// document.getElementById("task7").innerHTML=`${array2}`

// // 8
// Create a function called middleOfArray
// that take an array as a parameter
// and return the middle element in an array if it is have an odd elemnets
// and return the two middle elemnt in an array if it is have an even elemnets







// Ex: middleOfArray([1,4,5]) => 4
// Ex: middleOfArray(["t","u","g","x"]) =>"u and g"

array9=[5,8,9,14,18];
 function middleOfArray(array9){
   if(array9.length % 2 === 1){
         return array9[Math.floor(array9.length/2)];
     }else {
         return `${array9[array8.length/2 - 1]} and ${array9[array9.length/2]}`;
     }
    }
    document.getElementById("a7").innerHTML=` middleOfArray[5,8,9,14,18]; is ${middleOfArray(arrayy)}`;
/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/


let nums= [1,2,3,8,9]
nums[0]=5;
nums[1]=-22;
nums[2]=3.5;
nums[3]=44;
nums[4]=98;
nums.push(44);
console.log(nums);
document.getElementById("a8").innerHTML= `animals = ['cat', 'ele', 'bird']==> ${animals} <br> nums= [1,2,3,8,9] ==>${nums}`;




/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
function indexOfArray(array, index){
  return array[index];
}

nums = [1,2,3,8,9];
console.log(indexOfArray(nums,3));
console.log(indexOfArray(nums,1));
console.log(indexOfArray(nums,4));
document.getElementById("task9").innerHTML= `((nums,3))${indexOfArray(array, index)} ==> <br>
((nums,1))${indexOfArray(array, index)} ==> <br>
((nums,4))${indexOfArray(array, index)}`;


/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
let numss= [1,2,3,8,9];
function arrayExceptLast(array){
    array.pop();
    return array;
}

console.log(arrayExceptLast(numss));


/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
function addToEnd(array, element) {
  array.push(element)
  return array}

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*

14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function minInArray2(array) {
 let min = array[0];
  let i = 1;
  while (i < array.length) {
    if (array[i] < min) {
      min = array[i];
    }
    i++;
  }
  return min;
}

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function removeFromArray2(arr, element) {
  let i = 0;
  while (i < array.length) {
    if (arr[i] === element) {
      arr.splice(i, 1);
    }
    i++;
  }
  return arr;
}

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function oddArray(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      result.push(array[i]);
    }
  }
  return result;
}

/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function aveArray2(array) {
  let sum = 0;
 let i = 0;
  while (i < array.length) {
    sum = sum + array[i];
    i++;
  }
  return sum / array.length;
}

/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function shorterInArray(array) {
  let test = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length < test.length) {
      test = array[i];
    }
  }
  return test;
}

/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function repeatChar(string, chra) {
  let  result = 0;
  for (let i = 0; i < str.length; i++) {
    if (string[i].toLowerCase() === chra.toLowerCase()) {
      result++;
    }
  }
  return result;
}


/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenIndexOddLength(array) {
  let S=[]
  for (let i = 0; i < array.length; i = i + 2) {
    if (array[i].length % 2 === 1) {
      S.push(array[i])
    }
  }
  return arr;
}



/*

21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function powerElementIndex2(array) {
  let result = [];
  let i = 0;
  while (i < array.length) {
    result[i] = array[i] ** i;
    i++;
  }
  return result;
}


// 22
// Create a function called evenNumberEvenIndex
// that accept an array of nums
// and return a new array that have the even number in even index

// var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
// Ex: evenNumberEvenIndex(nums) => [2,8,34]

// ** solve it one time using for loop and another using while loop
// **try more cases by your self

// Create a function called evenNumberEvenIndex
function  evenNumberEvenIndex(array) {
let result =[];
for (let  i = 0; i < array.length; i = i + 2){
  if (array[i] % 2 === 0) {
    result.push(array[i]);
  }
}
return result;


}

