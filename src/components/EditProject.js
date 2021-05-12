import React from "react";
import { updateProject, getProject } from "../api";
class EditProject extends React.Component {
  state = {
    _id: "",
    title: "",
    description: "",
  };
  async componentDidMount() {
    const projectId = this.props.match.params.id;
    const response = await getProject(projectId);
    this.setState({
      _id: response.data._id,
      title: response.data.title,
      description: response.data.description,
    });
  }
  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleFormSubmit = async (event) => {
    event.preventDefault();
    await updateProject(this.state);
    this.props.history.push(`/projects`);
  };
  render() {
    const { title, description } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={this.handleChange}
        />
        <button type="submit">Update</button>
      </form>
    );
  }
}
export default EditProject;