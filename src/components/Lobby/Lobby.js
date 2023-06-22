import React, { useState } from 'react';
import './Lobby.css'
import { useNavigate } from 'react-router-dom';
function Lobby({socket,color,setColor,roomId,setRoomId}) {
 
  const [roomJoined,setRoomJoined]=useState(false);
  const navigate = useNavigate();

  const IfRoomJoinable=(joinable,firstPlayer)=>{
    console.log('called from server')
    if(joinable) {
        setRoomJoined(true);
        if(firstPlayer) setColor(0);
        else setColor(1);
    }
    else alert('room invalid / full , enter another room id');
  }

  const handleColorSelect = (selectedColor) => {
    setColor(selectedColor);
  };

  const handleJoinRoom = () => {
    console.log('Joining room:', roomId);
    socket.emit('join-room',roomId,IfRoomJoinable)
  };

  const handleStartMatch = () => {
    console.log('Starting match with color:', color);
    navigate('/game')
  };

  return (
    <div className='lobby-container'>
      <h2>ENTER A ROOM ID , TO JOIN :</h2>
      
        <div>
          <input className='room-inp'
            type="text"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            placeholder="Enter Room ID"
          />
        </div>

      <button className='room-btn' onClick={handleJoinRoom} disabled={!roomId}>Join Room</button>


      <button className='match-btn' onClick={handleStartMatch} disabled={!roomJoined}>
        Start Match
      </button>
    </div>
  );
}

export default Lobby;
