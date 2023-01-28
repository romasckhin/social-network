import scl from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react';

const MyPosts = ({posts, addPost, newPostText, updateNewPosttext}) => {

    // плохая практика из за прямого обращение к DOM
    let newPostElement = React.createRef() // ссылка на какой-то элемент

    let addButtonPost = () => {
        addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        updateNewPosttext(text)
    }
    
    return (
        <div>
            <h3>My Post</h3>
            <input ref={newPostElement} onChange={onPostChange} value={newPostText}  />
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