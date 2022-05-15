import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import AppointmentService from './AppointmentService/AppointmentService';
import Modal from './Modal/Modal';

const AvailableAppointment = ({ date }) => {
  const [treatment, setTreatment] = useState(null);
  
     const formattedDate = format(date, 'PP');
     const {
       data: services,
       isLoading,
       refetch,
     } = useQuery(['available', formattedDate], () =>
       fetch(`http://localhost:5000/available?date=${formattedDate}`).then(
         (res) => res.json()
       )
     );

     if (isLoading) {
       return <Loading></Loading>;
     }

  return (
    <div className='px-[47px] mb-[140px]'>
      <p className='text-2xl text-secondary text-center mt-4'>
        Available Appointments on
      </p>
      <div className='grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-[35px] mt-[100px]'>
        {services?.map((service) => (
          <AppointmentService
            key={service._id}
            service={service}
           setTreatment = {setTreatment}
          />
        ))}
      </div>
      {treatment ? (
        <Modal treatment={treatment} setTreatment={setTreatment} date={date} refetch={refetch}/>
      ) : (
        ''
      )}
    </div>
  );
};

export default AvailableAppointment;
