import React, { useState } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Artist from './components/Artist'
import 'bulma'
import './styles/style.scss'

const App = () => {


  return <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="project_2/" component={Home} />
      <Route exact path="project_2/artist/:strArtist" component={Artist}/>
    </Switch>
    <Footer />
  </BrowserRouter>
}

export default App