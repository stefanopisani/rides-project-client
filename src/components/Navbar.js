import React from "react";
import "bulma/css/bulma.css";
import { NavLink } from "react-router-dom";
import { logout } from '../api';
import '../App.css';


function Navbar({loggedInUser, setCurrentUser}) {

    const logoutUser = async () => {
        await logout();
        setCurrentUser(null);
    }

    
  return loggedInUser ? (
    <> 
      <div className="mb-3">
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand ml-3">
            <a class="navbar-item is-size-3" href="/">
              Rides
              <img src="/map.png" className="ml-3 mt-1" width="30" height="40"/>  
            </a>

            <div  class="navbar-burger"  data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </div>
          </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">

              <a class="navbar-item">
                About
              </a>

              <a class="navbar-item">
                Contact
              </a>
            

            </div>

            <div class="navbar-end mr-3">
              
                <figure class="image mt-3">
                  <NavLink exact to= {`/users/${loggedInUser._id}`} > 
                    <img src={loggedInUser.imageUrl} style={{height:40, width:40, borderRadius:50}} alt=""/>  
                  </NavLink>
                </figure>
              
              <div class="navbar-item">
                <div class="buttons">   
                  <NavLink class="button is-primary mr-3" exact to="/rides/add">
                  <strong> + </strong>
                  </NavLink>
                    
                  <NavLink class="button is-light" onClick={logoutUser} to="/">
                    Logout
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      </>
      ) : (
      <>
      <div className="mb-3">
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand ml-3">
            <a className="navbar-item is-size-3" href="/">
              Rides
              <img src="/map.png" className="ml-3 mt-1" width="30" height="40" alt="logo"/>  
            </a>

              <div  className="navbar-burger"  data-target="navbarExampleTransparentExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </div>
            </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu">
              <div className="navbar-start">

                <a className="navbar-item">
                  About
                </a>

                <a className="navbar-item">
                  Contact
                </a>
              

              </div>

              <div className="navbar-end">
                
                <div className="navbar-item">
                  <div className="buttons">   
                    <NavLink className="button is-primary mr-3" exact to="/signup">
                    <strong> Signup </strong>
                    </NavLink>
                      
                    <NavLink className="button is-light" exact to="/login">
                      Login
                    </NavLink>

                  </div>
                </div>
              </div>
            </div>
        </nav>
      </div>
    </>
  )
}
export default Navbar;



// {/* <p> Welcome {loggedInUser.username}
//       <NavLink exact to= {`/users/${loggedInUser._id}`} > 
//     <img src={loggedInUser.imageUrl} style={{height:50, width:50}} alt=""/>  
//       </NavLink>
//     </p>

    
//     <ul>
//       <li>
//         <NavLink to="/">
//           <button onClick={logoutUser}> Logout </button>
//         </NavLink>
//       </li>
//       <li>
//         <NavLink activeStyle={{ color: "red" }} exact to="/rides">
//           Rides
//         </NavLink>
//       </li>
//       <li>
//         <NavLink activeStyle={{ color: "red" }} exact to="/rides/add">
//           Add Ride
//         </NavLink>
//       </li>
//     </ul>
//     </>
//   ) : (
//     <>
//         {/* <div className="ReactWeather"><ReactWeather
//           isLoading={isLoading}
//           errorMessage={errorMessage}
//           data={data}
//           lang="en"
//           locationLabel="Lisbon"
//           unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
//           showForecast
//         />
//         </div> 
//     <ul>
//     <li>
//       <NavLink activeStyle={{ color: "red" }} exact to="/rides">
//         Rides
//       </NavLink>
//     </li>
//     <li>
//         <NavLink activeStyle={{ color: "red" }} exact to="/signup">
//           Signup
//         </NavLink>
//       </li>
//       <li>
//         <NavLink activeStyle={{ color: "red" }} exact to="/login">
//           Login
//         </NavLink>
//       </li>
//       {/* <li>
//         <NavLink activeStyle={{ color: "red" }} exact to="/login-google">
//           Login with Google
//         </NavLink>
//       </li> 
//   </ul> */}