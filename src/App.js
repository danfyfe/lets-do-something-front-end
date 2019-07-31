import React from 'react';
import './App.css';

function App() {
  return (
    <div className="main">
      <header>
        <div className='logo-container'>
          <img className='logo' src='https://i.imgur.com/z0gkiOz.png' alt='logo of dance party'/>
        </div>
        <div className='title-container'>
          <h1>Let's Do Something!</h1>
        </div>

        <div className='menu-container'>
          <div className='menu'>
            <div className='menu-bar'></div>
            <div className='menu-bar'></div>
            <div className='menu-bar'></div>
          </div>
        </div>
      </header>
      <div className='content'>
      </div>

      <footer>
      </footer>
    </div>
  );
}

export default App;
