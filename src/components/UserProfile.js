import React from 'react';
import { NavLink } from 'react-router-dom';
import { getUser} from '../api';

class UserProfile extends React.Component {
    state = {
        _id: '',
        username: '',
        email: '',
        password: '',
        imageUrl: '',
        bio: '',
        phoneNumber: 0,
        reviews: [],
        user: ''
    }

    async componentDidMount(){
        const userId = this.props.match.params.id;
        const response = await getUser(userId);
        let user
        if (!this.props.user) {
            user = false
        console.log(user);
        } else {
            user = this.props.user.username
           
        }
        this.setState({
            _id: response.data._id,
            username: response.data.username, 
            email: response.data.email,
            password: response.data.password,
            imageUrl: response.data.imageUrl,
            bio: response.data.bio,
            phoneNumber: response.data.phoneNumber,
            reviews: response.data.reviews,
            user: user
        });
        console.log(this.state.user , this.state.username)
    }

    render(){
        const { username, email, bio, _id, reviews, phoneNumber, user, imageUrl} = this.state;
        return(
            <>
        <section className="has-background-primary-light profile-section"> 
            <div className="columns mt-3"> 
                <div className="column"> 
                    
                </div>
                
                <div className="column is-half user-profile-content"> 
                    <h2 className="title"> <img src={imageUrl} alt="" style={{width:60, height:60, borderRadius:50, marginRight:10}} /> {username} { username === user && <NavLink to={`/users/${_id}/edit`} > <i class="fas has-text-grey fa-edit ml-5"> </i> </NavLink> }  </h2>
                    <h2 className="subtitle mt-1"> ✉️ {email} </h2>
                    <h2 className="subtitle mt-1"> ☎️ {phoneNumber}</h2>
                    <h3 className="subtitle mt-1">  {bio} </h3>
                </div>
                <div className="column"> </div>
            </div>
            {/* { username === user ? <NavLink to={`/users/${_id}/edit`} > <button> Edit </button> </NavLink> :
               username !== user ? <NavLink to={`/reviews/${_id}/add`} > <button> Add review </button> </NavLink> :
               user === null ?
                <> </>
            } */}
            
            { username !== user  && <NavLink to={`/reviews/${_id}/add`} > <button className="button is-primary" style={{fontFamily:'Montserrat'}}> <strong> Add review </strong> </button> </NavLink> } 
    
            <hr/> 
            <h3 class="review-title"> Reviews ✌🏻 </h3>
            
            {reviews.map((review) => {
                return(
                    <>
                    <div className="columns"> 
                    <div className="column mobile"> </div>
                    
                    <div class="has-background-white review-container column is-half"> 
                    <p class="mr-5"> <b> {review.user} </b> - "{review.comment}" </p>
                    <div>
                        {
                        review.rating === 0 ? <div className="stars">☆☆☆☆☆</div>
                        : review.rating === 1 ? <div className="stars">★☆☆☆☆</div>
                        : review.rating === 2 ? <div className="stars">★★☆☆☆</div>
                        : review.rating === 3 ? <div className="stars">★★★☆☆</div>
                        : review.rating === 4 ? <div className="stars">★★★★☆</div>
                        : <div className="stars">★★★★★</div>
                        } 
                    </div>
                    </div>
                    <div className="column mobile"> </div>
                    </div>
                    </>
                )    
            })}
        </section>
            </>
        )
    }




}

export default UserProfile;