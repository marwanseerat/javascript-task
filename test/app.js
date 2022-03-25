"use strict";
// let person = {
//     firstname: "bahaa",
//     lastname: "aldeen",
//     id: 201720200,
//     enter_name: function(x, y){
//         this.firstname = x;
//         this.lastname = y;
//     },
//     showname: function(){
//         return this.firstname + " " + this.lastname;
//     }
// };


// let age=5

// while (age<10) {
//     console.log(age);age++
//     if (age===7) {
//         break;
//     }
    
// }

// let fruit = ["apple" , "banana", "date"]
// console.log(`my favoirte ${fruit [0]}`);


// let age=7;

// while (age<=10) {
//     console.log(age);
//     age++;
// }

// let x=document.createElement("input");
// x.onchange= function () {
//     x.style="color:green;font-size:20px;";
// }

// document.getElementById("d2").appendChild(x);

    
// <div id='outAndOver' onmouseover="mOver(this)" onmouseout="mOut()" 
//     style="background-color:white;width:120px;height:20px;padding:40px;">
//     Mouse Over Me</div>
    
//     <script>
//     function mOver(Xoxo) {
//       Xoxo.innerHTML = "Orange academy"
//     }
    
//     function mOut() {
//      document.getElementById('outAndOver').innerHTML = "Marwa"
//     }
//     </script>




// let student={
// firstname:"marwa",
// id:123456789,
// address:"aqaba",
// showname :function (){
// return ` the name is ${this.firstname} with Id ${this.id}  and the ${this.address}`;
// }

// }
// console.log(student.showname());
// console.log(student["firstname"]);

// let std1 = Object.create(student);

// std1.firstname ="taeba";
// console.log(std1.showname());
 

// let student={
//      firstname:"marwa",
//     id:123456789,
//      address:"aqaba",
//      shownam:function(){
//          return `the name is ${this.firstname} with id ${this.id} and ${this.address}`;
//      }
// };

//     console.log(student.shownam());

    // let std1 =Object.create(student);
    // console.log(std1.shownam());

    // std1.firstname="taeba";
    // console.log(std1.shownam());


class book{
    constructor(title,auther, year){
        this.title=title
        this.auther=auther
        this.year=year
    }
    getsummary() {
        return `${this.title} was written by ${this.auther} in ${this.year}`;
    }

    getage() {
        const years= new  Date ().getFullYear()
        this.year;
        return `${this.title} is ${years} years old`;
    }

    revise(newyear){
        this.year=newyear
        this.reviserd =true
    }


}

const book1 =new book ('darkside','marwa','2010');
console.log(book);
book1.revise("2020")
console.log(book1);
console.log(book1.getsummary());
console.log(book1.getage());
console.log(book1.revise());