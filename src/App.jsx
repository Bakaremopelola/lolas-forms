import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './App.css'
import Home from './Components/Home';
import About from './Components/About';
import LogIn from './Components/LogIn';
import LogOut from './Components/LogOut';
import Contacts from './Components/Contacts';
import Settings from './Components/Settings';
import Button from './Components/Button';
 

function App() {
  return(

    <> 
    
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/LogOut' element={<LogOut/>}></Route>
      <Route path='/LogIn' element={<LogIn/>}></Route>
      <Route path='/Settings' element={<Settings/>}></Route>
      <Route path='/Contacts' element={<Contacts/>}></Route>
      
    </Routes>
    
  </>
  )
  
}


export default App
