import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <nav className='navbar'>
    <div className='navbar-brand'>
      <img src='./images/logo.png' width='60' className='navbar-item'></img>
      <p className="navbar-item">Gitcogs</p>
    </div>
    <div className='navbar-menu'>
      <div className="navbar-start">
        <a className="navbar-item">Home</a>
        <div className="navbar-divider"></div>
        <a className="navbar-item">Mapbox</a>
        <a className="navbar-item">Year</a>
      </div>
    </div>
  </nav>
}