import React from "react";
import ContentRowMetrics from "./ContentRowMetrics";
import ContentSkills from "./ContentSkills";

let totalTeamScore ={
	title:'Total Team Score',
	borderColor:'primary',
	icon:'fa-check-circle',
	quantity:5650
}

let totalUserScore = {
	title:'Total User Score',
	borderColor:'success',
	icon:'fa-award',
	quantity:3500
}

let resolvedMissions = {
	title:'Resolved Missions',
	borderColor:'warning',
	icon:'fa-flag',
	quantity:15
}

let carProps = [totalTeamScore,totalUserScore,resolvedMissions]

function ContentRowTop() {
  return (
    <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Capture the flag</h1>
        </div>
      
        {/* <!-- Content Row metrics--> */}
        <ContentRowMetrics carProps = {carProps}/>
        {/* <!-- End metrics  --> */}				

        {/* <!-- Content Row info --> */}
        <ContentSkills />
    </div>
  );
}

export default ContentRowTop;