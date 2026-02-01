import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import StudentPortal from './components/StudentPortal';
import StaffPortal from './components/StaffPortal';
import WardenPortal from './components/WardenPortal';

function App() {
  return (
    <Router>
      <Routes>
        {/* The default page is Login */}
        <Route path="/" element={<Login />} />

        {/* Role-based routes */}
        <Route path="/student-dashboard" element={<StudentPortal />} />
        <Route path="/staff-dashboard" element={<StaffPortal />} />
        <Route path="/warden-dashboard" element={<WardenPortal />} />
      </Routes>
    </Router>
  );
}

export default App;