import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from '../api';


function Navbar({loggedInUser, setCurrentUser}) {

    const logoutUser = async () => {
        await logout();
        setCurrentUser(null);
    }

  return loggedInUser ? (
    <>  
    <p> Welcome {loggedInUser.username}
    <NavLink exact to= {`/users/${loggedInUser._id}`} > 
    <img src={loggedInUser.imageUrl} style={{height:50, width:50}} alt=""/>  
    </NavLink>
    </p>

    <ul>
      <li>
        <NavLink to="/">
          <button onClick={logoutUser}> Logout </button>
        </NavLink>
      </li>
      <li>
        <NavLink activeStyle={{ color: "red" }} exact to="/rides">
          Rides
        </NavLink>
      </li>
      <li>
        <NavLink activeStyle={{ color: "red" }} exact to="/rides/add">
          Add Ride
        </NavLink>
      </li>
    </ul>
    </>
  ) : (
    <ul>
    <li>
      <NavLink activeStyle={{ color: "red" }} exact to="/rides">
        Rides
      </NavLink>
    </li>
    <li>
        <NavLink activeStyle={{ color: "red" }} exact to="/signup">
          Signup
        </NavLink>
      </li>
      <li>
        <NavLink activeStyle={{ color: "red" }} exact to="/login">
          Login
        </NavLink>
      </li>
      {/* <li>
        <NavLink activeStyle={{ color: "red" }} exact to="/login-google">
          Login with Google
        </NavLink>
      </li> */}
  </ul>
  )
}
export default Navbar;