function task(message,delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(message);
            resolve();
        },delay);
    });
}
task("First Task completed ",1000)
.then(()=>task("second task is completed ",2000))
.then(()=>task("third task is completed ",3000));