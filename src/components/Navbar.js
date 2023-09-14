import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Student Management System</h1>
        </Link>
        {/* Add a link to the Announcements page */}
        <Link to="/announcements">Announcements</Link>
      </div>
    </header>
  );
};

export default Navbar;
