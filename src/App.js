import React, { useState, useEffect } from 'react';
import './App.css';


import { Route } from 'react-router-dom'

import Main from './components/Main'
import Nav from './components/Nav'
import About from './components/About'

import mp3 from './components/lateshow.mp3'

const useAudio = () => {
  const [audio] = useState(new Audio(mp3));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

 
function App() {
  const [playing, toggle] = useAudio()
  return (
    <div className="App">
      <Nav />
      <Route exact path='/' render={(props) => <Main {...props} playing={playing} toggle={toggle} useAudio={useAudio} />} />
      <Route exact path='/about' render={(props) => <About {...props} />} />
    </div>
  );
}

export default App;
