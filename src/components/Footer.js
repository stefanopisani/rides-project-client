import React from 'react';
import '../App.css';
import "bulma/css/bulma.css";

function Footer() {
    return(
        <>
        
        <footer>
            <hr/>
            <div class="mb-3">
                <div class="ft-logo"> <h1> <strong>Rides</strong> </h1>  <img src="/map.png" className="ml-3 mt-1" width="30" height="40"/> </div>
                <h5 class="ft-content">
                Made with 💙 by <a href="https://www.linkedin.com/in/stefano-pisani-66807712a/">Stefano Pisani</a> <br/>
                @ contact us <a href="https://www.linkedin.com/in/stefano-pisani-66807712a/"> ✉️ </a> <br/>
                Enjoy the Rides 🤟🏻 
                </h5>
            </div>
        </footer>
        {/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
        </>
    )
}

export default Footer; 
