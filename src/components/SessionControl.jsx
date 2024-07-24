import React from "react";

const SessionControl = ({sessionLength, setSessionLength, isRunning}) =>{
    const handleDecrement = () =>{
        if(!isRunning && sessionLength >1){
            setSessionLength(sessionLength-1);
        }
    };
    const handleIncrement = () =>{
        if(!isRunning && sessionLength <60){
            setSessionLength(sessionLength+1);
        }
    };
    return(
        <div className="session-control">
            <h2 id="session-label" style={{fontSize: '35px'}}>Session length</h2>
            <div className="length-control" style={{display: 'flex',flexDirection: 'row', justifyContent: 'center', gap: '10px'}}>
                <button id="session-decrement" onClick={handleDecrement} style={{backgroundColor:'red',color: 'white',width:'30px', border:'none'}}>-</button>
                <span id="session-length" style={{fontSize: '25px'}}>{sessionLength}</span>
                <button id="session-increment" onClick={handleIncrement} style={{backgroundColor:'green',color: 'white',width:'30px', border:'none'}}>+</button>
            </div>
        </div>
    );
};

export default SessionControl;