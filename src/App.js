import React from 'react';
import './App.css';


import { Route } from 'react-router-dom'

import Main from './components/Main'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path='/' component={Main} />
    </div>
  );
}

export default App;
