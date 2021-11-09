import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Testimonials from './pages/Testimonials'
import Home from './pages/Home'
import Header from './components/Header'
import Collector from './pages/Collect'

const App = () => {
  const [user, setUser] = useState('')

  return (
    <div>
      <Router>
        <Header user={user} setUser={setUser} />
        <Switch>
          <Route path='/testimonials'>
            <Testimonials />
          </Route>
          <Route path='/donate'>

          </Route>
          <Route path='/collect'>
            <Collector />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/profile'>
            <Profile user={user} setUser={setUser} />
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
