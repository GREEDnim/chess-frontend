import Board from "./components/Board/Board";
import './App.css'
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
function App(){

  return(
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        <Board></Board>
      </div>
    </DndProvider>
    
   
  )
}

export default App;