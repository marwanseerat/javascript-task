// // console.log ('Here is : ', 'array')




// // 1
// // // Correct the syntax error
// // let number= [ 1 ,7 , 9 , 45]

//   let name=["Str", "alex","moh"]

//   let word=['the', 'fox', 'over', 'lazy', 'dog']

  



// // 2
// // What is the index of "Banana”, Tomato"
// // var fruits=["Tomato","Banana","Watermelon"]
// banana= [1]  , Tomato=[0]





// // 3
// // Create an array represents your:
// // 1- Favorite Food (5)
// let food =['pizza', 'frid chicken' , 'burger' ,'mandi', 'maqlooba'] 
// // 2- Favorite Sport (3)
// let sport =['gym', 'football' , 'vollyball'] 
// // 3- Favorite Movie (4)
// let movie =['hitch', ' valentines day' , 'long story short' ,'overboard'] 


// // 4
// // Create a function called firstOfArray
// // that take an array as a parameter
// // and return the first element in an array
// // Ex: firstOfArray([1,4,5]) => 1
// // Ex: firstOfArray(["t","u","g","x"]) => "t"
// function firstOfArray2(alpha) {
//     alpha =[1,4,5]
//   return alpha=alpha(0)
// }

function firstOfArray(array) {
  return array [0]
 
}
let   number =[1,4,5]
console.log("Q4");
console.log( firstOfArray(number));
document.getElementById("task4").innerHTML= " number =[1,4,5]=1 "





// // 5
// // Create a function called lastOfArray
// // that take an array as a parameter
// // and return the first element in an array
// // Ex: lastOfArray([1,4,5]) => 5
function lastOfArray(array) {
  return array [2]
}
let numbers=[1,4,5]
console.log("Q5");
console.log(lastOfArray(numbers));
document.getElementById("task5").innerHTML= " number =[1,4,5]=5 "





// // 6
// // Using console make this array to be like this one (push, unshift, shift, pop)

let arr1 = [0,5,7,9]
arr1.shift();
arr1.shift();
arr1.shift();
arr1.unshift(1,3,4,6,8)
arr1.push(10)
console.log("Q6");
console.log(arr1);
[1,3,4,6,8,9,10]

document.getElementById('task6').innerHTML=arr1;





// // 7
// // Using the console try to figure out what the thing that’s (push, unshift, shift, pop) return to you

let arr2 = [5,9,-7,3.5]
arr2.shift();
arr2.unshift(1,6,8)
arr2.push(10)
console.log("Q7");
console.log(arr2);

document.getElementById("task7").innerHTML=arr2;









// // // 8
// // Create a function called middleOfArray
// // that take an array as a parameter
// // and return the middle element in an array if it is have an odd elemnets
// // and return the two middle elemnt in an array if it is have an even elemnets
// // Ex: middleOfArray([1,4,5]) => 4
// // Ex: middleOfArray(["t","u","g","x"]) =>"u and g"

function middleOfArray(array) {
 let length = arr3.length;
  if (length % 2 !== 0) {
    return arr3[(length - 1) / 2]
  }
  return (arr3[length / 2 - 1] + " and " + arr3[length / 2])
}
let arr3= [1,4,5];
console.log("Q8");
console.log(arr3);

document.getElementById("task8").innerHTML=arr3 [1] ;

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something
animals.length=2
var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/

let animals = ['cat', 'ele', 'bird']
animals[0] = 'zebra';
animals[1] = 'elephant';
animals.length = 2;

let nums = [1, 2, 3, 8, 9];
nums[0] = 5;
nums[1] = -22;
nums[2] = 3.5;
nums[3] = 44;
nums[4] = 98;
nums[5] = 44
console.log("Q9");
console.log(nums);
document.getElementById("task9").innerHTML=nums;
// /*
// 10
// Create a function called indexOfArray
// that accept an array and index
// and return what this array have in this index
// var nums= [1,2,3,8,9]
// Ex: indexOfArray(nums,3) => 8
// Ex: indexOfArray(nums,1) => 2
// Ex: indexOfArray(nums,4) => 9
// **try more cases by your self
// */
function indexOfArray(array, index){
  return array[index];
}
nums = [1,2,3,8,9];
console.log("Q10");
console.log(indexOfArray(nums,3));
console.log(indexOfArray(nums,1));
console.log(indexOfArray(nums,4));
document.getElementById("task10").innerHTML=(indexOfArray(nums,3));

