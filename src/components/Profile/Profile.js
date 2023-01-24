import MyPosts from './MyPosts/MyPosts';
import scl from './Profile.module.css'

const Profile = ({posts}) => {



    return (
        <div className={scl.content}>
            <div>
                Profile YEEEEE
            </div>
            <MyPosts posts={posts}/>
        </div>
    );
};

export default Profile;