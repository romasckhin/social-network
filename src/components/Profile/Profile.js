import MyPosts from './MyPosts/MyPosts';
import scl from './Profile.module.css'

const Profile = () => {
      

    return (
        <div className={scl.content}>
            <div>
                Profile YEEEEE
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;