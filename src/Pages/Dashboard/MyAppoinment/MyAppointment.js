import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate()
  useEffect(() => {
    if (user) {
      fetch(`https://immense-beach-40730.herokuapp.com/booking?patient=${user?.email}`,{
        method:"GET",
        headers:{
          authorization:`bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then((res) => {
          if(res.status === 403 || res.status === 401){
             navigate('/');
             signOut(auth);
             localStorage.removeItem('accessToken');
          }
          return res.json();
        })
        .then((data) => setAppointments(data));
        
    }
  }, [user]);

  return (
    <div className='overflow-x-auto bg-[#F1F5F9] lg:px-20 px-10'>
      <h2 className='text-2xl my-6'>My Appointment</h2>
      <table className='table table-zebra w-full'>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Service</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, idx) => (
            <tr>
              <th>{idx + 1}</th>
              <td>{appointment?.patientName}</td>
              <td>{appointment?.treatment}</td>
              <td>{appointment.bookingDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAppointment;
