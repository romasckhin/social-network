import './App.css'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'
import {Routes, Route} from 'react-router-dom'

const App = ({state}) => {


  return (

    <div className="app-wrapper">
      <Header/>
      <Navbar/>

      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs' element={<Dialogs dialogs={state.profilePage.dialogs} messages={state.profilePage.messages} />} />
          <Route path='/profile' element={<Profile posts={state.messagePage.posts}/>} />
        </Routes>
      </div>
      
    </div>

  );
};

export default App;
