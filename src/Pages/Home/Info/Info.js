import React from 'react';
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import { InfoCard } from './InfoCard/InfoCard';
const Info = () => {
    const cardItems = [
      {
        id: 1,
        icon: clock,
        bg: 'other',
        cardHeader: 'Opening Hours',
        cardBody: 'Lorem Ipsum is simply dummy text of the pri',
      },
      {
        id: 2,
        icon: marker,
        bg: 'dark',
        cardHeader: 'Visit our location',
        cardBody: 'Brooklyn, NY 10036, United States',
      },
      {
        id: 3,
        icon: phone,
        bg: 'other',
        cardHeader: 'Contact us now',
        cardBody: '+000 123 456789',
      },
    ];
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-[26px] mt-5'>
      {cardItems.map((card) => (
        <InfoCard key={card.id} card={card} />
      ))}
    </div>
  );
}

export default Info