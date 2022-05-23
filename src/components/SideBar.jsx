import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function SideBar(){

	const [roleCookie, setRoleCookie] = useState(null);

  useEffect(() => {
    setRoleCookie(cookies.get('role'));   
  }, []);

  return(
		<React.Fragment>
		{/*<!-- Sidebar -->*/}
				<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

				{/* <!-- Divider --> */}
				<hr className="sidebar-divider my-0"/>

				{/* <!-- Nav Item - Dashboard --> */}
				<li className="nav-item active">
					<Link className="nav-link" to="/dashboard">
						<i className="fas fa-fw fa-tachometer-alt"></i>
						<span>Dashboard - Flag</span>
					</Link>
				</li>

				{ (roleCookie === 'admin') ? (
					<>
							{/* <!-- Divider --> */}
						<hr className="sidebar-divider"/>

						{/* <!-- Heading --> */}
						<div className="sidebar-heading">MANAGE</div>

						{/* <!-- Nav Item - Pages --> */}
						<li className="nav-item">
							<Link className="nav-link collapsed" to="/missions">
								<i className="fas fa-fw fa-bug"></i>
								<span>Missions</span>
							</Link>
						</li>

						{/* <!-- Nav Item - Charts --> */}
						<li className="nav-item">
							<Link className="nav-link" to="/users">
								<i className="fas fa-fw fa-users"></i>
								<span>Users</span>
							</Link>
						</li>

						{/* <!-- Divider --> */}
						<hr className="sidebar-divider d-none d-md-block"/>
					</>
				) : ('')
				
				
				}
				
			</ul>
			{/*<!-- End of Sidebar -->*/}


		</React.Fragment>
    
		
  );
}

export default SideBar;