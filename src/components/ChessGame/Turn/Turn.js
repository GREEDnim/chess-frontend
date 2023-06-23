import { useState,useEffect } from "react";
import { Game } from "../../../Services/Board/Game";
import './Turn.css'
export default function Turn({board}){
    const [turn,setTurn]=useState(Game.getTurn());
    useEffect( ()=>{
        setTurn(Game.getTurn());
    },[board]);

    return(
        <div className="turn">PLAYER {turn==0?'WHITE':'BLACK'} TO PLAY</div>
    )

}