import MyPosts from './MyPosts/MyPosts';
import scl from './Profile.module.css'

const Profile = () => {
    return (
        <div className={scl.content}>
            <div>
                Profile
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;