import React from 'react';
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle
} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import ErrorMessage from '../../Shared/ErrorMessage';
import Loading from '../../Shared/Loading';
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [currentUser] = useAuthState(auth);

  const from = location.state?.from?.pathname || '/';

  if (loading || gLoading){
    return <Loading></Loading>
  }

  console.log(from)
  if (currentUser) {
    navigate(from, { replace: true });
  }
  const handleUserLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const pass = e.target.password.value;
    await signInWithEmailAndPassword(email, pass)
    .then(() =>{
        if(!error){
          toast.success('Login successful', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
    })
    
    e.target.reset();
  };
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div class='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
        <div class='card-body'>
          <h2 className='text-center text-xl'>Login</h2>
          <form onSubmit={handleUserLogin}>
            <div class='form-control'>
              <label class='label'>
                <span class='label-text'>Email</span>
              </label>
              <input
                name='email'
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
                type='password'
                name='password'
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
              <ErrorMessage errMsg={error?.message || gError?.message} />
              <button type='submit' class='btn btn-accent'>
                Login
              </button>
            </div>
          </form>

          <div className='mt-2'>
            <p className='text-xs text-center'>
              New to Doctors Portal?{' '}
              <button
                onClick={() => navigate('/signup')}
                className='text-secondary font-bold cursor-pointer'
              >
                Create new account
              </button>
            </p>
          </div>
          <div class='flex flex-col mx-5 border-opacity-50'>
            <div class='divider'>OR</div>
          </div>
          <div>
            <button onClick={() => {
              signInWithGoogle();
              navigate('/');
            }} class='btn w-full btn-outline btn-accent uppercase'>
              CONTINUE WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
