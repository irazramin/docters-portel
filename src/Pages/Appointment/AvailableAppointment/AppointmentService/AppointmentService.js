import React from 'react';

const AppointmentService = ({service,handleBookingAppointment}) => {
    const {slots,name} = service;
  return (
    <div class='card shadow-lg text-center'>
      <div class='card-body text-center'>
        <h2 class='card-title mx-auto'>{name}</h2>
        <p>{slots[0]}</p>
        <p className='mt-3'>10 SPACES AVAILABLE</p>
        <label
        onClick={() => handleBookingAppointment(service)}
          for='booking-modal'
          className='btn btn-primary text-white bg-gradient-to-r from-secondary mx-auto mt-4 w-[190px] to-primary'
        >
          Book Appointment
       </label>
      </div>
    </div>
  );
}

export default AppointmentService