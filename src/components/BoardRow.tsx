import React from "react";
import { NumberBox } from "./NumberBox";

//*The Main Game Board Single Row


export const Boardrow = (props:{values:any[],setinputnumbers?:any,inputnumbers?:any}) => {
    return(
        <div className="w-[full] min-h-[20%] bg-red-500 flex align-middle">
            {props.values.map((value:number,index:number)=>{
                return <NumberBox value={value} key={index} ind={index} setinputnumbers={props.setinputnumbers} inputnumbers={props.inputnumbers}/>
            })}
            
        </div>
    )
}