import React, { useState } from 'react';
import './App.css';
import funnyImage from './smurf.jpg';

const Button = ({ link, children }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="App-button">
    {children}
  </a>
);

const Header = () => (
  <header className="App-header">
    <h1>Welcome to ScriptCraft</h1>
    <p>We are using generative AI to assist producers in adapting books for movies, shows, plays, and more.</p>
  </header>
);

const WaitlistForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Email: ${email}\nAdded to the waitlist!`);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="WaitlistForm">
      <label>
        Join our waitlist:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="EmailInput"
        />
      </label>
      <input type="submit" value="Submit" className="SubmitButton" />
    </form>
  );
};

const App = () => {
  return (
    <div className="App">
      <Header />
      <WaitlistForm />
      <img src={funnyImage} alt="Funny" className="FunnyImage" />
      <div className="App-links">
        <Button link="https://www.youtube.com/yourchannel">YouTube</Button>
        <Button link="https://discord.gg/yourdiscord">Discord</Button>
      </div>
    </div>
  );
}

export default App;