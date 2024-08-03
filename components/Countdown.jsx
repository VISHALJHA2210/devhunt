"use client"
import { useState, useEffect } from "react";


const Countdown = () => {

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      });
    
      useEffect(() => {
        const targetDate = new Date('2024-08-06T05:30:00');
        const intervalId = setInterval(() => {
          const now = new Date();
          const difference = targetDate - now;
    
          if (difference <= 0) {
            clearInterval(intervalId);
            setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            return;
          }
    
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
          setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);
    
        return () => clearInterval(intervalId);
      }, []);

  return (
    <div className="flex gap-1 justify-center items-center">
          <div className="w-[50px] h-[36px] bg-timer-grad rounded-md flex items-center justify-center">
            <span className="text-white">{String(timeLeft.days)}d</span>
          </div>
          <span className="text-white font-bold">:</span>
          <div className="w-[50px] h-[36px] bg-timer-grad rounded-md flex items-center justify-center">
            <span className="text-white ">{String(timeLeft.hours)}h</span>
          </div>
          <span className="text-white font-bold">:</span>
          <div className="w-[50px] h-[36px] bg-timer-grad rounded-md flex items-center justify-center">
            <span className="text-white">{String(timeLeft.minutes)}m</span>
          </div>
          <span className="text-white font-bold">:</span>
          <div className="w-[50px] h-[36px] bg-timer-grad rounded-md flex items-center justify-center">
            <span className="text-white">{String(timeLeft.seconds)}s</span>
          </div>
    </div>
  )
}

export default Countdown