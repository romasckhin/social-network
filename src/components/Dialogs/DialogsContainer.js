import {addMessageCreator, updateNewMessageCreator} from '../../redux/dialogs-reduce'
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {


    return {
        dialogsReducer: state.dialogsReducer
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

        addMessage: () => {
            dispatch(addMessageCreator())
        },
        
        updateNewMessage: (text) => {
            dispatch(updateNewMessageCreator(text))
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer;