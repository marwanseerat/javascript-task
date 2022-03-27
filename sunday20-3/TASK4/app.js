
let number1=prompt("enter the first number");

let number2=prompt("enter the second number");

let number3=prompt("enter the third number");

let num1=Number(number1);

let num2=Number(number2);

let num3=Number(number3);


if ( num1 % 3 ==0 || num2 % 3 ==0 || num3 % 3 ==0 ) {
    console.log("fizz");
    document.write("fizz");
}

if (num1 % 5 ==0 || num2 % 5 ==0 || num3 %5 ==0) {
    console.log("buzz");
    document.write("buzz");
}

if (num1 % 5 ==0 && num1 % 3 ==0 || num2 % 5 ==0 && num2 % 3 ==0|| num3 %5 ==0 &&  num3 % 3 ==0 ) {
    console.log(" fizzbuzz");
    document.write("fizzbuzz");
}