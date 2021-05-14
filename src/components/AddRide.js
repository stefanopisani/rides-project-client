import React from 'react';
import { addRide } from '../api';

class AddRide extends React.Component{
    state = {
        departure: '',
        arrival: '',
        date: '',
        time: '',
        description: '',
        user: ''
    }

    async componentDidMount() {

        this.setState({
            user: this.props.user.username
        });
      }

    handleChange = (event)=> {
        let { name, value } = event.target;

        this.setState({
           [name]: value
        })
    }

    handleFormSubmit = async (event)=> {
        event.preventDefault();
        const {departure, arrival, date, time, description, user} = this.state;
        
        // const uploadData = new FormData();
        // uploadData.append("file", imageUrl);
        // //Upload Image to our API
        // const response = await uploadFile(uploadData);

        const newRide = {
            departure, 
            arrival, 
            date, 
            time, 
            description,
            user
        };
        await addRide(newRide);
        this.props.history.push("/rides");
    }

    render(){
        const {departure, arrival, date, time, description} = this.state;
        return(
            <>
            <form onSubmit={this.handleFormSubmit} >
                <label>From</label>
                <input type="text" name="departure" onChange={this.handleChange} value={departure} placeholder="Pick up point"/>
                
                <label>To</label>
                <input type="text" name="arrival" onChange={this.handleChange} value={arrival} placeholder="Surf Spot"/>
                
                <label>When</label>
                <input type="date" name="date" onChange={this.handleChange} value={date}/>

                <label>Time</label>
                <input type="time" name="time" onChange={this.handleChange} value={time}/>

                <label>Description</label>
                <textarea type="text" name="description" onChange={this.handleChange} value={description} placeholder="Add the details of the ride, don't forget to specify the space for the board!"/> 

                <button type="submit">Create</button>
            </form>
            </>
        )
    }


}

export default AddRide;