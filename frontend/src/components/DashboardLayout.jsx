
import Topbar from "./Topbar";
import "../styles/dashboardLayout.css";
import Navbar from "./Navbar";

function DashboardLayout({ children }) {
  return (
    <div className="layout">
      <div className="main-content">

        <Topbar />

        <div className="page-content">
          {children}
        </div>

      </div>

    </div>
  );
}

export default DashboardLayout;