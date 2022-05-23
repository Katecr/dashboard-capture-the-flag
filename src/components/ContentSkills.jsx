import React from 'react';
import UserSkills from './UserSkills';
import TeamSkills from './TeamSkills';

function ContentSkills(){
  return(
    <div className="row">
      {/* <!-- User skills --> */}
      <UserSkills />
      {/* <!-- End content row last movie in Data Base --> */}

      {/* <!-- Team skills --> */}
      <TeamSkills />
    </div>
  );
}

export default ContentSkills;