import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router , Route } from 'react-router-dom'
import 'typeface-montserrat'
import 'typeface-advent-pro'
import 'typeface-poppins'
import './styles/index.css'
import Home from './pages/Home'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
