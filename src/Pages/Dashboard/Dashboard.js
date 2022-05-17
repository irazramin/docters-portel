import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user)
  return (
    <div className='drawer drawer-mobile bg-white'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col  justify-center '>
        <Outlet />
      </div>
      <div className='drawer-side'>
        <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
        <ul className='menu p-4 overflow-y-auto w-48 bg-white text-base-content'>
          <li>
            <Link to='/dashboard'>My Appointment</Link>
          </li>
          <li>
            <Link to='myreview'>My Review</Link>
          </li>
          {admin && (
            <li>
              <Link to='myusers'>All users</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
