import './App.css';
import ListProjects from './components/ListProjects';
import { Switch, Route } from 'react-router-dom';
import ProjectDetails from './components/ProjectDetails';
import AddProject from './components/AddProject';
import Navbar from './components/Navbar';
import EditProject from './components/EditProject';
import Signup from './components/Signup';
import Login from './components/Login';
import React from 'react';
import {loggedin} from './api';

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
      <div className="App">
        <Navbar loggedInUser={loggedInUser} setCurrentUser={this.setCurrentUser}/>
        <Switch> 
          <Route exact path={["/", "/projects"]} component={ListProjects} />
          <Route exact path="/projects/add" component={AddProject} />
          <Route exact path="/projects/:id" component={ProjectDetails} />
          <Route exact path="/projects/:id/edit" component={EditProject} />
          <Route exact path="/signup" component={Signup} />
          <Route 
            exact path="/login" render={(props)=>{
              return <Login {...props} setCurrentUser={this.setCurrentUser} />
            }} 
          />
        </Switch>
        
      </div>
    );
  }
}

export default App;
