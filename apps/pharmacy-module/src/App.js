import React from 'react';
import logo from './logo.svg';
import './App.css';

import CInputGroup from '@cogent/c-inputgroup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      <CInputGroup placeholder="This is re-used component"/>
      </header>
    </div>
  );
}

export default App;
