import React, { useEffect, useState } from 'react';
import AppointmentService from './AppointmentService/AppointmentService';
import Modal from './Modal/Modal';

const AvailableAppointment = ({date}) => {
    const [services,setServices] = useState([]);
    const [treatment,setTreatment] = useState(null)

    useEffect(() =>{
        fetch('http://localhost:5000/service')
          .then((res) => res.json())
          .then((data) => setServices(data));
    },[]);

    const handleBookingAppointment = (service) =>{
        setTreatment(service)
        console.log(services)
    }
  return (
    <div className='px-[47px] mb-[140px]'>
      <p className='text-2xl text-secondary text-center mt-4'>
        Available Appointments on
      </p>
      <div className='grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-[35px] mt-[100px]'>
        {services.map((service) => (
          <AppointmentService key={service._id} service={service} handleBookingAppointment={handleBookingAppointment} />
        ))}
      </div>
      {treatment ? <Modal treatment={treatment} setTreatment={setTreatment} date={date} /> : ''}
    </div>
  );
};

export default AvailableAppointment;
