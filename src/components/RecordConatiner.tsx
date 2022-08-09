import React from 'react';

//* This is Record container where all the commands are stored

export const RecordContainer = (props:{record:any,setrecord:any}) => {

    // console.log(props.record,'record')

    return(
        <div className="bg-gray-700 fixed top-0 left-0  h-[100vh] overflow-y-auto w-[300px] rounded-sm scrollbar">
           <div className='bg-gray-700 font-semi-bold flex align-middle justify-center py-3'>
              <h3>Command Records</h3>
           </div>
           <div>
              {props?.record?.map((record:any) => {
                return(
                    <div className='bg-gray-500 font-semi-bold flex align-middle justify-center py-4 border-b-[1px] border-white'>
                    {record.map((row:any,ind:number) => {
                        return(
                            <div className='flex align-middle justify-center'>
                               {ind !== 0 && (
                                <p>+</p>
                               )}
                               <p className='px-4 bg-gray-300 py-0.5 rounded-md text-md'>{row.value}</p>
                             </div>
                        )
                    })}
                    </div>
                )
              }).reverse()}
           </div>
        </div>
    )
}