
const Post = ({message ,likesCount}) => {
    return (
        <div>
            {message}<br/>
            {likesCount}
        </div>
    );
};

export default Post;