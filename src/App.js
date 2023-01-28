import './App.css'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'
import {Routes, Route} from 'react-router-dom'

const App = ({state, addPost, updateNewPosttext}) => {

  return (

    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      
      <div className='app-wrapper-content'>
        <Routes>
            <Route path='/dialogs' element={
                <Dialogs 
                  dialogs={state.dialogPage.dialogs} 
                  messages={state.dialogPage.messages}
              />} />

          <Route path='/profile' element={
                <Profile 
                  posts={state.profilePage.posts}
                  addPost={addPost}
                  state={state}
                  updateNewPosttext={updateNewPosttext}
              />} />
        </Routes>
      </div>
      
    </div>

  );
};

export default App;
