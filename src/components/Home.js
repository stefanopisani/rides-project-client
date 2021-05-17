import React from "react";
import "bulma/css/bulma.css";
import { NavLink } from "react-router-dom";
import '../App.css';


function Home () {

return(
<>
<section class="hero is-medium">
  <div class="hero-body">
    
    {/* <p class="subtitle">
      Rides is a car pooling platform for surfers
    </p> */}
    <p class="title mb-6">
                Share a ride, <br/> Surf together.
            </p>

    <div class="columns">
        
        <div class="column">
            
        </div>

        <div class="column is-half search-bar"> 
            <div class="columns" >
                <input class="input is-primary is-large mr-4" type="text" placeholder="Where to? 🌊 🏄🏻‍♂️ " />
                <button class="button is-primary is-large search-btn" type="submit"> <strong> Search </strong> </button>
            </div>
            
        </div>

        <div class="column">  </div>

    </div>

  </div>
</section>
<hr/>
<section class="section has-background-primary-light">
        <div class="container">
            <div class="columns is-multiline">
                <div class="column is-half home-info-columns-l">
                    <article class="media notification has-background-white home-info">
                        <figure class="media-left">
                            <span class="icon is-medium">
                                <i class="fas fa-2x fa-dollar-sign"></i>
                            </span>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <h1 class="title is-size-4">Share the costs of your Ride</h1>
                                <p class="is-size-5">
                                    Bulma is a modern CSS framework from @jgthms, based on Flexbox.
                                    Using Bulma, we can describe our website's design using just classes. <span class="emoticon">ᕕ( ᐛ )ᕗ</span>
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
                <div class="column is-half home-info-columns-r">
                    <article class="media notification has-background-white home-info">
                        <figure class="media-left">
                            <span class="icon is-medium">
                                <i class="fas fa-2x fa-tree"></i>
                            </span>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <h1 class="title is-size-4"> Lower your emissions</h1>
                                <p class="is-size-5">
                                    Flexbox is a CSS spec that makes sectioning and aligning more natural.
                                    We don't need to know Flexbox but it's how Bulma works behind-the-scenes. <span class="emoticon">⦤(^ー^)⦥</span>
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
                <div class="column is-half home-info-columns-l">
                    <article class="media notification has-background-white home-info">
                        <figure class="media-left">
                            <span class="icon is-medium">
                                <i class="fas fa-2x fa-users"></i>
                            </span>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <h1 class="title is-size-4"> Meet new friends </h1>
                                <p class="is-size-5">
                                    Instead of writing our CSS per-element, we can use predefined classes.
                                    With enough classes, we can describe our website design using semantics. <span class="emoticon">٩(^ᴗ^)۶</span>
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
                <div class="column is-half home-info-columns-r">
                    <article class="media notification has-background-white home-info">
                        <figure class="media-left">
                            <span class="icon is-medium">
                            <i class="fas fa-2x fa-car"></i>
                            </span>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <h1 class="title is-size-4"> Surf together</h1>
                                <p class="is-size-5">
                                    Instead of writing our CSS per-element, we can use predefined classes.
                                    With enough classes, we can describe our website design using semantics. <span class="emoticon">٩(^ᴗ^)۶</span>
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>

        <button class="button is-primary is-large home-final-button"> <strong> Learn More </strong>  </button>
    </section>
    <hr/>

    <footer>
        FOOTER HERE ☠️
    </footer>
</>
)
}

export default Home;