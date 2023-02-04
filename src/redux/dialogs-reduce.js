import { v4 as uuidv4 } from 'uuid';

const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

let initialState = {
    
    messages : [
        { id: uuidv4(), message: 'Hi' },
      ],

    dialogs : [
        { id: uuidv4(), name: 'Roman' },
        { id: uuidv4(), name: 'Alina' },
        { id: uuidv4(), name: 'Sabina' },
        { id: uuidv4(), name: 'Arsen' },
        { id: uuidv4(), name: 'Mandarina' },
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) =>  {


    switch (action.type) {

        case 'ADD_MESSAGE': 
            let newMessage = { id: uuidv4(), message: state.newMessageText }
            
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push(newMessage)
            stateCopy.newMessageText = ''
            return stateCopy

        case 'UPDATE_NEW_MESSAGE_TEXT': {
            let stateCopy = {...state}
            stateCopy.newMessageText = action.newText
            return stateCopy

        }
        default: 
            return state
    }
}

export const addMessageCreator = () => {
    return { type: ADD_MESSAGE }
}

export const updateNewMessageCreator = (text) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text}
}

export default dialogsReducer