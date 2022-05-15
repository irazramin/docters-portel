import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class='drawer drawer-mobile bg-white'>
      <input id='my-drawer-2' type='checkbox' class='drawer-toggle' />
      <div class='drawer-content flex flex-col  justify-center '>
        <Outlet />
      </div>
      <div class='drawer-side'>
        <label for='my-drawer-2' class='drawer-overlay'></label>
        <ul class='menu p-4 overflow-y-auto w-48 bg-white text-base-content'>
          <li>
            <Link to='/dashboard'>My Appointment</Link>
          </li>
          <li>
            <Link to='myreview'>My Review</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
