import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { addPost } from './redux/state';
import { updateNewPosttext } from './redux/state'
import state, { subscribe } from './redux/state'

// UI должен постоянно перерисовываться , когда в state проихощди каке-либо изм.
// а так он рендериться единожды обворачиваем в rerenderEntireTree


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
root.render( 
  <React.StrictMode>
      <BrowserRouter>
          <App 
              state={state}
              addPost={addPost}
              updateNewPosttext={updateNewPosttext}
           />
      </BrowserRouter>
  </React.StrictMode>
);

}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)