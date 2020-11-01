import React, { useEffect, useState } from "react";
import ReactAudioPlayer from 'react-audio-player';
import "./App.css";

function App() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-11-23`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });


  return (
<div className="cool">
      <img src="https://media.giphy.com/media/QZQ7Ee7Ig6eRbdsG70/giphy.gif" alt="" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '-120px'}}/>
      <span style={{fontSize: '50px'}}>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </span>
      <a href="https://ratethatmog.com/" > <p style={{fontSize: '25px'}}>DID SOMEONE SAY TRANSMOG!????</p> </a>
      <div>
        <iframe  style={{marginTop: '3%'}} width="1280" height="720" src="https://www.youtube.com/embed/s4gBChg6AII" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
  <iframe width="1" height="1" src="https://www.youtube.com/embed/800be1ZmGd0?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
}

export default App;
