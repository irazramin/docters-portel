import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, idx, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://immense-beach-40730.herokuapp.com/user/admin/${email}`, {
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error('Admin make failed');
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data);
          toast.success('Admin added successfully');
        }
        refetch();
      });
  };
  return (
    <tr>
      <th>{idx + 1}</th>
      <td>{user?.email}</td>
      <td>
        {' '}
        {role !== 'admin' ? (
          <button onClick={makeAdmin} className='btn btn-xs'>
            Make admin
          </button>
        ) : (
          ''
        )}{' '}
      </td>
      <td>
        {' '}
        <button className='btn btn-xs'>Remove user</button>{' '}
      </td>
    </tr>
  );
};

export default UserRow;
