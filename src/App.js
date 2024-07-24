import React, {useState,useEffect} from 'react';
import BreakControl from './components/BreakControl';
import SessionControl from './components/SessionControl';
import Timer from './components/TimerControl';
import './App.css';

const App = () =>{
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
  const [timerLabel, setTimerLabel] = useState('Session');
  const [isRunning, setIsRunning] = useState(false);

  useEffect(()=>{
    setTimeLeft(sessionLength*60);
  },[sessionLength]);

  useEffect(()=>{
    if(timeLeft === 0){
      switchTimer();
    }
  },[timeLeft]);

  useEffect(()=>{
    let timerinterval;
    if(isRunning){
      timerinterval = setInterval(()=>{
        setTimeLeft((prevTime)=>prevTime-1);
      },1000);
    }
    return () => clearInterval(timerinterval);
  }, [isRunning]);

  const switchTimer = () =>{
    const audio = document.getElementById('beep');
    audio.play();
    if(timerLabel === 'Session'){
      setTimerLabel('Break');
      setTimeLeft(breakLength * 60);
    }else{
      setTimerLabel('Session');
      setTimeLeft(sessionLength* 60);
    }
  };

  const resetTimer = () =>{
    const audio = document.getElementById('beep');
    audio.pause();
    audio.currentTime = 0;
    setIsRunning(false);
    setBreakLength(5);
    setSessionLength(25);
    setTimerLabel('Session');
    setTimeLeft(25*60);
  };
   const handleStartStop = () =>{
    setIsRunning(!isRunning);
   };
   return(
    <div className='App'>
      <h1>25 + 5 Clock</h1>
      <div className='controls'>
        <BreakControl breakLength={breakLength} setBreakLength={setBreakLength} isRunning={isRunning}/>
        <SessionControl sessionLength={sessionLength} setSessionLength={setSessionLength} isRunning={isRunning}/>
      </div>
      <Timer timerLabel={timerLabel} timeLeft={timeLeft} handleStartStop={handleStartStop} resetTimer={resetTimer}/>
      <audio id="beep" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav" preload="auto"/>
    </div>
   )
}

export default App;
