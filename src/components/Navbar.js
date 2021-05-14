import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from '../api';
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import '../App.css';


function Navbar({loggedInUser, setCurrentUser}) {

    const logoutUser = async () => {
        await logout();
        setCurrentUser(null);
    }

    const { data, isLoading, errorMessage } = useOpenWeather({
      key: '84b45247526fcace7224516a12125e01',
      lat: '38.72927824720325',
      lon: '-9.138576062552916',
      lang: 'en',
      unit: 'metric', // values are (metric, standard, imperial)
    });
    
  return loggedInUser ? (
    <>  
    <div className="ReactWeather">
    <ReactWeather 
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Lisbon"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
    </div>
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
    <>
        <div className="ReactWeather"><ReactWeather
          isLoading={isLoading}
          errorMessage={errorMessage}
          data={data}
          lang="en"
          locationLabel="Lisbon"
          unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
          showForecast
        />
        </div>
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
  </>
  )
}
export default Navbar;