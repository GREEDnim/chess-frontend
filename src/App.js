import ChessGame from "./components/ChessGame/ChessGame";
import Lobby from "./components/Lobby/Lobby";
import './App.css'
import { useState } from "react";
import { Route,Routes } from "react-router-dom";
import io from 'socket.io-client';
const socket =io.connect('https://chess-backend-znna.onrender.com');

function App(){
  const [color, setColor] = useState(undefined);
  const[roomId,setRoomId]=useState('');
  return(
    
    <Routes>
        <Route path="/" element={ 
        <Lobby 
        socket={socket}
        color={color} 
        setColor={setColor} 
        roomId={roomId}
        setRoomId={setRoomId} />
         } />
        <Route path="/game" element={ 
        <ChessGame 
        socket={socket}
        color={color}
        roomId={roomId} />
        } />
    </Routes>
      
  )
}
export default App;
