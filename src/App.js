import './App.css'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import {Routes, Route} from 'react-router-dom'

const App = () => {


  return (

    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      
      <div className='app-wrapper-content'>
        <Routes>
            <Route path='/dialogs' element={
                <DialogsContainer/>} 
            />
v
            <Route path='/profile' element={
                <ProfileContainer/>}
             />
        </Routes>
      </div>
      
    </div>

  );
};

export default App;
