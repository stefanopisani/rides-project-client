import React from 'react';
import { deleteRide, getRide } from '../api';
import { NavLink } from 'react-router-dom';
import Weather from './Weather';
import { toast } from 'react-toastify';
import StormGlass from './StormGlass';
import '../App.css';

class RideDetails extends React.Component {
    state = {
        _id: '',
        departure: '',
        arrival: '',
        date: '',
        time: '',
        description: '',
        theUser: '',
        theUserId: '',
        user: '',
        lat: '',
        long: ''
    }

    async componentDidMount(){
        const rideId = this.props.match.params.id;
        const response = await getRide(rideId);
        let user;

        if (this.props.user) {
            user = this.props.user.username
        } else {
           user = false
         
        }
        this.setState({
            _id: response.data._id,
            departure: response.data.departure, 
            arrival: response.data.arrival,
            date: response.data.date,
            time: response.data.time,
            description: response.data.description,
            theUser: response.data.user,
            theUserId: response.data.user._id,
            user: user
        });
        this.getCoordinates();
    }

    handleDeleteRide = async (id) => {
        await deleteRide(id);
        this.props.history.push('/');
        toast('Ride deleted 🚨')
    }

    getCoordinates = () => {
        const google = window.google;
        let geocoder = new google.maps.Geocoder();
        geocoder.geocode( { address: `${this.state.arrival}, portugal`}, (results, status) => {
          if (status === 'OK') {
            const lat = results[0].geometry.location.lat();
            const lng = results[0].geometry.location.lng();
            console.log(lat, lng)
            this.setState({
                lat : lat,
                long: lng
            })
          } console.log('lat and long', this.state.lat , this.state.long)
        })
      }

    
    render(){
        const { _id, departure, arrival, date, time, description, theUser } = this.state;
        return(
            <>
                <section class="section has-background-primary-light">
                    <div class="container columns">
                        <div class="column mobile"></div>
                        <div class="column is-half ride-details">
                            <article class="has-background-white">
                                
                                <div class="top-ride columns">
                                <a href={`/users/${theUser._id}`} class="column is-half title pt-3"> <img src={theUser.imageUrl} alt="img" style={{height:40, width:40, borderRadius:50}}  /> {theUser.username}  </a>
                                <div class="column mobile"></div>
                                <a href={`/users/${theUser._id}`} class="column"> <img src='/languages.png' style={{height:50, width:50}} alt="contact"/> </a> 
                                
                                </div>
                                    
                                <div class="content-ride pl-5 pr-5"> 
                                    <h2 className="title"> {departure.charAt(0).toUpperCase() + departure.substr(1)} - {arrival.charAt(0).toUpperCase() + arrival.substr(1)}    
                                    
                                        {this.state.user=== theUser.username && (
                                        <>
                                        <NavLink exact to={`/rides/${_id}/edit`}> <i class="fas has-text-light fa-edit ml-3"> </i> </NavLink>
                                        <button class="button is-small is-outlined mt-1" onClick={() => this.handleDeleteRide(_id)}> 🗑 </button>
                                        <br/>
                                        </>
                                        )}

                                        {/* <button onClick={() => this.handleDeleteRide(_id)}> Delete </button> */}

                                    </h2>
                                    <h2 className="subtitle"> ({date} - {time}) </h2>
                                    <p className="subtitle my-3"> <strong> Details: </strong> "{description}" </p>
                                </div>
                                
                                
                                
                               
                                <a href={`/users/${theUser._id}`} className="button is-outlined is-primary m-3" > Get Ride 🤟🏻 </a>
                                            

                                <Weather location={arrival} lat={this.state.lat} long={this.state.long} />

                                <a href={`https://magicseaweed.com/Spain-Portugal-Surf-Forecast/8/`} className="button is-outlined is-info mb-5" > Forecast </a>
                                <a href={`https://beachcam.meo.pt/livecams`} className="button  is-info is-outlined mb-5 ml-3" > Webcam </a>
                            </article>
                        </div>

                        <div class="column mobile"></div>
                    </div>
                    

                    <StormGlass lat={this.state.lat} long={this.state.long} />
                </section>
            
            </>
        )
    }




}

export default RideDetails;



