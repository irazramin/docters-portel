import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chairBg from '../../../assets/images/bg.png';
import heroBg from '../../../assets/images/chair.png';
const AppointmentBanner = () => {
    const [date,setData] = useState(new Date())
  return (
    <div
      class='hero  px-[40px]  lg:h-[80vh]'
      style={{
        backgroundImage: `url(${chairBg})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div class='hero-content flex-col lg:flex-row-reverse gap-20 '>
        <img src={heroBg} class='max-w-sm rounded-lg shadow-2xl' alt='' />
        <div>
          <DayPicker
            mode='single'
            selected={date}
            onSelect={setData}
           
          />
        </div>
      </div>
    </div>
  );
}

export default AppointmentBanner