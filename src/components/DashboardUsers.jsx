import React from 'react';

import SideBar from './SideBar';
import TopBar from './TopBar';
import Footer from './Footer';
import ContentUsers from './ContentUsers';

const DashboardUsers = () => {
  return (
    <div id="wrapper">
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
          {/* <!-- Topbar --> */}
            <TopBar/>
          {/* <!-- End of Topbar --> */}
          {/* <!-- content mission --> */}
           <ContentUsers/>
          {/* <!--End Content Row Top--> */}
            <Footer />
        </div>
        {/* <!-- End of MainContent --> */}
      </div>
    </div>
  );
}

export default DashboardUsers;
