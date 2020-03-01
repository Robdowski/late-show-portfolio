import React, { useState, useEffect } from 'react'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import mp3 from './lateshow.mp3'

const variants = {
    left: { x: -1000 },
    right: { x: 1000 },
    middle: { x: 0 },
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
    duration: 2
}

const media = {
    hidden: { y: 150, opacity: 0 },
    visible: { y: 0, opacity: 1 },
}

const musicLink = {
    initial: {y: -1},
    animate: {y: 1},
}

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

const Main = () => {

    const [playing, toggle] = useAudio()
    return (
        <div className='home-content'>
            <motion.div className='heading-circle' initial='hidden' animate='visible' variants={variants}></motion.div>
            <motion.div onClick={toggle} animate={{y: [0, -5, 0, 5, 0]}} transition={{loop:Infinity, duration:3}} className="audio-player">
                <i class="fas fa-music"></i><p>{playing ? "Playing! (Click To Pause)" : "Play The Theme!"}</p>
            </motion.div>
            <motion.h1 className='heading-top' initial='left' animate='middle' variants={variants} transition={spring} >The Late Show</motion.h1>
            <motion.h1 className='heading-bot' initial='right' animate='middle' variants={variants} transition={spring}><span className='heading-span'>with</span> Robert Carter</motion.h1>
            <motion.div initial='hidden' animate='visible' variants={media} transition={spring} className='media-links'>
                <a href='https://github.com/Robdowski' target='_blank'><motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} class="fab fa-github-square"></motion.i></a>
                <a href='https://www.linkedin.com/in/robertcarterdev/' target='_blank'><motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} class="fab fa-linkedin"></motion.i></a>
                <Link exact to='/portfolio'><motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} class="fas fa-folder"></motion.i></Link>
                <Link exact to='/contact'><motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} class="fas fa-envelope"></motion.i></Link>
            </motion.div>
        </div>
    )
}

export default Main