// /*
// 11
// Create a function called arrayExceptLast
// that accept an array
// and return the entire array except the last elemnt
// ** hint: search abou the function that will cut the array on MDN
// var nums= [1,2,3,8,9]
// Ex: arrayExceptLast(nums) =>  [1,2,3,8]
// **try more cases by your self
// */
let numss= [1,2,3,8,9];
function arrayExceptLast(array){
    array.pop();
    return array;
}
console.log("Q11");
console.log(arrayExceptLast(numss));
document.getElementById("task11").innerHTML=numss;


// /*
// 12
// Create a function called addToEnd
// that accept an array and value
// and return the entire array with add this value to the end of this array
// var nums= [1,2,3,8,9]
// Ex: addToEnd(nums,55) =>  [1,2,3,8,55]
// **try more cases by your self

function addToEnd(array, element) {
  array.pop()
  array.push(element)
  return array}
 let numsss= [1,2,3,8,9]
 console.log("Q12");
 console.log(addToEnd(numsss, 55));
 document.getElementById("task12").innerHTML=addToEnd(numsss, 55);






// // all the exercises below should solved 2 times: 1- for loop 2- while lopp
// /*
// 13
// Create a function called sumArray
// that accept an array
// and return the summation of all elemnt in this array

// var nums= [1,2,3,8,9]
// Ex: sumArray(nums) => 23

// ** solve it one time using for loop and another using while loop
// **try more cases by your self
// */

function sumArray(array) {
  let sum=0
  for(let i=0;i<array.length;i++){
    sum=sum+array[i];
  }
  return sum
}
 let numbry= [1,2,3,8,9]
 console.log("Q13");
 console.log(sumArray(numbry));
 document.getElementById("task13").innerHTML=sumArray(numbry)






// /*

// 14
// Create a function called minInArray
// that accept an array
// and return the minimum value inside this array

// var nums= [1,2,3,8,9]
// Ex: minInArray(nums) => 1

// ** solve it one time using for loop and another using while loop
// **try more cases by your self
// */
function minInArray(array){
  let m =array[0];
  for(i=0;i<array.length;i++){
    if(m>array[i]){
      m=array[i]
    }
  }
  return m
}
let Num= [1,2,3,8,9]
console.log("Q14");
 console.log(minInArray(Num));
 document.getElementById("task14").innerHTML= minInArray(Num)
// /*
// 15
// Create a function called removeFromArray
// that accept an array and elemnt to remove
// and return the array after remove this elemnt from it

// var nums= [1,2,3,8,9]
// Ex: minInArray(nums,8) => [1,2,3,9]

// ** solve it one time using for loop and another using while loop
// **try more cases by your self
// */
function removeFromArray2(arr, element) {
  let i = 0;
  while (i < array.length) {
    if (arr[i] === element) {
      arr.splice(i,3 );
    }
    i++;
  }
  return arr;
}
let NUMS= [1,2,3,8,9]
console.log("Q15");
console.log(minInArray(NUMS,8) );
document.getElementById("task15").innerHTML=minInArray(NUMS,8) 
// /*
// 16
// Create a function called oddArray
// that accept an array
// and return an array have only the odd elemnts

// var nums= [1,2,3,8,9]
// Ex: oddArray(nums) => [1,3,9]

// ** solve it one time using for loop and another using while loop
// **try more cases by your self
// */
let numxs=[1,2,3,8,9]
function oddArray(array){
let arre=[];
let i=0;
while (i<array.length) {
  if(array[i] %2!==0){
    arre.push(array[i])
  }
  i++;
}
return arre;
}
console.log("Q16");
console.log(oddArray(numxs,8));
document.getElementById("task16").innerHTML=oddArray(numxs,8)
// /*
// 17
// Create a function called aveArray
// that accept an array
// and return the average of the numbers inside this array

