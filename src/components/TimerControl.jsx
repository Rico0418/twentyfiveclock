 import React from "react";

 const Timer = ({timerLabel, timeLeft, handleStartStop, resetTimer}) =>{
    const formatTime = (time) =>{
        const minutes = Math.floor(time/60);
        const seconds = time % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0': ''}${seconds}`;
    };

    return(
        <div className="timer">
            <h2 id="timer-label" style={{fontSize: '35px'}}>{timerLabel}</h2>
            <div id="time-left" style={{fontSize: '25px'}}>{formatTime(timeLeft)}</div>
            <button id="start" onClick={handleStartStop} style={{backgroundColor:'blue',color: 'white',width:'50px', height:'50px', border:'none', borderRadius:'4px'}}>Start</button>
            <button id="stop" onClick={handleStartStop} style={{backgroundColor:'red',color: 'white',width:'50px', height:'50px', border:'none', borderRadius:'4px', marginRight: '10px', marginLeft: '10px'}}>Stop</button>
            <button id="reset" onClick={resetTimer} style={{backgroundColor:'grey',color: 'white',width:'50px', height:'50px', border:'none', borderRadius:'4px'}}>Reset</button>
        </div>
    );
 };
 export default Timer;