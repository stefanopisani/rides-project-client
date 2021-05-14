import React from "react";
import { updateRide, getRide } from "../api";

class EditRide extends React.Component {
  state = {
    _id: '',
    departure: '',
    arrival: '',
    date: '',
    time: '',
    description: '',
  };

  async componentDidMount() {
    const rideId = this.props.match.params.id;
    const response = await getRide(rideId);
    
    this.setState({
        _id: response.data._id,
        departure: response.data.departure, 
        arrival: response.data.arrival,
        date: response.data.date,
        time: response.data.time,
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
    await updateRide(this.state);
    this.props.history.push(`/rides`);
  };

  render() {
    const {departure, arrival, date, time, description} = this.state;
    return (
        <>
        <form onSubmit={this.handleFormSubmit} >
            <label>Departure</label>
            <input type="text" name="departure" onChange={this.handleChange} value={departure}/>
            
            <label>Arrival</label>
            <input type="text" name="arrival" onChange={this.handleChange} value={arrival}/>
            
            <label>Date</label>
            <input type="date" name="date" onChange={this.handleChange} value={date}/>

            <label>Time</label>
            <input type="number" name="time" onChange={this.handleChange} value={time}/>

            <label>Description</label>
            <input type="text" name="description" onChange={this.handleChange} value={description}/>

            <button type="submit"> Create </button>
        </form>
        </>
    );
  }
}
export default EditRide;