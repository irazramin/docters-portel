import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Contactus from './Pages/Contactus/Contactus';
import Home from './Pages/Home/Home';
import Login from './Pages/Authentication/Login/Login';
import Reviews from './Pages/Reviews/Reviews';
import Navbar from './Pages/Shared/Navbar';
import Signup from './Pages/Authentication/Signup/Signup';

function App() {
  return (
    <div >
     <Navbar />
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/about' element={<About />} />
       <Route path='/appointment' element={<Appointment />} />
       <Route path='/reviews' element={<Reviews />} />
       <Route path='/contactus' element={<Contactus />} />
       <Route path='/login' element={<Login />} />
       <Route path='/signup' element={<Signup />} ></Route>
     </Routes>

    </div>
  );
}

export default App;
