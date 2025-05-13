import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          
        </Routes>
      </div>
    </div>
  );
};

export default App;
