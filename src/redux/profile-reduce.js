import { v4 as uuidv4 } from 'uuid';


const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = 
    {
        posts : [
            { id: uuidv4(), message: 'This is my 1 post', likesCount: 5 },
            { id: uuidv4(), message: 'This is my 2 post', likesCount: 53 },
            { id: uuidv4(), message: 'This is my 3 post', likesCount: 32 },
            { id: uuidv4(), message: 'This is my 4 post', likesCount: 245 },
          ],
          newPostText: ''
    }


const profileRducer = (state = initialState, action) => {

    switch (action.type) {
        
        case "ADD_POST": 
            let newPost = { id: uuidv4(), message: state.newPostText, likesCount: 10 }
            let setState = {...state}
            setState.posts = [...state.posts]
            setState.posts.push(newPost)
            setState.newPostText = ''
            return setState

        case "UPDATE_NEW_POST_TEXT":
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
             return stateCopy
        
        default: 
            return state
    }
}

export const addPostActionCreator = () => {
    return { type: ADD_POST }
}

export const updateNewPostTextCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}



export default profileRducer