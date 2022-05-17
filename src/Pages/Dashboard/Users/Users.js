import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery(['users'], () =>
    fetch(`https://immense-beach-40730.herokuapp.com/users`,{
        method:"GET",
        headers:{
            authorization:`bearer ${localStorage.getItem('accessToken')}`
        }
    }).then((res) => res.json())
  );

  if(isLoading){
      return <Loading></Loading>
  }
  return (
    <div>
      {' '}
      <h2 className='text-2xl my-6'>My Appointment</h2>
      <table className='table table-zebra w-full'>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
              <UserRow user={user} key={idx} idx={idx} refetch={refetch}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
