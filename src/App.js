import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import './App.css';
import NotFound from './Components/Errors/404';
import Home from './pages/Home'
import Profile from './pages/Profile';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Emergency from './pages/Emergency';
import Report from './pages/Report';
import Dashboard from './pages/Dashboard';
import Incident from './pages/IncidentReport'
import CloseFile from './pages/CloseFile'
import AboutUs2 from './pages/AboutUs2';
import ContactUs from './Components/ContactUs';
import ChatScreen from './pages/ChatScreen'
import HeroCaro from './pages/HeroCaro';

function App() {
  return (
    <Router>
      <Routes> 
      <Route path='/' element={<Home />} />
      <Route path='/caro' element={<HeroCaro />} />
      <Route path='/about' element={<AboutUs2 />} />
      <Route path='/*' element={<NotFound/>} />
      <Route path='/dashboard/profile' element={<Profile/>} />
      <Route path='/contact' element={<ContactUs/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/report' element={<Report/>} />
      <Route path='/emergency' element={<Emergency/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/incident' element={<Incident/>} />
      <Route path='/closedreport' element={<CloseFile/>} />
      <Route path='/chat' element={<ChatScreen/>} />
      </Routes>
      <Toaster />
    </Router>
  
  )
  ;
  
}

export default App;
