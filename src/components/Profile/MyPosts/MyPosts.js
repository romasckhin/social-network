import scl from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react';
import {addPostActionCreator, updateNewPostTextCreator} from '../../../redux/profile-reduce'

const MyPosts = ({posts, dispatch, newPostText}) => {

    

    let addButtonPost = () => {
        dispatch(addPostActionCreator())
    }

    let onPostChange = (e) => {
        let text = e.target.value
        dispatch(updateNewPostTextCreator(text))
    }
    
    return (
        <div>
            <h3>My Post</h3>
            <input onChange={onPostChange} value={newPostText}  />
            <button onClick={addButtonPost} >click</button>

            {
                posts.map(post => <Post
                    key={post.id}
                    message={post.message}
                    likesCount={post.likesCount}                    
                />)
            }
        </div>
    );
};

export default MyPosts;