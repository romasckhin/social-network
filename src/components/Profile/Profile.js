import MyPosts from './MyPosts/MyPosts';
import scl from './Profile.module.css'

const Profile = ({posts, dispatch, state}) => {
    
    

    return (
        <div className={scl.content}>
            <div>
                Profile YEEEEE
            </div>
            <MyPosts 
                posts={posts} 
                dispatch={dispatch} 
                newPostText={state.profileRducer.newPostText} 
                />
        </div>
    );
};

export default Profile;