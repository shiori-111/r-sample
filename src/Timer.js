import React from 'react';
import { useTimer } from 'react-timer-hook';
import styled from "styled-components";

function MyTimer({ expiryTimestamp }) {
  const Button = styled.button`
    float: none;
    width: 15%;
    background-color: orange;
    padding: 10px;
    margin: 0 30px;
    border-radius: 10px;
    box-shadow: 3px 3px 1px 1px rgba(0, 0, 2, .1);
  `;

  const {
    seconds,
    minutes,
    hours,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <div style={{textAlign: 'center'}}>
      <h1>react-timer-hook </h1>
      <div style={{fontSize: '10px'}}>
        <span>{hours.toString().padStart(2, '0')}</span>:<span>{minutes.toString().padStart(2, '0')}</span>:<span>{seconds.toString().padStart(2, '0')}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <Button onClick={start}>Start</Button>
      <Button onClick={pause}>Pause</Button>
      <Button onClick={resume}>Resume</Button>
      <Button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 300);
        restart(time)
      }}>Restart</Button>
    </div>
  );
}

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}