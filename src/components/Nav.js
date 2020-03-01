import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='navbar'>
            <h1><span className='nav-name'>Robert </span>Carter</h1>
            <ul>
                <li><NavLink className='nav-link' activeClassName='selected' exact to='/'>Home</NavLink></li>
                <li><NavLink className='nav-link' activeClassName='selected' exact to='/about'>About</NavLink></li>
                <li><NavLink className='nav-link' activeClassName='selected' exact to='/portfolio'>Portfolio</NavLink></li>
                <li><NavLink className='nav-link' activeClassName='selected' exact to='/contact'>Contact</NavLink></li>
            </ul>
        </div>
    )
}

export default Nav
