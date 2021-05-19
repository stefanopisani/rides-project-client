import React from "react";
import "bulma/css/bulma.css";
import '../App.css';
import { NavLink } from "react-router-dom";
import wallet from '../images/wallet.png'


class Home extends React.Component {
    state = {
        searchKeyword : ""
    }


    handleChange = (event)=> {
        let { name, value } = event.target;

        this.setState({
           [name]: value
        })
    }


    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.history.push(`/rides?search=${this.state.searchKeyword}`);
    }


    render() {
        return(
            <>
            
            <section class="hero home-hero is-medium">
              <div class="hero-body">
                
                {/* <p class="subtitle">
                  Rides is a car pooling platform for surfers
                </p> */}
                <p class="title mb-6 header-title">
                            Share a ride, <br/> Surf together.
                        </p>
            
                <div class="columns">
                    
                    <div class="column"> 
                    </div>
            
                    <div class="column is-half search-bar"> 
                        
                            <form class="columns" onSubmit={this.handleFormSubmit}>
                                <input  style={{fontFamily:'Montserrat'}} name="searchKeyword" onChange={this.handleChange} value={this.state.searchKeyword} class="input is-primary is-large mr-4" type="text" placeholder="Where to? 📍 🏄🏻‍♂️  🌊" />
                                <button style={{fontFamily:'Montserrat'}} class="button is-primary is-large search-btn" type="submit"> <strong> Search </strong> </button>
                                
                            </form>
                        
                        
                    </div>
            
                    <div class="column">  
                    </div>
            
                </div>
            
              </div>
            </section>
            <hr/>
            <section class="section has-background-primary-light">
                    <div class="container">
                        <div class="columns is-multiline columns-hp">
                            <div class="column is-half home-info-columns-l">
                                <article class="media notification has-background-white home-info">
                                    <figure class="media-left">
                                        <span class="icon is-medium">
                                        <img src={wallet} alt="" width="50" height="60"/>
                                        </span>
                                    </figure>
                                    <div class="media-content">
                                        <div class="content">
                                            <h1 class="title is-size-4">Share the costs of your Ride</h1>
                                            <p class="is-size-5">
                                                Your next journey to the surf spot will be much more convenient if you share the tolls/gas with new friends! <br/> <span class="emoticon">٩(^ᴗ^)۶</span>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div class="column is-half home-info-columns-r">
                                <article class="media notification has-background-white home-info">
                                    <figure class="media-left">
                                        <span class="icon is-medium">
                                            <img src="/forest.png" alt="" width="50" height="60"/>
                                        </span>
                                    </figure>
                                    <div class="media-content">
                                        <div class="content">
                                            <h1 class="title is-size-4"> Lower your emissions</h1>
                                            <p class="is-size-5">
                                                No more cars with one driver only! It's a small step but it can make a big difference on the long run <br/> <span class="emoticon">⦤(^ー^)⦥</span>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div class="column is-half home-info-columns-l">
                                <article class="media notification has-background-white home-info">
                                    <figure class="media-left">
                                        <span class="icon is-medium">
                                        <img src="/languages.png" alt="" width="50" height="60"/>
                                        </span>
                                    </figure>
                                    <div class="media-content">
                                        <div class="content">
                                            <h1 class="title is-size-4"> Meet new friends </h1>
                                            <p class="is-size-5">
                                                What's better then sharing a journey to make new friends? Feel more part of the community and meet more people like you <br/> <span class="emoticon">ᕕ( ᐛ )ᕗ</span>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div class="column is-half home-info-columns-r">
                                <article class="media notification has-background-white home-info">
                                    <figure class="media-left">
                                        <span class="icon is-medium">
                                        <img src="/beach.png" alt="" width="50" height="60"/>
                                        </span>
                                    </figure>
                                    <div class="media-content">
                                        <div class="content">
                                            <h1 class="title is-size-4"> Surf together</h1>
                                            <p class="is-size-5">
                                                Having surf buddies make all the difference! Ride together the next wave no more surfing alone <span class="emoticon">٩(^ᴗ^)۶</span>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
            
                    <button class="button is-primary is-large home-final-button" style={{fontFamily:'Montserrat'}}> <strong> Learn More </strong>  </button>
                </section>
            
            </>
            )

    }

}

export default Home;