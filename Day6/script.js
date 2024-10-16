let arr=[1,2,3,4,5,6];
// let newArr=arr.map((x)=>x*2);
// console.log(newArr);

 let even=arr.filter((x)=>x%2==0);
 console.log(even);

let sum=even.reduce((x,y)=>x+y,0);
console.log(sum);