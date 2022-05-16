import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setAppointments(data));
        
    }
  }, [user]);

  return (
    <div class='overflow-x-auto bg-[#F1F5F9] lg:px-20 px-10'>
      <h2 className='text-2xl my-6'>My Appointment</h2>
      <table class='table table-zebra w-full'>
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
