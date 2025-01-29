import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const launchDate = new Date("Feb 1, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = launchDate - now;

    return {
      days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
    };
  };

  const [time, setTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="countdown">
      {["days", "hours", "minutes", "seconds"].map((unit) => (
        <div key={unit} className="time">
          <span>{time[unit]}</span>
          <small>{unit.charAt(0).toUpperCase() + unit.slice(1)}</small>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
