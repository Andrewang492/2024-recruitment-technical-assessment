import logo from './unilectives.svg';
import './App.css';
import Sidebar from './Sidebar';
import { Typography } from '@mui/material';
import Dashboard from './Dashboard';

const sidebarWidth = 100;
function App() {
  return (
    <div className='app'>
      {/* <div className="sidebar">
        <img src={logo} className="logo"/>
        <hr/>

      </div> */}
      <Sidebar width={sidebarWidth}/>
      <Dashboard sidebarWidth={sidebarWidth}/>
    </div>
  );
}

export default App;
