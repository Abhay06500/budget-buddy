// import React from 'react';
import hamburgermenu from "../../assets/image/hamburgermenu.png";
import { Link, useNavigate } from 'react-router-dom';

export const AdminNavbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/signup');
  };

  const handleLogoutClick = () => {
    localStorage.clear();
    navigate('/login');
  };



  return (
    <nav className="app-header navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Hamburger Menu Icon */}
        <ul className="navbar-nav d-flex align-items-center">
          <li className="nav-item">
            <a className="nav-link" role="button" onClick={toggleSidebar}>
              <img
                src={hamburgermenu}
                alt="hamburger menu"
                style={{ height: "25px", width: "25px" }}
              />
            </a>
          </li>
        </ul>

        {/* Navbar Brand or Home link */}
        <ul className="navbar-nav d-none d-md-block">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link"
              style={{
                padding: '8px 20px',
                backgroundColor: '#007BFF',
                color: 'white',
                fontSize: '18px',
                borderRadius: '5px',
                textAlign: 'center',
                marginRight: '850px',
              }}
            >
              Home
            </Link>
          </li>
        </ul>

        {/* Auth Buttons (SignUp and Logout) */}
        <div className="d-flex align-items-center">
          <button
            onClick={handleLoginClick}
            style={{
              width: "100px",
              backgroundColor: "#007BFF",
              color: "white",
              fontSize: "16px",
              marginRight: "15px",
              padding: '8px 10px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            className="btn"
          >
            SignUp
          </button>

          <button
            onClick={handleLogoutClick}
            style={{
              width: "100px",
              backgroundColor: "#DC3545",
              color: "white",
              fontSize: "16px",
              padding: '8px 10px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            className="btn"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
