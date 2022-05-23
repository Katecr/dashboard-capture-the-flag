// Importing routes with react
import {BrowserRouter, Route, Routes} from 'react-router-dom';

// Importing components
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Users from './components/DashboardUsers';
import InfoUser from './components/InfoUser';
import Missions from './components/Missions';
import InfoMission from './components/InfoMission';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<Login></Login>}></Route> 
          <Route path="/dashboard" exact={true} element={<Dashboard></Dashboard>}></Route>
          <Route path="/users" exact={true} element={<Users></Users>}></Route>
          <Route path="/users/:id" exact={true} element={<InfoUser></InfoUser>}></Route>
          <Route path="/missions" exact={true} element={<Missions></Missions>}></Route>
          <Route path="/missions/:id" exact={true} element={<InfoMission></InfoMission>}></Route>
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
