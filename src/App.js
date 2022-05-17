import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Authentication/Login/Login';
import RequireAuth from './Pages/Authentication/RequireAuth/RequireAuth';
import Signup from './Pages/Authentication/Signup/Signup';
import Contactus from './Pages/Contactus/Contactus';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppoinment/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview/MyReview';
import Users from './Pages/Dashboard/Users/Users';
import Home from './Pages/Home/Home';
import Reviews from './Pages/Reviews/Reviews';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className='bg-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route
          path='/appointment'
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route
          path='/dashboard'
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointment />}></Route>
          <Route path='myreview' element={<MyReview />}></Route>
          <Route path='myusers' element={<Users />}></Route>
        </Route>
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </div>
  );
}

export default App;
