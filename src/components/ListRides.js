import React from 'react';
import { getAllrides, loggedin } from '../api';
import { NavLink } from 'react-router-dom';



class ListRides extends React.Component{
    state={
        rides: [],
        filteredRides: [],
        searchKeyword:'',
        user: ''
    }

    ///API


    async componentDidMount(){
        const response = await getAllrides();
        if(this.props.user !== null){
            this.setState({
                rides: response.data,
                filteredRides: response.data,
                user: this.props.user.username
            })
        } else {
            this.setState({
                rides: response.data,
                filteredRides: response.data,
                user: 'not logged in'
            })
        }
        
        console.log(this.state.filteredRides);
    }

    handleSearch = (event) => {
        this.setState({
          searchKeyword: event.target.value,
          filteredRides: this.state.rides.filter((ride)=> 
          ride.arrival.toLowerCase()
          .includes(event.target.value.toLowerCase()))
          });
       }

    render(){
        return(
            <>
            <input onChange={this.handleSearch} placeholder="Where to?? 🚐 🌊 🏄🏻‍♂️" />
                    {this.state.filteredRides.map((ride)=> {
                        return(
                            <>
                                <h3 key={ride._id}>  <NavLink exact to={`/rides/${ride._id}`}> {ride.departure} - {ride.arrival} </NavLink> </h3>
                                <h4> {ride.user}</h4>
                                {ride.user === this.state.user && <p>  <NavLink exact to={`/rides/${ride._id}/edit`}> <button> Edit </button> </NavLink> </p> }
                                
                            </>
                        )
                    })}
            </>
        )
    }
}

export default ListRides;