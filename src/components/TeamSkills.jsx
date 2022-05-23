import React from 'react';
import teamSkill from '../image/team_skills.JPG';

function UserSkills(){
  return(
    <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">Team Skills</h5>
            <p>Category Breakdown for team skills</p>
          </div>
          <div className="card-body">
            <div className="text-center">
              <img className="img-fluid px-3 px-sm-4 mt-3 mb-4"  src={teamSkill} alt="team skills" />
            </div>
            
          </div>
        </div>
      </div>
  );
}

export default UserSkills;