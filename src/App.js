import React, { useState } from 'react';
import Lottie from 'lottie-react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import animeLottie from '../src/assets/animeLottie.json';

function Header() {
  const headerStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    borderBottom: '2px solid red',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  return <header style={headerStyle}>Mood2Watch</header>;
}

function MoodButton({ label, onClick, icon }) {
  const buttonStyle = {
    backgroundColor: 'transparent',
    border: '2px solid red',
    borderRadius: '8px',
    color: 'white',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    margin: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const iconStyle = {
    marginRight: '8px',
    color: 'yellow',
  };
  return (
    <button onClick={onClick} style={buttonStyle}>
      {icon && <i className={`fas ${icon}`} style={iconStyle}></i>}
      {label}
    </button>
  );
}

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

function App() {
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
        {/* Placeholder for movie recommendations */}
        <Lottie
          animationData={animeLottie} // Pass the animation JSON data
          loop={true} // Loop the animation
          style={{ width: 200, height: 200 }} // Set size for the animation
        />
      </div>
    </>
  );
}
export default App;
