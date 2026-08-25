import {
  FaBell,
  FaHome,
  FaUserGraduate,
  FaSignOutAlt,
  FaUserCircle
} from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";

import "../styles/topbar.css";


function Topbar() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));


  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");

  };


  return (

    <header className="topbar">


      {/* Logo */}

      <div className="topbar-logo">

        <h2>
          Student Management System
        </h2>

      </div>



      {/* Menu */}

      <nav className="topbar-menu">


        <NavLink to="/dashboard">

          <FaHome />

          Dashboard

        </NavLink>



        <NavLink to="/students">

          <FaUserGraduate />

          Students

        </NavLink>


      </nav>



      {/* Right Section */}

      <div className="topbar-right">


        <div className="notification">

        </div>

        <div className="user-info">

          <FaUserCircle />

          <div>

            <strong>
              {user?.name || "Admin"}
            </strong>

            <small>
              {user?.email || ""}
            </small>

          </div>

        </div>

        <button
          className="logout-btn"
          onClick={logout}
        >

          <FaSignOutAlt />

          Logout

        </button>


      </div>


    </header>

  );
}


export default Topbar;