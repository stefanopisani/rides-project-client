import React from 'react';
import { NavLink } from 'react-router-dom';
import { login } from '../api';
import { toast } from 'react-toastify';
import '../App.css';
import "bulma/css/bulma.css";

class Login extends React.Component{
    state={
        username: '',
        password: ''
    }
    
    handleChange = (event) => {
        let { name, value } = event.target;
        this.setState({
          [name]: value,
        });
      };

    handleFormSubmit = async (event) => {
        event.preventDefault();
        const { username, password } = this.state
        try{
            const response = await login(username, password);
            this.props.setCurrentUser(response.data);
            this.props.history.push('/');
        } catch(e){
            toast.error(' Username or password wrong, please try again')
            console.log(e);
        }
        
    };
      
    render(){
        const {username, password} = this.state;
        return(
            <>
            <div class="columns login has-background-primary-light">
            <div class="column"></div>
            <div class="column m-5 login-form">
            <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
                <div class="field">
                <label class="label">Username</label>
                <div class="control has-icons-left has-icons-right">
                <input class="input" type="text" onChange={this.handleChange} name="username" value={username} placeholder="name"  required/>
                    <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                    </span>
                    {/* <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                    </span> */}
                </div>
                {/* <p class="help is-success">This username is available</p> */}
                </div>

                <div class="field">
                <label class="label">Password</label>
                <div class="control has-icons-left has-icons-right">
                <input class="input" type="password" onChange={this.handleChange} name="password" value={password} required/>
                    <span class="icon is-small is-left">
                    <i class="fas fa-key"></i>
                    </span>
                    {/* <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                    </span> */}
                </div>
                {/* <p class="help is-success">This username is available</p> */}
                </div>

                <div class="field is-grouped is-justify-content-center">
                <div class="control">
                    <button class="button is-primary" type="submit">Log in</button>
                    <p class="mt-3">Don't have an account? <NavLink to="/signup" class="has-text-primary"> Signup</NavLink></p>
                </div>
                
                </div>
                </form>
            </div>
            <div class="column"></div>

            </div>
            
            </>
        )
    }
}

export default Login;
