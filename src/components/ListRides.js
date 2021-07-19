import React from 'react';
import { getAllrides, loggedin } from '../api';
import { NavLink } from 'react-router-dom';
import queryString from 'query-string';
import '../App.css';


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
        let user; 
        if(this.props.user !== null){
            user = this.props.user.username
        } else {
            user = false
        }

        this.setState({
            rides: response.data,
            filteredRides: response.data,
            user: user
        })
        console.log(this.props.user);

        //Get the value from the query string
        const values = queryString.parse(this.props.location.search);
        if (values.search) {
            this.setState({
                searchKeyword: values.search,
                filteredRides: this.state.rides.filter((ride)=> 
                ride.arrival.toLowerCase()
                .includes(values.search.toLowerCase()))
                });
            }
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
            <section className="hero-is-small"> 
                <div className="hero-body columns"> 
                    <div class="column"></div>
                    <div class="column is-half">
                        <input value={this.state.searchKeyword} onChange={this.handleSearch} placeholder="Where to?? 🚐 🌊 🏄🏻‍♂️" class="input is-primary is-large"/>
                    </div>
                    <div class="column"></div>
                </div>
            </section>

            <div className="py-5 has-background-primary-light rides-list"> 
            {this.state.filteredRides.map((ride)=> {
                return(
                    <>
                    <section className="has-background-primary-light"> 
                        
                        <div className="columns"> 
                            <div class="column mobile ipad"> </div>

                            <div class="column">
                                <article class="media notification has-background-white rides-info mt-3 mb-3  is-justify-content-center">

                                    <figure class="media-left user-cont">
                                        <img src={`${ride.user.imageUrl}`} alt="" style={{width:"40px", height:"40px", borderRadius:"50px", border:'0.5px solid hsl(171, 100%, 41%)'}} class="user-pic"/> 
                                        {console.log(ride.user.imageUrl)}
                                        <NavLink to={`/users/${ride.user._id}`} class="navLink is-justify-content-center user-par has-text-primary is-size-5"> <strong> {ride.user.username} </strong>  </NavLink>
                                    </figure>

                                    <div class="media-content">
                                        <h3 key={ride._id} class="title is-size-4"> <NavLink exact to={`/rides/${ride._id}`}> {ride.departure.charAt(0).toUpperCase() + ride.departure.substr(1)} - {ride.arrival.charAt(0).toUpperCase()+ ride.arrival.substr(1)} </NavLink>  </h3>
                                        <p class="subtitle is-size-5">
                                        {ride.date} at {ride.time} 
                                        </p>
                                    </div>

                                    <div className="media-buttons"> 
                                        {/* {ride.user.username === this.state.user &&  ( <NavLink exact to={`/rides/${ride._id}/edit`}> <i class="fas has-text-light fa-edit"></i> </NavLink>  )  } */}
                                        <NavLink class="button is-primary is-outlined is-small ml-4 info-btn" exact to={`/rides/${ride._id}`}> <strong> i </strong> </NavLink> 
                                    </div>

                                </article>   
                            </div>

                            <div class="column mobile ipad"> </div>
                        </div>

                    </section>
                    </>
                )
            })}
                
            </div>
            </>
        )
    }
}

export default ListRides;


// {/* <article class="media notification has-background-white home-info">
//     <figure class="media-left">
//         <span class="icon is-medium">
//         <img src={ride.user.imageUrl} alt="" width="50" height="50"/>
//         </span>
//     </figure>
//     <div class="media-content">
//         <div class="content">
//             <h3 key={ride._id} class="title is-size-4"> <NavLink exact to={`/rides/${ride._id}`}> {ride.departure} - {ride.arrival} </NavLink> </h3>
//             <p class="is-size-5">
//             {ride.user.username}
//             </p>
//         </div>
//     </div>
// </article> */}