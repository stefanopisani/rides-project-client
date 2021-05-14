import React from 'react';
import { NavLink } from 'react-router-dom';
import { getUser} from '../api';

class UserDetails extends React.Component {
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

        this.setState({
            _id: response.data._id,
            username: response.data.username, 
            email: response.data.email,
            password: response.data.password,
            imageUrl: response.data.imageUrl,
            bio: response.data.bio,
            phoneNumber: response.data.phoneNumber,
            reviews: response.data.reviews
        });
        console.log(this.state.reviews);
    }

    render(){
        const { username, email, bio, _id, reviews, phoneNumber, user} = this.state;
        return(
            <>
            <h2> {username} - {email} ☎️ ({phoneNumber})</h2>
            <h3> Bio: {bio} </h3>
            { username ? <NavLink to={`/users/${_id}/edit`} > <button> Edit </button> </NavLink> :
                <NavLink to={`/reviews/${_id}/add`} > <button> Add review </button> </NavLink>
            }
            
            <h3> Reviews: </h3>
            
            {reviews.map((review) => {
                return(
                    <>
                    <p> {review.user} - {review.comment}</p>
                    <div>
                        {
                        review.rating === 0 ? <div className="stars">☆☆☆☆☆</div>
                        : review.rating === 1 ? <div className="stars">★☆☆☆☆</div>
                        : review.rating === 2 ? <div className="stars">★★☆☆☆</div>
                        : review.rating === 3 ? <div className="stars">★★★☆☆</div>
                        : review.rating === 4 ? <div className="stars">★★★★☆</div>
                        : <div >★★★★★</div>
                        } 
                    </div>
                    </>
                )    
            })}
           
            </>
        )
    }




}

export default UserDetails;