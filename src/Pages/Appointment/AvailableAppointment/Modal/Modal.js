import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';

const Modal = ({ treatment, date, setTreatment, refetch }) => {
  const [user] = useAuthState(auth);
  const handleTreatmentSubmit = (e) => {
    const { _id, name } = treatment;
    const slot = e.target.slot.value;
    const phone = e.target.phone.value;
    e.preventDefault();
    const booking = {
      treatmentId: _id,
      bookingDate: format(date, 'PP'),
      treatment: name,
      slot,
      patientName: user?.displayName,
      patientEmail: user?.email,
      phone,
    };
    fetch(`http://localhost:5000/booking`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(
            `You get an appointment on ${format(date, 'PP')} at ${slot}`
          );
        } else {
          toast.error(
            `You have already an appointment on ${data?.booking?.bookingDate} at ${data?.booking?.slot}`
          );
        }
      });
    setTreatment(null);
    refetch()
  };
  return (
    <div>
      <input type='checkbox' id='booking-modal' className='modal-toggle relative' />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg text-secondary'>
            Your appointment on {treatment.name}
          </h3>
          <label
            htmlFor='booking-modal'
            className='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          <form
            onSubmit={handleTreatmentSubmit}
            className='flex flex-col  justify-center items-center mt-3 gap-3 px-6'
          >
            <input
              type='text'
              className='input input-bordered w-full'
              value={format(date, 'PP')}
              disabled
            />

            <select name='slot' className='select select-bordered  w-full'>
              {treatment.slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>

            <input
              type='text'
              name='name'
              value={user?.displayName || ''}
              disabled
              placeholder='Full name'
              className='input input-bordered w-full'
            />
            <input
              name='email'
              type='email'
              value={user?.email || ''}
              disabled
              placeholder='Email'
              className='input input-bordered w-full '
            />
            <input
              type='number'
              placeholder='Phone number'
              name='phone'
              className='input input-bordered w-full'
            />
            <input
              type='submit'
              value='submit'
              className='btn btn-accent w-full'
            />
          </form>
          <div className='modal-action'></div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
