import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import './Navbar.css';
import './script.js';

const Navbar = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);

  const handleLogOut =() =>{
    setLoggedInUser({})
  }

    return (
        <div>
           <nav   className="navbar navbar-expand-lg navbar-light bg-light">
           <div>
               <a className="brand-title link" href="/">Mama Laundry</a>
           </div>
           <a style={{backgroundColor:"black"}} id="body" href="#" className="toggle-button"> 
           <span className="bar">  </span>
           <span className="bar"> </span>
           <span className="bar">  </span>
           <span className="bar"> </span>
           <span className="bar"> </span>
           <span className="bar"> </span>
        
            </a>

  <div className="navbar-links" >
    <ul>
      <li >
        <Link className="link" to="/">Home </Link>
      </li>
      <li>
        <Link className="link" to="/userInfo/:email">Dashboard </Link>
      </li>
      <li >
        <Link className="link"  to="/laundryService">Laundry Services </Link>
      </li>
      <li>
        <Link className="link" to="/WriteReview">Reviews </Link>
      </li>
      <li>
        <Link className="link" to="/admin">Admin </Link>
      </li>
      <li>
     <Link  className="link" to="/login"> {loggedInUser.email ?<span onClick={handleLogOut}> Log Out  </span>  :  <span> Log In </span> }</Link>
        
      </li>
      

    </ul>
    
  </div>
</nav>
        </div>
    );
};

export default Navbar;