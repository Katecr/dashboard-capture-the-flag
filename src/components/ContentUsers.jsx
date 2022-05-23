import React, { useState, useEffect } from 'react';

// Import function getAllUser
import { getAllUsers, addUsers } from '../functions/requests';

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const ContentUsers = () => {

  const [users, setUsers] = useState(null);
  const [modalAdd, setModalAdd] = useState(false);
  const [fieldsForm, setFieldsForm]=useState({
    name:'',
    lastname: '',
    email: '',    
    password: ''
  })

  const handleChange=e=>{
    const {name, value}=e.target;
    setFieldsForm(prevState=>({
      ...prevState,
      [name]: value
    }))
  }

  useEffect(() => {
    getAllUsers(setUsers);
  }, [modalAdd, users]);

   const openModal = () => {
    setModalAdd(!modalAdd);
  }

  const addUsersLocal=async(fieldsForm,state)=>{
    await addUsers(fieldsForm, state);
    openModal();
  }

  return (
    <>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Users</h1>
        </div>
        <div className="td-actions">
          <button onClick={()=> openModal()}>
            <i className="fas fa-plus"></i>
            <span>Add new</span>            
          </button>
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
          <tbody>
        {users != null ? (
            users.map(user => (              
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
                                       
            )) 
        ) : ('No users in the system')}
        </tbody> 
        </table>
      </div>
      {/* Modal Add */}
    <Modal isOpen={modalAdd} >
          <ModalHeader>
           <div><h3>Add User</h3></div>
          </ModalHeader>

          <ModalBody>            
            <FormGroup>
              <label>
               Name: 
              </label>
              <input
                className="form-control"
                name="name"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Lastname: 
              </label>
              <input
                className="form-control"
                name="lastname"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Email: 
              </label>
              <input
                className="form-control"
                name="email"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Password: 
              </label>
              <input
                className="form-control"
                name="password"
                type="password"
                onChange={handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => addUsersLocal(fieldsForm, setUsers)}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => openModal()}
            >
              Cancelar
            </Button>
          </ModalFooter>
    </Modal>
    {/* Fin modal Add */}
    </>
  );
}

export default ContentUsers;
