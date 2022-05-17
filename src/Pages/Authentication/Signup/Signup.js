import React from 'react';
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile
} from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../../Shared/Loading';

const Signup = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, nError] = useUpdateProfile(auth);
  const [token] = useToken(user);
  const handleUserCreateAccount = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    const name = e.target.name.value;
    await createUserWithEmailAndPassword(email, pass);
    if (user) {
      toast.success('Registration successful', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    await updateProfile({ displayName: name });
    e.target.reset();
  };
  if (token) {
    navigate('/');
  }
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
        <div className='card-body'>
          <h2 className='text-center text-xl'>Signup</h2>
          <form onSubmit={handleUserCreateAccount}>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                name='name'
                type='text'
                placeholder='name'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                name='email'
                placeholder='email'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='text'
                placeholder='password'
                name='password'
                className='input input-bordered'
              />
            </div>
            <div className='form-control mt-6'>
              <button type='submit' className='btn btn-accent'>
                Signup
              </button>
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
          <div className='flex flex-col mx-5 border-opacity-50'>
            <div className='divider'>OR</div>
          </div>
          <div>
            <button className='btn w-full btn-outline btn-accent uppercase'>
              CONTINUE WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
