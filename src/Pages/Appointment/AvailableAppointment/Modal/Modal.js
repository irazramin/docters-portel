import { format } from 'date-fns';
import React from 'react';

const Modal = ({ treatment, date }) => {
    const handleTreatmentSubmit = (e) =>{
        e.preventDefault();
    }
  return (
    <div>
      <input type='checkbox' id='booking-modal' class='modal-toggle relative' />
      <div class='modal modal-bottom sm:modal-middle'>
        <div class='modal-box'>
          <h3 class='font-bold text-lg text-secondary'>
            Your appointment on {treatment.name}
          </h3>
          <label
            for='booking-modal'
            class='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          <form onSubmit={handleTreatmentSubmit} className='flex flex-col  justify-center items-center mt-3 gap-3 px-6'>
            <input
              type='text'
              class='input input-bordered w-full'
              value={format(date, 'PP')}
              disabled
            />

            <select
              class='select select-bordered  w-full'
            >
              {treatment.slots.map((slot) => (<option   value={slot}>{slot}</option>))}
            </select>

            <input
              type='text'
              name='name'
              placeholder='Full name'
              class='input input-bordered w-full'
            />
            <input
              type='number'
              placeholder='Phone number'
              name='phone'
              class='input input-bordered w-full'
            />
            <input
            name='email'
              type='email'
              placeholder='Email'
              class='input input-bordered w-full '
            />
            <input
              type='submit'
              value='submit'
              className='btn btn-accent w-full'
            />
          </form>
          <div class='modal-action'></div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
