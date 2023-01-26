import MyPosts from './MyPosts/MyPosts';
import scl from './Profile.module.css'

const Profile = ({posts, addPost, state, updateNewPosttext}) => {
    

    return (
        <div className={scl.content}>
            <div>
                Profile YEEEEE
            </div>
            <MyPosts posts={posts} addPost={addPost} newPostText={state.profilePage.newPostText} updateNewPosttext={updateNewPosttext}/>
        </div>
    );
};

export default Profile;