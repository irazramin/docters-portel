
const Dashboard = () => {
  return (
<div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
    {/* <!-- Page content here --> */}
    <label for="my-drawer-2" class="btn btn-ghost drawer-button lg:hidden">
             <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
    </label>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

      <li><a>My Appointment</a></li>
      <li><a></a></li>
    </ul>
  
  </div>
</div>
  );
};

export default Dashboard;
