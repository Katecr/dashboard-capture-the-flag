import React, { useState, useEffect } from 'react';

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

// Import function getAllmission
import { getAllMissions} from '../functions/requests';

const ContentMissions = () => {

  const [missions, setMissions] = useState(null);
  // const [modalAdd, setModalAdd] = useState(false);
  // const [fieldsForm, setFieldsForm]=useState({
  //   id: '',
  //   title:'',
  //   points: '',
  //   skills: '',
  //   role: '',
  //   time: '',
  //   flag: '',
  //   category: '',
  //   visualization: '',
  //   competence: '',
  //   isAvailable: ''
  // })

  // const handleChange=e=>{
  //   const {name, value}=e.target;
  //   setFieldsForm(prevState=>({
  //     ...prevState,
  //     [name]: value
  //   }))
  // }

  useEffect(() => {
    getAllMissions(setMissions);
  }, [missions]);

  // const openModal = () => {
  //   setModalAdd(!modalAdd);
  // }

  
  return (
    <>
    <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Challenges</h1>
        </div>
        <div className="td-actions">
          <button>
            <i className="fas fa-plus"></i>
            <span>Add new</span>            
          </button>
        </div>
        <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Points</th>
            <th>Skills</th>
            <th>Flag</th>
            <th>Acciones</th>
          </tr>
        </thead>
          <tbody>
            {missions != null ? (
                missions.map(mission => (
                  mission.isAvailable === false ? (                
                    <tr key={mission.id} className="border-bottom">
                      <td>{mission.id}</td>
                      <td>{mission.title}</td>                  
                      <td>{mission.points}</td>
                      <td>{mission.skills}</td>
                      <td>{mission.flag}</td>
                      <td className="td-actions">
                        <button >
                          <i className="fas fa-edit"></i>
                          <span>Edit</span>
                        </button>
                        <button >
                          <i className="fas fa-trash-alt"></i>
                          <span>Delete</span>
                        </button>
                      </td>
                    </tr>  
                  
                  ) : ('')                                       
                )) 
                
            ) : ('No missions in the system')}
          </tbody> 
        </table>
    </div>

    {/* Modal Add */}
    <Modal >
          <ModalHeader>
           <div><h3>Add Mission</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                name= 'id'
                value='b21e32fb-2ea5-46b8-86d4-bc8eeacdd0c4'
              />
            </FormGroup>
            
            <FormGroup>
              <label>
               Title: 
              </label>
              <input
                className="form-control"
                name="title"
                type="text"
                // onChange={handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Description: 
              </label>
              <input
                className="form-control"
                name="description"
                type="text"
                // onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Points: 
              </label>
              <input
                className="form-control"
                name="points"
                type="number"
                // onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Skills: 
              </label>
              <input
                className="form-control"
                name="skills"
                type="text"
                // onChange={handleChange}
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
                // onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Time: 
              </label>
              <input
                className="form-control"
                name="time"
                type="text"
                // onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Flag: 
              </label>
              <input
                className="form-control"
                name="flag"
                type="text"
                // onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Category: 
              </label>
              <input
                className="form-control"
                name="category"
                type="text"
                // onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Visualization: 
              </label>
              <input
                className="form-control"
                name="visualization"
                type="text"
                // onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Competence: 
              </label>
              <input
                className="form-control"
                name="competence"
                type="text"
                // onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                isAvailable: 
              </label>
              <input
                className="form-control"
                name="isAvailable"
                type="text"
                // onChange={handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"       
            >
              Insert
            </Button>
            <Button
              className="btn btn-danger"
            >
              Cancel
            </Button>
          </ModalFooter>
    </Modal>
    {/* Fin modal Add */}
    </>
  );
}

export default ContentMissions;
