// 'use strict';
// let form_=document.getElementById("locform");
// let div_=document.getElementById("locp");




// function getvalue(loccation)
// {
//      this.loccation = loccation;

//      btn3 (loccation);

// }

//  async function btn3(x) {
//     let response=await fetch(`https://eu1.locationiq.com/v1/search.php?key=pk.5242a80a93c4591514004371fe3507ee&q=${x}&format=json`) 
//     console.log(response);
//     let data =await response.json()

//     let headone=document.createElement("h1");
//     div_.appendChild(headone)
//     headone.innerHTML=`Location Name: ${data[0].display_name} <br>
//     lot: ${data[0].lat}
//     lon: ${data[0].lon}
//     <br>`
 

   
// }

// btn3();



// form_.addEventListener("click",getdata);
// function getdata(event){
//     // event.preventDefault();
//     let locationname= event.target.locationname.value 
//     console.log(locationname);
//     new getvalue(loccation)
//     btn3()

// }
// getdata()
'use strict';
let locform = document.getElementById("mobForm");
let pargloc =  document.getElementById("cityResult")




function getvalue(loccation)
{
     this.loccation = loccation;

     outputlocation(loccation);

}

async function outputlocation(x)
{
    let respone = await fetch(`https://eu1.locationiq.com/v1/search.php?key=pk.146180d54ef1b81b7922cf956cba402d&q=${x}&format=json`)
    let data = await respone.json()


   let createname = document.createElement("span");
   pargloc.appendChild(createname)
   createname.innerHTML= `Location Name: ${data[0].display_name} <br>
   lot: ${data[0].lat}
   lon: ${data[0].lon}
   <br>`
   let imgsrc = data[0].icon
   console.log(imgsrc);
   document.getElementById("imgg").src =` ${imgsrc}`

    console.log(data);


}

locform.addEventListener("submit" , getfromform ) 
function getfromform(event) 
{
    event.preventDefault();

    let loccation = event.target.locName.value ; 
    console.log(loccation);
    new getvalue(loccation)



}
getfromform();





