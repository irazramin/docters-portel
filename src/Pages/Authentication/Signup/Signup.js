import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div class='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
        <div class='card-body'>
          <h2 className='text-center text-xl'>Signup</h2>
          <form>
            <div class='form-control'>
              <label class='label'>
                <span class='label-text'>Name</span>
              </label>
              <input
                type='text'
                placeholder='name'
                class='input input-bordered'
              />
            </div>
            <div class='form-control'>
              <label class='label'>
                <span class='label-text'>Email</span>
              </label>
              <input
                type='email'
                placeholder='email'
                class='input input-bordered'
              />
            </div>
            <div class='form-control'>
              <label class='label'>
                <span class='label-text'>Password</span>
              </label>
              <input
                type='text'
                placeholder='password'
                class='input input-bordered'
              />
            </div>
            <div class='form-control mt-6'>
              <button class='btn btn-accent'>Signup</button>
            </div>
          </form>
          <div className='mt-2'>
            <p className='text-xs text-center'>
           Already have an account?
              <button
                onClick={() => navigate('/login')}
                className='text-secondary font-bold cursor-pointer'
              >
                Login
              </button>
            </p>
          </div>
          <div class='flex flex-col mx-5 border-opacity-50'>
            <div class='divider'>OR</div>
          </div>
          <div>
            <button class='btn w-full btn-outline btn-accent uppercase'>
              CONTINUE WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup