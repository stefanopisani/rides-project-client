import React from 'react';
import '../App.css';
import "bulma/css/bulma.css";

function Footer() {
    return(
        <>
        <footer class="ft-container">

            <div className="columns">
                <div className="column ft-cl-1"> 
                    <h5 class="ft-content"> Made with 💙 by <a href="https://www.linkedin.com/in/stefano-pisani-66807712a/" target="_blank">Stefano Pisani</a> </h5>
                    <div class="ft-logo mt-3">
                    <a href="https://www.linkedin.com/in/stefano-pisani-66807712a/" target="_blank"> <i class="fab fa-linkedin mr-5 lg-ft"></i> </a>
                    <a href="https://github.com/stefanopisani" target="_blank"> <i class="fab fa-github lg-ft"></i> </a>
                    </div>
                </div>
                <div className="column ft-cl-2">
                    <div class="ft-logo"> 
                        <h1 className="title is-size-3 mt-2"> <strong>Rides</strong> </h1>  
                        <img src="/map.png" className="ml-3" width="50" height="50"/> 
                    </div>
                </div>

                <div className="column ft-cl-3">
                    <h5 class="ft-content"> @ contact us <a href="mailto:stefano.pisani92@gmail.com" target="_blank"> ✉️ </a> <br/> </h5>
                    <h5 class="ft-content"> Enjoy the Rides 🤟🏻 </h5>
                </div>   
            </div>    
        </footer>
        {/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
        </>
    )
}

export default Footer; 
