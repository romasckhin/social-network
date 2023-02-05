import scl from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react';

const MyPosts = (props) => {


    let state = props.profileRducer

    let addButtonPost = () => {
        props.addMessage()
    }

    let onPostChange = (e) => {
        let text = e.target.value
        props.updateNewMessage(text)
    }
    
    return (
        <div>
            <h3>My Post</h3>
            <input onChange={onPostChange} value={state.newPostText}  />
            <button onClick={addButtonPost} >click</button>

            {
                state.posts.map(post => <Post
                    key={post.id}
                    message={post.message}
                    likesCount={post.likesCount}                    
                />)
            }
        </div>
    );
};

export default MyPosts;