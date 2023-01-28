import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import store from './redux/state'

// UI должен постоянно перерисовываться , когда в state произошли каке-либо изм.
// а так он рендериться единожды обворачиваем в rerenderEntireTree


const root = ReactDOM.createRoot(document.getElementById('root'));
  let rerenderEntireTree = (state) => {
    root.render(
      <React.StrictMode>
          <BrowserRouter>
              <App
                  state={state}
                  // методы как addPost принадлежит props
                  // они должны принадлижать store
                  // для этого используем метод bind (возвращает функцию но связанной с store )
                  addPost={store.addPost.bind(store)}
                  updateNewPosttext={store.updateNewPosttext.bind(store)}
              />
          </BrowserRouter>
      </React.StrictMode> 
    );
  }

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)