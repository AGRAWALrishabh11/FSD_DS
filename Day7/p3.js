function fetchdata(){
    return new Promise((resolve)=>{
        let data={id:1,name:"Ansh", city:"GZB"};
        setTimeout(()=>{
            resolve(data);
        },3000);
    });
}
fetchdata().then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
});
