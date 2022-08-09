import React,{useState} from "react";
import { Input } from "./Input";
import { NumberBox } from "./NumberBox";


//*The Main Game Board Single Row


function getDuplicates(array: any[]) {
  var duplicates: any = {};
  for (var i = 0; i < array.length; i++) {
    if (duplicates.hasOwnProperty(array[i])) {
      duplicates[array[i]].push(i);
    } else if (array.lastIndexOf(array[i]) !== i) {
      duplicates[array[i]] = [i];
    }
  }

  return duplicates;
}

// function isEmpty(obj: any) {
//   return Object.keys(obj).length === 0;
// }


export const TypeInputRow = (props: {
  setinputnumbers?: any;
  inputnumbers?: any;
  board?: any;
  inputone?: string;
  inputtwo?: string;
  inputthree?: string;
  inputfour?: string;
  inputfive?: string;
  setinputone?: any;
  setinputtwo?: any;
  setinputthree?: any;
  setinputfour?: any;
  setinputfive?: any;
}) => {

    const [firstkey,setfirstkey] = useState<boolean>()

  function handleChange(value: any, ind: any) {
    let findind = props.board[0].findIndex((item: any) => item == value);
    if(findind == -1){
        return alert("please select a valid number")
    }
    if(!value){
        if(props.inputnumbers.some((item:any) => item.key == findind || item.value === undefined)){
        return  props.setinputnumbers((prevstate:any) => prevstate.filter((n:any) => n.key !== findind));
      } 
    }
    if (String(value).length > 1) return alert("Please select only one number");
   

    if (props.setinputnumbers) {
    
      if (value !== undefined || value !== "") {

       
        if (getDuplicates(props.board[0])[+value] !== undefined) {
          if (ind === 0) {
            props.setinputnumbers((prevstate: any) => [
              ...prevstate,
              {
                value: +value,
                key: getDuplicates(props.board[0])?.[+value]?.[0],
              },
            ]);
          } else {

            if (props.inputnumbers.findIndex((item: any) => item.key == getDuplicates(props.board[0])[+value][0]) !== -1) {
              if(firstkey && getDuplicates(props.board[0])[+value].length > 2){
                props.setinputnumbers((prevstate: any) => [
                    ...prevstate,
                    {
                      value: +value,
                      key: getDuplicates(props.board[0])?.[+value]?.[2],
                    },
                  ]);
                  setfirstkey(false)
              }else{
                props.setinputnumbers((prevstate: any) => [
                    ...prevstate,
                    {
                      value: +value,
                      key: getDuplicates(props.board[0])?.[+value]?.[1],
                    },
                  ]);
                  setfirstkey(true)
              }
              
            }else{
                props.setinputnumbers((prevstate: any) => [
                  ...prevstate,
                  {
                    value: +value,
                    key: getDuplicates(props.board[0])?.[+value]?.[0],
                  },
                ]);
            }
          }
        } else {
          props.setinputnumbers((prevstate: any) => [
            ...prevstate,
            { value: +value, key: findind },
          ]);

        // let valueArr = props.inputnumbers.map(function(item:any){ return item.value });
        // let isDuplicate = valueArr.some(function(item:any, idx:any){ 
        //     return valueArr.indexOf(item) != idx 
        // });

        props.setinputnumbers((prevstate:any) => prevstate.filter((value:any, index:any, self:any) =>
        index === self.findIndex((t:any) => (
          t.key === value.key && t.value === value.value
        ))
      ));

    //   if(isDuplicate){
    //     return alert('Duplicate values does not exist')
    //   }
    
  
    

        }
      } else {
        return;
      }
      // }
    } else {
      return;
    }
  }

  function blurevent(e: EventTarget, ind: number, state: any) {
    let val = e as HTMLInputElement;
    if (val.value === '') {
        props.setinputnumbers((prevstate: any) => {
            return prevstate.filter((n: any) =>{
                console.log(n.value,'vnksfwknfwin',n.key == ind,'n.key == ind',n.key,ind);
               return n.value != state 
            });
        })
        return
    }
    handleChange(val.value, ind);
  }

  function changeevent(e: EventTarget, setstate: any) {
    let val = e as HTMLInputElement;
    // if (!val.value) return;
    setstate(val.value);
  }

  return (
    <div className="w-[full] min-h-[100%]  flex align-middle justify-between">
      <input
        id={"0"}
        onChange={(e) => changeevent(e.target, props.setinputone)}
        value={props.inputone}
        onInput={(e) => blurevent(e.target, 0, props.inputone)}
        type="number"
        className="min-h-[100%] w-[100%] text-gray-700 bg-white border-[2px] border-white  text-center mx-0.5  transition duration-200"
      />
      <input
        id={"1"}
        onChange={(e) => changeevent(e.target, props.setinputtwo)}
        value={props.inputtwo}
        onInput={(e) => blurevent(e.target, 1, props.inputtwo)}
        // onBlur={(e) => blurevent(e.target, 1, props.inputtwo)}
        type="number"
        className="min-h-[100%] w-[100%] text-gray-700 bg-white border-[2px] border-white  text-center mx-0.5  transition duration-200"
      />
      <input
        id={"2"}
        onChange={(e) => changeevent(e.target, props.setinputthree)}
        value={props.inputthree}
        // onBlur={(e) => blurevent(e.target, 2, props.inputthree)}
        onInput={(e) => blurevent(e.target, 2, props.inputthree)}
        type="number"
        className="min-h-[100%] w-[100%] text-gray-700 bg-white border-[2px] border-white  text-center mx-0.5  transition duration-200"
      />
      <input
        id={"3"}
        onChange={(e) => changeevent(e.target, props.setinputfour)}
        value={props.inputfour}
        // onBlur={(e) => blurevent(e.target, 3, props.inputfour)}
        onInput={(e) => blurevent(e.target, 3, props.inputfour)}
        type="number"
        className="min-h-[100%] w-[100%] text-gray-700 bg-white border-[2px] border-white  text-center mx-0.5  transition duration-200"
      />
      <input
        id={"4"}
        onChange={(e) => changeevent(e.target, props.setinputfive)}
        value={props.inputfive}
        // onBlur={(e) => blurevent(e.target, 4, props.inputfive)}
        onInput={(e) => blurevent(e.target, 4, props.inputfive)}
        type="number"
        className="min-h-[100%] w-[100%] text-gray-700 bg-white border-[2px] border-white  text-center mx-0.5  transition duration-200"
      />
    </div>
  );
};
