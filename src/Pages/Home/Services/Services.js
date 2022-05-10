import React from 'react';
import cavity from "../../../assets/images/cavity.png";
import fluoride from "../../../assets/images/fluoride.png";
import whitening from "../../../assets/images/whitening.png";
import Service from './Service/Service';
const Services = () => {
    const servicesItems = [
      {
          id:1,
        icon: fluoride,
        serviceName: 'Fluoride Treatment',
        serviceDecs:
          'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      },
      {
          id:2,
        icon: cavity,
        serviceName: 'Cavity Filling',
        serviceDecs:
          'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      },
      {
          id:3,
        icon: whitening,
        serviceName: 'Teeth Whitening',
        serviceDecs:
          'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      },
    ];
  return (
    <div className='mt-[130px] mx-[26px]'>
      <div className='text-center'>
        <h4 className='text-uppercase text-primary font-semibold text-xl'>
          OUR SERVICES
        </h4>
        <p className='mt-2 mb-[70px] text-4xl'>Services We Provide</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8'>
        {servicesItems.map((service) => (
          <Service key={service.id} service={service}/>
        ))}
      </div>
    </div>
  );
}

export default Services