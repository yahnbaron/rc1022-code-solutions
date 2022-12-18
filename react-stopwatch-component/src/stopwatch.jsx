import React, { useState, useEffect } from 'react';

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isRunning && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  function handleStartStop() {
    setIsRunning(!isRunning);
  }

  function handleReset() {
    setSeconds(0);
    setIsRunning(false);
  }

  const pause = <i className="fa-solid fa-pause"></i>;
  const play = <i className="fa-solid fa-play"></i>;

  return (
    <div>
      <div className='round' onClick={!isRunning && handleReset}>{seconds}</div>
      <div className='icon-holder' onClick={handleStartStop}>
        {isRunning ? pause : play}
      </div>
    </div>
  );
}

export default Stopwatch;
