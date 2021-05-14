import React from 'react';
import { deleteRide, getRide } from '../api';
import { NavLink } from 'react-router-dom';

class RideDetails extends React.Component {
    state = {
        _id: '',
        departure: '',
        arrival: '',
        date: '',
        time: '',
        description: '',
        theUser: '',
        user: ''
    }

    async componentDidMount(){
        const rideId = this.props.match.params.id;
        const response = await getRide(rideId);

        if (this.props.user !== null) {
            this.setState({
                _id: response.data._id,
                departure: response.data.departure, 
                arrival: response.data.arrival,
                date: response.data.date,
                time: response.data.time,
                description: response.data.description,
                theUser: response.data.user,
                user: this.props.user.username
            });
        } else {
            this.setState({
                _id: response.data._id,
                departure: response.data.departure, 
                arrival: response.data.arrival,
                date: response.data.date,
                time: response.data.time,
                description: response.data.description,
                theUser: response.data.user,
                user: 'not logged in'
            });
        }
    }

    handleDeleteRide = async (id) => {
        await deleteRide(id);
        this.props.history.push('/');
    }

    render(){
        const { _id, departure, arrival, date, time, description, theUser } = this.state;
        return(
            <>
            <h2> {departure} - {arrival} ({date} - {time}) </h2>
            <h3> {description}  </h3>
            <h3> user: {theUser}  </h3>

            {this.state.user===this.state.theUser && 
            <>
            <button onClick={() => this.handleDeleteRide(_id)}> Delete </button>
            <NavLink exact to={`/rides/${_id}/edit`}> <button> Edit </button> </NavLink>
            </>
            }
            
            </>
        )
    }




}

export default RideDetails;