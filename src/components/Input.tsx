import React from "react";

//* This is input where user enters his answer

export function Input(props:{inputvalue:string,setinputvalue:any}){
    return(
        <input type="number" value={props.inputvalue} onChange={(e:any) => props.setinputvalue(e.target.value)} maxLength={3}  className="min-h-[100%] w-[100%] text-gray-700 bg-white border-[2px] border-white  text-center  transition duration-200" />
    )
}