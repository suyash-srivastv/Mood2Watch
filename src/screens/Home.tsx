import Lottie from "lottie-react";
import React from "react";
import { useState } from "react";
import { MoodButton } from "../components/CustomButtons";
import { Header } from "../components/Header";
import animeLottie from '../assets/animeLottie.json'





function Home() {
  const appStyle = {
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif',
    paddingTop: -50,
  };

  const titleStyle = {
    fontSize: '36px',
    marginBottom: '40px',
  };
  const headerStyle = {
    fontSize: '36px',
    marginBottom: '40px',
  };

  return (
    <>
      <Header />
      <div style={appStyle}>
        <h1 style={headerStyle}>Choose Your mood</h1>
        <MoodSelector />
        <Lottie
          animationData={animeLottie}
          loop={true}
          style={{ width: 200, height: 200 }}
        />
      </div>
    </>
  );
}
export default Home;

function MoodSelector() {
  const moods = [
    { label: 'Cheerful', icon: 'fa-smile' },
    { label: 'Reflective', icon: 'fa-lightbulb' },
    { label: 'Gloomy', icon: 'fa-cloud' },
    { label: 'Humorous', icon: 'fa-laugh' },
    { label: 'Melancholic', icon: 'fa-sad-tear' },
    { label: 'Idyllic', icon: 'fa-peace' },
    { label: 'Chill', icon: 'fa-ice-cream' },
    { label: 'Romantic', icon: 'fa-heart' },
    { label: 'Weird', icon: 'fa-question' },
    { label: 'Horny', icon: 'fa-heartbeat' },
    { label: 'Sleepy', icon: 'fa-bed' },
    { label: 'Angry', icon: 'fa-angry' },
    { label: 'Fearful', icon: 'fa-frown-open' },
    { label: 'Lonely', icon: 'fa-user' },
    { label: 'Tense', icon: 'fa-exclamation' },
    { label: 'Thoughtful', icon: 'fa-brain' },
    { label: 'Thrill-Seeking', icon: 'fa-rocket' },
    { label: 'Playful', icon: 'fa-gamepad' },
  ];

  const [selectedMood, setSelectedMood] = useState(null);

  const selectorStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: '800px',
    margin: '0 auto',
  };

  return (
    <div style={selectorStyle}>
      {moods.map((mood) => (
        <MoodButton
          key={mood.label}
          label={mood.label}
          onClick={() => setSelectedMood(mood.label)}
          icon={mood.icon}
        />
      ))}
    </div>
  );
}