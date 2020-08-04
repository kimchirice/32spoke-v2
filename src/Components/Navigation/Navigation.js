import React from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Home from '../../Pages/Home'
import About from '../../Pages/About'

export default function Navigation() {
  return (
    <Router>          
      <div>
        <ul className='nav nav-pills'>
          <li className='nav-item'>
            <Link to="/" className='nav-link'>Home</Link>
          </li>
          <li><Link to="/about" className='nav-link'>About</Link></li>
        </ul>
        <Switch>  
          <Route exact path='/' ><Home /></Route>
          <Route path='/about'><About /></Route>
        </Switch>
      </div>
    </Router>
  )
}
