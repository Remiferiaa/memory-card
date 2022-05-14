import React from "react";
import "./Score.css"
const Score = props => {
    return (
        <div className="scoreHold">
            <p className="score current">Current Score: {props.score} </p>
            <p className="score high">High Score: {props.high}</p>
        </div>
    )
}

export default Score
