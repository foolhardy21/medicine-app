import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import About from './pages/About'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Testimonials from './pages/Testimonials'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/testimonials'>Testimonials</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/testimonials'>
            <Testimonials />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
