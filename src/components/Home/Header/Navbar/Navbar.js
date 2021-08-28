import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
// import { useContext } from 'react';

const Navbar = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);

  const handleLogOut =() =>{
    setLoggedInUser({})
  }
 
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand ml-5" href="/">Mama Laundry</a>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link mr-5" to="/">Home </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link mr-5" to="/userInfo/:email">Dashboard </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link mr-5" to="/laundryService">Laundry Services </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link mr-5" to="/WriteReview">Reviews </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link mr-5" to="/admin">Admin </Link>
      </li>
      <li className="nav-item active">
     <Link className="nav-link mr-5" to="/login"> {loggedInUser.email ?<span onClick={handleLogOut}> Log Out  </span>  :  <span> Log In </span> }</Link>
        
      </li>
      

    </ul>
    
  </div>
</nav>
        </div>
    );
};

export default Navbar;