import Board from "./components/Board/Board";
import Result from "./components/Result/Result";
import './App.css'
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import { useState } from "react";

function App(){

  const[checkMate,setCheckMate]=useState(false);
  return(
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        <Board setCheckMate={setCheckMate} ></Board>
        {checkMate && <Result></Result>}
      </div>
    </DndProvider>
    
   
  )
}

export default App;