import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EmployeeDashboard from './components/EmployeeDashboard';
import ManagerDashboard from './components/ManagerDashboard';
import HRDashboard from './components/HRDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav>
          <ul>
            <li>
              <Link to="/">Employee Dashboard</Link>
            </li>
            <li>
              <Link to="/manager">Manager Dashboard</Link>
            </li>
            <li>
              <Link to="/hr">HR Dashboard</Link>
            </li>
          </ul>
        </nav>

        {/* Main Page Content */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<EmployeeDashboard />} />
            <Route path="/manager" element={<ManagerDashboard />} />
            <Route path="/hr" element={<HRDashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
