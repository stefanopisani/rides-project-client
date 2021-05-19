import React from 'react';
import { addRide } from '../api';
import { toast } from 'react-toastify';

class AddRide extends React.Component{
    state = {
        departure: '',
        arrival: '',
        date: '',
        time: '',
        description: '',
        user: ''
    }

    // async componentDidMount() {
    //     this.setState({
    //         user: this.props.user.username
    //     });
    //   }

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
        try{
            await addRide(newRide);
            this.props.history.push("/rides");
            toast('🌊 Ride added successfully 🤟🏻')
        } catch(e) {
            toast.error(' An error occurred, please try again')
            console.log(e);
        }   
    }

    render(){
        const {departure, arrival, date, time, description} = this.state;
        const today = new Date().toISOString().split("T")[0];
        return(
            <>
            {/* <form onSubmit={this.handleFormSubmit} >
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
            </form> */}

            <div class="columns has-background-primary-light addRide p-6">
                <div class="column"> </div>
                <div class="column"> 
                    <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
                        <div class="field">
                            {/* <label class="label">From</label> */}
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="text" name="departure" onChange={this.handleChange} value={departure} placeholder="Pick up point" required/>
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-map-pin"></i>
                                    </span>
                            </div>
                        </div>

                        <div class="field">
                            {/* <label class="label">To</label> */}
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="text" name="arrival" onChange={this.handleChange} value={arrival} placeholder="Surf Spot" required/>
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-sun"></i>
                                    </span> 
                            </div>
                        </div>

                        <div class="field">
                            {/* <label class="label">When</label> */}
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="date" name="date" onChange={this.handleChange} value={date} placeholder="When?" min={today} required/>
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-calendar-alt"></i>
                                    </span>
                            </div>
                        </div>

                        <div class="field">
                            {/* <label class="label">Time</label> */}
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="time" name="time" onChange={this.handleChange} value={time} placeholder="When?" required/>
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-clock"></i>
                                    </span>
                            </div>
                        </div>

                        <div class="field mb-5">
                            <label class="label"> Share the Details</label>
                            <div class="control">
                                <textarea class="textarea is-primary" type="text" name="description" onChange={this.handleChange} value={description} placeholder="Here all the important details about your Ride" rows="5"></textarea>
                                <p class="help is-danger is-size-6">Don't forget to specify the space for the boards 🏄🏻‍♂️ </p>
                            </div>
                        </div>

                        <div class="field is-grouped is-justify-content-center">
                            <div class="control">
                                <button class="button is-primary" type="submit">Create Ride</button>
                            </div>    
                        </div>
                    </form>
                </div>
                <div class="column"> </div>
            </div>    
            </>
        )
    }


}

export default AddRide;