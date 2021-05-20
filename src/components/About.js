function About (){
return(
    <>
    
    <section class="hero about-hero is-medium">
        <div class="hero-body">
            <p class="title mt-6 header-title"> It's all about sharing <br/> your next ride </p>
        </div>
    </section>

    <section class="section has-background-primary-light columns">
        <div class="column mobile"></div>
        <article class="has-background-white column is-half about-content"> 
            <h1 class="title mt-3"> About</h1>
            <p class=" m-4 is-size-5"> <i> Rides </i>  has been created with the intent of connecting surfers and facilitate the way they get into the surf spot 🤟🏻 </p>
                
            <p class="m-4 is-size-5"> The objectives of <i> Rides </i> are very clear: <br/>  🌊 Share experiences <br/> 🌴 Reduce your carbon impact <br/> 💸 Save money by sharing the expenses <br/> ☀️ Meet new friends </p>
                
            <p class="mt-4 mx-4 is-size-5"> It's a very simple concept 💙  create a profile, post your Ride on the platform or check for interesting ones and get in touch with the ride owner - everything completely free! </p>
        
                <a href='/rides' class="button is-primary is-medium home-final-button" style={{fontFamily:'Montserrat'}}> <strong> Get a Ride </strong>  </a>
        </article>
        <div class="column mobile"></div>
    </section>
    
    </>
    )
}

export default About;