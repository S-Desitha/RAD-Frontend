import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <h1>Student Management System</h1>
        <div className="nav-buttons">
          <Link to="/" className="nav-button">Courses</Link>
          <Link to="/Anns" className="nav-button">Announcements</Link>
          <Link to="/students" className="nav-button">Students</Link>
          <Link to="/teachers" className="nav-button">Teachers</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
