// function display(){
//     alert("Hello");
// }

// function display(){
//     console.log("Hello");
// }
// display();

//var allow redeclaration (global scope)
//let doesn't allow redeclartion 

// let x=12.23;
// let y="heelo";
// let z=true;
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);

// let obj={            //object
//     'name':'rahul',
//     id:12,
// };
// console.log(obj);

// let arr=[1,2,3,4,5]; //array
// console.log(arr);

// let n=null; 
// console.log(typeof arr);   // null is an object

function validate(){
    let x=document.getElementById("uname").value;
    let y=document.getElementById("upass").value;

    if(x=="Rishabh" && y==123){
        // alert("Login Successfully");
        document.getElementById("res").innerHTML="Login Successfully";
    }
    else{
        // alert("Invalid User");
        document.getElementById("res").innerHTML="Invalid User";
    }
}

let a = () => {           //arrow function
    console.log("Hello"); 
};
a();

let b = (x,y) => {           //arrow function
    console.log(x+y); 
};
b(12,34);

let c = (x,y) => {           //arrow function
    return(x+y); 
};
let ans=c(12,34);
console.log(ans);


let say=()=>console.log("hello js"); //single line arrow function
say();


function display(){
    let p1=document.querySelector("p");
    p1.innerHTML="Result";
    p1.style.backgroundColor="red";
}