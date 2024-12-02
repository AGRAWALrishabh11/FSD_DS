import React from "react";
import Marks from "./Marks";

const DisplayMarks = () => {
    const student=[
        {name:"Abhishek",roll:3224,m1:88,m2:77,m3:90},
        {name:"Rahul",roll:3224,m1:88,m2:77,m3:90},
        {name:"Akay",roll:3224,m1:88,m2:77,m3:90},
        {name:"Tim",roll:3224,m1:88,m2:77,m3:90},
        
    ];
  return (
    <div>
      {student.map((student,index)=>{
        return(
            <Marks 
            key={index} 
            name={student.name}
            roll={student.roll}
            m1={student.m1} 
            m2={student.m2} 
            m3={student.m3}
        />
        )
        
      })}
    </div>
  );

};

export default DisplayMarks;