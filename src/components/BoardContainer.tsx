import React, { useEffect } from 'react';
import { Boardrow } from './BoardRow';

//*The Main Game Board

export const BoardContainer = (props:{board:any,setBoard:any,inputnumbers:any,setinputnumbers:any}) => {


    return (
        <div className="bg-slate-500 h-[400px] w-[400px] rounded-sm">
            <Boardrow values={props.board[0]} setinputnumbers={props.setinputnumbers} inputnumbers={props.inputnumbers}/>
            <Boardrow values={props.board[1]}/>
            <Boardrow values={props.board[2]}/>
            <Boardrow values={props.board[3]}/>
            <Boardrow values={props.board[4]}/>
        </div>
    );
}