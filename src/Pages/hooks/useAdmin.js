import { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
      const email = user?.email;
      console.log(email)
    fetch(`https://immense-beach-40730.herokuapp.com/admin/${email}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        authorization: `bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) =>{
          console.log(data)
           setAdmin(data.admin);
           setAdminLoading(false)
      });
  }, [user]);

  return [admin,adminLoading];
};

export default useAdmin;
