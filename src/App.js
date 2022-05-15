import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Contactus from './Pages/Contactus/Contactus';
import Home from './Pages/Home/Home';
import Login from './Pages/Authentication/Login/Login';
import Reviews from './Pages/Reviews/Reviews';
import Navbar from './Pages/Shared/Navbar';
import Signup from './Pages/Authentication/Signup/Signup';
import RequireAuth from './Pages/Authentication/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppoinment/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview/MyReview';

function App() {
  return (
    <div>
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
              <Dashboard  />
            </RequireAuth>
          }
        >
          <Route path='/myappointment' element={<MyAppointment />} />
          <Route path='/myreview' element={<MyReview />} />
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
