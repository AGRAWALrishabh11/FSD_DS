let arr=[1,2,3,4,5,6];
// let newArr=arr.map((x)=>x*2);
// console.log(newArr);

 let even=arr.filter((x)=>x%2==0);
 console.log(even);

let sum=even.reduce((x,y)=>x+y,0);
console.log(sum);

const students=[
    {name: 'Alice' ,score:50},
    {name: 'Bob' ,score:70},
    {name: 'charlie' ,score:40},
    {name: 'David' ,score:75},
];

let total=students.filter((student)=> student.score >60)
.map((student)=>student.score*2)
.reduce((x,y)=>x+y,0);

console.log(total);