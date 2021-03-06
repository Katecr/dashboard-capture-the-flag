import React, { useEffect, useState } from 'react';

// Import function getAllUser
import { getAllUsers } from '../functions/requests';

// Form login component
import Formlogin from './FormLogin';

const Login = () => {

  const [users, setUsers] = useState(null);

  useEffect(() => {
    getAllUsers(setUsers);
  }, []);

  return (
    <>
      {users != null ? (
        <Formlogin />
      ) : ('No users in the system')}
    </>
  );
}

export default Login;
