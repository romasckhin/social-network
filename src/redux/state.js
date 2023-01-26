import { v4 as uuidv4 } from 'uuid';

let state = {
    profilePage: {
        posts : [
            { id: uuidv4(), message: 'This is my 1 post', likesCount: 5 },
            { id: uuidv4(), message: 'This is my 2 post', likesCount: 53 },
            { id: uuidv4(), message: 'This is my 3 post', likesCount: 32 },
            { id: uuidv4(), message: 'This is my 4 post', likesCount: 245 },
          ],
          newPostText: 'it-kamasutra'
    },

    dialogPage: {
        messages : [
            { id: uuidv4(), message: 'Hi' },
            { id: uuidv4(), message: 'House' },
            { id: uuidv4(), message: 'Apartament' },
          ],
 
          dialogs : [
            { id: uuidv4(), name: 'Roman' },
            { id: uuidv4(), name: 'Alina' },
            { id: uuidv4(), name: 'Sabina' },
            { id: uuidv4(), name: 'Arsen' },
            { id: uuidv4(), name: 'Mandarina' },
        ],
    }
}

let  rerenderEntireTree = () => {
    
}

export let addPost = () => {
    let newPost = { id: uuidv4(), message: state.profilePage.newPostText, likesCount: 10 }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export let updateNewPosttext = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export let subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default state