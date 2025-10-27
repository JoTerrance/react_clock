import React, { useState, useEffect } from 'react';
import Clock from './Clock';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [offsetMs, setOffsetMs] = useState(0);

  const timezones = [
    { name: 'UTC', offset: 0 },
    { name: 'New York (EST)', offset: -5 },
    { name: 'Los Angeles (PST)', offset: -8 },
    { name: 'London (GMT)', offset: 0 },
    { name: 'Tokyo (JST)', offset: 9 },
    { name: 'Sydney (AEDT)', offset: 11 },
  ];

  useEffect(() => {
    const tick = () => setCurrentTime(new Date(Date.now() + offsetMs));
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [offsetMs]);

  const adjustTime = (type, amount) => {
    let delta = 0;
    switch(type) {
      case 'hours':
        delta = amount * 60 * 60 * 1000;
        break;
      case 'minutes':
        delta = amount * 60 * 1000;
        break;
      case 'seconds':
        delta = amount * 1000;
        break;
      default:
        break;
    }
    setOffsetMs(prev => prev + delta);
  };

  const resetTime = () => {
    setOffsetMs(0);
    setCurrentTime(new Date());
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🌍 World Clock</h1>
        <p>Synchronized clocks across different timezones</p>
      </header>

      <div className="controls">
        <h2>Time Controls</h2>
        <div className="control-group">
          <div className="control-section">
            <label>Hours</label>
            <div className="button-group">
              <button onClick={() => adjustTime('hours', -1)}>-1h</button>
              <button onClick={() => adjustTime('hours', 1)}>+1h</button>
            </div>
          </div>
          
          <div className="control-section">
            <label>Minutes</label>
            <div className="button-group">
              <button onClick={() => adjustTime('minutes', -1)}>-1m</button>
              <button onClick={() => adjustTime('minutes', 1)}>+1m</button>
            </div>
          </div>
          
          <div className="control-section">
            <label>Seconds</label>
            <div className="button-group">
              <button onClick={() => adjustTime('seconds', -10)}>-10s</button>
              <button onClick={() => adjustTime('seconds', 10)}>+10s</button>
            </div>
          </div>
          
          <div className="control-section">
            <button className="reset-button" onClick={resetTime}>Reset to Now</button>
          </div>
        </div>
      </div>

      <div className="clocks-container">
        {timezones.map((tz, index) => (
          <Clock key={index} timezone={tz} currentTime={currentTime} />
        ))}
      </div>
    </div>
  );
}

export default App;
