import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='navbar'>
            <NavLink className='nav-link' activeClassName='selected' exact to='/'>Home</NavLink>
            <NavLink className='nav-link' activeClassName='selected' exact to='/about'>About</NavLink>
            <NavLink className='nav-link' activeClassName='selected' exact to='/portfolio'>Portfolio</NavLink>
            <NavLink className='nav-link' activeClassName='selected' exact to='/contact'>Contact</NavLink>
        </div>
    )
}

export default Nav
