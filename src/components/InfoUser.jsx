import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Import function findOneUser
import { findOneUser } from '../functions/requests';

const Infouser = () => {

  const {id} = useParams();

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    findOneUser(id,setUserInfo);
  },[id]);

  return (
    <>
      <h2 className="flex-h">Edit User</h2>
      {userInfo !== null ? (
        <>
        <div className="flex-v">
        <div className="flex-v">
          <label for="nameUser">Name</label>
          <input type="text" name="nameUser" className="input-form" value={userInfo.name}/>
        </div>
        <div className="flex-v">
          <label for="lastname">Lastname</label>
          <input type="text" name="lastname" className="input-form" value={userInfo.lastname } />
        </div>
        <div className="flex-v">
          <label for="email">Email</label>
          <input type="text" name="email" className="input-form" value={userInfo.email} />
        </div>
        <div className="flex-v">
          <label for="role">Role</label>
          <input type="text" name="role" className="input-form" value={userInfo.role} />
        </div>
        <div className="flex-v">
          <input type="hidden" name="avatar-hidden" value={userInfo.avatar} />
          <label for="avatar">Avatar</label>
          <img src={userInfo.avatar} alt={userInfo.name} title={userInfo.name}/>
          <input type="file" name="avatar"/>
        </div>
        <div className="td-actions">
          <a href="/users" className="btn-logout">Cancelar</a>
          <button type="submit" className="btn-logout" >Editar</button>
        </div>
      </div>
        </>
      ) : ('Loading')}
    </>
  );
}

export default Infouser;
