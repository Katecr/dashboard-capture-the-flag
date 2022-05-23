import React, { useState, useEffect } from 'react';

// Import function getAllUser
import { getAllUsers, addUsers, updateOneUser } from '../functions/requests';

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
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
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
  }, [modalAdd, users, modalUpdate, modalDelete,fieldsForm]);

   const openModalCreate = () => {
    setModalAdd(!modalAdd);
  }

  const openModalEdit = () => {
    setModalUpdate(!modalUpdate);
  }

  const openModalDelete = () => {
    setModalDelete(!modalDelete);
  }

  const selectConsola=(user, caseModal)=>{
    setFieldsForm(user);
    (caseModal === 'Edit') ? openModalEdit() : openModalDelete()
  }

  const addUsersLocal=async(fieldsForm,state)=>{
    await addUsers(fieldsForm, state)
    .then(response =>{
      openModalCreate();
    });
    
  }

  const updateUsersLocal=async(fieldsForm,state)=>{
    await updateOneUser(fieldsForm, state)
    .then(response =>{
      openModalEdit();
    });   
  }

  const deleteUsersLocal=async(fieldsForm,state)=>{
    await updateOneUser(fieldsForm, state)
    .then(response =>{
      openModalDelete();
    });   
  }

  return (
    <>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Users</h1>
        </div>
        <div className="td-actions">
          <button onClick={()=> openModalCreate()}>
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
                    <button onClick={()=>selectConsola(user, 'Edit')} >
                      <i className="fas fa-edit"></i>
                      <span>Edit</span>
                    </button>
                    <button onClick={()=>selectConsola(user, 'Delete')}>
                      <i className="fas fa-trash-alt"></i>
                      <span>Delete</span>
                    </button>
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
                  onClick={() => openModalCreate()}
                >
                  Cancelar
                </Button>
              </ModalFooter>
        </Modal>
      {/* Fin modal Add */}
      {/* Modal Update */}
        <Modal isOpen={modalUpdate} >
            <ModalHeader>
            <div><h3>Update User</h3></div>
            </ModalHeader>
            <ModalBody>  
              {fieldsForm != null ? (
                <>         
              <FormGroup>
                <label>
                Name: 
                </label>
                <input
                  className="form-control"
                  name="name"
                  type="text"
                  onChange={handleChange}
                  value={fieldsForm.name}
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
                  value={fieldsForm.lastname}
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
                  value={fieldsForm.email}
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
                  value={fieldsForm.password}
                />
              </FormGroup>
              <FormGroup>
                <label>
                  Role: 
                </label>
                <input
                  className="form-control"
                  name="role"
                  type="text"
                  onChange={handleChange}
                  value={fieldsForm.role}
                />
              </FormGroup>
              <FormGroup>
                <label>
                  Avatar: 
                </label>
                <input
                  className="form-control"
                  name="avatar"
                  type="hidden"
                  onChange={handleChange}
                  value={fieldsForm.avatar}
                />
                <img src={fieldsForm.avatar} alt={fieldsForm.name} />
              </FormGroup>
              </>
              ) : ('No users in the system') }
              
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onClick={() => updateUsersLocal(fieldsForm, setUsers)}
              >
                Update
              </Button>
              <Button
                className="btn btn-danger"
                onClick={() => openModalEdit()}
              >
                Cancel
              </Button>
            </ModalFooter>
        </Modal>
      {/* Fin modal Update */}
      {/* Modal Delete */}
      <Modal isOpen={modalDelete} >
            <ModalHeader>
            <div><h3>Delete User</h3></div>
            </ModalHeader>
            <ModalBody>  
              {fieldsForm != null ? (
                <>         
              <p>¿Estás seguro que deseas eliminar? el usuario <b>{fieldsForm.name}</b></p>
              </>
              ) : ('No users in the system') }
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onClick={() => deleteUsersLocal(fieldsForm, setUsers)}
              >
                Delete
              </Button>
              <Button
                className="btn btn-danger"
                onClick={() => openModalDelete()}
              >
                Cancel
              </Button>
            </ModalFooter>
        </Modal>
      {/* Fin modal Delete */}
    </>
  );
}

export default ContentUsers;
