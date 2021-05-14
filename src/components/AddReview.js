import React from 'react';
import { addReview, getUser } from '../api';

class AddReview extends React.Component{
    state = {
        user_id: '',
        user: '',
        comment: '',
        rating: 0
    }

    async componentDidMount() {
        const userId = this.props.match.params.id;
        const response = await getUser(userId);
        
        this.setState({
            user_id: response.data._id,
            user: this.props.user.username
        });
        console.log('id found:' + userId)
      }

    handleChange = (event)=> {
        let { name, value } = event.target;

        this.setState({
           [name]: value
        })
    }

    handleFormSubmit = async (event)=> {
        event.preventDefault();
        const { user, comment, user_id, rating } = this.state;
        const newReview = {
            user,
            comment,
            rating
        };
        await addReview(user_id, newReview);
        this.props.history.push("/rides");
    }

    render(){
        const { comment, rating} = this.state;
        return(
            <>
            <form onSubmit={this.handleFormSubmit} >

                
                <label>Comment</label>
                <input type="text" name="comment" onChange={this.handleChange} value={comment}/>

                <label>Rating</label>
                <input type="number" name="rating" onChange={this.handleChange} value={rating} min="1" max="5"/>

                <button type="submit">Leave Review</button>
            </form>
            </>
        )
    }


}

export default AddReview;