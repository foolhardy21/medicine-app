import React from 'react'
import { Link } from 'react-router-dom'
import '../navStyle.css'

function Header(props) {

    function handleLogOut() {
        props.setUser('')
        window.localStorage.removeItem('userId')
    }
    function handleAdminLogOut(){
        window.localStorage.removeItem('adminID')
        props.setAdmin('')
    }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ab" >
        <Link className="navbar-brand" to="/" ><i class="fas fa-prescription-bottle-alt fa-2x " ></i></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                {/* <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/testimonials">Testimonials</Link>
                </li> */}
                {
                    !props.user && !props.admin &&
                    <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                }
                {
                    !props.user && !props.admin &&
                    <li className="nav-item">
                    <Link className="nav-link" to="/signup">Signup</Link>
                </li>
                }
                {
                    props.user && 
                    <li className="nav-item">
                        <Link className="nav-link" to="/donate">Donate</Link>
                    </li>
                }
                {
                    props.user && 
                    <li className="nav-item">
                        <Link className="nav-link" to="/collect">Collect</Link>
                    </li>
                }
                    {
                        props.user && 
                    <li className="nav-item">
                        <Link className="nav-link" to="/profile">Profile</Link>
                    </li>
                    }
                {
                    props.user && 
                    <li className="nav-item" onClick={handleLogOut}>
                        <Link className="nav-link" to='/'>Logout</Link>
                    </li>
                }
                {/* {
                    !props.admin && !props.user &&
                    <li className="nav-item">
                        <Link className='nav-link' to='/login-as-admin'>Login as admin</Link>
                    </li>
                } */}
                {
                    props.admin &&
                    <li className = "nav-item">
                        
                        <Link className = 'nav-link' to = {`/admin-page/${window.localStorage.adminID}`}>Adminpage</Link>    
                    </li>
                }
                {
                    props.admin &&
                    <li className = 'nav-item' onClick = {handleAdminLogOut}>
                        <Link className = 'nav-link' to = '/'>Admin Logout</Link>
                    </li>
                }
            </ul>
        </div>
</nav>
    </>
  );
}

export default Header;
