import { v4 as uuidv4 } from 'uuid';

let store = {

    _state: {
        profilePage: {
            posts : [
                { id: uuidv4(), message: 'This is my 1 post', likesCount: 5 },
                { id: uuidv4(), message: 'This is my 2 post', likesCount: 53 },
                { id: uuidv4(), message: 'This is my 3 post', likesCount: 32 },
                { id: uuidv4(), message: 'This is my 4 post', likesCount: 245 },
              ],
              newPostText: ''
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
    },

    getState() {
        return this._state;
    },

    _rerenderEntireTree() {},

    addPost()  {
        let newPost = { id: uuidv4(), message: this._state.profilePage.newPostText, likesCount: 10 }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._rerenderEntireTree(this._state)
    },

    updateNewPosttext(newText) {
        this._state.profilePage.newPostText = newText
        this._rerenderEntireTree(this._state)
    },
 
    subscribe(observer) {
        this._rerenderEntireTree = observer
    }
 
}
export default store