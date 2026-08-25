import {
  FaBell,
  FaSearch,
  FaUserCircle,
  FaChevronDown,
} from "react-icons/fa";

import "../styles/header.css";

function Header() {
  return (
    <header className="header">

      <div className="profile-section">

        <FaBell className="icon" />

        <div className="profile">

          <FaUserCircle className="user-icon" />

          <span>Tanuja</span>

          <FaChevronDown />

        </div>

      </div>

    </header>
  );
}

export default Header;