import React from 'react';
import appoinBg from '../../../assets/images/appointment.png';
import doctor from '../../../assets/images/doctor-small.png';

const HomeAppointment = () => {
  return (
    <div
      class='hero mt-[170px] bg-slate-50 relative'
      style={{
        backgroundImage: `url(${appoinBg})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div class='hero-content flex-col lg:flex-row'>
        <img
          src={doctor}
          class=' w-[605px] h-[636px] -mt-32 object-cover  rounded-lg '
          alt=''
        />
        <div className='text-white'>
          <h4 className='uppercase text-secondary font-semibold text-xl'>
            Appointment
          </h4>
          <h1 class='text-5xl font-bold text-white mt-[22px]'>
            Make an appointment Today
          </h1>
          <p class='py-6'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeAppointment