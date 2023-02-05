import {addPostActionCreator, updateNewPostTextCreator} from '../../redux/profile-reduce'
import MyPosts from './MyPosts/MyPosts'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {


    return {
        profileRducer: state.profileRducer
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

        addMessage: () => {
            dispatch(addPostActionCreator())
        },
        
        updateNewMessage: (text) => {
            dispatch(updateNewPostTextCreator(text))
        },
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default ProfileContainer