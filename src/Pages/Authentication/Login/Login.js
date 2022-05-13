import React from 'react';

const Login = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div class='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
        <div class='card-body'>
          <div class='form-control'>
            <label class='label'>
              <span class='label-text'>Email</span>
            </label>
            <input
              type='text'
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
            <label class='label'>
              <a href='#' class='label-text-alt link link-hover'>
                Forgot password?
              </a>
            </label>
          </div>
          <div class='form-control mt-6'>
            <button class='btn btn-accent'>Login</button>
          </div>

          <div className='mt-2'>
            <p className='text-xs text-center'>
              New to Doctors Portal?{' '}
              <button className='text-secondary font-bold cursor-pointer'>
                Create new account
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

export default Login