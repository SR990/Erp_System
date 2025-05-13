import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import OfficeBudget from './components/OfficeBudget';
import CreateBudget from './components/CreateBudget';
import Success from './components/Success';
import Circulars from './data/Circulars';
import CreateCircular from './components/createCircular';
const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/" element={<OfficeBudget />} />
          <Route path="/create-budget" element={<CreateBudget />} />
          <Route path="/success" element={<Success />} />
          <Route path="/circulars" element={<Circulars />} />
          <Route path="/create-circular" element={<CreateCircular />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
