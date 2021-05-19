import React from "react";
import { toast } from "react-toastify";
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
    try{
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
        toast('✅ Profile edited successfully')
    } catch(e){
        toast.error(' An error occurred, please try again')
        console.log(e);
    }   
    
  };

  render() {
    const { username, email, bio, phoneNumber} = this.state;
    return (
        <>
        <div class="columns has-background-primary-light p-6">
          <div class="column"> </div>
          <div class="column"> 
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
                              <span class="icon is-small is-left">
                                  <i class="fas fa-envelope"></i>
                              </span> 
                      </div>
                  </div>

                  <div class="field">
                      <label class="label">Phone Number</label>
                      <div class="control has-icons-left has-icons-right">
                          <input class="input" type="number" onChange={this.handleChange} name="phoneNumber" value={phoneNumber} placeholder="+351-YOUR-NUMBER" required/>
                              <span class="icon is-small is-left">
                                  <i class="fas fa-phone"></i>
                              </span>
                      </div>
                  </div>

                  {/* <div class="field">
                      <label class="label">Password</label>
                      <div class="control has-icons-left has-icons-right">
                          <input class="input" type="password" onChange={this.handleChange} name="password" value={password} required/>
                              <span class="icon is-small is-left">
                                  <i class="fas fa-key"></i>
                              </span>
                      </div>
                  </div> */}

                  <div class="field mb-5">
                      <label class="label">Bio</label>
                      <div class="control has-icons-left has-icons-right">
                          <textarea class="textarea is-primary" type="text" onChange={this.handleChange} name="bio" value={bio} placeholder="#something about yourself" rows="5" > </textarea>
                              {/* <span class="icon is-small is-left">
                                  <i class="fas fa-comment"></i>
                              </span> */}
                      </div>
                  </div>

                  <div class="fle mb-5">
                            <label class="file-label is-justify-content-center">
                                <input class="file-input" type="file" onChange={this.handleFileChange} name="imageUrl"/>
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
                          <button class="button is-primary" type="submit">Edit</button>
                      </div>    
                  </div>
              </form>
          </div>
          <div class="column"> </div>
        </div>    
        </>
    );
  }
}
export default EditUser;