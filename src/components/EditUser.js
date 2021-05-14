import React from "react";
import { updateUser, getUser, uploadFile } from "../api";

class EditUser extends React.Component {
    state = {
        _id: '',
        username: '',
        email: '',
        password: '',
        imageUrl: '',
        bio: '',
        phoneNumber: 0
    }

  async componentDidMount() {
    const userId = this.props.match.params.id;
    const response = await getUser(userId);
    
    this.setState({
        _id: response.data._id,
        username: response.data.username, 
        email: response.data.email,
        password: response.data.password,
        imageUrl: response.data.imageUrl,
        bio: response.data.bio,
        phoneNumber: response.data.phoneNumber
    });
  }

  handleFileChange = (event) => {
    this.setState({
        imageUrl: event.target.files[0]
    });  
    }; 

  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const { username, email, imageUrl, bio, _id, phoneNumber } = this.state;
    let newImage = '';

    if(typeof imageUrl !== 'string') {
        const uploadData = new FormData();
        uploadData.append("file", imageUrl);
    
        //Upload Image to our API
        const response = await uploadFile(uploadData);
        newImage = response.data.fileUrl
    } else {
        newImage = imageUrl
    }

    const updatedUser = {username, email, imageUrl: newImage, bio, _id, phoneNumber}
    const user = await updateUser(updatedUser);

    this.props.setCurrentUser(user.data)
    this.props.history.push(`/users/${this.state._id}`);
  };

  render() {
    const { username, email, password, bio, phoneNumber} = this.state;
    return (
        <>
        <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">     
            <label>Username:</label>
            <input type="text" onChange={this.handleChange} name="username" value={username} />
            
            <label>Email:</label>
            <input type="email" onChange={this.handleChange} name="email" value={email} />

            <label>Phone Number:</label>
            <input type="number" onChange={this.handleChange} name="phoneNumber" value={phoneNumber} />
            
            <label>Password:</label>
            <input type="password" onChange={this.handleChange} name="password" value={password} />

            <label>Picture</label>
            <input type="file" onChange={this.handleFileChange} name="imageUrl" /> 
            
            <label>Bio:</label>
            <input type="text" onChange={this.handleChange} name="bio" value={bio} />
            
            <button type='submit'>Edit</button>
        </form>
        </>
    );
  }
}
export default EditUser;