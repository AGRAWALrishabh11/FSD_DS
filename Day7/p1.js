const myPromise=new Promise((resolve,reject)=>{
    let success=true;
    
    if(success){
        resolve("Data send successfully ");
    }
    else{
        reject("data failed to send");
    }
});

myPromise.then((message)=>{
    console.log("Data recieved"+message);

})
.catch((arr)=>{
    console.log("Failed to fetch data "+arr)
});