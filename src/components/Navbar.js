import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

export default function Navbar() {
  return <nav className='navbar'>
    <Link className='navbar-brand' to='/'>
      <img src={logo} width='70' className='navbar-item'></img>
      <p className="navbar-item">Gitcogs</p>
    </Link>
    <div className='navbar-menu'>
      <div className="navbar-start">
        <Link className="navbar-item" to='/'>
          <div className="navbar-item">Home</div>
        </Link>
        <Link className="navbar-item" to='/map'>
          <div className="navbar-item">Mapbox</div>
        </Link>
        <Link className="navbar-item" to='/about'>
          <div className="navbar-item">About</div>
        </Link>
      </div>
    </div>
  </nav>
}