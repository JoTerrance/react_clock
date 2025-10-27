import React from 'react';
import './Clock.css';

function Clock({ timezone, currentTime }) {
  const getTimeInTimezone = (date, offset) => {
    const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    return new Date(utc + (3600000 * offset));
  };

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const localTime = getTimeInTimezone(currentTime, timezone.offset);

  return (
    <div className="clock">
      <div className="clock-label">{timezone.name}</div>
      <div className="clock-time">{formatTime(localTime)}</div>
      <div className="clock-offset">UTC{timezone.offset >= 0 ? '+' : ''}{timezone.offset}</div>
    </div>
  );
}

export default Clock;
