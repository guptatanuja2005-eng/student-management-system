import {
  FaGraduationCap,
  FaUsers,
  FaChartBar,
  FaCheckCircle,
} from "react-icons/fa";

import "../styles/about.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-left">

        <span className="about-tag">
          ABOUT STUDENTMS
        </span>

        <h2>
          The Smart Way to
          <br />
          Manage Students
        </h2>

        <p>
          StudentMS is a modern Student Management System designed to
          simplify academic administration. Manage students,
          attendance, reports, and academic records from one secure,
          fast, and user-friendly platform.
        </p>

        <div className="about-points">

          <div className="point">
            <FaCheckCircle className="check-icon" />
            <span>Easy Student Record Management</span>
          </div>

          <div className="point">
            <FaCheckCircle className="check-icon" />
            <span>Attendance & Performance Tracking</span>
          </div>

          <div className="point">
            <FaCheckCircle className="check-icon" />
            <span>Secure Dashboard & Reports</span>
          </div>

        </div>

      </div>

      <div className="about-right">

        <div className="info-card">
          <FaGraduationCap className="about-icon" />

          <h3>Student Records</h3>

          <p>
            Store and manage student information
            efficiently from one place.
          </p>
        </div>

        <div className="info-card">
          <FaUsers className="about-icon" />

          <h3>Attendance</h3>

          <p>
            Track attendance digitally with
            real-time updates.
          </p>
        </div>

        <div className="info-card">
          <FaChartBar className="about-icon" />

          <h3>Analytics</h3>

          <p>
            Generate reports and visualize
            student performance instantly.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;