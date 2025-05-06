import React from "react";
import "../../styles/Sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";
import { RiAdminLine } from 'react-icons/ri'

const Sidebar = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate()

  const handleSubmit = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logged Out Successfully");
    navigate('/login')
  };

  return (
    <div style={{ zIndex: '999' }}>
      <section className="sde">
        <div
          className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark vh-100"
          style={{ width: 280 }}
        >
          <ul className="mt-3">

            <Link to="/" style={{ textDecoration: "none" }}>
              <li className="nav-item">
                <a className="nav-link text-white " aria-current="page">
                  <RiAdminLine size={25} className="mx-1" /> Admin Dashboard
                </a>
              </li>
            </Link>
          </ul>

          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <Link to="/" style={{ textDecoration: "none" }}>
              <li className="nav-item sideBar">
                <a href="#" className="nav-link text-white " aria-current="page">

                  <i class="fa-solid fa-house mx-2 text-white"></i>

                  Home

                </a>
              </li>
            </Link>
            <li className="sideBar">
              <Link to="/dashboard" style={{ textDecoration: "none" }}>
                <a href="#" className="nav-link text-white">
                  <i class="fa-solid fa-tower-broadcast mx-2 text-white"></i>
                  Emergency Alert
                </a>
              </Link>
            </li>
            <li className="sideBar">
              <Link to="/incident" style={{ textDecoration: "none" }}>
                <a href="#" className="nav-link text-white">
                  <i class="fa-regular fa-flag mx-2 text-white"></i>

                  Incident Report
                </a>
              </Link>
            </li>
            <li className="sideBar">
              <Link to="/closedreport" style={{ textDecoration: "none" }}>
                <a href="#" className="nav-link text-white">
                  <i class="fa-solid fa-folder-closed mx-2 text-white"></i>
                  Closed Reports
                </a>
              </Link>
            </li>

          </ul>
          <hr />
          <div className="dropdown">
            <div
              onClick={handleSubmit}
              to="/login"
              style={{ textDecoration: "none", cursor: 'pointer' }}
              className="nav-item text-center"
            >
              <a
                className="nav-link learn-more-btn-logout"
                style={{ fontSize: "4px" }}
                aria-current="page"
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="abc dfe" style={{ marginTop: '5%' }}>
        <nav class="navt bg-white">
          <Link to='/' class="nav-linkt">
            <i class="fa-solid fa-house"></i>
            <span class="nav-text"></span>
          </Link>

          <Link to='/emerganceAlert' class="nav-linkt">
            <i class="fa-solid fa-tower-broadcast"></i>
            <span class="nav-text"></span>
          </Link>

          <Link to='/incident' class="nav-linkt">
            <i class="fa-regular fa-flag"></i>
            <span class="nav-text"></span>
          </Link>

          <Link to='closedreport' class="nav-linkt">
            <i class="fa-solid fa-folder-closed"></i>
            <span class="nav-text"></span>
          </Link>

          <a class="nav-linkt">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
            <span class="nav-text" onClick={handleSubmit}></span>
          </a>
        </nav>
      </section>
    </div>
  );
};

export default Sidebar;
