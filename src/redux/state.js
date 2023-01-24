import { v4 as uuidv4 } from 'uuid';

let state = {
    messagePage: {
        posts : [
            { id: uuidv4(), message: 'This is my 1 post', likesCount: 5 },
            { id: uuidv4(), message: 'This is my 2 post', likesCount: 53 },
            { id: uuidv4(), message: 'This is my 3 post', likesCount: 32 },
            { id: uuidv4(), message: 'This is my 4 post', likesCount: 245 },
          ],
    },

    profilePage: {
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

export default state