let formOrder=document.getElementById("mobForm");
let tableItem=document.getElementById("boadTa");
let mobileinfo=[];
/////////////////////////////////////////////////////////////////
function storeInLocalStorage(){
    let stringArray=JSON.stringify(mobileinfo);
    localStorage.setItem("data",stringArray);
    callFromLocalStorage()
}

function callFromLocalStorage(){
    let dataObj=localStorage.getItem("data");
    let mb=JSON.parse(dataObj);
    console.log(mb,"mb");
    if(mb != null){
        mobileinfo=mb;
        
    }
    informationprint()
}
callFromLocalStorage()
/////////////////////////////////////////////////////////////////////////////////////////////
function mobile(useName,typeNameD) {
    this.useName=useName;
    this.typeNameD=typeNameD;
    this.price= pricemobile(50,500);
    this.cond=condition()
   
    mobileinfo.push(this);
    informationprint();
    console.log();
    storeInLocalStorage()
    
}

function pricemobile(min,max) {
    
    return Math.ceil(Math.random() * (max - min) + min);
}

function condition() {
    let pric1=mobile.price;
    if(pric1<100){
        return "used";
       }else{
          return "new device";
       }
       
}

formOrder.addEventListener("submit",handelsubmit);
function handelsubmit(event) {
    event.preventDefault();
    let useName=event.target.useName.value;
    console.log(useName);
    let typeNameD=event.target.typeNameD.value;
    console.log(typeNameD);
    // let priCe= mobile.price;
    // console.log(priCe);
    // let cOnd=mobile.cond;
    // console.log(cOnd);
    new mobile(useName,typeNameD)

}
handelsubmit();

function informationprint() {
    // let trElement = document.createElement("tr");
    // let tdElement4 = document.createElement("td");
    // let tdElement1 = document.createElement("td");
    // let tdElement2 = document.createElement("td");
    // let tdElement3 = document.createElement("td");
    tableItem.textContent='';
    for (let i = 0; i < mobileinfo.length; i++){
        let trElement = document.createElement("tr");
        let tdElement4 = document.createElement("td");
        let tdElement1 = document.createElement("td");
        let tdElement2 = document.createElement("td");
        let tdElement3 = document.createElement("td");
        tableItem.appendChild(trElement);
        trElement.appendChild(tdElement4);
        trElement.appendChild(tdElement1);
        trElement.appendChild(tdElement2);
        trElement.appendChild(tdElement3);
        tdElement4.textContent =  mobileinfo[i].useName;
        tdElement1.textContent =  mobileinfo[i].typeNameD;
        tdElement2.textContent =  mobileinfo[i].price;
        tdElement3.textContent =  mobileinfo[i].cond;
  
    }
}
/////////////////////////////////////////////locationform////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
// let locElement=document.getElementById("locForm");
// let locpara=document.getElementById("cityResult");
// let button=document.getElementById("submit2");

// locElement.addEventListener("submit", function(event){
//     event.preventDefault();
// let city=event.target.locName.value;
//     getData(city);
//   });
// async function getData(x) {
//     let responce= await fetch(`https://eu1.locationiq.com/v1/search.php?key=pk.5242a80a93c4591514004371fe3507ee&q=${x}&format=json`);
//     let data= await responce.json();
//     console.log(data[0]);
//     locpara.innerHTML=`City name is :${data[0].display_name.split(",",2)} || Longitude is :${data[0].lon} || latitude is:${data[0].lat}`;
//     document.querySelector(`#img`).src=data[0].icon;
// };





















// async function getData(){
//     let responce= await fetch('https://eu1.locationiq.com/v1/search.php?key=pk.5242a80a93c4591514004371fe3507ee&q=amman&format=json')
//     console.log(typeof responce);
//     let data=await responce.json()
//    let string1='';
//    let display=data.map(function marwa(name1){
//        string1+=`<li style="font-weight:bold;">display_name:${name1.display_name.slice(0,26)} </li>
//        <li style="font-weight:bold;">lat:${name1.lat} </li>
//        <li><b>lon:</b>${name1.lon} </li> `; 
//        document.body.innerHTML= string1 

//    })
//    console.log(display);

   
// }
//   getData()
  
//   console.log("get data out side the function");
