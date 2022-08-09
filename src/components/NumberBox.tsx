
import React from "react";


//*The Main Game Board Row Single Box or column



export const NumberBox = (props:{value:number,key:number,ind:any,setinputnumbers?:any,inputnumbers?:any}) => {

  //*This funtion handles the click event when user clicks on a several box

 function handleClick() {
    if(props.setinputnumbers){
        if(props.inputnumbers.some((item:any) => item.key == props.ind || item.value === undefined)){
          props.setinputnumbers((prevstate:any) => prevstate.filter((n:any) => n.key !== props.key));
        }else{
          if(props.value !== undefined){
            props.setinputnumbers((prevstate:any) => [...prevstate,{value:props.value,key:props.ind}]);
          }else{
            return
          }
        }
    }else{
        return
    }
 }

  return (
    <div  className="min-h-[100%] w-[20%] bg-sky-500 text-center flex align-middle justify-center flex-col border-[2px] border-white cursor-pointer hover:bg-sky-600 transition duration-200">
      <p className="font-semibold text-3xl">{props.value !== undefined ? props.value : ''}</p>
    </div>
  );
};

