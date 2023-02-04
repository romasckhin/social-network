import {combineReducers, legacy_createStore as createStore} from "redux"
import profileRducer from './profile-reduce'
import dialogsReducer from './dialogs-reduce'

let reducers = combineReducers({

    profileRducer: profileRducer,
    dialogsReducer: dialogsReducer,

})

let store = createStore(reducers)


export default store