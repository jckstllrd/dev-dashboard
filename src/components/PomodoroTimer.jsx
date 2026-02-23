import { useRef, useState } from 'react';
import '../styles/PomodoroTimer.css';

export default function PomodoroTimer() {
  const onePomodoro = 1500;
  const [timer, setTimer] = useState(onePomodoro);
  const intervalRef = useRef(null);

  function handleStartTimer() {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  }

  function handleStopTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  function handleResetTimer() {
    handleStopTimer();
    setTimer(onePomodoro);
  }

  const secondsToHHMMSS = (seconds) => {
    if (seconds < 3600)
      return new Date(seconds * 1000).toISOString().substring(14, 19);

    return new Date(seconds * 1000).toISOString().substring(11, 19);
  };

  return (
    <>
      <h1>{secondsToHHMMSS(timer)}</h1>
      <div className="buttons">
        <button onClick={handleStartTimer}>Start</button>
        <button onClick={handleStopTimer}>Stop</button>
        <button onClick={handleResetTimer}>Reset</button>
      </div>
    </>
  );
}
