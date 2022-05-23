import React, { useState, useEffect } from 'react';

// Import function getAllUser
import { getAllUsers } from '../functions/requests';

const ContentUsers = () => {

  const [users, setUsers] = useState(null);

  useEffect(() => {
    getAllUsers(setUsers);
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Users</h1>
        </div>
        <div className="td-actions">
          <a href="/">
            <i className="fas fa-plus"></i>
            <span>Add new</span>            
          </a>
        </div>
        <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
          
        {users != null ? (
            users.map(user => (
              <tbody>
                <tr key={user.id} className="border-bottom">
                  <td className="avatar-circle"><img src={user.avatar} alt={user.name}/></td>
                  <td>{user.name}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td className="td-actions">
                    <a href={`./users/${user.id}`}>
                      <i className="fas fa-edit"></i>
                      <span>Edit</span>
                    </a>
                    <a href={`./users/${user.id}`}>
                      <i className="fas fa-trash-alt"></i>
                      <span>Delete</span>
                    </a>
                  </td>
                </tr>  
              </tbody>                          
            )) 
        ) : ('No users in the system')}
        </table>
      </div>
    </>
  );
}

export default ContentUsers;
