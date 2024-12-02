sayHello=()=>{
    console.log("I am in hello function")
};

console.log("Task started");
setTimeout(sayHello,3000); //run after 3 second
sayHello();
console.log("task end");