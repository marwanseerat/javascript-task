"use strict";
let num1 = prompt("enter Frist Number")

let num2 = prompt("enter second number")

let operation = prompt("chose the opration +/-/*/")

let number1 = Number(num1)
let number2 = Number(num2)

// if (operation=="+") {
//     console.log(num1+num2);
//     document.write("num1 + num2");
// }

// if (operation=="-") {
//     console.log(num1-num2);
//     document.write("num1 * num2");
// }

// if (operation=="*") {
//     console.log(num1*num2);
//     document.write("num1 - num2");
// }

// if (operation=="/") {
//     console.log(num1/num2);
//     document.write("num1 / num2");
// }

switch (operation ) {
    case "+":
        let add = number1 + number2;
        console.log(add);
        break;

    case "-":
        let min = number1 - number2;
        console.log(min);
        break;

    case "*":
        let malti = number1 * number2;
        console.log(malti);
        break;


    case "/":
        let divi = number1 / number2;
        console.log(divi);
        break;


}