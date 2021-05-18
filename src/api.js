import axios from 'axios';
const baseUrl = `${process.env.REACT_APP_PROJECTS_API}/api`;

export const getAllrides= () => {
    return axios.get(`${baseUrl}/rides`);
}

export const getRide = (id) => {
    return axios.get(`${baseUrl}/rides/${id}`);
}

export const getUser = (id) => {
    return axios.get(`${baseUrl}/users/${id}`);
}

export const deleteRide = (id) => {
    return axios.delete(`${baseUrl}/rides/${id}`);
}

export const addRide = (ride) => {
    return axios.post(`${baseUrl}/rides`, ride, { withCredentials: true });
}

export const uploadFile = (uploadData) => {
    return axios.post(`${baseUrl}/upload`, uploadData);
}

export const updateRide = (updatedRide) => {
    return axios.put(`${baseUrl}/rides/${updatedRide._id}`, updatedRide);
}

export const updateUser = (updatedUser) => {
    return axios.put(`${baseUrl}/users/${updatedUser._id}`, updatedUser);
}

export const addReview = (userId, newReview) => {
    return axios.put(`${baseUrl}/reviews/${userId}/add`, newReview)
}



// AUTH ROUTES  
export const signup = (username, email, password, imageUrl, bio, phoneNumber) => {
    return axios.post(`${baseUrl}/signup`, { username, email, password, imageUrl, bio, phoneNumber });
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