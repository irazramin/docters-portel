import React from 'react';

const AppointmentService = ({service,setTreatment}) => {
    const {slots,name} = service;
  return (
    <div className='card shadow-lg text-center'>
      <div className='card-body text-center'>
        <h2 className='card-title mx-auto'>{name}</h2>
        <p>{slots[0]}</p>
        <p className='mt-3'>
          {slots.length ? (
            <small>{slots.length} SPACES AVAILABLE</small>
          ) : (
            <small className='text-red-500'>{0} SPACES AVAILABLE</small>
          )}{' '}
        </p>
        <label
          onClick={() => setTreatment(service)}
          htmlFor='booking-modal'
          className='btn btn-primary text-white bg-gradient-to-r from-secondary mx-auto mt-4 w-[190px] to-primary'
        >
          Book Appointment
        </label>
      </div>
    </div>
  );
}

export default AppointmentService