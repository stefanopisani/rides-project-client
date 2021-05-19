import React from 'react';
import { toast } from 'react-toastify';
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
        toast('Review added. Thanks for being an active memeber of Rides 🤟🏻 ')
    }

    render(){
        const { comment, rating} = this.state;
        return(
            <>
            <div class="columns has-background-primary-light p-6">
                <div class="column"> </div>
                <div class="column"> 
                    <form onSubmit={this.handleFormSubmit} > 
                    <div class="field mb-5">
                        <label class="label">Comment</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="text" name="comment" onChange={this.handleChange} value={comment}/>
                            <span class="icon is-small is-left">
                                <i class="fas fa-comment"></i>
                            </span>
                        </div>
                    </div>
                    <div class="field mb-5">
                        <label class="label">Rating</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="number" name="rating" onChange={this.handleChange} value={rating} min="1" max="5"/>
                            <span class="icon is-small is-left">
                                <i class="fas fa-star"></i>
                            </span>
                        </div>
                    </div>

                    <div class="field is-grouped is-justify-content-center">
                      <div class="control">
                          <button class="button is-primary" type="submit">Leave Review</button>
                      </div>    
                  </div>
                    </form>
                </div>
                <div class="column"> </div>
            </div>

{/* 
                <label>Comment</label>
                <input type="text" name="comment" onChange={this.handleChange} value={comment}/>

                <label>Rating</label>
                <input type="number" name="rating" onChange={this.handleChange} value={rating} min="1" max="5"/>

                <button type="submit">Leave Review</button> */}
            
            </>
        )
    }


}

export default AddReview;