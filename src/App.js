import React, { useState, useEffect } from 'react';
import Clock from './Clock';
import Spinner from './Spinner';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [numClicks, setNumClicks] = useState(0);
  console.log("Render App");
  const timezones = [
    { name: 'UTC', offset: 0 },
    { name: 'New York (EST)', offset: -5 },
    { name: 'Los Angeles (PST)', offset: -8 },
    { name: 'London (GMT)', offset: 0 },
    { name: 'Tokyo (JST)', offset: 9 },
    { name: 'Sydney (AEDT)', offset: 11 },
    { name: 'Madrid (CET)', offset: 1 },
  ];

  useEffect(
    () => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
     console.log("Set up timer");

    return () => clearInterval(timer);

  }, []);

  const adjustTime = (type, amount) => {
    const newTime = new Date(currentTime);
    setNumClicks(numClicks + 1);
    switch (type) {
      case 'hours':
        newTime.setHours(newTime.getHours() + amount);
        break;
      case 'minutes':
        newTime.setMinutes(newTime.getMinutes() + amount);
        break;
      case 'seconds':
        newTime.setSeconds(newTime.getSeconds() + amount);
        break;
      default:
        break;
    }

    setCurrentTime(newTime);
  };

  const resetTime = () => {
    setCurrentTime(new Date());
  };

  return (
    <div className="container">
      <header className="row my-4">
        <h1>🌍 World Clock</h1>
        <p>Synchronized clocks across different timezones</p>
      </header>

      <div>
        <h2>Time Controls (Clicks: {numClicks})</h2>
        <div className="">
          <div className="form-group mb-4">
            <label className='form-label'>Hours</label>
            <div className="btn-group">
              <button className='btn btn-primary' onClick={() => adjustTime('hours', -1)}>-1h</button>
              <button className='btn btn-primary' onClick={() => adjustTime('hours', 1)}>+1h</button>
            </div>
          </div>

          <div className="form-group mb-4">
            <label className='form-label'>Minutes</label>
            <div className="btn-group">
              <button className='btn btn-primary' onClick={() => adjustTime('minutes', -1)}>-1m</button>
              <button className='btn btn-primary' onClick={() => adjustTime('minutes', 1)}>+1m</button>
            </div>
          </div>

          <div className="form-group mb-4">
            <label className='form-label'>Seconds</label>
            <div className="btn-group">
              <button className='btn btn-primary' onClick={() => adjustTime('seconds', -10)}>-10s</button>
              <button className='btn btn-primary' onClick={() => adjustTime('seconds', 10)}>+10s</button>
            </div>
          </div>

          <div className="control-section">
            <button className="btn btn-danger" onClick={resetTime}>Reset to Now</button>
            
          </div>
        </div>
      </div>
<Button variant="primary">Primary</Button>
      <div className="card-group">
        {timezones.map((tz, index) => (
          tz.offset > 1 ? <Clock key={index} timezone={tz} currentTime={currentTime} /> : <Spinner key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
