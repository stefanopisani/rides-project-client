import React from 'react';
import { addProject, uploadFile } from '../api';

class AddProject extends React.Component{
    state={
        title: '',
        description: '',
        imageUrl: ''
    }

    handleFileChange = (event) => {
        this.setState({
            imageUrl: event.target.files[0]
        })
    }

    handleChange = (event)=> {
        let { name, value } = event.target;

        this.setState({
           [name]: value
        })
    }

    handleFormSubmit = async (event)=> {
        event.preventDefault();
        const {title, description, imageUrl} = this.state;
        
        const uploadData = new FormData();
        uploadData.append("file", imageUrl);

        //Upload Image to our API
        const response = await uploadFile(uploadData);

        //Create Project on our API
        const newProject = {
            title,
            description,
            imageUrl : response.data.fileUrl
        };
        await addProject(newProject);
        this.props.history.push("/projects");
    }

    render(){
        const {title, description} = this.state;
        return(
            <>
            <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
                <label>Title</label>
                <input type="text" name="title" onChange={this.handleChange} value={title}/>

                <label>Description</label>
                <input type="text" name="description" onChange={this.handleChange} value={description}/>

                <label>Image</label>
                <input type="file" onChange={this.handleFileChange}/>

                <button type="submit"> Create </button>
            </form>
            </>
        )
    }


}

export default AddProject;