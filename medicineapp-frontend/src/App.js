import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './pages/About'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Testimonials from './pages/Testimonials'
import Home from './pages/Home'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Router>
        <Header />
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
