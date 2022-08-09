import React, { useState } from "react";
import "./App.css";
import { BoardContainer } from "./components/BoardContainer";
import { Boardrow } from "./components/BoardRow";
import { Input } from "./components/Input";
import { InputRow } from "./components/InputRow";
import { RecordContainer } from "./components/RecordConatiner";
import { TypeInputRow } from "./components/InputContainer";

function App() {

  //*These are the main global states which handles the app

  const [board, setBoard] = useState<any>([
    [5, 4, 1, 3, 2],
    [3, 4, 5, 6, 7],
    [2, 5, 6, 8, 9],
    [3, 7, 2, 3, 4],
    [5, 8, 4, 1, 2],
  ]);

  const [inputnumbers, setinputnumbers] = useState<any>([]);
  const [inputvalue, setinputvalue] = useState("");
  const [record, setrecord] = useState<any>([]);

  let indexarr: number[] = [];

  const [inputone,setinputone] = useState("");
  const [inputtwo,setinputtwo] = useState("");
  const [inputthree,setinputthree] = useState("");
  const [inputfour,setinputfour] = useState("");
  const [inputfive,setinputfive] = useState("");

  console.log(inputnumbers,'inputnumbers')


  //*This is the main business logic function of the app when the user checks his answer

  function onclick() {
    if (inputnumbers.length < 2)
      return alert("Please select at least two numberx");
    if (
      inputnumbers.reduce((acc: any, cur: any) => {
        return acc + cur?.value;
      }, 0) !== Number(inputvalue)
    ) {
      return alert("The sum of the selected numbers is not correct");
    }

    const newboard = board.map((row: any[], i: number) => {
      if (i == 0) {
        return row.map((number: number, j: any) => {
          let ind;
         
          if (inputnumbers.some((item: any) => item.key == j)) {
            ind = inputnumbers.filter((item: any) => item.key == j)[0]?.key;
            console.log(ind,'ind')
            indexarr.push(ind);
            return (board[0][ind] = board[1][ind]);
          }
          // if (inputnumbers.some((item: any) => item.key == j)) {
          //   ind = inputnumbers.filter((item: any) => item.key == j)[0]?.key;
          //   indexarr.push(ind);
          //   return (board[0][ind] = board[1][ind]);
          // }
          return number;
        });
      }

      if (i == 1 || i == 2 || i == 3) {
        return row.map((number: any, j: number) => {
          let df = indexarr.map((ind) => {
            if (j == ind) {
              console.log((board[i][ind] = board[i + 1][ind]));
              return (board[i][ind] = board[i + 1][ind]);
            } else {
              return number;
            }
          });

          if (df.every((n: any) => n == df[0])) {
            return number;
          } else {
            return Array.from(df.filter((f) => f !== number))[0];
          }
        });
      }
      if (i == 4) {
        return row.map((number: any, j: number) => {
          let df = indexarr.map((ind) => {
            if (j == ind) {
              return (board[i][ind] = undefined);
            } else {
              return number;
            }
          });

          if (df.every((n: any) => n == df[0])) {
            console.log(df, "df second one");
            return number;
          } else {
            console.log(df, "df second two");
            return Array.from(df.filter((f) => f !== number))[0];
          }
        });
      }
    });
    setBoard(newboard);
    setrecord((prevstate: any) => [...prevstate, inputnumbers]);
    setinputnumbers([]);
    setinputvalue("");
    setinputone("");
    setinputtwo("");
    setinputthree("");
    setinputfour("");
    setinputfive("");
    indexarr = [];

    if (newboard.every((row: any) => row.every((number: any) => number == undefined))) {
      alert("You won");
      window.location.reload();
    }
  }


  //*Renders the app

  return (
    <div className="App">
      <RecordContainer record={record} setrecord={setrecord}/>
      <h2 className="py-2 text-4xl font-bold mb-3">Board Game</h2>
      <BoardContainer
        board={board}
        setBoard={setBoard}
        inputnumbers={inputnumbers}
        setinputnumbers={setinputnumbers}
      />
      {/* <div className="flex align-middle justify-between">
        <div className="bg-slate-500 h-[80px] w-[400px] rounded-sm mt-5">
          <InputRow values={inputnumbers} />
        </div>
        <div className="self-center mx-3">
          <p className="font-semibold text-3xl">=</p>
        </div>
        <div className="bg-slate-500 h-[80px] w-[80px] rounded-sm mt-5">
          <Input inputvalue={inputvalue} setinputvalue={setinputvalue} />
        </div>
      </div> */}
      <div className="flex align-middle justify-between">
        <div className="bg-slate-500 h-[80px] w-[400px] rounded-sm mt-5">
          <TypeInputRow
          // inp
          inputone={inputone}
          setinputone={setinputone}
          inputtwo={inputtwo}
          setinputtwo={setinputtwo}
          inputthree={inputthree}
          setinputthree={setinputthree}
          inputfour={inputfour}
          setinputfour={setinputfour}
          inputfive={inputfive}
          setinputfive={setinputfive}

          board={board} inputnumbers={inputnumbers} setinputnumbers={setinputnumbers} />
        </div>
        <div className="self-center mx-3">
          <p className="font-semibold text-3xl">=</p>
        </div>
        <div className="bg-slate-500 h-[80px] w-[80px] rounded-sm mt-5">
          <Input inputvalue={inputvalue} setinputvalue={setinputvalue} />
        </div>
      </div>
      <div>
        <button
          onClick={onclick}
          className="px-12 py-2 mt-4 rounded-md bg-sky-300 text-md"
        >
          Check Answer
        </button>
      </div>
    </div>
  );

  
}

export default App;
