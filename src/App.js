import React from 'react';
import './App.css';

import EventsContainer from './containers/EventsContainer.js'

function App() {
  return (
    <div className="main">
      <div className='header'>
        <div className='logo-container'>
          <img className='logo' src='https://i.imgur.com/z0gkiOz.png' alt='logo of dance party'/>
        </div>
        <div className='title-container'>
          <h1>Let's Do Something!</h1>
        </div>

      </div>
      <div className='main-content'>

        <EventsContainer/>
      </div>

      <footer>
      </footer>
    </div>
  );
}

export default App;
