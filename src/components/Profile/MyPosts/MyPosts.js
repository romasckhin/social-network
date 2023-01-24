import scl from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = ({posts}) => {
    
    

    return (
        <div>
            <h3>My Post</h3>
            <input/>
            <button>click</button>

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