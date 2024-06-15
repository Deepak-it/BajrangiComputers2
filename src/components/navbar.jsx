import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../assets/globals.css";
import { useSelector } from 'react-redux';

const NavBar = () => {
  const location = useLocation();
  const { pathname } = location;
  const loginResponse = useSelector((state) => state.auth.loginResponse);
  const isAdmin = loginResponse?.isAdmin;

  return (
    <>
      {pathname !== '/login' && (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <Link className="navbar-brand mt-2 mt-lg-0" to="/">
                Bajrang Computers
              </Link>
              <ul className="text-white navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className={`nav-link ${pathname === '/' ? 'active' : ''}`} to="/">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${pathname === '/contact' ? 'active' : ''}`} to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${pathname === '/services' ? 'active' : ''}`} to="/services">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${pathname === '/categories' ? 'active' : ''}`} to="/categories">Categories</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${pathname === '/testimonials' ? 'active' : ''}`} to="/testimonials">Testimonials</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${pathname === '/slides' ? 'active' : ''}`} to="/slides">Slides</Link>
                </li>
                {isAdmin && (
                  <li className="nav-item">
                    <Link className={`nav-link ${pathname === '/adminDashboard' ? 'active' : ''}`} to="/adminDashboard">Admin</Link>
                  </li>
                )}
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Logout</Link>
                </li>
              </ul>
            </div>

            <div className="d-flex align-items-center">
              <a className="text-reset me-3" href="#">
                <i className="fas fa-shopping-cart"></i>
              </a>

              <div className="dropdown">
                <a
                  className="text-reset me-3 dropdown-toggle hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-bell"></i>
                  <span className="badge rounded-pill bg-danger">1</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                  <li>
                    <a className="dropdown-item" href="#">Some news</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">Another news</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                <a
                  className="dropdown-toggle d-flex align-items-center hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-circle"
                    height="25"
                    alt="Avatar"
                    loading="lazy"
                  />
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                  <li>
                    <a className="dropdown-item" href="#">My profile</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">Settings</a>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/login">Logout</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBar;
