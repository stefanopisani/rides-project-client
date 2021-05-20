import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import React from 'react';
import {loggedin} from './api';
import ListRides from './components/ListRides';
import AddRide from './components/AddRide';
import RideDetails from './components/RideDetails';
import EditRide from './components/EditRide';
import UserProfile from './components/UserProfile';
import EditUser from './components/EditUser';
import AddReview from './components/AddReview';
import Weather from './components/Weather';
import Home from './components/Home';
import PrivateRoute from './components/PrivatRoute';
import Footer from './components/Footer';
import About from './components/About';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component {
  state= {
    loggedInUser: null
  }

  async componentDidMount() {
    if (this.state.loggedInUser === null) {
      const response = await loggedin();
      
      if (response.data._id) {
        this.setCurrentUser(response.data)
      }
    }
    
  }

  setCurrentUser = (user) => {
    this.setState({
      loggedInUser: user 
    })
  }

  render(){
    const{loggedInUser} = this.state;
    return (
      <>
      
      <ToastContainer />
      <Navbar loggedInUser={loggedInUser} setCurrentUser={this.setCurrentUser}/>
      
      <div className="App body">
        <Switch> 
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/rides" render={(props) => <ListRides {...props} user={loggedInUser}/> } />
          <PrivateRoute exact path="/rides/add" render={(props) => <AddRide {...props} user={loggedInUser} />} />
          <Route exact path="/rides/:id" render={(props) => <RideDetails {...props} user={loggedInUser} />} />
          <PrivateRoute exact path="/rides/:id/edit" component={EditRide} />
          <Route exact path="/signup" component={Signup} />
          <PrivateRoute exact path="/users/:id" render={(props) => <UserProfile {...props} user={loggedInUser} />} />
          <PrivateRoute exact path="/users/:id/edit" render={(props) => <EditUser {...props} setCurrentUser={this.setCurrentUser} />} />
          <Route exact path="/login" render={(props)=>{ return <Login {...props} setCurrentUser={this.setCurrentUser} />}} />
          <PrivateRoute exact path="/reviews/:id/add" render={(props) => <AddReview {...props} user={loggedInUser} />} />
          {/* <Route exact path="/login-google" component={()=> {window.location.href= `${process.env.REACT_APP_PROJECTS_API}/api/auth/google`;}} /> */}
        </Switch>
      </div>
      
      <Footer />
      </>
    );
  }
}

export default App;
