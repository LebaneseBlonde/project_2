import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import 'bulma'
import './styles/style.scss'

const App = () => {
  return <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
    <Footer />
  </BrowserRouter>
}

export default App