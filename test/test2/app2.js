var first =new Promise(function(resolve,reject){
    let connection =true 

    if(connection){
        resolve("connection success");
    }else{
        reject(Error("connection faild"))
    }

});

// first.then(function(resolve){
// console.log(resolve);
// .catch(function(reject){
//     console.log(reject);}
// })


    