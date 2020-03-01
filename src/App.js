import React from 'react';
import './App.css';


import { Route } from 'react-router-dom'

import Main from './components/Main'
import Nav from './components/Nav'
import About from './components/About'

 
function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path='/' component={Main} />
      <Route exact path='/about' component={About} />
    </div>
  );
}

export default App;
