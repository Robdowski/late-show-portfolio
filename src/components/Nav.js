import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const music = {
    initial: {y: 300},
    animate: {y: 0}
}

const Nav = (props) => {

    const handleHome = () => {
        props.history.push('/')
    }

    return (
        <div className='navbar'>
            <h1 className='nav-title' onClick={() => handleHome()}><span className='nav-name'>Robert </span>Carter</h1>
            {props.location.pathname !== "/" && 
            <motion.div onClick={props.toggle} initial='initial' animate='animate' variants={music} transition={{duration: .5}} className="audio-player-nav">
                <i class="fas fa-music" ></i><p>{props.playing ? "Playing! (Click To Pause)" : "Play The Theme!"}</p>
            </motion.div>}     
            <ul className='navigation-links'>
                <li><NavLink className='nav-link' activeClassName='selected' exact to='/'>Home</NavLink></li>
                <li><NavLink className='nav-link' activeClassName='selected' exact to='/about'>About</NavLink></li>
                <li><NavLink className='nav-link' activeClassName='selected' exact to='/portfolio'>Portfolio</NavLink></li>
                <li><NavLink className='nav-link' activeClassName='selected' exact to='/contact'>Contact</NavLink></li>
            </ul>
        </div>
    )
}

export default Nav
