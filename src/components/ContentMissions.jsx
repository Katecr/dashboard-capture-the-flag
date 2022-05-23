import React, { useState, useEffect } from 'react';

// Import function getAllmission
import { getAllMissions } from '../functions/requests';

const ContentMissions = () => {

  const [missions, setMissions] = useState(null);

  useEffect(() => {
    getAllMissions(setMissions);
  }, []);

  return (
    <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Challenges</h1>
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
            <th>Id</th>
            <th>Title</th>
            <th>Points</th>
            <th>Skills</th>
            <th>Flag</th>
            <th>Acciones</th>
          </tr>
        </thead>
          
        {missions != null ? (
            missions.map(mission => (
              mission.isAvailable === false ? (
                <tbody>
                <tr key={mission.id} className="border-bottom">
                  <td>{mission.id}</td>
                  <td>{mission.title}</td>                  
                  <td>{mission.points}</td>
                  <td>{mission.skills}</td>
                  <td>{mission.flag}</td>
                  <td className="td-actions">
                    <a href={`./missions/${mission.id}`}>
                      <i className="fas fa-edit"></i>
                      <span>Edit</span>
                    </a>
                    <a href={`./missions/${mission.id}`}>
                      <i className="fas fa-trash-alt"></i>
                      <span>Delete</span>
                    </a>
                  </td>
                </tr>  
              </tbody> 
              ) : ('')                                       
            )) 
        ) : ('No missions in the system')}
        </table>
    </div>
  );
}

export default ContentMissions;
