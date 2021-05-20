import React from 'react';
import { NavLink } from 'react-router-dom';
import { signup, uploadFile } from '../api';
import { toast } from 'react-toastify';

class Signup extends React.Component{
    state={
        username: '',
        email: '',
        password: '',
        imageUrl: '',
        bio: '',
        phoneNumber: ''
    }

    handleFileChange = (event) => {
        this.setState({
            imageUrl: event.target.files[0]
        })
    } 
    
    handleChange = (event) => {
        let { name, value } = event.target;
        this.setState({
          [name]: value,
        });
      };

    handleFormSubmit = async (event) => {
        event.preventDefault();
        const { username, email, password, imageUrl, bio, phoneNumber } = this.state;
        try{
            const uploadData = new FormData();
            uploadData.append("file", imageUrl);
            //Upload Image to our API
            const response = await uploadFile(uploadData);
            await signup(username, email, password, response.data.fileUrl, bio, phoneNumber);
            this.props.history.push('/');
            toast('You registered successfully, please log in to start using Rides 🚐 🌊')
        } catch(e) {
            toast.error(' An error occurred, please try again')
            console.log(e);
        }   
    };
      
    render(){
        const {username, password, email, bio, phoneNumber} = this.state;
        return(
            <>
            <div class="columns has-background-primary-light p-3">
                <div class="column"> </div>
                <div class="column m-5"> 
                    <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
                        <div class="field">
                            <label class="label">Username</label>
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="text" onChange={this.handleChange} name="username" value={username} placeholder="name"  required/>
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                    </span>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="email" onChange={this.handleChange} name="email" value={email} placeholder="email@"required/>
                                    <p class="help is-grey is-size-7"> ✌🏻 will be shared only inside Ride's community ✉️  </p>
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-envelope"></i>
                                    </span> 
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Phone Number</label>
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="number" onChange={this.handleChange} name="phoneNumber" value={phoneNumber} placeholder="+351-YOUR-NUMBER" required/>
                                <p class="help is-grey is-size-7"> Same for your number ☎️ </p>
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-phone"></i>
                                    </span>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Password</label>
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="password" onChange={this.handleChange} name="password" value={password} required/>
                                <p class="help is-grey is-size-7"> ❗️ must be +6 characters and contain a maiusc, a minusc, a number, and a special character  </p>
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-key"></i>
                                    </span>
                            </div>
                        </div>

                        <div class="field mb-5">
                            <label class="label">Bio</label>
                            <div class="control has-icons-left has-icons-right">
                                <textarea class="textarea is-primary" type="text" onChange={this.handleChange} name="bio" value={bio} placeholder="#something about yourself" rows="5"></textarea>
                                    {/* <span class="icon is-small is-left">
                                        <i class="fas fa-comment"></i>
                                    </span> */}
                            </div>
                        </div>

                        <div class="fle mb-5">
                            <label class="file-label is-justify-content-center">
                                <input class="file-input" type="file" onChange={this.handleFileChange} name="imageUrl" required/>
                                <span class="file-cta">
                                    <span class="file-icon">
                                        <i class="fas fa-upload"></i>
                                    </span>
                                    <span class="file-label">
                                        Profile Picture..
                                    </span>
                                </span>
                            </label>
                        </div>

                        <div class="field is-grouped is-justify-content-center">
                            <div class="control">
                                <button class="button is-primary" type="submit">Sign up</button>
                                <p class="mt-3">Already have an account? <NavLink to="/login" class="has-text-primary"> Login</NavLink></p>
                            </div>    
                        </div>
                    </form>
                </div>
                <div class="column"> </div>
            </div>    
            </>
        )
    }
}

export default Signup;



