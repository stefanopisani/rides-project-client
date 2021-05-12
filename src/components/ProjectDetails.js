import React from 'react';
import { getProject, deleteProject } from '../api';
import { NavLink } from 'react-router-dom';

class ProjectDetails extends React.Component {
    state = {
        _id: '',
        title: '',
        description: '',
        imageUrl: ''
    }

    async componentDidMount(){
        const projectId = this.props.match.params.id;
        const response = await getProject(projectId);

        this.setState({
            _id: response.data._id, 
            title: response.data.title,
            description: response.data.description,
            imageUrl: response.data.imageUrl
        });
    }

    handleDeleteProject = async (id) => {
        await deleteProject(id);
        this.props.history.push('/');
    }

    render(){
        const{title, description, _id, imageUrl} = this.state;
        return(
            <>
            <h2> {title} </h2>
            <h3> {description} </h3>
            {imageUrl && <img src={imageUrl} alt="" style={{height:100, width:100}}/> }
            <button onClick={() => this.handleDeleteProject(_id)}> delete </button>
            
            </>
        )
    }




}

export default ProjectDetails;