// var nums= [1,2,3,8,9]
// Ex: aveArray(nums) => 4.6

// var nums2= [1,2,3,8,9,77]
// Ex: aveArray(nums) => 16.6

// ** solve it one time using for loop and another using while loop
// **try more cases by your self
// */
function aveArray(array) {
let sum=0
for(let i=0;i<array.length;i++){
    sum=sum+array[i];
}
return sum/(array.length);
  }
 let nums2= [1,2,3,8,9,77];
 console.log("Q17");
 console.log(aveArray(nums2));
 document.getElementById("task17").innerHTML=(aveArray(nums2))

  





// /*
// 18
// Create a function called shorterInArray
// that accept an array of strings
// and return the shortest string inside this array (first)

// var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
// Ex: shorterInArray(strings) => "alex"

// ** solve it one time using for loop and another using while loop
// **try more cases by your self
// */
function shorterInArray(array) {
  let test = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length < test.length) {
      test = array[i];
    }
  }
  return test;
}
let strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
console.log("Q18");
 console.log(shorterInArray(strings));
 document.getElementById("task18").innerHTML=(shorterInArray(strings))

// /*
// 19
// Create a function called repeatChar
// that accept a string and char
// and return the times that this char repeat inside this string

// var string= "alex mercer madrasa rashed2 emad hala"
// Ex: repeatChar(string,"a") => 6
// Ex: repeatChar(string,"z") => 0

// ** solve it one time using for loop and another using while loop
// **try more cases by your self
// */

let string= "alex mercer madrasa rashed2 emad hala"
function repeatChar(string, chra) {
  let  result = 0;
  for (let i = 0; i < str.length; i++) {
    if (string[i].toLowerCase() === chra.toLowerCase()) {
      result++;
    }
  }
  return result;
}
console.log("Q19");
console.log(shorterInArray(strings));
document.getElementById("task19").innerHTML=shorterInArray(string,'a')
// /*
// 20
// Create a function called evenIndexOddLength
// that accept an array of strings
// and return a new array that have the string with odd length in even index

// var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
// Ex: evenIndexOddLength(strings) => ["madrasa"]

// ** solve it one time using for loop and another using while loop
// **try more cases by your self
// */
function evenIndexOddLength(array) {
  let S=[]
  for (let i = 0; i < array.length; i = i + 2) {
    if (array[i].length % 2 === 1) {
      S.push(array[i])
    }
  }
  return S;
}

let strings1= ["alex","mercer","madrasa","rashed2","emad","hala"]
console.log("Q20");
console.log(evenIndexOddLength(strings1));
document.getElementById("task20").innerHTML= evenIndexOddLength(strings1)

// 21
// Create a function called powerElementIndex
// that accept an array of number
// and return a new array that have the elemnt power by the index of it self

// var nums= [44, 5, 4, 3, 2, 10]
// Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

// ** solve it one time using for loop and another using while loop
// **try more cases by your self
// */
function powerElementIndex2(array) {
  let result = [];
  let i = 0;
  while (i < array.length) {
    result[i] = array[i] ** i;
    i++;
  }
  return result;
}
let num= [44, 5, 4, 3, 2, 10]
console.log("Q21");
console.log(powerElementIndex2(num));
document.getElementById("task21").innerHTML=powerElementIndex2(num)
// // 22
// // Create a function called evenNumberEvenIndex
// // that accept an array of nums
// // and return a new array that have the even number in even index

// // var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
// // Ex: evenNumberEvenIndex(nums) => [2,8,34]

// // ** solve it one time using for loop and another using while loop
// // **try more cases by your self

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

let nums_= [5,2,2,1,8,66,55,77,34,9,55,1]
console.log("Q22");
console.log(evenNumberEvenIndex(nums_) );
document.getElementById("task22").innerHTML=evenNumberEvenIndex(nums_)

let x=30
x=31;

const y=30
y=31