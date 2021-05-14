import React from 'react';
import { NavLink } from 'react-router-dom';
import { signup, uploadFile } from '../api';

class Signup extends React.Component{
    state={
        username: '',
        email: '',
        password: '',
        imageUrl: '',
        bio: '',
        phoneNumber: 0
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

        const uploadData = new FormData();
        uploadData.append("file", imageUrl);

        //Upload Image to our API
        const response = await uploadFile(uploadData);

        await signup(username, email, password, response.data.fileUrl, bio, phoneNumber);
        this.props.history.push('/');
    };
      
    render(){
        const {username, password, email, bio, phoneNumber} = this.state;
        return(
            <>
            <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
                
                <label>Username:</label>
                <input type="text" onChange={this.handleChange} name="username" value={username} required/>
                
                <label>Email:</label>
                <input type="email" onChange={this.handleChange} name="email" value={email} required/>

                <label>Phone Number:</label>
                <input type="number" onChange={this.handleChange} name="phoneNumber" value={phoneNumber} required/>
                
                <label>Password:</label>
                <input type="password" onChange={this.handleChange} name="password" value={password} required/>

                <label>Picture</label>
                <input type="file" onChange={this.handleFileChange} name="imageUrl" required/>
                
                <label>Bio:</label>
                <input type="text" onChange={this.handleChange} name="bio" value={bio} />
                
                <button type='submit'>Signup</button>
            </form>
            <p>
                Already have account?
                <NavLink to="/login"> Login</NavLink>
            </p>
            </>
        )
    }
}

export default Signup;