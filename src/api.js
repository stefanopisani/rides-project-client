import axios from 'axios';
const baseUrl = `${process.env.REACT_APP_PROJECTS_API}/api`;

export const getAllprojects= () => {
    return axios.get(`${baseUrl}/projects`);
}

export const getProject = (id) => {
    return axios.get(`${baseUrl}/projects/${id}`);
}

export const deleteProject = (id) => {
    return axios.delete(`${baseUrl}/projects/${id}`);
}

export const addProject = (project) => {
    return axios.post(`${baseUrl}/projects`, project);
}

export const uploadFile = (uploadData) => {
    return axios.post(`${baseUrl}/upload`, uploadData);
}

export const updateProject = (updatedProject) => {
    return axios.put(`${baseUrl}/projects/${updatedProject._id}`, updatedProject);
  }

// AUTH ROUTES  
export const signup = (username, email, password) => {
    return axios.post(`${baseUrl}/signup`, { username, email, password });
  }

export const login = (username, password) => {
    return axios.post(`${baseUrl}/login`, { username, password } , { withCredentials: true });
  }

  export const logout = () => {
    return axios.post(`${baseUrl}/logout`, null, {withCredentials: true});
  }
  export const loggedin = () => {
    return axios.get(`${baseUrl}/loggedin`, {withCredentials: true});
  }