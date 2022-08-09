import React from "react";
import { NumberBox } from "./NumberBox";

//* This is the input Row where all the numbers will be displayed

export const InputRow = (props:{values:any[]}) => {
    return(
        <div className="w-[full] min-h-[100%]  flex align-middle">
            {props.values.map((value:any,index:number)=>{
                return <NumberBox value={value.value} key={index} ind={index}/>
            })}
        </div>
    )
}