import React, { useState } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Redux from 'redux'
import { connect } from 'react-redux'
import 'bulma'

import Home from './components/Home'
import Navbar from './components/Navbar'
import Artist from './components/Artist'
import Mapbox from './components/Mapbox'
import About from './components/About'
import Player from './components/Player'


import './styles/style.scss'

const App = (props) => {
  const [search, setSearch] = useState('')
  const currentSong = props.currentSong
  const firstLoad = props.firstLoad

  return <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/artist/:strArtist" component={Artist}/>
      <Route exact path="/map" component={Mapbox}/>
      <Route exact path="/about" component={About}/>
    </Switch>
    <Player currentSong={currentSong} firstLoad={firstLoad} width='100%' height='80px'></Player>
  </BrowserRouter>
}

function mapStateToProps(state){
  return {
    inputValue: state.inputValue,
    currentSong: state.currentSong,
    firstLoad: state.firstLoad
  }
} 

export default connect(mapStateToProps)(App)