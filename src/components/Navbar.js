import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

export default function Navbar() {
  return <nav className='navbar'>
    <Link className='navbar-brand' to='/'>
      <img src={logo} width='70' id='icon' className='navbar-item'></img>
      <p className="navbar-item has-text-weight-bold" id='title'>GITCOGS</p>
    </Link>
    <div className='navbar-menu'>
      <div className="navbar-end">
        <Link className="navbar-item" to='/'>
          <div className="navbar-item">Home</div>
        </Link>
        <Link className="navbar-item" to='/map'>
          <div className="navbar-item">Geochart</div>
        </Link>
        <Link className="navbar-item" to='/about'>
          <div className="navbar-item">About</div>
        </Link>
      </div>
    </div>
  </nav>
}
