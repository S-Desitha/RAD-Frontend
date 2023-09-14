import React from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {

  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }
  
  return (
    <header>
      <div className="container">

        <h1>School Admin Management System</h1>      
        <nav>
          {user && (
            <div className="nav-buttons">
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
              <Link to="/" className="nav-button">Courses</Link>
              <Link to="/Anns" className="nav-button">Announcements</Link>
              <Link to="/students" className="nav-button">Students</Link>
              <Link to="/teachers" className="nav-button">Teachers</Link>

            </div>
          )}
          {!user && (
            <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
