import React, { useState } from 'react';
import './App.css';

function App() {
  const [isRotating, setIsRotating] = useState(false);

  const toggleRotation = () => {
    setIsRotating(!isRotating);
  };

  return (
    <div className="App">
      <header className="App-header">
      <img
  src={require('./profile.jpg')} 
  className={isRotating ? "Profile-photo rotating" : "Profile-photo"}
  alt="Алла Павлова" 
  onClick={toggleRotation}
  onMouseEnter={toggleRotation}
  onMouseLeave={toggleRotation}
/>
        <h1>Surname: Pavlova</h1>
        <h1>Name: Alla</h1>
        <p>Age: 57</p>
        <a
          className="App-link"
          href="https://github.com/Pavlo-fo95"
          target="_blank"
          rel="noopener noreferrer"
        >
         My Github
        </a>
      </header>
    </div>
  );
}

export default App;


