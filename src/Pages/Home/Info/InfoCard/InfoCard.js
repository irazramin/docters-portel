import React from 'react';

export const InfoCard = ({ card }) => {
  const { cardHeader, cardBody, bg, icon } = card;

  return (
    <div
      className={`card card-side shadow-xl py-5 px-[25px] text-white ${
        bg === 'dark'
          ? 'bg-[#3A4256]'
          : 'bg-gradient-to-r from-secondary to-primary'
      }`}
    >
      <figure>
        <img src={icon} alt='icon' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{cardHeader}</h2>
        <p>{cardBody}</p>
      </div>
    </div>
  );
};
