import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';

// Import function userLogout
import { userLogout } from '../functions/requests';

const cookies = new Cookies();

function TopBar(){

	const [nameCookie, setNameCookie] = useState(null);
	const [avatarCookie, setAvatarCookie] = useState(null);

  useEffect(() => {
    setNameCookie(cookies.get('name'));    
    setAvatarCookie(cookies.get('avatar'));    
  }, []);

  return(
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

			{/* <!-- Sidebar Toggle (Topbar) --> */}
			<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
				<i className="fa fa-bars"></i>
				Cerrar Sesion
			</button>

			{/* <!-- Topbar Navbar --> */}
			<ul className="navbar-nav ml-auto">
				{/* <!-- Nav Item - User Information --> */}
				<li className="nav-item dropdown no-arrow">
					<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
						<span className="mr-2 d-none d-lg-inline text-gray-600 small">{nameCookie}</span>
						<img className="img-profile rounded-circle" src={avatarCookie} alt={nameCookie} width="60" />
					</a>
				</li>
					<button className="btn-logout" onClick={()=>userLogout()}><span>Cerrar Sesión</span></button>
			</ul>

		</nav>
  );
}

export default TopBar;