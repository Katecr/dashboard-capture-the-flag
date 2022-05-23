import React from 'react';
import userSkill from '../image/user_skills.JPG';

function UserSkills(){
  return(
    <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">User Skills</h5>
            <p>Category Breakdown for user skills</p>
          </div>
          <div className="card-body">
            <div className="text-center">
              <img className="img-fluid px-3 px-sm-4 mt-3 mb-4"  src={userSkill} alt="skill user" />
            </div>            
          </div>
        </div>
      </div>
  );
}

export default UserSkills;