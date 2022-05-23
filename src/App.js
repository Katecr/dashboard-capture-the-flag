// Importing routes with react
import {BrowserRouter, Route, Routes} from 'react-router-dom';

// Importing components
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Users from './components/DashboardUsers';
import Missions from './components/Missions';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<Login></Login>}></Route> 
          <Route path="/dashboard" exact={true} element={<Dashboard></Dashboard>}></Route>
          <Route path="/users" exact={true} element={<Users></Users>}></Route>
          <Route path="/missions" exact={true} element={<Missions></Missions>}></Route>
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
