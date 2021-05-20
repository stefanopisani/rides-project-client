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
      <nav id="nav-boot" class="navbar navbar-expand-lg navbar-light">
    
        <div class="container-fluid">

          <a class="navbar-brand navbar-item" id="nav-brand" href="/"> Rides <img id="nav-brand-img" src="/map.png"/> </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-list">
                <li class="nav-item navbar-item">
                <a class="nav-link" aria-current="page" href="/about"> About </a>
                </li>

                <li class="nav-item navbar-item">
                <a class="nav-link" href="/rides"> Let's go 🤟🏻 </a>
                </li>
            </ul>

            <form class="d-flex auth-buttons"> 
              <figure class="image mt-2">
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
            </form>

          </div>
        </div>
      </nav>
      </>
      ) : (
      <>
        <nav id="nav-boot" class="navbar navbar-expand-lg navbar-light">
    
          <div class="container-fluid">

              <a class="navbar-brand navbar-item" id="nav-brand" href="/"> Rides <img id="nav-brand-img" src="/map.png"/> </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-list">
                  <li class="nav-item navbar-item">
                  <a class="nav-link" aria-current="page" href="/about"> About </a>
                  </li>

                  <li class="nav-item navbar-item">
                  <a class="nav-link" href="/rides"> Let's go 🤟🏻 </a>
                  </li>
              </ul>

              <form class="d-flex auth-buttons"> 
                <NavLink className="button is-primary mr-3" exact to="/signup">
                      <strong> Signup </strong>
                </NavLink>  
                <NavLink className="button is-light" exact to="/login">
                       Login
                </NavLink>
              </form>

              </div>
          </div>
        </nav>
      {/* <button class="btn" type="submit" style={{backgroundColor: 'hsl(171, 100%, 41%)', color:"white", marginRight:10, padding:'10px 20px', fontFamily:'Montserrat'}} > <NavLink style={{color: 'white'}} exact to="/signup"> <b> Signup </b> </NavLink> </button>
     <button class="btn btn-outline" type="submit" style={{backgroundColor: 'hsl(0, 0%, 96%)',color: 'black', padding:'10px 20px', fontFamily:'Montserrat'}} >  <NavLink style={{color: 'grey'}} exact to="/login"> Login </NavLink> </button> */}

    </>
  )
}
export default Navbar;





// {/* <nav className="navbar" role="navigation" aria-label="main navigation">
//             <div className="navbar-brand ml-3">
//             <a className="navbar-item is-size-3" href="/">
//               Rides
//               <img src="/map.png" className="ml-3 mt-1" width="30" height="40" alt="logo"/>  
//             </a>

//               {/* <div  className="navbar-burger"  data-target="navbarExampleTransparentExample">
//                 <span aria-hidden="true"></span>
//                 <span aria-hidden="true"></span>
//                 <span aria-hidden="true"></span>
//               </div>
//                */}
//             </div>

//             <div className="navbar-menu">
//               <div className="navbar-start">

//                 <a className="navbar-item">
//                   About
//                 </a>

//                 <a className="navbar-item">
//                   Contact
//                 </a>
              

//               </div>

//               <div className="navbar-end">
                
//                 <div className="navbar-item">
//                   <div id="buttons menu" className="buttons">   
//                     <NavLink className="button is-primary mr-3" exact to="/signup">
//                     <strong> Signup </strong>
//                     </NavLink>
                      
//                     <NavLink className="button is-light" exact to="/login">
//                       Login
//                     </NavLink>

//                   </div>
//                 </div>
//               </div>
//             </div>
//         </nav> */}



// {/* <nav class="navbar" role="navigation" aria-label="main navigation">
//           <div class="navbar-brand ml-3">
//             <a class="navbar-item is-size-3" href="/">
//               Rides
//               <img src="/map.png" className="ml-3 mt-1" width="30" height="40"/>  
//             </a>

//             {/* <div  class="navbar-burger burger"  data-target="navbarBasicExample">
//               <span aria-hidden="true"></span>
//               <span aria-hidden="true"></span>
//               <span aria-hidden="true"></span>
//             </div> */}

//           </div>

//           <div class="navbar-menu">
//             <div class="navbar-start">

//               <a class="navbar-item">
//                 About
//               </a>

//               <a class="navbar-item">
//                 Contact
//               </a>
//             </div>

//             <div class="navbar-end mr-3">
              
//                 <figure class="image mt-3">
//                   <NavLink exact to= {`/users/${loggedInUser._id}`} > 
//                     <img src={loggedInUser.imageUrl} style={{height:40, width:40, borderRadius:50}} alt=""/>  
//                   </NavLink>
//                 </figure>
              
//               <div class="navbar-item">
//                 <div class="buttons">   
//                   <NavLink class="button is-primary mr-3" exact to="/rides/add">
//                   <strong> + </strong>
//                   </NavLink>
                    
//                   <NavLink class="button is-light" onClick={logoutUser} to="/">
//                     Logout
//                   </NavLink>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav> */}