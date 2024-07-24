import React from "react";

const BreakControl = ({ breakLength, setBreakLength, isRunning}) =>{
    const handleDecrement = () =>{
        if(!isRunning && breakLength >1){
            setBreakLength(breakLength - 1);
        }
    };
    const handleIncrement = () =>{
        if(!isRunning && breakLength < 60){
            setBreakLength(breakLength+1);
        }
    };
    return (
        <div className="break-control">
            <h2 id="break-label" style={{fontSize: '35px'}}>Break Length</h2>
            <div className="length-control" style={{display: 'flex',flexDirection: 'row', justifyContent: 'center', gap: '10px'}}>
                <button id="break-decrement" onClick={handleDecrement} style={{backgroundColor:'red',color: 'white',width:'30px', border:'none'}}>-</button>
                <span id="break-length" style={{fontSize: '25px'}}>{breakLength}</span>
                <button id="break-increment" onClick={handleIncrement} style={{backgroundColor:'green',color: 'white',width:'30px', border:'none'}}>+</button>
            </div>
        </div>
    );
};
export default BreakControl;