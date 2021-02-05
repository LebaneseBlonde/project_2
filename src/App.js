import React, { useState } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Redux from 'redux'
import 'bulma'

import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Artist from './components/Artist'
import Mapbox from './components/Mapbox'
import About from './components/About'

import './styles/style.scss'

const App = () => {

  return <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/artist/:strArtist" component={Artist}/>
      <Route exact path="/map" component={Mapbox}/>
      <Route exact path="/about" component={About}/>
    </Switch>
  </BrowserRouter>
}

export default App