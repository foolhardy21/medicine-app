import React from 'react'
import { useHistory } from 'react-router-dom'
import { verifyUser } from '../services/users'

function Login() {
  const history = useHistory()

  async function handleLoginSubmit(e) {
    e.preventDefault()

    const response = await verifyUser(e.target.login_username.value, e.target.login_password.value)
    if(response.includes('invalid')) {
      alert(response)
    } else {
      history.push(`/profile`)
      window.localStorage.setItem('userId',JSON.stringify(response))
    }

  } 
  return (
    
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor='login_username'>username</label>
        <input name='login_username' type='text' /><br />
        <label htmlFor='login_password'>password</label>
        <input name='login_password' type='password'/><br />
        <input type='submit' value='login'/>
      </form>

  );
}

export default Login;
